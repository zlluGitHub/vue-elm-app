<template>
    <div>
        <transition name="mask">
            <div v-if="$store.state.status.ticketShow" class="activity" @touchmove.prevent>  
            </div>
        </transition>
        <transition name="action">
            <div v-if="$store.state.status.ticketShow" class="inner">
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
    top: 0px;
    left: 0px;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 10;
}

 .inner{
        position: fixed;
        width: 100%;
        padding: 20px;
        bottom: 0px;
        background: #f5f5f5;
        z-index: 100;
        h2{
            color: #000;
            font-size: 36px;
            text-align: center;
            margin-top: 5px;
        }
        >p{
            font-size: 26px;
            font-weight: 600;
            color: #666;
            span{
                font-size: 22px;
                font-weight: lighter;
                margin-left: 2.666667vw;
                color: #999;
            }
        }
        >span{
            position: absolute;
            top: 40px;
            right: 40px;
            display: inline-block;
            width: 30px;
            height: 30px;
            background: url('../../assets/img/close.png') center center no-repeat;
            background-size: cover;
        }
        ul{
            height: 320px;
            li{
                position: relative;
                font-size: 26px;
                margin: 18px 0px;
                background: #fff4be;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 50px 40px;
                .p1{
                   
                    font-size: 30px;
                    color: #594519;
                    span{
                        font-weight: 700;
                        font-size: 74px;
                    }
                }
                .p2{
                    display: flex;
                    flex-direction: column;
                    padding-right:100px; 
                   span:nth-child(1){
                       font-weight: 600;
                       margin-bottom: 8px;
                       font-size: 30px;
                       color: #594519;
                       img{
                           width: 40px;
                           height: 25px;
                       }
                   }
                   span:nth-child(2){
                       font-size: 22px;
                       color: #735b27;
                     
                   }
                }
                .p3{
                   display: flex;
                   color: #735b27;
                    flex-direction: column;
                    span:nth-child(1){
                        font-size: 24px;
                        color: #594519;
                    }
                    span:nth-child(2){
                        font-size: 30px;
                        color:#fff4be;
                        border-radius: 20px;
                        margin-top: 5px;
                        font-weight: 400;
                        padding: 2px 10px;
                          text-align: center;
                        background-color: #5d4a1d;
                    }
                }
                i{
                    position: absolute;
                    border-radius: .266667vw;
                    font-size: 14px;
                    font-style: normal;
                    background-color: #f76e4d;
                    color: #fff;
                    position: absolute;
                    right: -.533333vw;
                    top: -.533333vw;
                    padding: .133333vw .266667vw;
                    border-radius: 5px;
                }
            }
        }
    }


</style>
