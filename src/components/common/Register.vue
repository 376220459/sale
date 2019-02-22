<template>
    <div class="register-whole">
        <header>
            <h1>请认真填写下列注册信息</h1>
        </header>
        <main>
            <div class="form-back">
                <el-form class="form" ref="registerForm" hide-required-asterisk status-icon :model="registerForm" :rules="rules" label-position="left" label-width="10em">
                    <el-form-item prop="tel" label="手机号:">
                        <el-input v-model="registerForm.tel"></el-input>
                    </el-form-item>

                    <el-form-item prop="password" label="密码:">
                        <el-input v-model="registerForm.password" type="password"></el-input>
                    </el-form-item>

                    <el-form-item prop="passwordCheck" label="确认密码:">
                        <el-input  @keyup.native.enter="register('registerForm')"  v-model="registerForm.passwordCheck" type="password"></el-input>
                    </el-form-item>

                    <el-form-item prop="school" label="所在高校:">
                        <el-select v-model="registerForm.school" placeholder="请选择所在高校">
                            <el-option label="西安邮电大学" value="xianyoudian"></el-option>
                            <el-option label="西北政法大学" value="xibeizhengfa"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item prop="name" label="姓名:">
                        <el-input v-model="registerForm.name"></el-input>
                    </el-form-item>

                    <el-form-item prop="studentID" label="学号（选填）:">
                        <el-input v-model="registerForm.studentID"></el-input>
                    </el-form-item>

                    <el-form-item class="button">
                        <el-button round type="success" @click="register('registerForm')">注册</el-button>
                        <el-button round type="primary" @click="goBack">返回</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data(){
        var passwordCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请确认密码'));
            }
            else if (value !== this.registerForm.password) {
                callback(new Error('两次输入密码不一致!'));
            }
            else {
                callback();
            }
        };
        return{
            registerForm:{
                tel: '',
                password: '',
                passwordCheck: '',
                school: '',
                name: '',
                studentID: ''
            },
            rules: {
                tel: [
                    { required: true, message: '请输入11位有效手机号'},
                    { pattern: /^1[34578]\d{9}$/,message: '请输入正确的手机号码'}
                ],
                password: [
                    { required: true, message: '请输入密码'},
                    { min: 8, max: 16, message: '长度在 8 到 16 个字符'},
                    { pattern: /^[A-Za-z0-9.\@+-]+$/,message: '密码由字母、数字、指定符号（+ - @ .）组成'}
                ],
                passwordCheck: [
                    { validator: passwordCheck},
                    { min: 8, max: 16, message: '长度在 8 到 16 个字符'},
                    { pattern: /^[A-Za-z0-9.\@+-]+$/,message: '密码由字母、数字、指定符号（+ - @ .）组成'}
                ],
                school: [
                    { required: true, message: '请选择您所在的高校'}
                ],
                name: [
                    { required: true, message: '请输入姓名'},
                    { pattern: /^[\u4e00-\u9fa5]+$/,message: '请输入您的真实中文姓名'}
                ]
            },
        }
    },
    methods: {
        register(formName){
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        goBack(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
    .register-whole{
        height: 100%;
        background: url('../../../static/pic/register.jpg');
        background-size: 100% 100%;
        header{
            height: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
            h1{
                color: RosyBrown;
            }
        }
        main{
            height: 85%;
            display: flex;
            justify-content: center;
            .form-back{
                width: 40%;
                height: 60%;
                background: rgba(232,232,232,0.4);
                border-radius: 5%;
                display: flex;
                justify-content: center;
                padding: 50px 0;
                .form{
                    width: 50%;
                    .button{
                        margin-top: 50px;
                    }
                }
            }
        }

    }
</style>

