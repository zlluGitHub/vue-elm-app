<template>
    <div class="order">
        <div class="badder">
            <img src="../../assets/img/b7jpeg.webp" alt="">
        </div>
        <div class="recommend">
            榜上有名，速来抢购！
        </div>
        <!-- <div class="recommend-wrap" ref="wrapper">
            <div ref="warpInner">
            <div class="inner">
                <img src="../../assets/img/img1.webp" alt="">
                <div>
                    <p>甘露烤肉拌饭</p>
                    <p>甘露烤肉拌饭</p>
                    <div>
                        <span>￥8.44</span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="inner">
                <img src="../../assets/img/img1.webp" alt="">
                <div>
                    <p>甘露烤肉拌饭</p>
                    <p>甘露烤肉拌饭</p>
                    <div>
                        <span>￥8.44</span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="inner">
                <img src="../../assets/img/img1.webp" alt="">
                <div>
                    <p>甘露烤肉拌饭</p>
                    <p>甘露烤肉拌饭</p>
                    <div>
                        <span>￥8.44</span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="inner">
                <img src="../../assets/img/img1.webp" alt="">
                <div>
                    <p>甘露烤肉拌饭</p>
                    <p>甘露烤肉拌饭</p>
                    <div>
                        <span>￥8.44</span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="inner">
                <img src="../../assets/img/img1.webp" alt="">
                <div>
                    <p>甘露烤肉拌饭</p>
                    <p>甘露烤肉拌饭</p>
                    <div>
                        <span>￥8.44</span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="inner">
                <img src="../../assets/img/img1.webp" alt="">
                <div>
                    <p>甘露烤肉拌饭</p>
                    <p>甘露烤肉拌饭</p>
                    <div>
                        <span>￥8.44</span>
                        <span></span>
                    </div>
                </div>
            </div>
          </div>
        </div> -->
        <OrderList/>
  
    </div>
</template>
<script>
import OrderList from './OrderList.vue';

export default { 
    name:'orders',
    components: {
        OrderList
    }
    // ,
    // mounted() { 
    //     this.$nextTick(() => { 
    //         const element = this.$refs.warpInner;
    //         const liWidth = element.children[1].offsetWidth        
    //         element.style.width= element.children.length*liWidth+'rem';
    //         new Bscroll(this.$refs.wrapper, {
    //             scrollX:true,
    //             click:true
    //         }) 
    //     })     
    // }
   
}
</script>

<style lang="scss" scoped>
.order{
    margin: 0rem;
    margin-top: 0.12rem;
    
    .badder{
        padding: 0rem 0.30rem;
    }
    .badder img{
        display: block;
        border-radius: 0.12rem;
        width: 100%;
        
    }
    .recommend{
        color: #333;
        font-size: 0.30rem;
        font-weight: 700;
        padding: 0.30rem;
    }
    .recommend-wrap{
        margin-bottom: 0.24rem;
        width: 100%;
        overflow: hidden;
    }
    .recommend-wrap>div{
        display: flex; 
        flex-wrap:wrap;
        .inner{
            padding: 0rem 0.08rem;
            width: 2.40rem;
        }
        .inner img{
            width: 100%;
        }
        .inner>div{
            p:nth-child(1){
                color: #333;
                font-size: 0.28rem;
                padding: 0.08rem 0;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-weight: 400;
            }
            p:nth-child(2){
                color: #999;
                font-size: 0.25rem;
                font-weight: 400;
            }
            div{
                display: flex;
                justify-content: space-between;
                span:nth-child(1){
                   color: rgb(255, 83, 57);
                   font-weight: 400;
                   font-size: 0.32rem;
                }
                span:nth-child(2){
                    width: 0.45rem;
                    height: 0.45rem;
                    background: url('../../assets/img/jia.png') 0rem 0rem no-repeat;
                    background-size: contain;
                }
            }
        }
    }
 
}
</style>
