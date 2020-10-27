<template>
  <div id="charts" style="width:100%;height:1000px">

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
            text: 'test',
            subtext: 'Default layout',
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
              name: 'Les Miserables',
              type: 'graph',
              layout: 'force',
              data: graph.nodes,
              links: graph.links,
              categories: categories,
              roam: true,
              focusNodeAdjacency: true,
              draggable: true,
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
                }
              },
              force: {
                edgeLength: 100
              }
            }
          ]
        };
        myChart.setOption(option);

        // axios.get('http://localhost:8080/static/charts/les-miserables.gexf').then(function (xml) {
        //
        //   var graph = echarts.dataTool.gexf.parse(xml.data);
        //   var categories = [];
        //   for (var i = 0; i < 9; i++) {
        //     categories[i] = {
        //       name: '类目' + i
        //     };
        //   }
        //   graph.nodes.forEach(function (node) {
        //     node.itemStyle = null;
        //     node.value = node.symbolSize;
        //     node.symbolSize /= 1.5;
        //     node.label = {
        //       show: node.symbolSize > 30
        //     };
        //     node.category = node.attributes.modularity_class;
        //   });
        //   console.log(graph.links)
        //   var option = {
        //     title: {
        //       text: 'Les Miserables',
        //       subtext: 'Default layout',
        //       top: 'bottom',
        //       left: 'right'
        //     },
        //     tooltip: {},
        //     legend: [{
        //       // selectedMode: 'single',
        //       data: categories.map(function (a) {
        //         return a.name;
        //       })
        //     }],
        //     animationDuration: 1500,
        //     animationEasingUpdate: 'quinticInOut',
        //     series: [
        //       {
        //         name: 'Les Miserables',
        //         type: 'graph',
        //         layout: 'none',
        //         data: graph.nodes,
        //         links: graph.links,
        //         categories: categories,
        //         roam: true,
        //         focusNodeAdjacency: true,
        //         itemStyle: {
        //           borderColor: '#fff',
        //           borderWidth: 1,
        //           shadowBlur: 10,
        //           shadowColor: 'rgba(0, 0, 0, 0.3)'
        //         },
        //         label: {
        //           position: 'right',
        //           formatter: '{b}'
        //         },
        //         lineStyle: {
        //           color: 'source',
        //           curveness: 0.2
        //         },
        //         emphasis: {
        //           lineStyle: {
        //             width: 10
        //           }
        //         }
        //       }
        //     ]
        //   };
        //   myChart.setOption(option);
        // }).catch(err => {
        //   console.log(err);
        // });
      }
    }
  }
</script>

<style scoped>

</style>
