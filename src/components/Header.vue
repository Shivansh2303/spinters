<template>
    <div>
        <div class="header-wrapper">
            <img  class="logo-wrapper" src="../assets/logo1.png" alt="header_logo">
            <button>
                Log In
            </button>
        </div>
        <div class="nav-scroll">
            <img src="../assets/cricket.png" alt="">
            <img src="../assets/football.png" alt="">
            <img src="../assets/basketball.png" alt="">
            <img src="../assets/hockey.png" alt="">
            <img src="../assets/baseball.png" alt="">
            <img src="../assets/cricket.png" alt="">
            <img src="../assets/cricket.png" alt="">
        </div>
        <div class="scroll-icon">
            <img src="../assets/light.png" alt="scroll-icon">
        </div>

       
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.header-wrapper{
    margin-left: 20px;
}

.logo-wrapper{
    margin-right: 150px;
    width:119px;
    height: 41px;
    display: inline-block;
    position: absolute ;
}
.nav-scroll{
    margin-top: 10px;
    background-color: white;
    padding:10px 0px 0px 10px;
    overflow-x: auto;
    white-space: nowrap;
    position: absolute;
} 
.nav-scroll img{
    margin-right: 20px;
}

.scroll-icon img{
    width: 20px;
    height: 20px;
    margin-top: 30px;
    margin-left: 408px;
    position: relative;
}
button{
    margin-top: 10px;
    margin-left: 285px;
    border-width: 0px;
    border-radius: 10px;
    position: relative;
    width: 101px;
    height: 35px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: white;
    background-color: #E49116;

}
</style>
