<template>
    <div class="release-whole">
        <header>
            <nav>
                <ul>
                    <li class="logo">
                        <p><i class="iconfont icon-navjiaoyizhongxin"></i>校园交易</p>
                    </li>
                    <li class="tabs"  @click="goTab('sale')">首页</li>
                    <li class="tabs"  @click="goTab('buy')">求购</li>
                    <li class="tabs">发布</li>
                    <li class="tabs"  @click="goTab('person')">个人</li>
                </ul>
            </nav>
        </header>
        <main></main>
        <footer></footer>
    </div>
</template>

<script>
export default {
    name: 'Release',
    methods: {
        goTab(pathName){
            this.$router.push({
                path: pathName
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .release-whole{
        height: 100%;
        background: #E0FFFF;
        header{
            height: 5%;
            background: #484848;
            nav{
                height: 100%;
                ul{
                    height: 100%;
                    display: flex;
                    align-items: center;
                    li.logo{
                        margin: 0 20px 0 5px;
                        border: 1px solid rgb(150, 238, 238);
                        border-radius: 5px;
                        i,p{
                            font-size: 30px;
                            color: rgb(95, 170, 95);
                        }
                    }
                    li.tabs{
                        box-sizing: border-box;
                        width: 5%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 20px;
                        font-weight: bold;
                        color: 	#DCDCDC;
                        margin-right: 5px;
                    }
                    li.tabs:hover{
                        border-bottom: 2px solid white;
                        color: white;
                        cursor: pointer;
                    }
                    li:nth-of-type(4){
                        border-bottom: 2px solid white;
                        color: white;
                    }
                }
            }
        }
        main{
            height: 85%;
        }
        footer{
            height: 10%;
        }
    }
</style>

