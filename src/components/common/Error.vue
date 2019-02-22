<template>
    <div class="error-whole">
        <img src="static/pic/404.jpg" alt="糟糕...">
        <p>糟糕，您访问的页面不存在...</p>
        <router-link to="/">返回首页</router-link>
    </div>
</template>

<script>
export default {
    name: 'Error'
}
</script>

<style lang="scss" scoped>
    .error-whole{
        height: 100%;
        background-color: #669999;
        img{
            margin-top: 50px;
        }
        p{
            font-size: 50px;
            margin-top: 50px;
            margin-bottom: 20px;
        }
    }
</style>


