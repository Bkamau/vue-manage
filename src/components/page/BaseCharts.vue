<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> Form</el-breadcrumb-item>
                <el-breadcrumb-item>Base chart</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            Vue-echarts-v3: Chart components based on vue2 and eCharts.js3. --> <a href="https://github.com/xlsdg/vue-echarts-v3"
               target="_blank">vue-echarts-v3</a>
        </div>
        <div class="echarts">
            <IEcharts :option="line"></IEcharts>
        </div>
        <div class="echarts">
            <IEcharts :option="bar"></IEcharts>
        </div>
        <div class="echarts">
            <IEcharts :option="pie"></IEcharts>
        </div>
        <div class="echarts">
            <IEcharts :option="pie_radius"></IEcharts>
        </div>
        <div class="echarts">
            <IEcharts :option="funnel"></IEcharts>
        </div>
    </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3';

export default {
    data() {
        let datax = []
        return {
        line: {
            color: ["#20a0ff", "#13CE66", "#F7BA2A", "#FF4949"],
            title: {
                text: 'Graph'
            },
            xAxis: {
                data: ["Helsinki", "Tampere", "Turku", "Oulu", "Rovaniemi", "Vaasa"]
            },
            yAxis: {},
            series: [
                {
                    name: "Sales",
                    type: "line",
                    data: datax
                }
            ]
        },
        bar: {
            color: ["#20a0ff", "#13CE66", "#F7BA2A", "#FF4949"],
            title: {
                text: 'Histogram'
            },
            xAxis: {
                data: ["Helsinki", "Tampere", "Turku", "Oulu", "Rovaniemi", "Vaasa"]
            },
            yAxis: {},
            series: [
                {
                    name: "Bar",
                    type: "bar",
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        },
        pie: {
            color: ["#20a0ff", "#13CE66", "#F7BA2A", "#FF4949", "#61a0a8"],
            title: {
                text: 'pie chart',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ["Helsinki", "Tampere", "Turku", "Oulu", "Rovaniemi"]
            },
            series: [
                {
                    name: 'Sales',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 335, name: 'Helsinki' },
                        { value: 310, name: 'Tampere' },
                        { value: 234, name: 'Turku' },
                        { value: 135, name: 'Oulu' },
                        { value: 548, name: 'Rovaniemi' }
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
        pie_radius: {
            color: ["#20a0ff", "#13CE66", "#F7BA2A", "#FF4949", "#61a0a8"],
            title: {
                text: 'Ring diagram',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ["Helsinki", "Tampere", "Turku", "Oulu", "Rovaniemi"]
            },
            series: [
                {
                    name: 'Sales',
                    type: 'pie',
                    radius: ['40%', '60%'],
                    data: [
                        { value: 335, name: 'Helsinki' },
                        { value: 310, name: 'Tampere' },
                        { value: 234, name: 'Turku' },
                        { value: 135, name: 'Oulu' },
                        { value: 548, name: 'Rovaniemi' }
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
        funnel: {
            title: {
                text: 'Funnel map',
                subtext: 'Purely fictional',
                x: 'left',
                y: 'bottom'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                y: 'center',
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['Show', 'Click on', 'access', 'advisory', 'Order']
            },
            calculable: true,
            series: [
                {
                    name: 'Funnel map',
                    type: 'funnel',
                    width: '40%',
                    height: '45%',
                    x: '5%',
                    y: '50%',
                    data: [
                        { value: 60, name: 'access' },
                        { value: 30, name: 'advisory' },
                        { value: 10, name: 'Order' },
                        { value: 80, name: 'Click on' },
                        { value: 100, name: 'Show' }
                    ]
                },
                {
                    name: 'pyramid',
                    type: 'funnel',
                    width: '40%',
                    height: '45%',
                    x: '5%',
                    y: '5%',
                    sort: 'ascending',
                    data: [
                        { value: 60, name: 'access' },
                        { value: 30, name: 'advisory' },
                        { value: 10, name: 'Order' },
                        { value: 80, name: 'Click on' },
                        { value: 100, name: 'Show' }
                    ]
                },
                {
                    name: 'Funnel map',
                    type: 'funnel',
                    width: '40%',
                    height: '45%',
                    x: '55%',
                    y: '5%',
                    itemStyle: {
                        normal: {

                            label: {
                                position: 'left'
                            }
                        }
                    },
                    data: [
                        { value: 60, name: 'access' },
                        { value: 30, name: 'advisory' },
                        { value: 10, name: 'Order' },
                        { value: 80, name: 'Click on' },
                        { value: 100, name: 'Show' }
                    ]
                },
                {
                    name: 'pyramid',
                    type: 'funnel',
                    width: '40%',
                    height: '45%',
                    x: '55%',
                    y: '50%',
                    sort: 'ascending',
                    itemStyle: {
                        normal: {

                            label: {
                                position: 'left'
                            }
                        }
                    },
                    data: [
                        { value: 60, name: 'access' },
                        { value: 30, name: 'advisory' },
                        { value: 10, name: 'Order' },
                        { value: 80, name: 'Click on' },
                        { value: 100, name: 'Show' }
                    ]
                }
            ]
        }
           
        }
    },
    components: {
        IEcharts
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    mounted() {
        this.shuffleData()
        this.interval = setInterval(this.shuffleData, 1000 * 2)
    },

    methods: {
        shuffleData() {
            let arr = []
            for (var i = 0; i < 6; i++) {
                arr.push(this.rand())
            }
            
            this.line.series[0].data = arr
            this.bar.series[0].data = arr
            console.log(this.datax)

        },
        rand() {
            return Math.floor(Math.random() * (40 - 5 + 1)) + 2;
        }
    },

}
</script>

<style scoped>
.echarts {
    float: left;
    width: 500px;
    height: 400px;
}
</style>