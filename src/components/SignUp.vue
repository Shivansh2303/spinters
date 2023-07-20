<template>
    <div>
        <header>
            <img src="../assets/back_button.png" alt="login-icon" class="header-login-icon">
            <div class="title-login">
                Sign Up
            </div>
        </header>
        <div>
            <div class="main-logo">
                <img src="../assets/logo1.png" alt="logo_1" />
            </div>
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="greeting-text">
                <p>Unleash Your Gaming Potential!</p>
            </div>
            <div>
                <input type="text" name="username" v-model="username" class="login-username" placeholder="Username">
            </div>
            <div>
                <input type="password" name="password"  v-model="password" class="login-password" placeholder="Password">
            </div>
            <div>
                <input type="radio" name="remeber-me" class="remember-me">
                <p class="radio-label">Remember me</p>
                <!-- <p class="radio-label">Remember Me?</p> -->
                <p class="pswd-forgot">Forgot Password?</p>
            </div>
            <div >
                <input type="checkbox" name="t&c" class="terms-conditions">
                <p class="t-c-text">
                    I am at least 18 years of age and I have read, accept and <br>
                    agree to the  <font>Terms and Canditions, Responsible Gaming, <br>
                    GamCare, Gambling Therapy</font>
                </p>
            </div>
            <div>
                <button>Log In</button>
            </div>
            <div class="signup-text">
                <p>New to Sprinters? <font>Sign Up Now</font></p>
            </div>
            
        </form>

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'Login',
        data(){
            return{
                username:'',
                password:'',
                TermsAndConditions:false,
                rememberMe:false,
            }
        },
        methods:{
           handleSubmit(e){
                const data={
                    username:this.username,
                    password:this.password,
                    termsAndCondition:this.TermsAndConditions,
                };
            axios.post('http://localhost:8080/register',data)
                .then(
                    res=>{
                        console.log(res)
                    }
                ).catch(
                    err=>{
                        console.log(err)
                    }
                )

                // this.$router.push('/home');
            }
            }
            

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
    width: 70px;
    height: 18px;
    font-family:'Poppins', sans-serif ;
    font-weight: 700;
    text-align: center;
    font-size: 18px;
}

p {
    margin-top: 20px;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
}

font {
    color: #CE9200;
    font-family: 'Manrope ', sans-serif;
    font-weight: 400;
    font-size: 14px;
}

span {
    color: #CE9200;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 14px;
}

.terms-conditions {
    margin-top: 22px;
    position: relative;
}

.t-c-text {
    width: 358%;
    height: 57px;
    display: inline-block;
    margin-left: 28px;
}

/* Might want to wrap a span around your checkbox text */

input[type='radio'] {
    margin-top: 15px;
    width: 16px;
    height: 16px;
    margin-top: 4px;
}

.radio-label {
    margin-left: 15px;
    width: 132px;
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.8px;
    color: #B0AEB8;
}

.main-logo{
    margin-top: 100px;
    margin-left: 56px;
    width: 316px;
    height: 109px;
}

form {
    width: 387px;
    height: 289px;
    margin-top: 140px;
    margin-left: 20px;
    gap: 16px;
}


input[type=text] {
    margin-top: 17.5px;
    padding: 15px 15px 15px 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.8px;
    color: #B0AEB8;
    width: 355px;
    height: 17px;
    position: relative;
    border-radius: 13px;
    border-width: 0px;
    border-bottom-width: 2px;
    border-bottom-color: #e5ab16;

    background-color: #160c24;
}

input[type=checkbox] {
    margin-left: 2px;
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 6px;
}

input[type=password] {
    margin-top: 20px;
    padding: 15px 15px 15px 15px;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 16.8px;
    color: #B0AEB8;
    width: 355px;
    height: 17px;
    position: relative;
    border-radius: 13px;
    border-width: 0px;
    border-bottom-width: 2px;
    border-bottom-color: #e5ab16;
    background-color: #160c24;
}

.signup-text p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.8px;
    text-align: center;
}

.greeting-text p {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 21.6px;
    color: #B0AEB8;
    width: 388px;
    height: 22px;
}


.pswd-forgot {
    width: 131.08px;
    height: 17px;
    text-align: right;
    margin-left: 90px;
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #CE9200;
}


button {
    width: 387px;
    height: 50px;
    margin-top: 110px;
    border-radius: 10px;
    padding: 13px 26px 13px 26px;
    gap: 10px;
    color: white;
    background-color: #E49116;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border-width: 0px;
}

.eye-icon {
    color: white;
    position: absolute;
    margin-top: 35px;
    right: 11%;
    size: 20px;
    cursor: pointer;
    color: gray;
}
img{
    width: 316px;
    height: 109px;
}
</style>