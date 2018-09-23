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
    font-size: 0.25px;
    background-color: #f5f5f5;
    .address{
        background-color: #fff;
        padding: 0.20px;
        h3{
            font-size: 32px;
            margin: 5px 0;
        }
        div p{
            color: #666;
            padding: 5px 0px;
        }
    }
    .action{
        background-color: #fff;
        margin-top: 0.20px;
        padding: 0.20px;
        h3{
            padding: 8px 0;
            margin: 0.10px 0;
        }
        ul li{
            padding: 15px 0px;
            span{
                display: inline-block;
                padding: 0px 0.10px;
                margin-right: 0.12px;
                color: #fff;
                background-color: rgb(240, 115, 115);
            }
        }
    }

}
</style>
