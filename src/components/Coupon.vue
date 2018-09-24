<template>
    <div>
        <transition name="mask">
            <div v-if="$store.state.status.ticketShow" class="activity" @touchmove.prevent>  
            </div>
        </transition>
        <transition name="action">
            <div v-if="$store.state.status.ticketShow" class="inner" @touchmove.prevent>
                    <h2>优惠活动</h2>
                    <span @click="onClose()"></span>
                    <p>超级用户特权<span>限超级用户兑换</span></p>
                    <div class="warp">
                        <ul>
                            <li>
                                <p class="p1">￥<span>7</span></p>
                                <p class="p2">
                                    <span><img src="../../assets/img/huang.png" alt=""> 满任意金额可用</span>
                                    <span>限本店使用, 2018-09-24到期</span>
                                </p>
                                <p class="p3">
                                    <span>限会员可领</span>
                                    <span>兑换</span>
                                </p>
                                <i>新会员专享</i>
                            </li>
                        </ul>
                    </div>
                </div>
        </transition>

    </div>
    
</template>
<script>
export default {
    nane:'activity',
    methods:{
        onClose(){  
            this.$store.commit('changeStatus',{
                ticketShow:false
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.activity{
    position: fixed;
    overflow: hidden;
    top: 0rem;
    left: 0rem;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 10;
}

 .inner{
        position: fixed;
        width: 100%;
        padding: 0.20rem;
        bottom: 0rem;
        background: #f5f5f5;
        z-index: 100;
        h2{
            color: #000;
            font-size: 0.36rem;
            text-align: center;
            margin-top: 0.05rem;
        }
        >p{
            font-size: 0.26rem;
            font-weight: 600;
            color: #666;
            span{
                font-size: 0.22rem;
                font-weight: lighter;
                margin-left: 2.666667vw;
                color: #999;
            }
        }
        >span{
            position: absolute;
            top: 0.40rem;
            right: 0.40rem;
            display: inline-block;
            width: 0.30rem;
            height: 0.30rem;
            background: url('../../assets/img/close.png') center center no-repeat;
            background-size: cover;
        }
        ul{
            height: 3.20rem;
            li{
                position: relative;
                font-size: 0.26rem;
                margin: 0.18rem 0rem;
                background: #fff4be;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.50rem 0.40rem;
                .p1{
                   
                    font-size: 0.30rem;
                    color: #594519;
                    span{
                        font-weight: 700;
                        font-size: 0.74rem;
                    }
                }
                .p2{
                    display: flex;
                    flex-direction: column;
                    padding-right:1.00rem; 
                   span:nth-child(1){
                       font-weight: 600;
                       margin-bottom: 0.08rem;
                       font-size: 0.30rem;
                       color: #594519;
                       img{
                           width: 0.40rem;
                           height: 0.25rem;
                       }
                   }
                   span:nth-child(2){
                       font-size: 0.22rem;
                       color: #735b27;
                     
                   }
                }
                .p3{
                   display: flex;
                   color: #735b27;
                    flex-direction: column;
                    span:nth-child(1){
                        font-size: 0.24rem;
                        color: #594519;
                    }
                    span:nth-child(2){
                        font-size: 0.30rem;
                        color:#fff4be;
                        border-radius: 0.20rem;
                        margin-top: 0.05rem;
                        font-weight: 400;
                        padding: 0.02rem 0.10rem;
                          text-align: center;
                        background-color: #5d4a1d;
                    }
                }
                i{
                    position: absolute;
                    border-radius: .266667vw;
                    font-size: 0.14rem;
                    font-style: normal;
                    background-color: #f76e4d;
                    color: #fff;
                    position: absolute;
                    right: -.533333vw;
                    top: -.533333vw;
                    padding: .133333vw .266667vw;
                    border-radius: 0.05rem;
                }
            }
        }
    }


</style>
