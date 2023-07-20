<template>
    <div>
        <!-- <header>
            <Header/>
        </header>
        <main></main>
        <footer>
            <Footer/>
        </footer> -->
        <h2>Link for all pages</h2>
        <router-link to="/"><h4>Home</h4></router-link> |
        <router-link to="/login"><h4>login</h4></router-link>
        <router-link to="/sign-up"><h4>Sign up</h4></router-link>
        <router-link to="/send-email"><h4>send Email</h4></router-link>
        <router-link to="/verify-otp"><h4>Otp Verify</h4></router-link>
        <router-link to="/reset password"><h4>reset password</h4></router-link>
        <router-link to="/entertainment"><h4>entertainment</h4></router-link>
        <router-link to="/Daily Updates"><h4>Daily Updates</h4></router-link>
        <router-link to="/splash"><h4>Splash</h4></router-link>
      <router-view/>
    </div>
    <p >THE TEXT ARE DIRECT LINK TO THE PAGES ON THIS SITE <br>
    AND LATER WILL BE REMOVE </p>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
export default {
    name: 'Home',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
h4,
.link-wrapper {
    color: aliceblue;
    margin: 25px;
    text-align: center;
    font-family: 'Poppns', sans-serif;
    font-size: 16px;
}
h2,p{
    color: aliceblue;
    margin: 35px;
    font-family: 'Manrope', sans-serif;
    text-align: center;
}
</style>