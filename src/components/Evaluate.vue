<template>
    <section>
        <div class="evaluale">
            <div class="star">
                <p>4.7</p>
                <p>
                    <span>商家评分</span>
                    <img src="../../assets/img/wuxing.svg" alt="">
                </p>
            </div>
            <div class="evaRight">
                <div>
                    <span>味道</span>
                    <p>4.2</p>
                </div>
                <div>
                    <span>包装</span>
                    <p>4.3</p>
                </div>
                <div>
                    <span>配送</span>
                    <p>4.4</p>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="eav-action">
                <p @click="onActive('all')" :class="mark==='all'?'active':''">全部<span>199</span></p>
                <p  @click="onActive('yes')" :class="mark==='yes'?'active':''">满意<span>156</span></p>
                <p class="no" @click="onActive('no')" :class="mark==='no'?'active':''">不满意<span>5</span></p>
                <p @click="onActive('hasImg')" :class="mark==='hasImg'?'active':''">有图<span>24</span></p>
                <p @click="onActive('good')"  :class="mark==='good'?'active':''"> 味道好<span>14</span></p>
            </div>
            <div class="select">
                <span></span>只看有内容的评论
            </div>
        </div>
        <div class="ela-list">
            <div class="ela-warp">
                <span class="ela-img"></span>
                <div class="user-id">
                    <span>来*****年</span>
                    <span>2018-09-15</span>
                </div>
                <div class="ela-star">
                    <img src="../../assets/img/wuxing.svg" alt="">
                    <span>超赞</span>
                </div>
                <p>味道应该还不错，给姐姐叫的没吃到</p>
                <p class="content">商家回复：亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝您生活愉快！</p>
                <div class="imgs">
                    <img src="../../assets/img/rep1.webp" alt="">
                    <img src="../../assets/img/rep2.webp" alt="">
                </div>
                <p><i></i><span>招盘童子鸡</span><span>叫了份薯条</span> </p>
            </div>
            <div class="ela-warp">
                <span class="ela-img"></span>
                <div class="user-id">
                    <span>在*****光</span>
                    <span>2018-09-3</span>
                </div>
                <div class="ela-star">
                    <img src="../../assets/img/wuxing.svg" alt="">
                    <span>超赞</span>
                </div>
                <p>昨天点的，今天又点一份，不错，店铺活动很优惠</p>
                <p class="content">商家回复：亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝您生活愉快！</p>
                <div class="imgs">
                    <img src="../../assets/img/rep1.webp" alt="">
                    <img src="../../assets/img/rep2.webp" alt="">
                </div>
                <p><i></i><span>招盘童子鸡</span></p>
            </div>
            <div class="ela-warp">
                <span class="ela-img"></span>
                <div class="user-id">
                    <span>来*****年</span>
                    <span>2018-09-1</span>
                </div>
                <div class="ela-star">
                    <img src="../../assets/img/wuxing.svg" alt="">
                    <span>超赞</span>
                </div>
                <p>骨头都没剩下</p>
                <p class="content">商家回复：亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝您生活愉快！</p>
                <div class="imgs">
                    <img src="../../assets/img/rep1.webp" alt="">
                    <img src="../../assets/img/rep2.webp" alt="">
                </div>
                <p><i></i><span>叫了份薯条</span> </p>
            </div>  
        </div>
    </section>
</template>
<script>
export default {
    data:()=>({
        mark:'all'
    }),
    methods:{
        onActive(mark){
             this.mark= mark;    
        }
    }
}
</script>

<style lang="scss" scoped>
.evaluale{
    margin-bottom: 2.133333vw;
    font-size: 0.24rem;
    padding: 5.333333vw 0 8vw 6.4vw;
    display: flex;
    .star{
        display: flex;
        width: 2.50rem;
        p:nth-child(1){
            font-size: 0.70rem;
            color: #ff6000;
            
        }
        p:nth-child(2){
            margin-left: 0.24rem;
            margin-top: 0.12rem;
            img{
                margin-top: 0.08rem;
                width: 1.20rem;
                height: 0.20rem;
            }
        }
    }
    .evaRight{
        display: flex;

        div{
            padding: 0rem 0.45rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            span{
                display: inline-block;
                margin-bottom: 0.16rem;
            }
            p{
                font-size: 0.40rem;
            }
        }
        div:nth-child(3){
            border-left: 0.01rem solid #ddd;
        }
    }
   
}
 .bottom{
        margin-top: 0.12rem;
        font-size: 0.26rem;
        padding: 0.20rem;
        .eav-action{
            
            display: flex;
            flex-wrap: wrap;
            p{
                padding: 0.10rem 0.15rem;
                margin: 0.08rem;
                border-radius: 1.2vw;
                color: #6d7885;
                background-color: #ebf5ff;
                span{
                    margin-left: 0.05rem;
                }
            }
            p.active{
                color: #fff;
                background-color: #0097ff;
            }
            p.no{
                color: #aaa;
                background-color: #f5f5f5;
            }
        }
        .select{
            padding: 0.18rem;
            margin-top: 0.12rem;
            border-top: .133333vw solid #eee;
            border-bottom: .133333vw solid #eee;
        }

    }
    .ela-list{
        .ela-warp{
            margin-top: 0.3rem;
            padding-left: 1.00rem;
            padding-right: 0.40rem;
            position: relative;
            .ela-img{
                width: 0.60rem;
                height: 0.60rem;
                top: 0rem;
                left: 0.28rem;
                position: absolute;
                background:url('../../assets/img/elm.png') 0rem 0rem no-repeat;
                background-size:cover;
                border-radius: 100%;
            }
            .user-id{
                display: flex;
                font-size: 0.28rem;
                color: #000;
                justify-content: space-between;
                span:nth-child(2){
                    color: #6d7885;
                }
            }
            .ela-star{
                 font-size: 0.24rem;
                img{
                    width: 1.20rem;
                    height: 0.20rem;
                }
                span{
                    padding: 0.1rem 0;
                    margin-left: 0.08rem;
                    color: rgb(255, 96, 0);
                   
                }
                
            }
            p{
                 color: #333;
                 font-size: 0.28rem;
            }
            P:nth-child(4){
               
                margin: 0.12rem 0rem;
            }
            .content{
               padding: 0.20rem;
               border-radius: 0.12rem;
               font-size: 0.26rem;
               margin-top: 0.28rem;
               background: #f3f3f3;
               position: relative;
                
            }
            .content::before{
              content: " ";
                position: absolute;
                bottom: 100%;
                left: 4vw;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0 2.133333vw 2.133333vw;
                border-color: transparent transparent #f3f3f3;
                
            }
            .imgs{
                margin: 0.12rem 0rem;
                img{
                    padding: 0.12rem 0.15rem 0.12rem 0rem;
              }
            }
            p:nth-child(7){
                display: flex;
                flex-wrap: wrap;
                 i{
                    width: 0.42rem;
                    height: 0.50rem;
                    background: url('../../assets/img/zan.png') center center no-repeat;
                    background-size: contain;
                    margin-right: 0.12rem;
                }
                span{
                    padding: 0.12rem;
                    margin-right:0.12rem;
                    border-radius: 0.10rem; 
                    background-color: #ebf5ff;
                    font-size: 0.20rem;
                    color: #6d7885;
                }
            }
           
        }

    }
</style>
