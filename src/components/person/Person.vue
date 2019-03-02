<template>
    <div class="person-whole">
        <header>
            <nav>
                <ul>
                    <li class="logo">
                        <p><i class="iconfont icon-navjiaoyizhongxin"></i>校园交易</p>
                    </li>
                    <li class="tabs"  @click="goTab('sale')">首页</li>
                    <li class="tabs"  @click="goTab('buy')">求购</li>
                    <li class="tabs"  @click="goTab('release')">发布</li>
                    <li class="tabs">个人</li>
                </ul>
            </nav>
        </header>

        <main>
            <div style="height: 2000px;">

            </div>
            <footer>
                <ul>
                    <li class="logo">
                        <p><i class="iconfont icon-navjiaoyizhongxin"></i>校园交易</p>
                    </li>
                    <li class="about">
                        <p>关于我们：</p>
                        <p>TEL：18392300504<br/>微信：V18392300504<br/>QQ：376220459<br/>地址：西安邮电大学</p>
                    </li>
                    <li class="dashang">
                        <p>鼓励作者，<br/>他们会做的更好：</p>
                        <img src="/static/pic/zhifu.png" alt="付款码" height="95px">
                    </li>
                </ul>
            </footer>
        </main>
    </div>
</template>

<script>
export default {
    name: 'Person',
    data(){
        return{

        }
    },
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
    .person-whole{
        // height: 100%;
        background: #E0FFFF;
        li.logo{
            margin: 0 20px 0 5px;
            border: 1px solid rgb(150, 238, 238);
            border-radius: 5px;
            i,p{
                font-size: 30px;
                color: rgb(95, 170, 95);
            }
        }
        header{
            height: 50px;
            width: 100%;
            background: #484848;
            position: fixed;
            z-index: 100;
            nav{
                height: 100%;
                ul{
                    height: 100%;
                    display: flex;
                    align-items: center;
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
                    li:nth-of-type(5){
                        border-bottom: 2px solid white;
                        color: white;
                    }
                    li.search{
                        margin-left: 30%;
                        .search-button{
                            font-size: 1.5em;
                        }
                        .search-button:hover{
                            color: #67C23A;
                            cursor: pointer;
                        }
                        .search-button:active{
                            font-size: 1.8em;
                        }
                    }
                    li.time{
                        color: white;
                        flex-grow: 1;
                        text-align: right;
                        padding-right: 20px;
                        u{
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        main{
            padding-top: 50px;
            footer{
                height: 100px;
                background: #484848;
                display: flex;
                justify-content: center;
                ul{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    li.about{
                        margin: 0 50px;
                        padding: 0 50px;
                        display: flex;
                        align-items: center;
                        border-left: 1px dotted black;
                        border-right: 1px dotted black;
                        p{
                            text-align: left;
                        }
                        p:nth-of-type(1){
                            color: #B0B0B0;
                            font-weight: bold;
                            margin-right: 10px;
                        }
                        p:nth-of-type(2){
                            color: #909090;
                        }
                    }
                    li.dashang{
                        display: flex;
                        align-items: center;
                        p{
                            color: #B0B0B0;
                            font-weight: bold;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
        
    }
</style>