<template>
    <div class="order-list" ref="orderList">
        <aside ref="aside" >
            <ul v-show="goodsNameList.length" class="asideUl" ref="asideUl">
                <li v-for="(name,ind) in goodsNameList" :key="ind" @click.stop="onAside(ind)" :class="$store.state.status.active===ind?'active':''">
                    <img src="../../assets/img/huo.webp" alt="dsf"> 
                    <span>{{name}}</span>
                </li>
                <!-- <li><img src="../../assets/img/er.webp" alt="df"> <span>优惠</span></li> -->
            </ul>
        </aside>
        <div class="list" ref="list" :style="{'height':heightVal+'rem'}">
            <div ref="warp">
                <div v-for="item in goodsList" :key="item.id" class="select-content">
                    <div>
                        <h2>{{item.name}}</h2>
                        <span>美味又实惠, 大家快来抢!</span>
                    </div>
                    <ul>
                        <li v-for="goods in item.foods" :key="goods.id" @click.stop="onClose">
                            <img :src="goods.icon" :alt="goods.name">
                            <div>
                                <h2>{{goods.name}}</h2>
                               
                                <p class="p-span"><span>月售{{goods.sellCount}}份</span><span>{{goods.rating}}%</span></p>
                                <div>
                                    <span>￥{{goods.price}}</span>
                                    <Counter :id="goods.id" :price="goods.price"/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
        
    </div>
</template>
<script>
import Bscroll from 'better-scroll';
import Counter from "./Counter";
import $ from 'jquery'
export default { 
    name:'order-list',
    components: {
        Counter,
        
    },
    data:()=>({
        arrt:[],
        counter: 0,
        heightVal:8,
    }),
    computed: {
        goodsNameList() {
            return this.$store.getters.goodsNameList;
        },
        goodsList() {
            return this.$store.state.goods.goods;
        }
    },
    mounted() { 
        this.$nextTick(() => { 
            const {aside,asideUl, list,warp,we} = this.$refs;             
            this.scrollBox(aside,asideUl);
            this.scrollBox(list,warp);
            for (let index = 0; index < warp.children.length; index++) {
                const element = warp.children[index].offsetHeight
                this.arrt.push(element);                
            }
            this.scroll.on('scrollEnd', pos => {  
                this.$store.commit('changeStatus',{
                    active:this.getPsition(this.arrt,-pos.y)
                })
            })
            this.onChangeScroll();
        }) 
        
        
    },
     methods:{
        onChangeScroll(){
            const {orderList}=this.$refs;
            window.addEventListener('scroll', () => {
               this.heightVal=$(window).height()/100;
            }, false);   
        } ,
        scrollBox(warp,warpInner){
            this.scroll= new Bscroll(warp, {
                scrollY:true,
                scrollX:false,
                click:true,
            }) 
        },
        onAside(id){
            const {warp} = this.$refs; 
            this.scroll.scrollToElement(warp.children[id], 250);
            this.$store.commit('changeStatus',{
                    active:id
            })
            
        },
        getPsition(heightArrt,heightVal){
            for (let index = 1; index < heightArrt.length; index++) {
                if (heightVal>heightArrt[0]-8) {
                    if(heightVal<heightArrt[index-1]+heightArrt[index]-18) {
                        return index;
                    }else{
                        return index+1;
                        break;
                    }
                }else{
                    return 0;
                    break;
                }
               
            }
        },
        onClose(){  
            this.$store.commit('changeStatus',{
               details:true
            })
        }
    }    
}
</script>
<style lang="scss" scoped>
   .order-list{
        display: flex;
        overflow: hidden;
        aside{
          
            background-color: #f5f5f5;
            ul{ 
                color: #666;
                li {
                    padding: 4.3vw 2vw;
                    font-size: 0.25rem;
                    img{
                        width: 0.25rem;
                    }
                    span{   
                        padding: 0rem 0.16rem;
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
            height: 100%;
            .select-content{
                margin-left: 0.12rem;
                 
                div{
                   font-size: 0.18rem;
                    h2{
                        display: inline-block;
                        font-size: 0.26rem;
                        padding: 0.12rem 0rem;
                        margin: 0rem;   
                    }
                    span{
                        
                        margin-left: 0.08rem;
                        color: #999;
                    }
                }
                
                
            }
            ul{
               color: #666;
                 height: 100%;
                li{
                    padding: 2vw 2vw;
                    display: flex;
                    img{
                        width: 1.70rem;
                        height: 1.70rem;
                        margin-right: 0.12rem;
                    }
                    div{
                        width: 3.00rem;
                        h2{
                            font-size: 0.28rem;
                            font-weight: 700;
                            color: #333;
                            padding-top: 0rem;
                        }
                        p.p-span{
                           margin-bottom: 0.30rem;
                           color: #999;
                           span{
                               font-size: 0.20rem;
                                margin-left: 0.11rem;
                           }
                        }
                        div{
                            display: flex;
                            justify-content: space-between;
                            
                            span:nth-child(1){
                                color: red;
                                font-size: 0.34rem;
                            }
                            
                        }
                    }
                }
            }
        }
    }
    .order-list .list .select-content h2[data-v-de0231e8]{
        padding-top: 0rem;
        margin-left: 0.12rem;
    }
</style>
