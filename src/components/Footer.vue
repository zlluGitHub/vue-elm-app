<template>
    <div class="footer">
        <div class="footer-top">
            <span>已减2.9元</span>
        </div>
        <div class="inner">
            <div class="inner-left">
                <p><span>￥124.6</span><span>￥127.5</span></p>
                <p>另需配送费1元</p>
                <i><img src="../../assets/img/gouwu.svg" alt=""><i>20</i></i>              
            </div>
            <span class="inner-right">去结算</span>   
        </div>
    </div>
</template>
<style lang="scss" scoped>
.footer{
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: #fff;
    z-index: 1;
    .footer-top{
        background-color: #fffad6;
        text-align: center;
        span{
            display: block;
            padding: 8px;
            font-size: 20px;
        }
    }
    .inner{
        display: flex;
        .inner-left{
            padding-left: 150px;
            background-color: rgba(61,61,63,.9);
            flex-grow: 5;
            position: relative;
            
            
            p{
                margin: 0px;
                font-size: 22px;
                color: #999;
                span:nth-child(1){
                    margin-right: 8px;
                    font-size: 36px;
                    color: #fff;
                }
            }
            p:nth-child(1){
               margin-top: 8px;
            }
        }
        .inner-left>i{
                position: absolute;
                display: block;
                left: 30px;
                top: -30px;
                width: 100px;
                height: 100px;
                border-radius: 100px;
                background : #3190e8;
                border: 1.333333vw solid #444;
                box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0,0,0,.1);
                img{
                    padding: 15px;
                    width: 100%;
                    height: 100%;
                }
                i{
                    position: absolute;
                    display: block;
                    right: 0px;
                    top: -10px;
                    font-style: normal;
                    padding: 3px 7px;
                    font-size: 20px;
                    color: #fff;
                    border-radius: 12px;
                    background-color: red;
                }
            }
        .inner-right{
            flex-grow: 1;
            text-align: center;
                display: inline-block;
                font-size: 32px;
                padding: 28px;
                color: #fff;
                font-weight: 700;
                background-color: #38ca73;
            
        }
    }
}
</style>
