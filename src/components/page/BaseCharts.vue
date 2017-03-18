<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> Form</el-breadcrumb-item>
                <el-breadcrumb-item>Base chart</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            Vue-echarts-v3: Chart components based on vue2 and eCharts.js3.
            --> <a href="https://github.com/xlsdg/vue-echarts-v3" target="_blank">vue-echarts-v3</a>
        </div>
        <div class="echarts">
            <IEcharts :option="line" ></IEcharts>
        </div>
        <div class="echarts">
            <IEcharts :option="bar" ></IEcharts>
        </div>
        <div class="echarts">
            <IEcharts :option="pie" ></IEcharts>
        </div>
        <div class="echarts">
            <IEcharts :option="pie_radius" ></IEcharts>
        </div>
    </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3';
    export default {
        components: {
            IEcharts
        },
        data: () => ({
            line: {
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
                title: {
                    text: 'Graph'
                },
                xAxis: {
                    data: ["Shirt", "sweater", "chiffon shirt", "pants", "high heels", "socks"]
                },
                yAxis:{},
                series: [
                    {
                        name: "Sales",
                        type: "line",
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            },
            bar: {
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
                title: {
                    text: 'Histogram'
                },
                xAxis: {
                    data: ["Shirt", "sweater", "chiffon shirt", "pants", "high heels", "socks"]
                },
                yAxis:{},
                series: [
                    {
                        name: "Bar",
                        type: "bar",
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            },
            pie: {
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
                title : {
                    text: 'pie chart',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ["Shirt", "sweater", "chiffon shirt", "pants", "high heels"]
                },
                series : [
                    {
                        name: 'Sales',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        data:[
                            {value:335, name:'shirt'},
                            {value:310, name:'Sweater'},
                            {value:234, name:'Chiffon shirt'},
                            {value:135, name:'pants'},
                            {value:548, name:'High heels'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            pie_radius:{
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
                title : {
                    text: 'Ring diagram',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ["shirt", "Sweater", "Chiffon shirt", "pants", "High heels"]
                },
                series : [
                    {
                        name: 'Sales',
                        type: 'pie',
                        radius : ['40%','60%'],
                        data:[
                            {value:335, name:'shirt'},
                            {value:310, name:'Sweater'},
                            {value:234, name:'Chiffon shirt'},
                            {value:135, name:'pants'},
                            {value:548, name:'High heels'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
        })
    }
</script>

<style scoped>
    .echarts {
        float: left;
        width: 500px;
        height: 400px;
    }
</style>