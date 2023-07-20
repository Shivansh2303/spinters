import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue';
import OTPPad from '../components/OTPpad.vue';
import SendEmail from '../components/SendEmail.vue';
import SignUp from '../components/SignUp.vue';
import Home from '../views/Home.vue'
import ResetPassword from '../components/ResetPassword.vue';
import DailyUpdates from '../components/DailyUpdates.vue';
import Entertainment from '../components/Entertainment.vue';
import Splash from '../components/Splash.vue'



const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/splash',
    name: 'Splash',
    component: Splash
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/verify-otp',
    name: 'verifyOtp',
    component: OTPPad
  },
  {
    path: '/send-email',
    name: 'sendEmail',
    component: SendEmail
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/entertainment',
    name: 'Entertainment',
    component: Entertainment
  },
  {
    path: '/daily-updates',
    name: 'DailyUpdates',
    component: DailyUpdates
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
