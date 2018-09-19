<template>
    <div class="order-list">
            <aside ref="aside">
                <ul ref="asideUl" @click="onChangeScroll(activeTabIndex)">
                    <li><img src="../../assets/img/huo.webp" alt="dsf"  > <span>dffffd</span></li>
                    <li><img src="../../assets/img/er.webp" alt="df"> <span>dffffd</span></li>
                    <li><span>dffffd</span></li>
                    <li><span>dffffd</span></li>
                    <li><span>dffffd</span></li>
                    <li><span>dffffd</span></li>
                    <li><span>dffffd</span></li>
                    <li><span>dffffd</span></li>
                    <li><span>dffffd</span></li>
                    <li><span>dffffd</span></li>
                    <li><span>dffffd</span></li>
                </ul>
            </aside>
            <div class="list" ref="list">
                <ul ref="listUl">
                    <li>
                        <img src="../../assets/img/c40d4jpeg.webp" alt="">
                        <div>
                            <h2>芝士爆浆鸡排</h2>
                            <p>禁单点无主食不出餐</p>
                            <p><span>月售60份</span><span>好评率100%</span></p>
                            <div><span>￥9.86</span><span></span></div>
                            
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/img/c40d4jpeg.webp" alt="">
                        <div>
                            <h2>芝士爆浆鸡排</h2>
                            <p>禁单点无主食不出餐</p>
                            <p><span>月售60份</span><span>好评率100%</span></p>
                            <div><span>￥9.86</span><span></span></div>
                            
                        </div>
                    </li>
                    <li ref="we">
                        <img src="../../assets/img/c40d4jpeg.webp" alt="">
                        <div>
                            <h2>芝士爆浆鸡排</h2>
                            <p>禁单点无主食不出餐</p>
                            <p><span>月售60份</span><span>好评率100%</span></p>
                            <div><span>￥9.86</span><span></span></div>                            
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/img/c40d4jpeg.webp" alt="">
                        <div>
                            <h2>芝士爆浆鸡排</h2>
                            <p>禁单点无主食不出餐</p>
                            <p><span>月售60份</span><span>好评率100%</span></p>
                            <div><span>￥9.86</span><span></span></div>                            
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/img/c40d4jpeg.webp" alt="">
                        <div>
                            <h2>芝士爆浆鸡排</h2>
                            <p>禁单点无主食不出餐</p>
                            <p><span>月售60份</span><span>好评率100%</span></p>
                            <div><span>￥9.86</span><span></span></div>    
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>
<script>
import Bscroll from 'better-scroll' ;
export default { 
    name:'order-list',
    data: () => ({
        activeTabIndex: 0,
        showDetail: null
    }),
    mounted() { 
        // this.$nextTick(() => { 
        const {aside,asideUl, list,listUl,we} = this.$refs;             
        this.scrollBox(aside,asideUl);
        this.scrollBox(list,listUl);
        // })
    },
     methods:{
         onChangeScroll(activeTabIndex){
            console.log(activeTabIndex);
            
            // const { we } = this.$refs
            // // foodList.scroll.scrollToElement(foodList.$refs[el][0], 300)
            // this.scroll.scrollToElement(we, 300)
        
        },
        scrollBox(warp,warpInner){
            const liHeight = warpInner.children[0].offsetHeight        
            warpInner.style.height= warpInner.children.length*liHeight+'px';
            this.scroll = new Bscroll(warp, {
                scrollY:true,
                scrollX:false
            }) 
        }
        

    }
      
}
</script>
<style lang="scss" scoped>
   .order-list{
         height: 600px;
        display: flex;
        aside{
            overflow: hidden;
            flex-grow: 2px;
            background-color: #f5f5f5;
            ul{
                color: #666;
                li {
                    padding: 4.666667vw 3vw;
                    span{
            
                        display: inline-block;
                        font-size: 30px;
                        padding: 0px 16px;
                    }
                }
                li.active{
                    background-color: #fff;
                    color: #000;
                }
            }
        }
        .list{
            overflow: hidden;
            flex-grow:3;
            ul{
               color: #666;

                li{
                    padding: 4.666667vw 2vw;
                    display: flex;
                    img{
                        flex-grow: 1;
                        margin-right: 12px;
                    }
                    div{
                        flex-grow: 3;
                        h2{
                            font-size: 28px;
                            margin: 10px 0px;
                            font-weight: 700;
                            color: #333;
                        }
                        p{
                            font-size: 20px;
                           color: #999;
                        }
                        div{
                            display: flex;
                            justify-content: space-between;
                            span:nth-child(1){
                                color: red;
                                font-size: 34px;
                            }
                            span:nth-child(2){
                                width: 45px;
                                height: 45px;
                                background: url('../../assets/img/jia.png') center center no-repeat;
                                background-size: contain;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
