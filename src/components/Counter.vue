<template>
    <div class="count">
        <span class="span1" v-if="counter!==0" @click="changeCounter('reduce')"></span>
        <span class="span2">{{$store.getters.getFoodNum(this.id)}}</span>
        <span class="span3" @click="changeCounter('add')"></span>
    </div> 
</template>

<script>
export default {
    data:()=>({
        mark:'all',
        counter:0,
        dataCartObj:{},
    }),
    props:['id','price'],
    mounted() { 
       this.counter = this.$store.getters.getFoodNum(this.id);
    },
    methods:{
        changeCounter(mark){
            if (mark==="add") {
                this.counter++;
            }else if(this.counter===0){
                alert('商品数量不可小于零！')
            }else{
                this.counter--;
            }
            this.dataCartObj.id=this.id;
            this.dataCartObj.count=this.counter;
            this.dataCartObj.allPrice=this.price*this.counter;
            this.$store.commit('addToCart',this.dataCartObj)
            const array = this.$store.getters.getAllPrice.reduce((total, currentValue)=>(currentValue.allPrice+total),0)
            const count = this.$store.getters.getAllPrice.reduce((total, currentValue)=>(currentValue.count+total),0)
            this.$store.commit('changeStatus',{allPrice:array});
            this.$store.commit('changeStatus',{count:count});
            this.$store.commit('changeStatus',{cartScale:true});
            const time = setTimeout(()=>{
                this.$store.commit('changeStatus',{cartScale:false});
                clearTimeout(time);
            },300)
            
        },
        getConut(id){
            
        // this.$store.getters.getAllPrice.find(t => t.id === id)? state.carts.find(t => t.id === id).count
        // : 0
            
        }
    },
    
}
</script>
<style lang="scss" scoped>
.count{

    margin-left: 50px;
    display: flex;
    width: 300px;
    position: relative;
    span{
        width: 45px;
        height: 45px;    
    }
    span.span1{
        position: absolute;
        background: url('../../assets/img/subIcon.png') center center no-repeat;
            background-size: contain;
    }
    span.span2{
        margin-left: 60px;
        font-size: 32px;
        padding-top:5px;
        text-align: center; 
    }
    span.span3{
        background: url('../../assets/img/addIcon.png') center center no-repeat;
        background-size: 90%;
    }

}
</style>
