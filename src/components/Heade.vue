<template>
  <div class="heade">
    <div class="header-top">
        <img src="../../assets/img/sngtu.webp"/>
        <span></span>
    </div>
    <div class="header-title">
        <div class="title-h1" @click.stop="popUp()">
            <h1>汉堡世家</h1>
            <i></i>
        </div>
        <p class="message">
            <span>评价4.3</span>
            <span>月售160单</span>
            <span>蜂鸟专送</span>
        </p>    
    </div>
    <div @click.stop="ticketShow()" class="favourable">
        <span>￥7</span>
        <span>无门槛</span>
        <span>领取</span>
    </div>
    <div class="fill-up" @click="favourable()">
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
  methods:{
        ticketShow(){  
            this.$store.commit('changeStatus',{
                ticketShow:true
            })
        },
        favourable(){  
            this.$store.commit('changeStatus',{
                favourable:true
            })
        },
        popUp(){  
            this.$store.commit('changeStatus',{
                popup:true
            })
        }
    }
}
</script>

<style lang="scss" scoped>
 .header-top {
     background-image: url('../../assets/img/head-bg.webp');
     background-size: cover;
     width: 100%;
     height: 24vw;
    //  overflow: hidden;
     position: relative;
     img{
        position: absolute;
        width: 20vw;
        top: 8vw;
        left: 40vw;
     }

 } 
 .header-title{
    
     padding-top:6vw;
     .title-h1{
         position: relative;
         display: flex;
         justify-content: center;
         h1{
             font-size: 5vw;
         }
         i{
             width: 0.20rem;
            content: "";
            position: absolute;
            margin-top: 0.05rem;
            margin-left: 4.55rem;
            border-style: solid;
            border-width: 1.466667vw 0 1.466667vw 1.733333vw;
            border-color: transparent transparent transparent rgba(0,0,0,.67);
            
            left: 1.6vw;
            top: 2.133333vw;
         }
     }
     .message{
         display: flex;
         margin: 0.12rem 0rem;
         justify-content: center;
         span{
             font-size: 3vw;
             margin: 0rem 0.05rem;
         }
     }
 }
 .favourable{
     display: flex;
     font-size: 0.24rem;
     justify-content: center;
     margin-top: 0.05rem;
    span:nth-child(1){
        font-weight: bold;
      
    }
    span{
         padding: 1vw 3vw;
         color: #594519;
        background: #ffe578;
         position: relative;
    }
    span:nth-child(2)::after{
        content: "";
        position: absolute;
        bottom: -0.06rem;
        right: -0.05rem;
        border-top: 1.5vw solid #fff;
        border-left: 1.5vw solid transparent;
        transform: rotate(-45deg);
        z-index:2;
    }
    span:nth-child(3)::before{
        content: "";
        position: absolute;
        top: -0.06rem;
        left: -0.05rem;
        border-top: 1.5vw solid #fff;
        border-left: 1.5vw solid transparent;
        transform: rotate(135deg);
    }
 }
 .fill-up{
     display: flex;
     padding: 0.08rem 0rem;
     justify-content: center;
     font-size: 0.20rem;
     margin-top: 0.15rem;
     .fill-up-left{
         display: flex;
     }
     .fill-up-right{
         margin-left: 10vw;
     }
 }
 .notice{
    color: #999;
    overflow: hidden;
    font-size: 0.20rem;
    width: 80vw;
    margin: auto;
    white-space: nowrap;
    text-overflow: ellipsis;
 }
</style>
