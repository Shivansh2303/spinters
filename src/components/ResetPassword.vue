<template>
    <div>
        <header>
            <img src="../assets/back_button.png" alt="login-icon" class="header-login-icon">
            <div class="title-login">
                Reset Password
            </div>
        </header>
        <div class="main-logo">
            <img src="../assets/undraw_hiring.png" alt="logo_1" />
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="msg-wrapper">
                <p>Reset your password to access your <br>
                account. </p>
            </div>
            <div>
                <input type="password" name="newPassword" v-model="newPassword" class="new-password" placeholder="New Password">
            </div>
            <div>
                <input type="password" name="confirmNewPassword"  v-model="confirmNewPassword" class="confirmNewPassword" placeholder="Confirm New Password">
            </div>
            <div class="verify-button">
                <button>Verify</button>
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
                newPassword:'',
                confirmNewPassword:'',
            }
        },
        methods:{
           handleSubmit(e){
                const data={
                    username:this.newPassword,
                    password:this.confirmNewPassword,
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

                this.$router.push('/login');
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
    width: 146px;
    height: 18px;
    font-family:'Poppins', sans-serif ;
    font-weight: 700;
    text-align: center;
    font-size: 18px;
}

.main-logo{
    margin-top: 91px;
    margin-left: 111px;
}
img{
    width: 207px;
    height: 187px;
}

form{
width: 388px;
height: 180px;
margin-top: 87px;
margin-left: 20px;
gap: 16px;
}

input[type=password]{
    margin-top: 16px;
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

.pswd-forgot{
    text-align: right;
    margin-left: 66px;
    display: inline-block; 
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #CE9200;
}
.msg-wrapper{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 21.6px;
    color: #B0AEB8;
    width: 388px;
    height: 22px;
    margin-bottom: 16px;
}

button{
    width: 387px;
    height: 50px;
    margin-top:214px ;
    border-radius: 10px;
    padding: 13px 26px;
    gap: 10px;
    color: white;
    background-color:#E49116 ;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 16.8px;
    border-width: 0px;
}
</style>