<template>
    <div>
        <header>
            <img src="../assets/back_button.png" alt="login-icon" class="header-login-icon">
            <div class="title-login">
                Verification Code
            </div>
        </header>
    </div>
   
    <div>
        <div class="main-logo">
            <img src="../assets/XMLID_3.png" alt="logo_1" />
        </div>
    </div>
    <form >
    <div class="msg-wrapper">
        Enter the verification code you receive in <br>
         your email
    </div>
    <main>
        <div ref="container" class="otp">
            <input v-for="n in length" :key="n" 
            @keyup="(e) =>handleEnter(e,n-1)"
            type="text" v-model="otpArray[n-1]" maxlength="1" class="otp-container"> 
        </div>
        <div>
            <button>Verify</button>
            <p class="resend-code-wrapper">Didn't get a code? <font>Resend Now</font></p>
        </div>
    </main>
</form>
</template>

<script setup>
import { ref } from 'vue'
const otpProps = defineProps({
    length: {
        type: Number,
        default: 4
    }
});
const otpArray=ref([])
const container=ref([])
const otpEmit=defineEmits(['entered'])

function handleEnter(e,i){
    const children=container.value.children
    const keypressed=e.key
    if((keypressed==='Backspace' || keypressed==='Delete') && i>0){
        otpArray.value[i]=null
        setTimeout(() => {
            children[i-1].focus()
        }, 100);

    }

    else{
        const matched=keypressed.match(/^[0-9]$/)
        if(!matched){
            otpArray.value[i]=null
            return
        }
        else if(i<otpProps.length-1){
            setTimeout(()=>{
                children[i+1].focus()
            },100)
        }
        else{
            CheckOTP()
        }
    }
}
function CheckOTP(){
    otpEmit('entered'.otpArray.value.join(''))
}
</script>

<style scoped>

.header-login-icon {
    position: absolute;
    width: 40px;
    height: 40px;
    margin-left: 20px;
    gap: 20px;
}

.title-login {
    top: 10px;
    position: relative;
    margin-left: 80px;
    color: white;
    width: 161px;
    height: 18px;
    font-family:'Poppins', sans-serif ;
    font-weight: 700;
    text-align: center;
    font-size: 18px;
}


.otp-container{
    text-align: center;
    height: 52px;
    width: 49px;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 16.8px;
    color: #B0AEB8;
    border-radius: 15px;
    border-width: 0px;
    border-bottom-width: 2px;
    border-bottom-color: #e5ab16;
    background-color:#160c24;
    margin-right: 26px;
    padding-left: 2px;
}
.otp{
    display: flex;
    gap: 4px;
    align-items: center;
    margin-top:40px ;
}

form {
    width: 388px;
    height: 122px;
    margin-top: 407;
    margin-left: 20px;
    gap: 16px;
}
.msg-wrapper{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
    color: #B0AEB8;
    width: 388px;
    height: 44px;
    margin-top:160px;
    gap: 16px;
}

p {
    text-align: center;
    margin-top: 20px;
    color: #ffffff;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
}
font{
    color: #CE9200;
    font-family: 'Manrope ', sans-serif;
    font-weight: 400;
    font-size: 14px;
}
main{
    height: 14px;
    widows: 350px;
}
button{
    width: 387px;
    height: 50px;
    margin-top:272px;
    border-radius: 10px;
    padding: 13px 26px;
    gap: 10px;
    color: white;
    background-color:#E49116 ;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 16px;
    border-width: 0px;
}
.main-logo {
    margin-top: 87px;
    margin-left: 124px;
    align-items: center;
    width: 150px;
    height: 70px;
}
img{
    width: 182.19px;
    height: 178px;
}


</style>