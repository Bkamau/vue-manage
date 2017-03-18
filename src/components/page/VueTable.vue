<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> form</el-breadcrumb-item>
                <el-breadcrumb-item>Vue table widget</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            vue-datasource：A vue.js server component for dynamically creating tables.
            <a href="https://github.com/coderdiaz/vue-datasource" target="_blank">vue-datasource</a>
        </div>
        <datasource language="en" :table-data="getData" :columns="columns" :pagination="information.pagination"
                :actions="actions"
                v-on:change="changePage"
                v-on:searching="onSearch"></datasource>
    </div>
</template>

<script>
    import axios from 'axios';
    import Datasource from 'vue-datasource';
    export default {
        data: function(){
            const self = this;
            return {
                information: {
                    pagination:{},
                    data:[]
                },
                columns: [
                    {
                        name: 'Id',
                        key: 'id',
                    },
                    {
                        name: 'Name',
                        key: 'name',
                    },
                    {
                        name: 'email',
                        key: 'email',
                    },
                    {
                        name: 'company',
                        key: 'company',
                    }
                ],
                actions: [
                    {
                        text: 'Click',
                        class: 'btn-primary',
                        event(e, row) {
                            self.$message('Number of selected rows: ' + row.row.id);
                        }
                    }
                ],
                query:''
            }
        },
        components: {
            Datasource
        },
        methods: {
            changePage(values) {
                this.information.pagination.per_page = values.perpage;
                this.information.data = this.information.data;
            },
            onSearch(searchQuery) {
                this.query = searchQuery;
            }
        },
        computed:{
            getData(){
                const self = this;
                return self.information.data.filter(function (d) {
                    if(d.name.indexOf(self.query) > -1){
                        return d;
                    }
                })
            }
        },
        beforeMount(){
            axios.get('/static/data.json').then( (res) => {
                this.information = res.data;
            })
        }
    }
</script>

<style src="../../../static/css/datasource.css"></style>