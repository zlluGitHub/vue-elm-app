<template>
    <div class="order-list">
        <aside ref="aside" >
            <ul v-show="goodsNameList.length" class="asideUl" ref="asideUl">
                <li v-for="(name,ind) in goodsNameList" :key="ind" @click="onAside(ind)" :class="$store.state.status.active===ind?'active':''">
                    <img src="../../assets/img/huo.webp" alt="dsf"> 
                    <span>{{name}}</span>
                </li>
                <!-- <li><img src="../../assets/img/er.webp" alt="df"> <span>优惠</span></li> -->
            </ul>
        </aside>
        <div class="list" ref="list">
            <div ref="warp">
                <div v-for="item in goodsList" :key="item.id" class="select-content">
                    <h2>{{item.name}}<span>美味又实惠, 大家快来抢!</span></h2>
                    <ul >
                        <li v-for="goods in item.foods" :key="goods.id">
                            <img :src="goods.icon" :alt="goods.name">
                            <div>
                                <h2>{{goods.name}}</h2>
                               
                                <p class="p-span"><span>月售{{goods.sellCount}}份</span><span>{{goods.rating}}%</span></p>
                                <div><span>￥{{goods.price}}</span><span></span></div>
                                
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll' ;
import $ from 'jquery';
export default { 
    name:'order-list',
    data:()=>({
        maxVal:1000
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
            const as = warp.children[0]
            // console.log();
            this.maxVal=warp.children[0].offsetHeight
            // for (let index = 0; index < warp.children.length; index++) {
            //      element += warp.children[index].offsetHeight
            //     this.arrt.push(element+10);                
            // }
            this.scroll.on('scrollEnd', pos => {     
                console.log(-pos.y/this.maxVal);
                         
            //    this.$store.commit('changeStatus',{
            //         active:this.getPsition(this.arrt,-pos.y)
            //     })
            })
        })  
        
    },
     methods:{
        onChangeScroll(activeTabIndex){
            const { we } = this.$refs;   
        },
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
                if (heightVal>heightArrt[0]) {
                    if(heightVal>heightArrt[index-1]&&heightVal<heightArrt[index]) {
                        return index;
                        break;
                    }else{
                        return index+1;
                        break;
                    }
                }else{
                    return 0;
                    break;
                }
               
            }
        }
    }    
}
</script>
<style lang="scss" scoped>
   .order-list{
        display: flex;
        overflow: hidden;
        height: 1000px;
        aside{
     
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
            width: 550px;
            .select-content{
                margin-left: 12px;
                h2{
                    padding-top: 12px;
                    margin: 0px;
                }
                span{
                    font-size: 15px;
                    margin-left: 8px;
                    color: #999;
                }
            }
            ul{
               color: #666;

                li{
                    padding: 4.666667vw 2vw;
                    display: flex;
                    img{
                        width: 170px;
                        height: 170px;
                        margin-right: 12px;
                    }
                    div{
                        width: 300px;
                        h2{
                            font-size: 28px;
                            font-weight: 700;
                            color: #333;
                            padding-top: 0px;
                        }
                        p.p-span{
                           
                           color: #999;
                           span{
                               font-size: 20px;
                                margin-left: 11px;
                           }
                        }
                        div{
                            display: flex;
                            justify-content: space-between;
                            margin-top: 0px;
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
    .order-list .list .select-content h2[data-v-de0231e8]{
        padding-top: 0px;
        margin-left: 12px;
    }
</style>
