<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>Chart</el-breadcrumb-item>
                <el-breadcrumb-item>Mixed chart</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
           Vue-echarts-v3: Chart components based on vue2 and eCharts.js3.
            --> <a href="https://github.com/xlsdg/vue-echarts-v3" target="_blank">vue-echarts-v3</a>
        </div>
        <div class="mix-echarts">
            <IEcharts :option="mix" ></IEcharts>
        </div>
    </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3';
    export default {
        data: function(){
            return {
                mix:{
                    color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
                    legend: {
                        data:['Backgammon','Little genius','imoo']
                    },
                    xAxis: {
                       data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Weekend']
                    },
                    yAxis:{},
                    series: [
                        {
                            name: "Backgammon",
                            type: "line",
                            data: [15, 20, 26, 30, 40, 27]
                        },
                        {
                            name: "Little genius",
                            type: "bar",
                            data: [5, 30, 36, 10, 34, 20]
                        },
                        {
                            name: "imoo",
                            type: "bar",
                            data: [35, 40, 30, 50, 60, 40]
                        }
                    ]
                }
            }
        },
        components: {
            IEcharts
        }
    }
</script>

<style scoped>
    .mix-echarts{
        width:900px;
        height:600px;
    }
</style>