<template>
    <div class="popup-box">
        <div class="popup-inner">
            <h2>叫了只炸鸡</h2>
            <ul>
                <li><p> 4.7 </p><span>评分</span></li>
                <li><p>430单</p>  <span>评分</span></li>
                <li><p>蜂鸟专送</p><span>评分</span></li>
                <li><p>1元</p><span>评分</span></li>
                <li><p>1.6Km</p> <span>评分</span></li>               
            </ul>
            <div><span>公告</span></div>
            <p>欢迎光临，用餐高峰期请提前下单，谢谢。</p>
        </div>
        <span></span>
    </div>
</template>
<style lang="scss" scoped>
.popup-box{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.7);
    z-index: 100;
    display: none;
    .popup-inner{
        width: 80%;
        background-color: #fff;
        border-radius: 12px;
        h2{
            font-size: 42px;
            text-align: center;
           color: #000;
        }
        ul{
            display: flex;
            justify-content: space-around;
           li{
               // width: 70px;
               display: flex;
               flex-direction: column;

               justify-content: center;
               align-items: center;
                font-weight: 600;
                color: #333;
                font-size: 30px;
                span{
                    padding-top: 12px;
                    font-size: 20px;
                    color: #999;
                }
                
            } 
           
        }
        >div{
            background-image: linear-gradient(90deg,#fff,#333 50%,#fff);
            background-size: 100% 1px;
            text-align: center;
            font-size: 20px;
            margin: 4.8vw auto 2.666667vw;
            width: 20.266667vw;
            background-position: 50%;
            background-repeat: no-repeat;
            span{
                padding: 10px;
                font-size: 24px;
                 color: #999;
                background-color: #fff;
            }
        }
        >p{
            font-size: 24px;
            color: #000;
            text-align: center;
            padding-bottom:50px; 
        }
    }
    >span{
        width: 60px;
        height: 60px;
        background-color: #000;
        margin-top:80px; 
        background: url('../../assets/img/qw1.webp') center center no-repeat;
    }
}
</style>
