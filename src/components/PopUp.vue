<template>
    <transition name="mask">
        <div class="popup-box" v-if="$store.state.status.popup" @touchmove.prevent>
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
            <span @click="onClose()"></span>
        </div>
    </transition>
</template>
<script>
export default {
    name:'popup',
    methods:{
        onClose(){  
            this.$store.commit('changeStatus',{
               popup:false
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.popup-box{
    position: fixed;
    top: 0rem;
    left: 0rem;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.7);
    z-index: 100;
    display: flex;
    .popup-inner{
        width: 80%;
        background-color: #fff;
        border-radius: 0.12rem;
        h2{
            font-size: 0.42rem;
            text-align: center;
           color: #000;
        }
        ul{
            display: flex;
            justify-content: space-around;
           li{
               // width: 70rem;
               display: flex;
               flex-direction: column;

               justify-content: center;
               align-items: center;
                font-weight: 600;
                color: #333;
                font-size: 0.30rem;
                span{
                    padding-top: 0.12rem;
                    font-size: 0.20rem;
                    color: #999;
                }
                
            } 
           
        }
        >div{
            background-image: linear-gradient(90deg,#fff,#333 50%,#fff);
            background-size: 100% 0.01rem;
            text-align: center;
            font-size: 0.20rem;
            margin: 4.8vw auto 2.666667vw;
            width: 20.266667vw;
            background-position: 50%;
            background-repeat: no-repeat;
            span{
                padding: 0.10rem;
                font-size: 0.24rem;
                 color: #999;
                background-color: #fff;
            }
        }
        >p{
            font-size: 0.24rem;
            color: #000;
            text-align: center;
            padding-bottom:0.50rem; 
        }
    }
    >span{
        width: 0.60rem;
        height: 0.60rem;
        background-color: #000;
        margin-top:0.80rem; 
        background: url('../../assets/img/qw1.webp') center center no-repeat;
    }
}
.mask-enter-active, .mask-leave-active {
    // transform: scale(1);
    opacity: 1;
  transition: opacity .25s;
}
.mask-enter, .mask-leave-to {
  opacity: 0;
//   transform: scale(0);
}
</style>
