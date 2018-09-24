<template>
    <transition name="an-detail">
        <div ref="detaile" v-if="$store.state.status.details" @touchmove.prevent class="details">
            <div class="details-inner">
                <div class="top-img">
                    <img src="../../assets/img/jk.webp" alt="sd">
                    <span @click="onClose"></span>
                </div>
                <div class="content">
                    <h2>浓墨重彩超值2人餐B</h2>
                    <p>月售1份</p>
                    <div><span>￥99</span><span>￥147</span><span>每单限1份优惠</span></div>
                    <p>套餐内含：热辣嫩牛芝心黑比萨*1份，浓情烤翅（4只）*1份，冰柠檬红茶*2份。</p>
                </div>
                <div class="count">
                    
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import Bscroll from 'better-scroll';
export default {
    name:"an-detail",
    // mounted(){
    //      this.$nextTick(() => { 
    //         const {detaile} = this.$refs;
    //         this.scroll= new Bscroll(detaile, {
    //             scrollY:true,
    //             scrollX:false,
    //             click:true,
    //         }) 
    //      })
    // },
    methods:{
        onClose(){  
            this.$store.commit('changeStatus',{
               details:false
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .details{
        position: fixed;
        top: 0;
        bottom:0;
        position:fixed;
        z-index: 150;
        background-color: #fff;
         overflow: hidden;
        .details-inner{
        

        .top-img{
            position: relative;
            img{
                width: 100%;
            }
            span{
                position: absolute;
                top: 0.20rem;
                right: 0.20rem;
                width: 0.75rem;
                height: 0.75rem;
                background:url('../../assets/img/qw1.webp') center center no-repeat;
                background-size: 90%;

            }
        }
        .content{
            padding: 0 0.30rem;
            color: #666;
            h2{
                font-size: 0.38rem;
                color: #000;
                font-weight: 700;
                margin-bottom: 0.20rem;
            }
            p:nth-child(2){
                margin-left: 0.12rem;
                font-size: 0.20rem;
            }
            div{
                font-size: 0.22rem;
                span:nth-child(1){
                    color: red;
                    font-size: 0.36rem;
                }
                span:nth-child(2){
                    font-size: 0.26rem;
                    margin: 0rem 0.12rem;
                    text-decoration:line-through;
                }
                span:nth-child(3){
                    color: red;
                   
                }
            }
            p{
                font-size: 0.20rem;
                margin-top: 0.12rem;
                margin-left: 0.08rem;
            }
        }
    }
    }
    
.an-detail-enter-active, .an-detail-leave-active {
  transform: translate(0rem,0rem); 
  transition: transform .5s;
}
.an-detail-enter, .an-detail-leave-to {
 transform: translate(0rem,12.00rem); 
}

</style>
