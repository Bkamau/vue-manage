<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> Form</el-breadcrumb-item>
                <el-breadcrumb-item>Basic form</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="Form name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="Selector">
                    <el-select v-model="form.region" placeholder="Choose">
                        <el-option label="Backgammon" value="bbk"></el-option>
                        <el-option label="Little genius" value="xtc"></el-option>
                        <el-option label="imoo" value="imoo"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Date and time">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="Select date" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker type="fixed-time" placeholder="Choose time" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="switch">
                    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="Checkbox">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="Backgammon" name="type"></el-checkbox>
                        <el-checkbox label="Little genius" name="type"></el-checkbox>
                        <el-checkbox label="imoo" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Single box">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="Backgammon"></el-radio>
                        <el-radio label="Little genius"></el-radio>
                        <el-radio label="imoo"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="Text box">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Submit</el-button>
                    <el-button>Cancel</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: ['Backgammon'],
                    resource: 'Little genius',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('Submitted successfully!');
            }
        }
    }
</script>