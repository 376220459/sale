<template>
    <div class="buy-whole">
        <header>
            <nav>
                <ul>
                    <li class="logo">
                        <p><i class="iconfont icon-navjiaoyizhongxin"></i>校园交易</p>
                    </li>
                    <li class="tabs"  @click="goTab('sale')">首页</li>
                    <li class="tabs">求购</li>
                    <li class="tabs"  @click="goTab('release')">发布</li>
                    <li class="tabs"  @click="goTab('person')">个人</li>
                </ul>
            </nav>
        </header>

        <aside>
            <p><i class="iconfont icon-panels"></i>交易小贴士</p>
            <ul>
                <li>1.交易过程中，一定要谨防诈骗，注意保护个人隐私。</li>
                <li>2.建议先谈妥价格再进行当面交易。</li>
                <li>3.确保安全的交易地点，提高安全意识。</li>
                <li>4.电话联系时，一定说明是在校园交易看到的。</li>
                <li>5.禁止交易国家违禁品。</li>
                <li>6.不得发布无关信息及违法信息。</li>
                <li>7.一旦发现有违规者，将永久停封账号。</li>
            </ul>
        </aside>

        <main>
            <div class="dynamic">
                <h4>为您展示最新发布的求购信息：</h4>
                <ul>
                    <li v-for="(item, index) in this.dynamic" :key="index">
                        <p><i class="iconfont icon-shangpin">求购物品：</i>{{ item.goodsName }}</p>
                        <p><i class="iconfont icon-beizhu">备注：</i>{{ item.remarks }}</p>
                        <p><i class="iconfont icon-renminbi">期望价格：</i>{{ item.price }}</p>
                        <p>
                            <span><i class="iconfont icon-xuexiaogaikuang">学校：</i>{{ item.school }}</span>
                            <span><i class="iconfont icon-didian">交易地点：</i>{{ item.place }}</span>
                        </p>
                        <p>
                            <span><i class="iconfont icon-yonghu-tianchong">联系人：</i>{{ item.owner }}</span>
                            <span><i class="iconfont icon-shoujihao">电话：</i>{{ item.tel }}</span>
                            <span><i class="iconfont icon-qq">QQ：</i>{{ item.qq }}</span>
                            <span><i class="iconfont icon-weixin">微信：</i>{{ item.vx }}</span>
                        </p>
                        <p>{{ item.time }}</p>
                    </li>
                </ul>
            </div>

            <div class="page">
                <el-pagination background layout="prev, pager, next" :page-size="10" :total="allTotals" @current-change="changePage"></el-pagination>
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
    name: 'Buy',
    data(){
        return{
            allTotals: 80,
            dynamic: [
                {
                    goodsName: 'Iphone X',
                    price: 7000,
                    school: '西安邮电大学',
                    owner: '王先生',
                    tel: 18392300504,
                    qq: 376220459,
                    vx: 'V18392300504',
                    place: '天桥',
                    remarks: '手机最好是8成新以上，内存128G，黑色，价格可以再商量~手机最好是8成新以上，内存128G，黑色，价格可以再商量~手机最好是8成新以上，内存128G，黑色，价格可以再商量~手机最好是8成新以上，内存128G，黑色，价格可以再商量~手机最好是8成新以上，内存128G，黑色，价格可以再商量~',
                    time: '2019年2月26日 14:56'
                },
                {
                    goodsName: 'Iphone X',
                    price: 7000,
                    school: '西安邮电大学',
                    tel: 18392300504,
                    qq: 376220459,
                    vx: 'V18392300504',
                    place: '天桥',
                    remarks: '手机最好是8成新以上，内存128G，黑色，价格可以再商量~',
                    time: '2019年2月26日 14:56'
                },
                {
                    goodsName: 'Iphone X',
                    price: 7000,
                    school: '西安邮电大学',
                    tel: 18392300504,
                    qq: 376220459,
                    vx: 'V18392300504',
                    place: '天桥',
                    remarks: '手机最好是8成新以上，内存128G，黑色，价格可以再商量~',
                    time: '2019年2月26日 14:56'
                },
                {
                    goodsName: 'Iphone X',
                    price: 7000,
                    school: '西安邮电大学',
                    tel: 18392300504,
                    qq: 376220459,
                    vx: 'V18392300504',
                    place: '天桥',
                    remarks: '手机最好是8成新以上，内存128G，黑色，价格可以再商量~',
                    time: '2019年2月26日 14:56'
                },
                {
                    goodsName: 'Iphone X',
                    price: 7000,
                    school: '西安邮电大学',
                    tel: 18392300504,
                    qq: 376220459,
                    vx: 'V18392300504',
                    place: '天桥',
                    remarks: '手机最好是8成新以上，内存128G，黑色，价格可以再商量~',
                    time: '2019年2月26日 14:56'
                },
                {
                    goodsName: 'Iphone X',
                    price: 7000,
                    school: '西安邮电大学',
                    tel: 18392300504,
                    qq: 376220459,
                    vx: 'V18392300504',
                    place: '天桥',
                    remarks: '手机最好是8成新以上，内存128G，黑色，价格可以再商量~',
                    time: '2019年2月26日 14:56'
                },
                {
                    goodsName: 'Iphone X',
                    price: 7000,
                    school: '西安邮电大学',
                    tel: 18392300504,
                    qq: 376220459,
                    vx: 'V18392300504',
                    place: '天桥',
                    remarks: '手机最好是8成新以上，内存128G，黑色，价格可以再商量~',
                    time: '2019年2月26日 14:56'
                },
                {
                    goodsName: 'Iphone X',
                    price: 7000,
                    school: '西安邮电大学',
                    tel: 18392300504,
                    qq: 376220459,
                    vx: 'V18392300504',
                    place: '天桥',
                    remarks: '手机最好是8成新以上，内存128G，黑色，价格可以再商量~',
                    time: '2019年2月26日 14:56'
                },
            ]
        }
    },
    methods: {
        goTab(pathName){
            this.$router.push({
                path: pathName
            })
        },
        changePage(pageNum){
            this.$message('当前页数：' + pageNum);
        }
    },
}
</script>

<style lang="scss" scoped>
    .buy-whole{
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
                    li:nth-of-type(3){
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
        aside{
            box-sizing: border-box;
            width: 400px;
            height: 100%;
            position: fixed;
            top: 50px;
            background: #202020;
            z-index: 100;
            overflow: auto;
            padding: 20px;
            color: #B0B0B0;
            p{
                font-size: 35px;
                font-weight: bold;
                color: #66FF33;
                i{
                    font-size: 30px;
                }
                margin: 50px 0;
            }
            ul{
                li{
                    font-size: 20px;
                    text-align: left;
                    margin: 20px 0;
                }
            }
        }
        main{
            padding-top: 50px;
            padding-left: 400px;
            div.dynamic{
                min-height: 90vh;
                h4{
                    color: rgba(0,0,0,0.3);
                    margin-top: 10px;
                }
                ul{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    li{
                        width: 90%;
                        // background: rgba(0,0,0,0.2);
                        // background: #D8D8D8;
                        border: 1px solid rgba(0,0,0,0.2);
                        border-radius: 20px;
                        margin: 10px 0;
                        text-align: left;
                        padding: 0 20px;
                        p{
                            margin: 3px 0;
                            font-size: 20px;
                            // color: black;
                            i{
                                font-size: 15px;
                                font-weight: bolder;
                                color: #B0B0B0;
                            }
                        }
                        p:nth-child(1){
                            color: #FF0033;
                            font-size: 25px;
                        }
                        p:nth-child(2){
                            color: green;
                        }
                        p:nth-child(3){
                            color: #CC6600;
                        }
                        p:nth-child(4){
                            span{
                                margin-right: 15px;
                            }
                        }
                        p:nth-child(5){
                            color: #663300;
                            span{
                                margin-right: 15px;
                            }
                        }
                        p:nth-child(6){
                            text-align: right;
                            font-size: 15px;
                            color: black;
                        }
                    }
                    li:hover{
                        cursor: pointer;
                        transition: background-color 0.5s,transform 0.5s;
                        background-color: rgba(0,0,0,0.1);
                        transform: translateY(-10px);
                    }
                }
            }
            div.page{
                width: 100%;
                margin-bottom: 20px;
            }
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


