<template>
    <div class="order">
        <div class="badder">
            <img src="../../assets/img/b7jpeg.webp" alt="">
        </div>
        <div class="recommend">
            商家推荐
        </div>
        <div class="recommend-wrap" ref="wrapper">
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
        </div>
        <OrderList/>
    </div>
</template>
<script>
import OrderList from './OrderList.vue';
import Bscroll from 'better-scroll' ;
export default { 
    name:'order',
    components: {
        OrderList,
    },
    mounted() { 
        this.$nextTick(() => { 
            const element = this.$refs.warpInner;
            const liWidth = element.children[1].offsetWidth        
            element.style.width= element.children.length*liWidth+'px';
            new Bscroll(this.$refs.wrapper, {
                scrollX:true,
                scrollY:false
            }) 
        })     
    }
   
}
</script>

<style lang="scss" scoped>
.order{
    margin: 0px;
    margin-top: 12px;
    .badder{
        padding: 0px 20px;
    }
    .badder img{
        width: 100%;
        
    }
    .recommend{
        color: #333;
        font-size: 30px;
        font-weight: 700;
        padding: 20px;
    }
    .recommend-wrap{
        margin-bottom: 24px;
        width: 100%;
        overflow: hidden;
    }
    .recommend-wrap>div{
        display: flex; 
        flex-wrap:wrap;
        .inner{
            padding: 0px 8px;
            width: 240px;
        }
        .inner img{
            width: 100%;
        }
        .inner>div{
            p:nth-child(1){
                color: #333;
                font-size: 28px;
                padding: 8px 0;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-weight: 400;
            }
            p:nth-child(2){
                color: #999;
                font-size: 25px;
                font-weight: 400;
            }
            div{
                display: flex;
                justify-content: space-between;
                span:nth-child(1){
                   color: rgb(255, 83, 57);
                   font-weight: 400;
                   font-size: 32px;
                }
                span:nth-child(2){
                    width: 45px;
                    height: 45px;
                    background: url('../../assets/img/jia.png') 0px 0px no-repeat;
                    background-size: contain;
                }
            }
        }
    }
 
}
</style>
