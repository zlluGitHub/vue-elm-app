<template>
  <div class="heade">
    <div class="header-top">
        <img src="../../assets/img/sngtu.webp"/>
        <span></span>
    </div>
    <div class="header-title">
        <div class="title-h1">
            <h1>汉堡世家</h1>
            <i></i>
        </div>
        <p class="message">
            <span>评价4.3</span>
            <span>月售160单</span>
            <span>蜂鸟专送</span>
        </p>    
    </div>
    <div class="favourable">
        <span>￥7</span>
        <span>无门鐦</span>
        <span>领取</span>
    </div>
    <div class="fill-up">
        <div class="fill-up-left">
            <span>减满</span> 
            <p>满25减13，满50减23，满80减35</p>
        </div>
        <div class="fill-up-right">
            <span>11个优惠<i></i></span> 
        </div>
    </div>
    <p class="notice">公告：张姐张秀梅获得了“中华餐饮名店”、“3.15诚信企业”、“文明餐饮单位”、“全国绿色消费餐饮名店”、“投资者最喜爱的品牌”、“中华风味名吃”等荣誉称号，张姐张秀梅速食品牌迅速成为了大家身边所亲赖的米饭专家。</p> 
  </div>
</template>
<script>
export default {
  name: 'heade',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
 .header-top {
     background-image: url('../../assets/img/head-bg.webp');
     background-size: cover;
     width: 100%;
     height: 20vw;
    //  overflow: hidden;
     position: relative;
     img{
        position: absolute;
        width: 20vw;
        top: 5vw;
        left: 40vw;
     }

 } 
 .header-title{
    
     padding-top:6vw;
     .title-h1{
         display: flex;
         justify-content: center;
         h1{
             font-size: 5vw;
         }
     }
     .message{
         display: flex;
         justify-content: center;
         span{
             font-size: 3vw;
             margin: 0px 5px;
         }
     }
 }
 .favourable{
     display: flex;
     font-size: 24px;
     font-weight: bold;
     justify-content: center;
     margin-top: 5px;
    span{
        
         padding: 1vw 3vw;
         color: #594519;
        background: #ffe578;
    }
 }
 .fill-up{
     display: flex;
     padding: 8px 0px;
     justify-content: center;
     font-size: 20px;
     margin-top: 15px;
     .fill-up-left{
         display: flex;
     }
     .fill-up-right{
         margin-left: 10vw;
         span i{

         }
     }
 }
 .notice{
    color: #999;
    overflow: hidden;
    font-size: 20px;
    width: 80vw;
    margin: auto;
    white-space: nowrap;
    text-overflow: ellipsis;
 }
</style>
