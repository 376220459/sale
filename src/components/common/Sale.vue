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

        <aside>
            <ul>
                <li class="local">
                    <i class="iconfont icon-weizhi"></i>
                    <el-tooltip class="item" content="点击切换校园" placement="right">
                        <p @click="OpenSelectSchool">{{this.school}}</p>
                    </el-tooltip>
                    
                </li>
                <li class="other-class" :style="{background:classBack[0]}" @click="switchClass(0)">
                    <i class="iconfont icon-quanbugengduo"></i>
                    <p>所有分类</p>
                </li>
                <li class="other-class" :style="{background:classBack[1]}" @click="switchClass(1)">
                    <i class="iconfont icon-shu"></i>
                    <p>书籍</p>
                </li>
                <li class="other-class" :style="{background:classBack[2]}" @click="switchClass(2)">
                    <i class="iconfont icon-shouji"></i>
                    <p>手机</p>
                </li>
                <li class="other-class" :style="{background:classBack[3]}" @click="switchClass(3)">
                    <i class="iconfont icon-diannao"></i>
                    <p>电脑</p>
                </li>
                <li class="other-class" :style="{background:classBack[4]}" @click="switchClass(4)">
                    <i class="iconfont icon-yifu"></i>
                    <p>衣物</p>
                </li>
                <li class="other-class" :style="{background:classBack[5]}" @click="switchClass(5)">
                    <i class="iconfont icon-riyongpin"></i>
                    <p>日常用品</p>
                </li>
            </ul>
        </aside>
        
        <main>
            <nav>
                <ul>
                    <li :style="{color:orderColor[0]}" @click="switchOrder(0)"><p>热度<i class="iconfont icon-paixu"></i></p></li>
                    <li :style="{color:orderColor[1]}" @click="switchOrder(1)"><p>时间<i class="iconfont icon-paixu"></i></p></li>
                    <li :style="{color:orderColor[2]}" @click="switchOrder(2)"><p>价格<i class="iconfont icon-paixu"></i></p></li>
                </ul>
            </nav>

            <div class="goods">
                <ul>
                    <li v-for="(item, index) in this.goods" :key="index">
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
            </div>

            <div class="page">
                <el-pagination background layout="prev, pager, next" :page-size="15" :total="allTotals" @current-change="changePage"></el-pagination>
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

        <div class="select-school" v-if="showSchoolCondition">
            <el-tooltip class="item" content="关闭" placement="right">
                <i @click="closeSelectSchool" class="iconfont icon-guanbi"></i>
            </el-tooltip>
            <h3>选择您所在的高校：</h3>
            <ul>
                <li @click="selectSchool('西安邮电大学')">西安邮电大学</li>
                <li @click="selectSchool('西北政法大学')">西北政法大学</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sale',
    data(){
        return{
            name: 'admin',
            school: '西安邮电大学',
            search: '',
            showSchoolCondition: false,
            classBack: ['#606060','','','','',''],
            orderColor: ['#00CC66','',''],
            allTotals: 80,
            goods: [
                {
                    img: 'static/pic/mayuan.jpg',
                    name: '马克思主义基本原理概论',
                    price: 10,
                    look: 8888,
                    school: '西安邮电大学',
                    trade: '当面交易'
                },
                {
                    img: 'static/pic/shouji.jpg',
                    name: 'Iphone5',
                    price: 1500,
                    look: 8888,
                    school: '西安邮电大学',
                    trade: '当面交易'
                },
                {
                    img: 'static/pic/mayuan.jpg',
                    name: '马克思主义基本原理概论',
                    price: 10,
                    look: 8888,
                    school: '西安邮电大学',
                    trade: '当面交易'
                },
                {
                    img: 'static/pic/shouji.jpg',
                    name: 'Iphone5',
                    price: 1500,
                    look: 8888,
                    school: '西安邮电大学',
                    trade: '当面交易'
                },
                {
                    img: 'static/pic/mayuan.jpg',
                    name: '马克思主义基本原理概论',
                    price: 10,
                    look: 8888,
                    school: '西安邮电大学',
                    trade: '当面交易'
                },
                {
                    img: 'static/pic/shouji.jpg',
                    name: 'Iphone5',
                    price: 1500,
                    look: 8888,
                    school: '西安邮电大学',
                    trade: '当面交易'
                },
                {
                    img: 'static/pic/mayuan.jpg',
                    name: '马克思主义基本原理概论',
                    price: 10,
                    look: 8888,
                    school: '西安邮电大学',
                    trade: '当面交易'
                },
                {
                    img: 'static/pic/shouji.jpg',
                    name: 'Iphone5',
                    price: 1500,
                    look: 8888,
                    school: '西安邮电大学',
                    trade: '当面交易'
                },
            ]
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
        },
        OpenSelectSchool(){
            this.showSchoolCondition = true;
        },
        closeSelectSchool(){
            this.showSchoolCondition = false;
        },
        selectSchool(schoolName){
            this.school = schoolName;
            this.$message({
                message: '切换成功',
                type: 'success',
                showClose: true,
                duration: 1000
            });
            this.showSchoolCondition = false;
        },
        switchClass(nth){
            this.classBack = [];
            this.classBack[nth] = '#606060';
        },
        switchOrder(nth){
            this.orderColor = [];
            this.orderColor[nth] = '#00CC66';
        },
        lookCheck(lookNum){
            if(lookNum > 999){
                return '999+';
            }
            return lookNum;
        },
        changePage(pageNum){
            this.$message('当前页数：' + pageNum);
        }
    },
}
</script>

<style lang="scss" scoped>
    .sale-whole{
        // height: 100%;
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
                            transform: scale(1.1);
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
            position: fixed;
            width: 150px;
            height: 100%;
            top: 50px;
            background: #202020;
            overflow: auto;
            z-index: 100;
            ul{
                li{
                    color: #B0B0B0;
                    width: 100%;
                    i{
                        font-size: 1.5em; 
                    }
                }
                li.local{
                    padding: 30px 0;
                    p{
                        margin-top: 5px;
                        cursor: pointer;
                        text-decoration: underline;
                    }
                    p:hover{
                        color: skyblue;
                    }
                }
                li.other-class{
                    display: flex;
                    align-items: center;
                    font-size: 1.5em;
                    padding: 20px 0;
                    margin: 1px 0;
                    i{
                        margin: 0 5px;
                    }
                }
                li.other-class:hover{
                    background: #606060;
                    cursor: pointer;
                }
            }
        }
        main{
            padding-top: 50px;
            padding-left: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            nav{
                width: 90%;
                height: 30px;
                border-radius: 5px;
                background: rgba(0,0,0,0.1);
                margin-top: 20px;
                ul{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    li{
                        margin: 0 25px;
                        color: gray;
                        font-weight: bold;
                        cursor: pointer;
                        i{
                            font-size: 0.8em;
                        }
                    }
                }
            }
            div.goods{
                width: 90%;
                margin: 20px 0;
                min-height: 80vh;
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    // justify-content: flex-start;
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
                        div.goods-price-look{
                            width: 100%;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            // margin: 2px 0;
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
                            // margin: 1px 0;
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
                        }
                    }
                    li:hover{
                        cursor: pointer;
                        transition: background-color 0.5s,transform 0.5s;
                        background-color: white;
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
                width: 100%;
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
        div.select-school{
            position: fixed;
            width: 50%;
            height: 50%;
            left: 50%;
            top: 20%;
            transform: translateX(-50%);
            border: 1px solid gray;
            border-radius: 20px;
            background: rgba(250,250,250,0.7);
            padding: 20px 40px;
            i{
                font-size: 1.8em;
                font-weight: bold;
                color: black;
                position: fixed;
                top: 3%;
                right: 2%;
            }
            i:hover{
                cursor: pointer;
                color: gray;
            }
            h3{
                color: #303030;
            }
            ul{
                display: flex;
                flex-wrap: wrap;
                margin-top: 20px;
                li{
                    margin: 10px;
                    text-decoration: underline;
                }
                li:hover{
                    cursor: pointer;
                    font-weight: bold;
                }
            }
        }
    }
</style>

