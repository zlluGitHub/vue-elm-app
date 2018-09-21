<template>
    <div class="activity">
        <div class="inner">
            <h2>优惠活动</h2>
            <span></span>
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
    </div>
</template>
<style lang="scss" scoped>
.activity{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 100;
    display: none;
    .inner{
        position: absolute;
        width: 100%;
        padding: 30px;
        bottom: 0px;
        background: #f5f5f5;
        h2{
            color: #000;
            font-size: 36px;
            text-align: center;
            margin-top: 5px;
        }
        >span{
            position: absolute;
            top: 30px;
            right: 30px;
            display: inline-block;
            width: 40px;
            height: 40px;
            background: url('../../assets/img/close.png') center center no-repeat;
            background-size: cover;
        }
        ul{
            height: 380px;
            li{
                font-size: 26px;
                margin: 18px 0px;
                span{
                    background-color: rgb(240, 115, 115);
                    margin-right: 12px;
                    color: #f5f5f5;
                    padding: 5px;
                }
            }
        }
    }
}
</style>
