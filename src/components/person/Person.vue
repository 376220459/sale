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

        <aside>
            <p>
                <i class="iconfont icon-jiaoya"></i>明信片
                <el-tooltip content="修改" placement="right">
                    <i class="iconfont icon-ico_compile" @click="modify"></i>
                </el-tooltip>
            </p>
            <ul v-if="infShowCondition">
                <li><span>姓名：</span>{{ this.personInf.name }}</li>
                <li><span>学校：</span>{{ this.personInf.school }}</li>
                <li><span>学号：</span>{{ this.personInf.studentID }}</li>
                <li><span>手机：</span>{{ this.personInf.tel }}</li>
                <li><span>Q Q：</span>{{ this.personInf.qq }}</li>
                <li><span>微信：</span>{{ this.personInf.vx }}</li>
            </ul>
            <ul v-if="infModifyCondition">
                <li><span>姓名：</span><el-input clearable v-model="personInf.name" size="small" disabled></el-input></li>
                <li><span>学校：</span><el-input v-model="personInf.school" size="small"></el-input></li>
                <li><span>学号：</span><el-input v-model="personInf.studentID" size="small"></el-input></li>
                <li><span>手机：</span><el-input v-model="personInf.tel" size="small" disabled></el-input></li>
                <li><span>Q Q：</span><el-input v-model="personInf.qq" size="small"></el-input></li>
                <li><span>微信：</span><el-input v-model="personInf.vx" size="small"></el-input></li>
                <li class="button"><el-button round type="success" @click="finishModify">完成</el-button></li>
            </ul>
        </aside>

        <main>
            <h2>我的发布</h2>
            <div class="dynamic-sale">
                <h4>二手信息</h4>
                <ul>
                    <li v-for="(item, index) in this.saleGoods" :key="index" @mouseover="showSaleOperation(index)" @mouseout="item.operationCondition=false">
                        <div class="saleOperation" v-show="item.operationCondition">
                            <div @click="finishSaleTrade(index)">已交易</div>
                            <div @click="deleteSale(index)">删除</div>
                            <div @click="goGoods">查看</div>
                        </div>

                        <div class="saleTrade" v-show="item.tradeCondition">
                            <div @click="goGoods">查看详情</div>
                            <div>已交易</div>
                        </div>

                        <img :src="item.img" alt="暂时无图">
                        <div class="goods-price-look">
                            <p><i class="iconfont icon-fl-renminbi"></i>{{ item.price }}</p>
                            <p><i class="iconfont icon-chakan"></i>{{ lookCheck(item.look) }}</p>
                        </div>
                        <p class="goods-name">{{ item.name }}</p>
                        <p class="goods-school"><i class="iconfont icon-xuexiaogaikuang"></i>{{ item.school }}</p>
                        <p class="goods-trade"><i class="iconfont icon-jiaoyixianxing"></i>{{ item.trade }}</p>
                    </li>
                </ul>
                <div class="sale-page">
                    <el-pagination background layout="prev, pager, next" :page-size="4" :total="saleTotals" @current-change="changeSalePage"></el-pagination>
                </div>
            </div>

            <div class="dynamic-buy">
                <h4>求购信息</h4>
                <ul>
                    <li v-for="(item, index) in this.buyGoods" :key="index" @mouseover="showBuyOperation(index)" @mouseout="item.operationCondition=false">
                        <div class="buyOperation" v-show="item.operationCondition">
                            <div @click="finishBuyTrade(index)">已交易</div>
                            <div >删除</div>
                        </div>

                        <div class="buyTrade" v-show="item.tradeCondition">
                            <div>已交易</div>
                        </div>

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
                <div class="buy-page">
                    <el-pagination background layout="prev, pager, next" :page-size="4" :total="buyTotals" @current-change="changeBuyPage"></el-pagination>
                </div>
            </div>
        </main>

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
    </div>
</template>

<script>
export default {
    name: 'Person',
    data(){
        return{
            infShowCondition: true,
            infModifyCondition: false,
            personInf: {
                name: '王少华',
                school: '西安邮电大学',
                studentID: '04163197',
                tel: 18392300504,
                qq: '',
                vx: ''
            },
            saleTotals: 50,
            buyTotals: 50,
            saleGoods: [
                {
                    img: 'static/pic/mayuan.jpg',
                    name: '马克思主义基本原理概论',
                    price: 10,
                    look: 8888,
                    school: '西安邮电大学',
                    trade: '当面交易',
                    operationCondition: false,
                    tradeCondition: true
                },
                {
                    img: 'static/pic/shouji.jpg',
                    name: 'Iphone5',
                    price: 1500,
                    look: 8888,
                    school: '西安邮电大学',
                    trade: '当面交易',
                    operationCondition: false
                },
                {
                    img: 'static/pic/mayuan.jpg',
                    name: '马克思主义基本原理概论',
                    price: 10,
                    look: 8888,
                    school: '西安邮电大学',
                    trade: '当面交易',
                    operationCondition: false
                },
                {
                    img: 'static/pic/mayuan.jpg',
                    name: '马克思主义基本原理概论',
                    price: 10,
                    look: 8888,
                    school: '西安邮电大学',
                    trade: '当面交易',
                    operationCondition: false
                }
            ],
            buyGoods: [
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
                    time: '2019年2月26日 14:56',
                    operationCondition: false,
                    tradeCondition: true
                },
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
                    time: '2019年2月26日 14:56',
                    operationCondition: false
                },
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
                    time: '2019年2月26日 14:56',
                    operationCondition: false
                }
            ]
        }
    },
    methods: {
        goTab(pathName){
            this.$router.push({
                path: pathName
            })
        },
        modify(){
            this.infShowCondition = false;
            this.infModifyCondition = true;
        },
        finishModify(){
            this.infModifyCondition = false;
            this.infShowCondition = true;
        },
        lookCheck(lookNum){
            if(lookNum > 999){
                return '999+';
            }
            return lookNum;
        },
        changeSalePage(pageNum){
            this.$message('当前二手信息页数：' + pageNum);
        },
        changeBuyPage(pageNum){
            this.$message('当前求购信息页数：' + pageNum);
        },
        showSaleOperation(index){
            if(!this.saleGoods[index].tradeCondition){
                this.saleGoods[index].operationCondition = true;
            }
        },
        showBuyOperation(index){
            if(!this.buyGoods[index].tradeCondition){
                this.buyGoods[index].operationCondition = true;
            }
        },
        finishSaleTrade(index){
            this.saleGoods[index].tradeCondition = true;
            this.saleGoods[index].operationCondition = false;
            this.$message.success({
                message: '成功更改商品状态,本商品将不再被用户所看到',
                duration: 3000
            })
        },
        finishBuyTrade(index){
            this.buyGoods[index].tradeCondition = true;
            this.buyGoods[index].operationCondition = false;
            this.$message.success({
                message: '成功更改求购状态,本信息将不再被用户所看到',
                duration: 3000
            })
        },
        deleteSale(index){
            this.$message.success({
                message: '删除成功~',
                duration: 1000
            })
        },
        goGoods(){
            let routeUrl = this.$router.resolve({
                path: "/goods"
            });
            window.open(routeUrl .href, '_blank');
        }
    },
    created(){
        document.title="个人中心"
    },
}
</script>

<style lang="scss" scoped>
    .person-whole{
        // height: 100%;
        // background: #E0FFFF;
        background: rgba(0,255,255,0.1);
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
        aside{
            box-sizing: border-box;
            width: 370px;
            height: 400px;
            position: fixed;
            top: 200px;
            left: 30px;
            background: #202020;
            z-index: 100;
            // overflow-y: auto;
            overflow: auto;
            color: #B0B0B0;
            border-radius: 20px;
            p{
                font-size: 50px;
                color: #67C23A;
                margin-top: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                i:nth-child(1){
                    font-size: 50px;
                }
                i:nth-child(2){
                    color: #B0B0B0;
                    font-size: 25px;
                    margin-left: 60px;
                }
                i:nth-child(2):hover{
                    color: #336633;
                    cursor: pointer;
                }
            }
            ul{
                box-sizing: border-box;
                width: 300px;
                padding-left: 30px;
                li{
                    width: 12em;
                    font-size: 25px;
                    text-align: left;
                    margin: 10px 0;
                    span{
                        display: inline-block;
                        width: 80px;
                        font-weight: bold;
                        color: #CCFFFF;
                    }
                    .el-input{
                        width: 220px;
                    }
                }
                li.button{
                    text-align: center;
                }
            }
        }
        main{
            padding-top: 50px;
            padding-left: 500px;
            h2{
                margin-bottom: 30px;
            }
            div.dynamic-sale{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-bottom: 30px;
                border-bottom: 1px dotted black;
                h4{
                    border: 1px solid #67C23A;
                    border-radius: 15px;
                    padding: 3px 5px;
                }
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    li{
                        width: 260px;
                        height: 370px;
                        background: rgba(255,255,255,0.5);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border-radius: 10px;
                        margin: 15px 15px;
                        border: 1px solid #B0B0B0;
                        position: relative;
                        div.saleOperation{
                            position: absolute;
                            border-radius: 10px;
                            width: 260px;
                            height: 370px;
                            background: rgba(0,0,0,0.6);
                            z-index: 101;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            align-items: center;
                            div{
                                width: 90px;
                                height: 90px;
                                border-radius: 50%;
                                border: 1px solid black;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-size: 25px;
                                font-weight: bold;
                                color: gray;
                                cursor: pointer;
                            }
                            div:nth-child(1):hover{
                                color: #67C23A;
                                border: 1px dotted #67C23A;
                            }
                            div:nth-child(2):hover{
                                color: #F56C6C;
                                border: 1px dotted #F56C6C;
                            }
                            div:nth-child(3):hover{
                                color: #E6A23C;
                                border: 1px dotted #E6A23C;
                            }
                        }
                        div.saleTrade{
                            position: absolute;
                            border-radius: 10px;
                            width: 260px;
                            height: 370px;
                            background: rgba(0,0,0,0.5);
                            z-index: 101;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            div:nth-child(1){
                                position: absolute;
                                top: 10px;
                                right: 10px;
                                color: #F56C6C;
                                font-size: 15px;
                                text-decoration: underline;
                                cursor: pointer;
                            }
                            div:nth-child(1):hover{
                                color: #E6A23C;
                            }
                            div:nth-child(2){
                                color: #67C23A;
                                font-size: 50px;
                            }
                        }
                        div.goods-price-look{
                            width: 100%;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            p:nth-child(1){
                                color: #CC6600;
                                font-size: 30px;
                            }
                            .icon-fl-renminbi{
                                color: #CC6600;
                                font-size: 20px;
                                font-weight: 900;
                            }
                            p:nth-child(2){
                                color: #A0A0A0;
                                font-size: 15px;
                            }
                            .icon-chakan{
                                color: #A0A0A0;
                                font-size: 15px;
                                margin-right: 5px;
                            }
                            
                        }
                        .goods-name{
                            width: 220px;
                            font-size: 20px;
                            font-weight: bold;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            color: #339999;
                            text-align: left;
                        }
                        .goods-school{
                            width: 220px;
                            font-size: 15px;
                            text-align: left;
                            color: #A0A0A0;
                            i{
                                font-size: 20px;
                                margin-right: 5px;
                            }
                        }
                        .goods-trade{
                            width: 220px;
                            font-size: 15px;
                            text-align: left;
                            color: #A0A0A0;
                            i{
                                font-size: 20px;
                                margin-right: 5px;
                            }
                        }
                        img{
                            width: 250px;
                            height: 250px;
                            border-radius: 5px;
                            object-fit: cover;
                        }
                    }
                }
                .sale-page{
                    margin-top: 20px;
                }
            }
            div.dynamic-buy{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 30px;
                padding-bottom: 30px;
                h4{
                    border: 1px solid #67C23A;
                    border-radius: 15px;
                    padding: 3px 5px;
                }
                ul{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    li{
                        width: 90%;
                        border: 1px solid rgba(0,0,0,0.2);
                        border-radius: 20px;
                        margin: 10px 0;
                        text-align: left;
                        padding: 0 20px;
                        position: relative;
                        background: rgba(255,255,255,0.5);
                        div.buyOperation{
                            position: absolute;
                            border-radius: 10px;
                            width: 100%;
                            height: 100%;
                            left: 0px;
                            top: 0px;
                            background: rgba(0,0,0,0.6);
                            z-index: 101;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            div{
                                width: 120px;
                                height: 120px;
                                border-radius: 50%;
                                border: 1px solid black;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-size: 30px;
                                color: gray;
                                cursor: pointer;
                            }
                            div:nth-child(1):hover{
                                color: #67C23A;
                                border: 1px dotted #67C23A;
                            }
                            div:nth-child(2):hover{
                                color: #F56C6C;
                                border: 1px dotted #F56C6C;
                            }
                        }
                        div.buyTrade{
                            position: absolute;
                            border-radius: 10px;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                            background: rgba(0,0,0,0.5);
                            z-index: 101;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            div{
                                color: #67C23A;
                                font-size: 80px;
                            }
                        }
                        p{
                            margin: 3px 0;
                            font-size: 20px;
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
                }
                div.buy-page{
                    margin-top: 20px;
                }
            }
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
</style>