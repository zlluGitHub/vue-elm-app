<template>
    <div class="seller">
        <div class="address">
            <h3>配送信息</h3>
            <div>
                <p><span>蜂鸟专送</span>约31分钟送达，距离1.2km</p>
                <p>配送费￥2</p>
            </div>
        </div>
        <div class="action">
            <h3>活动与服务</h3>
            <ul>
                <li><span>减</span>品质生活节5折特惠</li>
                <li><span>减</span>品质生活节5折特惠</li>
                <li><span>减</span>品质生活节5折特惠</li>
                <li><span>减</span>品质生活节5折特惠</li>
                <li><span>减</span>品质生活节5折特惠</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.seller{
    font-size: 0.25rem;
    background-color: #f5f5f5;
    .address{
        background-color: #fff;
        padding: 0.20rem;
        h3{
            font-size: 0.32rem;
            margin: 0.05rem 0;
        }
        div p{
            color: #666;
            padding: 0.05rem 0rem;
        }
    }
    .action{
        background-color: #fff;
        margin-top: 0.20rem;
        padding: 0.20rem;
        h3{
            padding: 0.08rem 0;
            margin: 0.10rem 0;
        }
        ul li{
            padding: 0.15rem 0rem;
            span{
                display: inline-block;
                padding: 0rem 0.10rem;
                margin-right: 0.12rem;
                color: #fff;
                background-color: rgb(240, 115, 115);
            }
        }
    }

}
</style>
