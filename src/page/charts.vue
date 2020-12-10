<template>
  <div id="charts" style="width:100%;height:100%">

  </div>
</template>

<script>
  import echarts from 'echarts';

  echarts.dataTool = require('echarts/extension/dataTool');

  import Vue from 'vue';
  import axios from 'axios'

  Vue.prototype.$echarts = echarts

  export default {
    name: "charts",
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine: async function () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('charts'));
        let res = await axios.get('/neo4j/getAllNodes')
        let graph = res.data.data
        let categories = []
        console.log(res)
        graph.nodes.forEach(node => {
          categories.push(node.category)
        })
        categories = Array.from(new Set(categories))
        for (let i = 0; i < categories.length; i++) {
          categories[i] = {name: '类目' + categories[i]}
        }
        graph.nodes.forEach(node => {
          switch (node.scale) {
            case '小':
              node.symbolSize = 10
              break;
            case '中':
              node.symbolSize = 20
              break;
            case '大':
              node.symbolSize = 30
              break;
          }
          node.value = node.fullName
          node.category = parseInt(node.category)
        })
        graph.links.forEach(link => {
          link.lineStyle = {normal: {}}
        })
        console.log(graph.nodes.slice(0,2))
        console.log(graph.links)

        let option = {
          title: {
            text: 'SocialNetWork',
            subtext: '',
            top: 'bottom',
            left: 'right'
          },
          tooltip: {},
          legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
              return a.name;
            })
          }],
          animationDuration: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              name: 'Enterprise',
              type: 'graph',
              layout: 'force',
              data: graph.nodes,
              links: graph.links,
              categories: categories,
              zoom: 2.5,
              roam: true,
              focusNodeAdjacency: true,
              draggable: true,
              edgeSymbol: ['none','arrow'],
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
              },
              label: {
                position: 'right',
                formatter: '{b}'
              },
              lineStyle: {
                color: 'source',
                curveness: 0.2
              },
              emphasis: {
                lineStyle: {
                  width: 10
                },
                edgeLabel: {
                  show: true,
                  formatter: params => {
                    return params.data.name
                  }
                }
              },
              force: {
                edgeLength: 100
              },
              tooltip: {
                enterable: true,
                extraCssText: 'white-space:pre-wrap',
                formatter: (params) => {
                  if(params.dataType === "edge"){
                    let properties = params.data.properties
                    let str = params.data.name + "\n"
                    for(let p in properties){
                      str = str + p + ":" + properties[p] + "\n"
                    }
                    return str
                  }
                  if (params.dataType === "node"){
                    let str = params.data.fullName + "\n"
                    return str
                  }
                }
              }
            }
          ]
        };
        myChart.setOption(option);
      }
    }
  }
</script>

<style scoped>

</style>
