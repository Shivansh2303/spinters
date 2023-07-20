<template>
    <div>
        <main>
            <div class="main-logo">
                <img src="../assets/logo1.png" alt="logo_1" />
            </div>
            <transition-group name="text" appear>
                <div class="main-text-primary">
                    Let's Get Started
                </div>
            </transition-group>
            <div v-show="display" @click="dispFunc" class="main-text-wrapper" name="main">
                Find the right data plan and what you want <br>
                just in proquota
            </div>
            <div class="splash-icon">
                <img src="../assets/PngItem_1155153_1.png" alt="splash_icon" />
            </div>
        </main>
    </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
    name:'Splash',
    data(){
        return{
            display:true
        }
    },
    methods:{
        dispFunc(){
            this.display=false
        }

    },
    
}
// onMounted:{
//     setTimeout(()=>{
//         this.display=true
//     },2000)
// }

</script>

<style scoped>
.main-logo {
    margin-top:82px;
    margin-left: 39px;
    width: 350px;
    height: 121px;
}

.splash-icon {
    margin-top: 14px;
    width: 490px;
    height: 347px;
    left: -33px;
}

.main-text-primary {
    margin-top: 43px;
    width: 308px;
    height: 47px;
    font-weight: 500;
    margin-left: 58px;
    color:#CE9200;
    font-size: 40px;
    font-family:'Outfit', sans-serif ;
    font-size: 36px;
    text-align: center;
    line-height: 46.8px;
}
.main-text-wrapper{
    margin-top: 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 27.2px;
    text-align: center;
    color: #97999B;
    font-family: 'Outfit', sans-serif;   
}

</style>