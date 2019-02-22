<template>
    <div class="sale-whole">
        <header>
            <nav>
                <ul>
                    <li class="logo">
                        <p><i class="iconfont icon-navjiaoyizhongxin"></i>校园交易</p>
                    </li>
                    <li class="tabs">首页</li>
                    <li class="tabs" @click="goTab('buy')">求购</li>
                    <li class="tabs" @click="goTab('release')">发布</li>
                    <li class="tabs" @click="goTab('person')">个人</li>
                    <li class="search">
                        <el-input placeholder="搜索一下..." v-model="search" clearable size="mini">
                            <el-button class="search-button" slot="append"><i class="el-icon-search"></i></el-button>
                        </el-input>
                    </li>
                    <li class="time">{{ this.nowTime }}好，<u title="普通会员">{{ this.name }}</u></li>
                </ul>
            </nav>
        </header>
        <main></main>
        <footer></footer>
    </div>
</template>

<script>
export default {
    name: 'Sale',
    data(){
        return{
            name: 'admin',
            search: ''
        }
    },
    computed: {
        nowTime(){
            let hour = new Date().getHours();
            return hour >= 6 && hour < 12 ? '早上' : hour >=12 && hour <18 ? '下午' : '晚上';
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
    .sale-whole{
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
                    li:nth-of-type(2){
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
            height: 85%;
        }
        footer{
            height: 10%;
        }
    }
</style>

