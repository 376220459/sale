<template>
    <div class="goods-whole">
        <header>
            <nav>
                <ul>
                    <li class="logo">
                        <p><i class="iconfont icon-navjiaoyizhongxin"></i>校园交易</p>
                    </li>
                    <li class="tabs" @click="goTab('sale')">首页</li>
                    <li class="tabs" @click="goTab('buy')">求购</li>
                    <li class="tabs" @click="goTab('release')">发布</li>
                    <li class="tabs" @click="goTab('person')">个人</li>
                </ul>
            </nav>
        </header>
        <main>
            <div class="show-pic">
                <div class="cover">
                    <pic-zoom :url="coverPic" :scale="3"></pic-zoom>
                </div>
                <!-- <pic-zoom class="cover" :url="coverPic" :scale="3"></pic-zoom> -->
                <!-- <img class="cover" :src="coverPic" alt="暂时无图"> -->
                <div class="pics">
                    <img v-for="(item, index) in goods.pics" :key="index" :v-if="item" :src="item" alt="预览图" :style="{borderColor:picBorder[index]}" @click="clickPic(index)">
                </div>
            </div>
            
            <div class="inf">
                <p class="goods-name"><i class="iconfont icon-shangpin"></i>{{ goods.name }}</p>
                <p class="goods-dynamic"><i class="iconfont icon-beizhu"></i><span>{{ goods.dynamic }}</span></p>
                <p class="goods-price"><i class="iconfont icon-renminbi"></i>{{ goods.price }}</p>
                <p class="goods-class"><i class="iconfont icon-icon-test"></i>{{ goods.class }}</p>
                <p class="goods-look"><i class="iconfont icon-chakan"></i>{{ goods.look }}</p>
                <p class="goods-school"><i class="iconfont icon-xuexiaogaikuang"></i>{{ goods.school }}</p>
                <p class="goods-trade"><i class="iconfont icon-jiaoyixianxing"></i>{{ goods.trade }}</p>
                <p class="goods-owner"><i class="iconfont icon-lianxiren"></i>{{ goods.owner }}</p>
                <p class="goods-tel"><i class="iconfont icon-shoujihao"></i>{{ goods.tel }}</p>
                <p class="goods-qq"><i class="iconfont icon-qq"></i>{{ goods.qq }}</p>
                <p class="goods-vx"><i class="iconfont icon-weixin"></i>{{ goods.vx }}</p>
            </div>

            <div class="operation">
                <el-tooltip content="分享" placement="top">
                        <div @click="share"><i class="iconfont icon-fenxiang"></i></div>
                </el-tooltip>
                <el-tooltip content="收藏" placement="top">
                        <div @click="collect"><i class="iconfont icon-shoucang"></i></div>
                </el-tooltip>
                <el-tooltip content="举报" placement="top">
                        <div @click="report"><i class="iconfont icon-jubao"></i></div>
                </el-tooltip>
            </div>
        </main>

        <aside>
            <h3>每日推荐</h3>
            <ul>
                <li v-for="(item, index) in this.recommendGoods" :key="index" @click="goGoods()">
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
        </aside>

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
import PicZoom from 'vue-piczoom'
export default {
    name: 'Goods',
    components: {
        PicZoom
    },
    data(){
        return{
            goods:{
                pics: ['static/pic/mayuan.jpg','static/pic/404.jpg','static/pic/mayuan.jpg','static/pic/404.jpg'],
                name: '马克思主义基本原理概论',
                dynamic: '买五送一，多买多得，欢迎团购。买五送一，多买多得，欢迎团购。买五送一，多买多得，欢迎团购。买五送一，多买多得，欢迎团购。买五送一，多买多得，欢迎团购。买五送一，多买多得，欢迎团购。买五送一，多买多得，欢迎团购。买五送一，多买多得，欢迎团购。买五送一，多买多得，欢迎团购。买五送一，多买多得，欢迎团购。买五送一，多买多得，欢迎团购。买五送一，多买多得，欢迎团购。',
                // dynamic: '买五送一，多买多得，欢迎团购。',
                price: 10,
                class: '书籍',
                look: 8888,
                school: '西安邮电大学',
                trade: '当面交易',
                owner: '王先生',
                tel: 18392300504,
                qq: 376220459,
                vx: ''
            },
            coverPic: 'static/pic/mayuan.jpg',
            picBorder: ['red','','',''],
            recommendGoods: [
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
                }
            ]
        }
    },
    methods: {
        lookCheck(lookNum){
            if(lookNum > 999){
                return '999+';
            }
            return lookNum;
        },
        goTab(pathName){
            this.$router.push({
                path: pathName
            })
        },
        goGoods(){
            let routeUrl = this.$router.resolve({
                path: "/goods"
            });
            window.open(routeUrl .href, '_blank');
        },
        clickPic(index){
            this.picBorder = [];
            this.picBorder[index] = 'red';
            this.coverPic = this.goods.pics[index];
        },
        share(){
            this.$message.warning({
                message: '对不起，此功能暂未开放哦~',
                duration: 2000
            });
        },
        collect(){
            this.$message.warning({
                message: '对不起，此功能暂未开放哦~',
                duration: 2000
            });
        },
        report(){
            this.$message.success({
                message: '举报成功，我们会尽快核实~',
                duration: 2000
            });
        },
    },
    created(){
        document.title="商品详情 - "+this.goods.name;
    },
}
</script>

<style lang="scss" scoped>
    div.goods-whole{
        background: rgba(0,255,255,0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
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
            background: white;
            width: 95%;
            border-radius: 15px;
            padding: 30px;
            margin: 70px 0 20px 0;
            display: flex;
            div.show-pic{
                width: 500px;
                .cover{
                    width: 500px;
                    height: 500px;
                    border-radius: 5px;
                }
                div.pics{
                    display: flex;
                    justify-content: space-around;
                    width: 500px;
                    margin-top: 10px;
                    img{
                        width: 100px;
                        height: 100px;
                        object-fit: cover;
                        border: 2px solid gray;
                        cursor: pointer;
                    }
                }
            }
            div.inf{
                margin: 0 50px 0 30px;
                font-size: 25px;
                text-align: left;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                i{
                    font-size: 20px;
                    margin-right: 10px;
                    color: #E6A23C;
                }
                p{
                    margin: 10px 0;
                }
                p.goods-dynamic{
                    display: flex;
                    span{
                        display: inline-block;
                        max-width: 25em;
                        max-height: 3.3em;
                        overflow: auto;
                    }
                }
            }
            div.operation{
                // width: 200px;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                div{
                    width: 80px;
                    height: 80px;
                    border: 2px solid gray;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 20px 0;
                    cursor: pointer;
                    i{
                        font-size: 30px;
                        color: gray;
                    }
                }
                div:nth-child(1){
                    border-color: #409EFF;
                    i{
                        color:#409EFF;
                        font-weight: bold;
                    }
                }
                div:nth-child(2){
                    border-color: #E6A23C;
                    i{
                        color:#E6A23C;
                        font-weight: bold;
                    }
                }
                div:nth-child(3){
                    border-color: red;
                    i{
                        color:red;
                        font-weight: bold;
                    }
                }
                div:hover{
                    i{
                        transform: scale(1.2);
                    }
                }
            }
        }
        aside{
            background: rgba(250,250,250,0.5);
            width: 95%;
            border-radius: 15px;
            padding: 30px;
            margin: 20px 0;
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
                        object-fit: cover;
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
        footer{
            height: 100px;
            background: #484848;
            display: flex;
            justify-content: center;
            width: 100%;
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

