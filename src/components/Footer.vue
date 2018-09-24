<template>
    <div class="footer">
        <div class="footer-top">
            <span>已减2.9元</span>
        </div>
        <div class="inner">
            <div class="inner-left">
                <p><span>￥{{this.$store.state.status.allPrice}}</span><span>￥127.5</span></p>
                <p>另需配送费1元</p>
                
                    <i :class="{'active-scale':this.$store.state.status.cartScale}"><img src="../../assets/img/gouwu.svg" alt=""><i>{{this.$store.state.status.count}}</i></i>
                  
            </div>
            <span class="inner-right" @click.stop="balance">去结算</span>   
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        balance(){
            alert('呀！出问题啦，暂时无法结算！请稍后再试...')
        }
    }
}
</script>

<style lang="scss" scoped>
.footer{
    position: fixed;
    bottom: 0rem;
    width: 100%;
    background-color: #fff;
    z-index: 250;
    .footer-top{
        background-color: #fffad6;
        text-align: center;
        span{
            display: block;
            padding: 0.08rem;
            font-size: 0.20rem;
        }
    }
    .inner{
        display: flex;
        .inner-left{
            padding-left: 1.50rem;
            background-color: rgba(61,61,63,.9);
            flex-grow: 5;
            position: relative;
            
            
            p{
                margin: 0rem;
                font-size: 0.22rem;
                color: #999;
                span:nth-child(1){
                    margin-right: 0.08rem;
                    font-size: 0.36rem;
                    color: #fff;
                }
            }
            p:nth-child(1){
               margin-top: 0.08rem;
            }
        }
        .inner-left>i{
                position: absolute;
                display: block;
                left: 0.30rem;
                top: -0.30rem;
                width: 1.00rem;
                height: 1.00rem;
                border-radius: 1.00rem;
                background : #3190e8;
                border: 1.333333vw solid #444;
                box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0,0,0,.1);
              
                img{
                    display: block;
                    padding: 0.15rem;
                    width: 100%;
                    height: 100%;
                }
                i{
                    position: absolute;
                    display: block;
                    right: 0rem;
                    top: -0.10rem;
                    font-style: normal;
                    padding: 0.03rem 0.07rem;
                    font-size: 0.20rem;
                    color: #fff;
                    border-radius: 0.12rem;
                    background-color: red;
                }
            }
            .inner-left>i.active-scale{
               animation:jump 0.15s infinite;
                animation-direction:alternate;
            }
        .inner-right{
            flex-grow: 1;
            text-align: center;
            display: inline-block;
            font-size: 0.32rem;
            padding: 0.28rem;
            color: #fff;
            font-weight: 700;
            background-color: #38ca73;
            
        }
     
    }
}
@keyframes jump {
    from {transform:scale(1);}
    to {transform:scale(1.1);}
    // 0%{transform:scale(1);}
    // 50%{transform:scale(1.1);}
    // 100%{transform:scale(1.2);}
    // 50%{transform:scale(1.1);}
    // 0%{transform:scale(1);}
  }
</style>
