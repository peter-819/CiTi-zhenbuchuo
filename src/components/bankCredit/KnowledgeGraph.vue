<template>
  <div class="main">
    <div class="container">
      <div id="KnowledgeGraph" style="width:100%;height:100%">

      </div>
    </div>
  </div>

</template>

<script>
  import echarts from 'echarts';

  echarts.dataTool = require('echarts/extension/dataTool');

  import Vue from 'vue';
  import axios from 'axios'

  Vue.prototype.$kgcharts = echarts
  export default {
    name: "KnowledgeGraph",
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
        let myChart = this.$kgcharts.init(document.getElementById('KnowledgeGraph'));
        let res = await axios.get('/neo4j/getKnowledgeGraph')
        let graph = res.data.data
        let categories = []
        console.log(res)
        graph.nodes.forEach(node => {
          categories.push(node.profession === '' ? '股东' : node.profession)
        })
        categories = Array.from(new Set(categories))
        for (let i = 0; i < categories.length; i++) {
          categories[i] = {name: categories[i]}
        }
        console.log(categories)
        graph.nodes.forEach(node => {
          if (node.label === 'Enterprise') {
            node.symbolSize = 20
          }
          if (node.label === 'Person') {
            node.symbolSize = 10
          }
          node.value = node.fullName
          for (let i = 0; i < categories.length; i++) {
            if ((node.profession === '' ? '股东' : node.profession) === categories[i].name) {
              node.category = i
            }
          }
        })
        graph.links.forEach(link => {
          link.lineStyle = {normal: {}}
        })
        console.log(graph.nodes)
        console.log(graph.links)

        let option = {
          title: {
            text: 'KnowledgeGraph',
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
              edgeSymbol: ['none', 'arrow'],
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
                  if (params.dataType === "edge") {
                    let properties = params.data.properties
                    let str = params.data.name + "\n"
                    for (let p in properties) {
                      str = str + p + ":" + properties[p] + "\n"
                    }
                    return str
                  }
                  if (params.dataType === "node") {
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
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .container {
    width: 1365px;
    height: 800px;
    background: #FFFFFF;
    opacity: 1;
    border-radius: 15px;
    margin-top: 23px;
    margin-left: 280px;
  }
</style>
