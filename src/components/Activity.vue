<template>
<div>
<transition name="mask">
    <div class="activity" v-if="$store.state.status.favourable" @touchmove.prevent>
    </div>
</transition>
<transition name="action">
    <div class="inner"  v-if="$store.state.status.favourable" @touchmove.prevent>
            <h2>优惠活动</h2>
            <span @click.stop="onClose()"></span>
            <div class="warp">
                <ul>
                    <li><span>折扣</span>品质生活节5折优惠</li>
                    <li><span>折扣</span>单价折扣</li>
                    <li><span>折扣</span>单价折扣</li>
                    <li><span>折扣</span>单价折扣</li>
                    <li><span>折扣</span>单价折扣</li>
                    <li><span>折扣</span>单价折扣</li>
                    <li><span>折扣</span>单价折扣</li>
                    <li><span>折扣</span>单价折扣</li>
                </ul>
            </div>
        </div>
</transition>
    
   </div>     
    
</template>
<script>
export default {
    name:'',
    methods:{
    
        onClose(){  
            this.$store.commit('changeStatus',{
               favourable:false
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.activity{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 100;
    display: flex;
}
.inner{
        position: fixed;
        width: 100%;
        padding: 0.3px;
        bottom: 0px;
        background: #f5f5f5;
        z-index: 120;
        h2{
            color: #000;
            font-size: 0.36px;
            text-align: center;
            margin-top: 5px;
        }
        >span{
            position: absolute;
            top: 0.30px;
            right: 0.30px;
            display: inline-block;
            width: 0.40px;
            height: 0.40px;
            background: url('../../assets/img/close.png') center center no-repeat;
            background-size: cover;
        }
        ul{
            height: 3.80px;
            li{
                font-size: 0.26px;
                margin: 0.18px 0px;
                span{
                    background-color: rgb(240, 115, 115);
                    margin-right: 0.12px;
                    color: #f5f5f5;
                    padding: 5px;
                }
            }
        }
    }
</style>
