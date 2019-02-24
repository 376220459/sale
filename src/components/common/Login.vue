<template>
    <div class="login-whole">
        <main>
            <form action="">
                <el-input v-model="user" class="user" clearable placeholder="请输入手机号" maxlength="11"><template slot="prepend"><i class="iconfont icon-yonghu-tianchong"></i></template></el-input>
                <el-input v-model="psd" class="psd" type="password" clearable placeholder="请输入密码" @keyup.native.enter="login"><template slot="prepend"><i class="iconfont icon-mima"></i></template></el-input>
                <el-button type="success" class="login" @click="login">登录</el-button>
                <div>
                    <router-link to="/seek">忘记密码？</router-link>
                    <router-link to="/register">注册账号</router-link>
                </div>
            </form>
        </main>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            user: '',
            psd: ''
        }
    },
    methods: {
        login(){
            this.$router.push({
                path: '/sale'
            })
        }
    },
    mounted() {
        this.$notify({
            message: '为了良好的体验，您必须先进行登录才能浏览主页',
            type: 'warning',
            duration: 3000,
            showClose: true
        })
    },
}
</script>

<style lang="scss" scoped>
    body,html{
        height: 100%;
    }
    .login-whole{
        height: 100%;
        display: flex;
        flex-direction: row-reverse;
        background: url('../../../static/pic/login.jpg');
        background-size: 100% 100%;
        main{
            width: 30%;
            margin-right: 5%;
            display: flex;
            align-items: center;
            form{
                background: rgba(232,232,232,0.8);
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 50px 0;
                border-radius: 10%;
                .user,.psd{
                    width: 45%;
                    margin: 15px 0;
                }
                .login{
                    margin: 10px 0 20px 0;
                }
            }
        }
    }
</style>
