<template>
    <div class="release-whole">
        <div class="cover" v-if="coverCondition"></div>
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

        <aside>
            <div class="release-button">
                <el-button type="primary" round @click="changeRelease('sale')">发布二手</el-button>
                <el-button type="warning" round @click="changeRelease('buy')">发布求购</el-button>
            </div>
            <h2>小贴士：</h2>
            <ul>
                <li>1.一定如实填写发布信息，不得发布无关内容。</li>
                <li>2.不得发布违法内容。</li>
                <li>3.尽量不要留全名，留姓氏即可。</li>
                <li>4.核对联系方式后再进行发布。</li>
                <li>5.本平台不承担线下交易所致一切后果。</li>
                <li>6.一旦发现有违规者，将永久停封账号。</li>
            </ul>
        </aside>

        <main>
            <div class="release-sale" v-show="saleCondition">
                <h4>发布二手信息：</h4>
                <el-form class="form" ref="saleForm" hide-required-asterisk status-icon :model="saleForm" :rules="saleRules" label-position="left" label-width="6em">
                    <el-form-item prop="goodsName" label="物品名:">
                        <el-input v-model="saleForm.goodsName" placeholder="请输入物品名" clearable></el-input>
                    </el-form-item>

                    <el-form-item prop="dynamic" label="备注:">
                        <el-input v-model="saleForm.dynamic" type="textarea" :rows="4" resize="none" placeholder="填写物品描述及购买要求（选填）"></el-input>
                    </el-form-item>

                    <el-form-item label="相册:">
                        <el-button round :type="uploadButtonType" size="mini" @click="uploadAlbum">{{ uploadButtonName }}</el-button>
                    </el-form-item>

                    <el-form-item prop="price" label="价格:">
                        <el-input v-model="saleForm.price" placeholder="填写出售价格或直接填写面议（注意：面议之间不许有空格）"></el-input>
                    </el-form-item>

                    <el-form-item prop="class" label="分类:">
                        <el-select v-model="saleForm.class" placeholder="请选择商品类别">
                            <el-option label="书籍" value="book"></el-option>
                            <el-option label="手机" value="phone"></el-option>
                            <el-option label="电脑" value="computer"></el-option>
                            <el-option label="衣物" value="close"></el-option>
                            <el-option label="日常用品" value="life"></el-option>
                            <el-option label="其他" value="other"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item prop="school" label="学校:">
                        <el-select v-model="saleForm.school" placeholder="请选择所在高校">
                            <el-option label="西安邮电大学" value="xianyoudian"></el-option>
                            <el-option label="西北政法大学" value="xibeizhengfa"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item prop="local" label="交易地点:">
                        <el-input v-model="saleForm.local" placeholder="请输入详细的交易地点" clearable></el-input>
                    </el-form-item>

                    <el-form-item prop="owner" label="联系人:">
                        <el-input v-model="saleForm.owner" placeholder="请输入联系人的姓氏"></el-input>
                        <el-radio-group v-model="saleForm.sex" size="medium" inline>
                            <el-radio-button label="man">先生</el-radio-button>
                            <el-radio-button label="woman">女士</el-radio-button>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item prop="tel" label="手机:">
                        <el-input v-model="saleForm.tel" placeholder="请输入联系人手机号（必填）" clearable></el-input>
                    </el-form-item>

                    <el-form-item prop="qq" label="QQ:">
                        <el-input v-model="saleForm.qq" placeholder="请输入联系人QQ号（选填）" clearable></el-input>
                    </el-form-item>

                    <el-form-item prop="vx" label="微信:">
                        <el-input v-model="saleForm.vx" placeholder="请输入联系人微信号（选填）" clearable></el-input>
                    </el-form-item>

                    <el-form-item class="button">
                        <el-button round type="success" @click="releaseSale('saleForm')">发布</el-button>
                        <el-button round type="primary" @click="resetForm('saleForm')">重置</el-button>
                    </el-form-item>
                </el-form>

                <div class="upload-cover" v-if="uploadAlbumIf" v-show="uploadAlbumShow">
                    <el-tooltip class="item" content="关闭" placement="right">
                        <i @click="changeUploadAlbumShow(false)" class="iconfont icon-guanbi"></i>
                    </el-tooltip>

                    <div class="tip">注意：为了使图片更美观，请尽量上传 300px*300px 的照片（方形），且大小不能超过 2MB。<p>选择好图片后，点击"我选好了"，进行上传。</p></div>

                    <el-upload
                        accept="image/*"
                        action=""
                        :file-list="albumList"
                        list-type="picture-card"
                        :limit="4"
                        :auto-upload="false"
                        :on-change="checkImg"
                        :on-exceed="checkImgNum"
                        :on-success ="handleAvatarSuccess"
                        :on-error ="handleAvatarError"
                        class="upload"
                    >
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    
                    <el-button round type="success" @click="submitUpload">我选好了</el-button>
                </div>
            </div>

            <div class="release-buy" v-show="buyCondition">
                <h4>发布求购信息：</h4>
                <el-form class="form" ref="buyForm" hide-required-asterisk status-icon :model="buyForm" :rules="buyRules" label-position="left" label-width="6em">
                    <el-form-item prop="goodsName" label="求购物品:">
                        <el-input v-model="buyForm.goodsName" placeholder="请输入物品名" clearable></el-input>
                    </el-form-item>

                    <el-form-item prop="dynamic" label="求购要求:">
                        <el-input v-model="buyForm.dynamic" type="textarea" :rows="4" resize="none" placeholder="填写求购要求（选填）"></el-input>
                    </el-form-item> 

                    <el-form-item prop="price" label="期望价格:">
                        <el-input v-model="buyForm.price" placeholder="填写期望价格或直接填写面议（注意：面议之间不许有空格）"></el-input>
                    </el-form-item>

                    <el-form-item prop="school" label="学校:">
                        <el-select v-model="buyForm.school" placeholder="请选择所在高校">
                            <el-option label="西安邮电大学" value="xianyoudian"></el-option>
                            <el-option label="西北政法大学" value="xibeizhengfa"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item prop="local" label="交易地点:">
                        <el-input v-model="buyForm.local" placeholder="请输入详细的交易地点" clearable></el-input>
                    </el-form-item>

                    <el-form-item prop="owner" label="联系人:">
                        <el-input v-model="buyForm.owner" placeholder="请输入联系人的姓氏"></el-input>
                        <el-radio-group v-model="buyForm.sex" size="medium" inline>
                            <el-radio-button label="man">先生</el-radio-button>
                            <el-radio-button label="woman">女士</el-radio-button>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item prop="tel" label="手机:">
                        <el-input v-model="buyForm.tel" placeholder="请输入联系人手机号（必填）" clearable></el-input>
                    </el-form-item>

                    <el-form-item prop="qq" label="QQ:">
                        <el-input v-model="buyForm.qq" placeholder="请输入联系人QQ号（选填）" clearable></el-input>
                    </el-form-item>

                    <el-form-item prop="vx" label="微信:">
                        <el-input v-model="buyForm.vx" placeholder="请输入联系人微信号（选填）" clearable></el-input>
                    </el-form-item>

                    <el-form-item class="button">
                        <el-button round type="success" @click="releaseBuy('buyForm')">发布</el-button>
                        <el-button round type="primary" @click="resetForm('buyForm')">重置</el-button>
                    </el-form-item>
                </el-form>
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
    name: 'Release',
    data(){
        return{
            uploadButtonName: '点击上传',
            uploadButtonType: 'info',
            saleCondition: true,
            buyCondition: false,
            saleForm: {
                goodsName: '',
                dynamic: '',
                price: '',
                class: '',
                school: '',
                local: '',
                owner: '',
                sex:'man',
                tel: '',
                qq: '',
                vx: ''
            },
            buyForm: {
                goodsName: '',
                dynamic: '',
                price: '',
                school: '',
                local: '',
                owner: '',
                sex:'man',
                tel: '',
                qq: '',
                vx: ''
            },
            saleRules: {
                goodsName: [
                    { required: true, message: '请输入商品名称'},
                    { min: 1, max: 20, message: '商品名称长度限制为1-20字'}
                ],
                dynamic: [
                    { max: 100, message: '备注信息不得多于100字'}
                ],
                price: [
                    { required: true, message: '请输入商品价格'},
                    { pattern: /^[0-9]+$|^面议$/,message: '只能填写正整数 或者 面议'}
                ],
                class: [
                    { required: true, message: '请选择商品类别'}
                ],
                school: [
                    { required: true, message: '请选择您所在的高校'}
                ],
                local: [
                    { required: true, message: '请填写交易地点'},
                    { min: 1, max: 30, message: '交易地点长度限制为1-30字'}
                ],
                owner: [
                    { required: true, message: '请输入联系人姓氏'},
                    { pattern: /^[\u4e00-\u9fa5]+$/,message: '请输入您的真实中文姓氏'},
                    { min: 1, max: 2, message: '中文姓氏为1-2字'}
                ],
                tel: [
                    { required: true, message: '请输入11位有效手机号'},
                    { pattern: /^1[34578]\d{9}$/,message: '请输入正确的手机号码'}
                ],
                qq: [
                    { pattern: /^[0-9]+$/,message: '请输入正确的QQ号'},
                    { min: 5, max: 10, message: 'QQ号长度为5-10位，请核对填写'}
                ],
                vx: [
                    { pattern: /^[a-zA-Z\d_]$/,message: '请输入正确的微信号'},
                    { min: 6, max: 18, message: '微信账号长度为6-18位，请核对填写'}
                ]
            },
            buyRules: {
                goodsName: [
                    { required: true, message: '请输入商品名称'},
                    { min: 1, max: 20, message: '商品名称长度限制为1-20字'}
                ],
                dynamic: [
                    { max: 100, message: '求购要求不得多于100字'}
                ],
                price: [
                    { required: true, message: '请输入商品价格'},
                    { pattern: /^[0-9]+$|^面议$/,message: '只能填写正整数 或者 面议'}
                ],
                school: [
                    { required: true, message: '请选择您所在的高校'}
                ],
                local: [
                    { required: true, message: '请填写交易地点'},
                    { min: 1, max: 30, message: '交易地点长度限制为1-30字'}
                ],
                owner: [
                    { required: true, message: '请输入联系人姓氏'},
                    { pattern: /^[\u4e00-\u9fa5]+$/,message: '请输入您的真实中文姓氏'},
                    { min: 1, max: 2, message: '中文姓氏为1-2字'}
                ],
                tel: [
                    { required: true, message: '请输入11位有效手机号'},
                    { pattern: /^1[34578]\d{9}$/,message: '请输入正确的手机号码'}
                ],
                qq: [
                    { pattern: /^[0-9]+$/,message: '请输入正确的QQ号'},
                    { min: 5, max: 10, message: 'QQ号长度为5-10位，请核对填写'}
                ],
                vx: [
                    { pattern: /^[a-zA-Z\d_]$/,message: '请输入正确的微信号'},
                    { min: 6, max: 18, message: '微信账号长度为6-18位，请核对填写'}
                ]
            },
            coverCondition: false,
            uploadAlbumIf: false,
            uploadAlbumShow:false,
            albumList: []
        }
    },
    methods: {
        goTab(pathName){
            this.$router.push({
                path: pathName
            })
        },
        changeRelease(className){
            if(className == "sale"){
                this.resetForm('buyForm');
                this.buyCondition = false;
                this.saleCondition = true;
            }else{
                this.resetForm('saleForm');
                this.saleCondition = false;
                this.buyCondition = true;
            }
        },
        releaseSale(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('成功发布二手信息');
                    this.resetForm(formName);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        releaseBuy(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('成功发布求购信息');
                    this.resetForm(formName);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        showCover(bool){
            this.coverCondition = bool;
        },
        uploadAlbum(){
            this.changeUploadAlbumIf(true);
            this.changeUploadAlbumShow(true);
        },
        changeUploadAlbumIf(bool){
            if(bool){
                this.showCover(true);
            }else{
                this.showCover(false);
            }
            this.uploadAlbumIf = bool;
        },
        changeUploadAlbumShow(bool){
            if(bool){
                this.showCover(true);
            }else{
                this.showCover(false);
            }
            this.uploadAlbumShow = bool;
        },
        handleAvatarSuccess(res, file, fileList) {
            this.$message.error("上传失败，请稍后再试...");
            this.changeUploadAlbumShow(false);
        },
        handleAvatarError(err, file, fileList){
            this.$message.success();
            this.$message.error("上传成功");
            this.changeUploadAlbumShow(false);
            this.uploadButtonType = 'success';
            this.uploadButtonName = '已上传';
        },
        checkImg(file, fileList){
            // console.log(file.raw.type);
            const isJPG = file.raw.type === ('image/jpeg'||'image/png'||'image/bmp'||'image/tif');
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
                this.$message.error('图片格式有误，请重新选择常见的图片格式（jpg等）');
                this.albumList = fileList.slice(0,fileList.length-1);
            }
            if (!isLt2M) {
                this.$message.error('图片大小不能超过 2MB，请重新选择');
            }
            return isJPG && isLt2M;
        },
        checkImgNum(files, fileList){
            this.$message.warning('最多只能选择4张图哦~');
        },
        submitUpload() {
            this.$refs.upload.submit();
        },
    },
    created(){
        document.title="发布"
    },
}
</script>

<style lang="scss" scoped>
    .release-whole{
        // height: 100%;
        position: relative;
        background: rgba(0,255,255,0.1);
        div.cover{
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: rgba(0,0,0,0.3);
            z-index: 101;
        }
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
                    li:nth-of-type(4){
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
            height: 100%;
            position: fixed;
            top: 50px;
            background: #202020;
            z-index: 100;
            overflow: auto;
            padding: 20px;
            color: #B0B0B0;
            div.release-button{
                margin: 20px 0;
            }
            h2{
                margin-top: 50px;
                color: #67C23A;
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
            padding-left: 370px;
            display: flex;
            flex-direction: column;
            align-items: center;
            div.release-sale,div.release-buy{
                width: 60%;
                min-height: 80vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: rgba(200,200,200,0.4);
                margin: 30px 0;
                border-radius: 10px;
                overflow: auto;
                h4{
                    color: black;
                    margin: 10px 0;
                }
                .form{
                    width: 70%;
                }
                div.upload-cover{
                    width: 800px;
                    height: 480px;
                    position: fixed;
                    top: 100px;
                    background-color: white;
                    border-radius: 15px;
                    z-index: 102;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    // justify-content: flex-end;
                    padding: 10px;
                    i.icon-guanbi{
                        align-self: flex-end;
                        font-size: 30px;
                        font-weight: bold;
                        color: black;
                    }
                    i.icon-guanbi:hover{
                        cursor: pointer;
                        color: gray;
                    }
                    div.tip{
                        color: #CC0000;
                        margin: 20px 0;
                        padding-bottom: 20px;
                        font-size: 18px;
                        border-bottom: 1px dashed black;
                        p{
                            color: #67C23A;
                            font-weight: bold;
                            margin-top: 5px;
                        }
                    }
                    .upload{
                        margin: 40px 0;
                    }
                }
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
        
    }
</style>