<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> Form</el-breadcrumb-item>
                <el-breadcrumb-item>Basic form</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="Date" sortable width="150">
            </el-table-column>
            <el-table-column prop="name" label="Name" width="120">
            </el-table-column>
            <el-table-column prop="address" label="Address" :formatter="formatter">
            </el-table-column>
            <el-table-column prop="tag" label="Tag" width="120"
                    :filters="[{ text: 'Home', value: 'Home' }, { text: 'Work', value: 'Work' }]"
                    :filter-method="filterTag">
                <template scope="scope">
                    <el-tag :type="scope.row.tag === 'Home' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="operating" width="180">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2017-02-02',
                    name: 'admin',
                    address: 'Someplace 18th street',
                    tag: 'Home'
                }, {
                    date: '2017-02-04',
                    name: 'admin',
                    address: 'Someplace 19th street',
                    tag: 'Work'
                }, {
                    date: '2017-02-01',
                    name: 'admin',
                    address: 'Someplace 20th street',
                    tag: 'Home'
                }, {
                    date: '2017-02-03',
                    name: 'admin',
                    address: 'Someplace 21th street',
                    tag: 'Work'
                }]
            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$message('Edited row '+(index+1));
            },
            handleDelete(index, row) {
                this.$message.error('Deleted row '+(index+1));
            }
        }
    }
</script>