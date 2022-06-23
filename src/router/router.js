import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/Home'
import Control from '@/components/Control'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import Register from '@/components/Register'
import Study from '@/components/Study'

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/Control',
        name: "Control",
        component: Control
    },
    {
        path: '/Login',
        name: "Login",
        component: Login
    },
    {
        path: '/Profile',
        name: "Profile",
        component: Profile
    },
    {
        path: '/Register',
        name: "Register",
        component: Register
    },
    {
        path: '/Study',
        name: "Study",
        component: Study
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
