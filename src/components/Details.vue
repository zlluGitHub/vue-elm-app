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
                top: 20px;
                right: 20px;
                width: 75px;
                height: 75px;
                background:url('../../assets/img/qw1.webp') center center no-repeat;
                background-size: 90%;

            }
        }
        .content{
            padding: 0 30px;
            color: #666;
            h2{
                font-size: 38px;
                color: #000;
                font-weight: 700;
                margin-bottom: 20px;
            }
            p:nth-child(2){
                margin-left: 12px;
                font-size: 20px;
            }
            div{
                font-size: 22px;
                span:nth-child(1){
                    color: red;
                    font-size: 36px;
                }
                span:nth-child(2){
                    font-size: 26px;
                    margin: 0px 12px;
                    text-decoration:line-through;
                }
                span:nth-child(3){
                    color: red;
                   
                }
            }
            p{
                font-size: 20px;
                margin-left: 8px;
            }
        }
    }
    }
    
.an-detail-enter-active, .an-detail-leave-active {
  transform: translate(0px,0px); 
  transition: transform .5s;
}
.an-detail-enter, .an-detail-leave-to {
 transform: translate(0px,1200px); 
}

</style>
