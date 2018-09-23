<template>
  <div class="main" ref="viewBox">
    <nav :class="{'main-active':active}" >
      <ul>
        <li>
          <router-link active-class="active" exact to='/'>点餐</router-link>
        </li>
        <li>
          <router-link active-class="active" to='/evaluate'>评价</router-link>
        </li>
        <li>
          <router-link active-class="active" to='/business'>商家</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
    <PopUp/>
    <Activity/>
    <Coupon/>
    
  </div>
</template>
<script>
import PopUp from './PopUp.vue';
import Activity from './Activity.vue';
import $ from 'jquery'
import Coupon from './Coupon.vue';

export default {
  data:()=>({
    active:false,
    navHeight:0
  }),
  components:{
    PopUp,
    Activity,
    Coupon
  },
  mounted() {
    const {viewBox}=this.$refs;
    window.addEventListener('scroll', () => {
      
        console.log($(viewBox).offset().top-$(window).scrollTop() )
      if ($(viewBox).offset().top-$(window).scrollTop()<=0) {
        this.active=true;
      }else{
        this.active=false
      }
    }, false);
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  nav {
    width: 100%;
    ul {
      padding: 15px 0px;
      margin: 0;
      display: flex;
      list-style-type: none;
      justify-content: space-around;
      border-bottom: 1px solid #f1f1f1;
      li {
        display: flex;
        a {
          padding: 6px 0px 6px;
          color: #666;
          font-weight: 400;
          font-size: 3.8vw;
          border-bottom: 2px solid #fff;
        }
        .active {
          color: #333;
          border-bottom: 2px solid #2395ff;
          font-weight: 700;
        }
      }
    }
  }
  .main-active {
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 110;

  }
}
</style>
