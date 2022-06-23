<template>
    <div id="navbar">
        <nav class="navbar navbar-expand-md navbar-light sticky-top bg-primary bg-opacity-100">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand navbar-text" style="font-size: 1.5em;"><img src="../../img/logo.png" 
                    style="width: 55px" class="d-inline-block align-top text-dark"/>  Learn English</router-link>
                <button class="navbar-toggler me-2" type="button" data-toggle="collapse" data-target="#navbarMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarMenu">
                    <ul class="navbar-nav ml-auto" style="margin-left: auto;">
                        <router-link to="/" class="navbar-brand" id="logo1"><img src="../../img/logo1.png" 
                            style="width: 55px" class="d-inline-block align-top" alt=""></router-link>
                        <li class="nav-item-primary active pe-2 pt-1"
                            style="margin-left: auto; margin-bottom: -5px;">
                            <router-link class="nav-link" style="font-size: 1.35em;" to="/Register">Sign Up</router-link>
                        </li>
                        <li class="nav-item pe-2 pt-1" style="margin-left: auto; margin-bottom: -5px;">
                            <router-link class="nav-link" style="font-size: 1.35em;" to="/Login">Login</router-link>
                        </li>
                        <li class="nav-item pe-2 pt-1" style="margin-left: auto; margin-bottom: -5px;">
                            <router-link class="nav-link" style="font-size: 1.35em;" to="/Profile">Profile</router-link>
                        </li>
                        <li class="nav-item pe-2 pt-1" style="margin-left: auto; margin-bottom: -5px;">
                            <router-link class="nav-link" style="font-size: 1.35em;" to="/Study">Study mode</router-link>
                        </li>
                        <li class="nav-item pe-2 pt-1" style="margin-left: auto; margin-bottom: -5px;">
                            <router-link class="nav-link" style="font-size: 1.35em;" to="/Control">Control mode</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
//   import start from '@/script/start'

    export default {
        name: 'Navbar',
        components: {
            // start
        }
    }
</script>

<style>
    .navbar-brand img {
        margin-top: -10px;
        margin-bottom: -10px;
        margin-left: 25px;
    }

    #logo1 {
        margin-left: auto;
        margin-right: 8px;
        margin-top: 5px;
    }
</style>
