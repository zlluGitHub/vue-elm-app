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
    <Details/>
  </div>
</template>
<script>
import PopUp from './PopUp.vue';
import Activity from './Activity.vue';
import $ from 'jquery';
import Coupon from './Coupon.vue';
import Details from "./Details";
export default {
  data:()=>({
    active:false,
    navHeight:0
  }),
  components:{
    PopUp,
    Activity,
    Coupon,
    Details
  },
  mounted() {
    const {viewBox}=this.$refs;
    window.addEventListener('scroll', () => {
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
  margin-bottom:1.50rem;
  nav {
    width: 100%;
    ul {
      padding: 0.15rem 0rem;
      margin: 0;
      display: flex;
      list-style-type: none;
      justify-content: space-around;
      border-bottom: 0.01rem solid #f1f1f1;
      li {
        display: flex;
        a {
          padding: 0.06rem 0rem 0.06rem;
          color: #666;
          font-weight: 400;
          font-size: 3.8vw;
          border-bottom: 0.02rem solid #fff;
        }
        .active {
          color: #333;
          border-bottom: 0.02rem solid #2395ff;
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
