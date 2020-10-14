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
    name:"charts",
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('charts'));

        axios.get('http://localhost:8080/static/charts/les-miserables.gexf').then(function (xml) {

        var graph = echarts.dataTool.gexf.parse(xml.data);
        var categories = [];
        for (var i = 0; i < 9; i++) {
            categories[i] = {
                name: '类目' + i
            };
        }
        graph.nodes.forEach(function (node) {
            node.itemStyle = null;
            node.value = node.symbolSize;
            node.symbolSize = 30;
            node.label = {
                show: node.symbolSize > 30
            };
            node.category = node.attributes.modularity_class;
            node.draggable = true;
        });
        var option = {
            title: {
                text: 'Les Miserables',
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
            //animationDuration: 1500,
            //animationEasingUpdate: 'quinticInOut',
            series : [
                {
                    name: 'Les Miserables',
                    type: 'graph',
                    layout: 'none',
                    data: graph.nodes,
                    links: graph.links,
                    categories: categories,
                    //roam: true,
                    //focusNodeAdjacency: true,
                    itemStyle: {
                        // borderColor: '#fff',
                        // borderWidth: 1,
                        // shadowBlur: 5,
                        // shadowColor: 'rgba(0, 0, 0, 0.3)'
                    },
                    label: {
                        position: 'right',
                        formatter: '{b}'
                    },
                    lineStyle: {
                        color: 'source',
                    },
                    emphasis: {
                        lineStyle: {
                            //width: 10
                        },
                        nodeStyle:{
                          symbolSize:70
                        }
                    }
                }
            ]
        };
          myChart.setOption(option);
        }).catch(err=>{
          console.log(err);
        });
    }
  }
}
</script>

<style scoped>

</style>