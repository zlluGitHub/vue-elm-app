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
                <p class="active">全部<span>199</span></p>
                <p>满意<span>156</span></p>
                <p class="no">不满意<span>5</span></p>
                <p>有图<span>24</span></p>
                <p>味道好<span>14</span></p>
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
                <p>骨头都没剩下</p>
                <p class="content">商家回复：亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝您生活愉快！</p>
                <div class="imgs">
                    <img src="../../assets/img/rep1.webp" alt="">
                    <img src="../../assets/img/rep2.webp" alt="">
                </div>
                <p><i></i><span>招盘童子鸡</span><span>叫了份薯条</span> </p>
            </div>
            
        </div>
    </section>
</template>
<style lang="scss" scoped>
.evaluale{
    margin-bottom: 2.133333vw;
    font-size: 24px;
    padding: 5.333333vw 0 8vw 6.4vw;
    display: flex;
    .star{
        display: flex;
        width: 250px;
        p:nth-child(1){
            font-size: 70px;
            color: #ff6000;
            
        }
        p:nth-child(2){
            margin-left: 24px;
            margin-top: 12px;
            img{
                margin-top: 8px;
                width: 120px;
                height: 20px;
            }
        }
    }
    .evaRight{
        display: flex;

        div{
            padding: 0px 45px;
            display: flex;
            flex-direction: column;
            align-items: center;
            span{
                display: inline-block;
                margin-bottom: 16px;
            }
            p{
                font-size: 40px;
            }
        }
        div:nth-child(3){
            border-left: 1px solid #ddd;
        }
    }
   
}
 .bottom{
        margin-top: 12px;
        font-size: 26px;
        padding: 20px;
        .eav-action{
            
            display: flex;
            flex-wrap: wrap;
            p{
                padding: 10px 15px;
                margin: 8px;
                border-radius: 1.2vw;
                color: #6d7885;
                background-color: #ebf5ff;
                span{
                    margin-left: 5px;
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
            padding: 18px;
            margin-top: 12px;
            border-top: .133333vw solid #eee;
            border-bottom: .133333vw solid #eee;
        }

    }
    .ela-list{
        .ela-warp{
            padding-left: 100px;
            padding-right: 40px;
            position: relative;
            .ela-img{
                width: 60px;
                height: 60px;
                top: 0px;
                left: 28px;
                position: absolute;
                background:url('../../assets/img/elm.png') 0px 0px no-repeat;
                background-size:cover;
                border-radius: 100%;
            }
            .user-id{
                display: flex;
                font-size: 28px;
                color: #000;
                justify-content: space-between;
                span:nth-child(2){
                    font-size: 22px;
                    color: #6d7885;
                }
            }
            .ela-star{
                img{
                    width: 120px;
                    height: 20px;
                }
                span{
                    margin-left: 8px;
                    color: rgb(255, 96, 0);
                    font-size: 24px;
                }
            }
            p{
                 color: #333;
                 font-size: 28px;
            }
            P:nth-child(4){
               
                margin: 12px 0px;
            }
            .content{
               padding: 20px;
               border-radius: 12px;
               font-size: 26px;
               margin-top: 28px;
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
                margin: 12px 0px;
                img{
                    padding: 12px 15px 12px 0px;
              }
            }
            p:nth-child(7){
                display: flex;
                flex-wrap: wrap;
                 i{
                    width: 42px;
                    height: 50px;
                    background: url('../../assets/img/zan.png') center center no-repeat;
                    background-size: contain;
                    margin-right: 12px;
                }
                span{
                    padding: 12px;
                    margin-right:12px;
                    border-radius: 10px; 
                    background-color: #ebf5ff;
                    font-size: 20px;
                    color: #6d7885;
                }
            }
           
        }

    }
</style>
