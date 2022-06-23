<template>
    <div id="LoginView">
        <form>
            <div class="container-fluid">
                <h2 class="title text-center text-primary" style="font-size: 2.45em;"><br><i>Login&#9998;</i></h2><br>
                <div class="row row-cols-2">
                    <div class="col-lg-5 col-9 mb-4 mx-5">
                        <input type="email" class="form-control form-control-lg border-primary"
                            placeholder="name@gmail.com" id="login-email" required>
                    </div>
                    <div class="col-lg-5 col-9 mb-4 ms-5">
                        <input type="password" class="form-control form-control-lg border-primary"
                            placeholder="Password" id="login-password" required>
                    </div>
                </div>
                <div class="form-check ms-5 form-control-lg">
                    <input class="form-check-input border-primary" type="checkbox" value="remember" id="login-checkbox-remember" checked>
                    <label class="form-check-label" for="login-checkbox-remember">Remember my password</label>
                </div>
                <button class="btn btn-lg btn-primary text-center ms-5 mt-4 mb-5 ps-5 pe-5 bg-opacity-50"
                    type="button" id="login-sign-in" @click="loginAcc">Sign in</button>
            </div>
        </form>
        <br>
    </div>
</template>

<script>
//   import start from '@/script/start'
    const axios = require('axios');

    export default {
        name: 'LoginView',
        components: {
            // start
        },
        data() {
            return {
                user: { },
                loginUser: { }
            }
        },
        mounted() {
            axios.get('http://localhost:3000/').then ((response) => {
                this.user = response.data.profile;
            }).catch((error) => {
                console.log(error);
            })
        },
        methods: {
           loginAcc() {
                var loginInvalid = true;

                for (let profile of this.user) {
                        if (profile.password == $('#login-password').val() && 
                            profile.email == $('#login-email').val()) {
                                loginInvalid = false;
                                this.loginUser = profile;
                                break;
                        }
                }

                if (loginInvalid == false) {

                    this.$store.state.firstName = this.loginUser.firstName;
                    this.$store.state.lastName = this.loginUser.lastName;
                    this.$store.state.password = this.loginUser.password;
                    this.$store.state.confirmPassword = this.loginUser.confirmPassword;
                    this.$store.state.email = this.loginUser.email;
                    this.$store.state.date = this.loginUser.date;
                    this.$store.state.checkboxAgree = this.loginUser.checkboxAgree;
                    this.$store.state.sex = this.loginUser.sex;

                    if (document.querySelector('#login-checkbox-remember').checked == false)
                        this.$store.state.rememberPassword = false;
                    else
                        this.$store.state.rememberPassword = true;

                    this.$store.state.logined = true;

                    alert("Successfully logined");

                    this.$router.push({ name: 'Profile' })

                    // event.preventDefault();
                    // document.location.href = "http://127.0.0.1:5500/src/profile.html";
                }
                else {
                    alert('Your data is not on the server');
                }
            }
        }
    }
</script>
