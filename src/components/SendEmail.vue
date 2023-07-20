<template>
    <div>
        <header>
            <img src="../assets/back_button.png" alt="login-icon" class="header-login-icon">
            <div class="title-login">
                Forgot Password
            </div>
        </header>
        <div>
            <div class="main-logo">
                <img src="../assets/XMLID_3.png" alt="logo_1" />
            </div>
        </div>
        <form>
            <div>
                <div class="greeting-text">
                    Type your email, we will send you <br>
                    verifivation code via email
                </div>
                <div>
                    <input type="email" name="email" class="email" placeholder="Email">
                </div>
            </div>
        </form>
            <div>
                <button>Submit</button>
            </div>
            <div class="signup-text">
                <p>Remember password? <font>Login Now</font></p>
            </div>
    </div>
</template>

<script>
    export default {
        
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
    width: 155px;
    height: 18px;
    font-family:'Poppins', sans-serif ;
    font-weight: 700;
    text-align: center;
    font-size: 18px;
}


font {
    color: #CE9200;
    font-family: 'Manrope ', sans-serif;
    font-weight: 400;
    font-size: 14px;
}
form {
    width: 388px;
    height: 122px;
    margin-left: 20px;
    gap: 26px;
}
.greeting-text{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
    color: #B0AEB8;
    width: 388px;
    height: 44px;
    margin-top:180px;
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
input[type=email] {
    margin-top: 40px;
    padding: 15px 15px 15px 15px;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.8px;
    color: #B0AEB8;
    width: 355px;
    position: relative;
    border-radius: 10px;
    border-width: 0px;
    border-bottom-width: 2px;
    border-bottom-color: #e5ab16;

    background-color: #160c24;
}
button{
    margin-left: 20px;
    width: 387px;
    height: 50px;
    margin-top:272px ;
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