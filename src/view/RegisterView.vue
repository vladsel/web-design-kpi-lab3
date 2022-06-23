<template>
    <div id="RegisterView">
        <form id="register-form-input">
            <div class="container-fluid">
                <h2 class="title text-center text-primary" style="font-size: 2.25em;"><br><i>Сreate an account &#9998;</i></h2><br>
                <div class="row row-cols-2">
                    <div class="col-lg-5 col-sm-4 col-9 mb-4 mx-5">
                        <input type="text" class="form-control form-control-lg border-primary"
                            placeholder="First name" id="register-first-name" required>
                    </div>
                    <div class="col-lg-5 col-sm-4 col-9 mb-4 ms-5">
                        <input type="text" class="form-control form-control-lg border-primary"
                            placeholder="Last name" id="register-last-name" required>
                    </div>
                </div>
                <div class="row row-cols-2">
                    <div class="col-lg-5 col-sm-4 col-9 mb-4 mx-5">
                        <input type="password" class="form-control form-control-lg border-primary"
                            placeholder="Password" id="register-password" required>
                    </div>
                    <div class="col-lg-5 col-sm-4 col-9 mb-4 ms-5">
                        <input type="password" class="form-control form-control-lg border-primary"
                            placeholder="Confirm password" id="register-confirm-password" required>
                    </div>
                </div>
                <div class="row row-cols-2">
                    <div class="col-lg-5 col-sm-4 col-9 mb-4 ms-5">
                        <input type="email" class="form-control form-control-lg border-primary"
                            placeholder="name@gmail.com" aria-describedby="passwordHelpLine" id="register-email" required>
                    </div>
                    <div class="col-lg-5 col-sm-4 col-9 mb-4 ms-5">
                        <p id="passwordHelpLine" class="text-muted ms-5 mt-2">Password must contain at least 4 characters</p>
                    </div>
                </div>
                <div class="row row-cols-2">
                    <div class="col-lg-5 col-sm-4 col-9 mb-4 mx-5">
                        <input type="date" class="form-control form-control-lg border-primary" id="register-date" required>
                    </div>
                    <div class="col-lg-5 col-sm-4 col-9 mb-4 ms-5 form-control-lg">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input border-primary" type="radio" name="inlineRadioOptions" id="register-radio-male" value="male" checked required>
                            <label class="form-check-label" for="register-radio-male">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input border-primary" type="radio" name="inlineRadioOptions" id="register-radio-female" value="female" required>
                            <label class="form-check-label" for="register-radio-female">Female</label>
                        </div>
                    </div>
                </div>
                <div class="form-check ms-5 form-control-lg">
                    <input class="form-check-input border-primary" type="checkbox" value="agree" id="register-checkbox-agree" checked required>
                    <label class="form-check-label" for="register-checkbox-agree">
                        I agree with the processing of my personal data and accept the license agreements
                    </label>
                </div>
                <button class="btn btn-lg btn-primary text-center ms-5 mt-4 mb-5 ps-5 pe-5 bg-opacity-50"
                        type="button" id="register-sign-up" @click="registerAcc">Sign Up</button>
                <div id="register-response"></div>
            </div>
        </form>
        <br>
    </div>
</template>

<script>
//   import start from '@/script/start'
    const axios = require('axios');

    export default {
        name: 'RegisterView',
        components: {
            // start
        },
        data() {
            return {
                user: { },
                newUser: { }
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
            registerAcc() {

                var formInvalid = false;

                $('#register-form-input input').each(function() {
                    if ($(this).val() === '') 
                        formInvalid = true;
                });

                if ($('#register-password').val() != $('#register-confirm-password').val()) {
                    formInvalid = true;
                    alert('Passwords do not match');
                }

                if ($('#register-password').val().length < 4) {
                    formInvalid = true;
                    alert('Passwords is too easy, it must contain 4 and more characters');
                }
                
                if (document.querySelector('#register-checkbox-agree').checked == false) {
                    formInvalid = true;
                    alert('You need to accept the data processing agreement');
                }
                
                if (formInvalid == false) {
                    // event.preventDefault();

                    var savedServer = false;

                    var radioMale = document.querySelector('#register-radio-male');
                    var radioFemale = document.querySelector('#register-radio-female');
                    var sex = null;
            
                    if (radioMale.checked == true)
                        sex = radioMale.value;
                    else
                        sex = radioFemale.value;

                    for (let profile of this.user) {
                        if (profile.firstName.toLowerCase().trim() == $('#register-first-name').val().toLowerCase().trim() &&
                            profile.lastName.toLowerCase().trim() == $('#register-last-name').val().toLowerCase().trim() &&
                            profile.password == $('#register-password').val() &&
                            profile.confirmPassword == $('#register-confirm-password').val() &&
                            profile.email == $('#register-email').val() &&
                            profile.date == $('#register-date').val() &&
                            profile.checkboxAgree == $('#register-checkbox-agree').val() &&
                            profile.sex == sex) {
                                savedServer = true;
                                break;
                        }
                    }

                    if (savedServer == true) {

                        this.$store.state.rememberPassword = false
                        this.$store.state.logined = false;

                        alert("Your data is already registered");

                        this.$router.push({ name: 'Login' })

                        // event.preventDefault();
                        // document.location.href = "http://127.0.0.1:5500/src/login.html";
                    }
                    else {
                        this.$store.state.rememberPassword = false
                        this.$store.state.logined = false;

                        axios.post('http://localhost:3000/addConfig', {"firstName": $('#register-first-name').val(),
                                                                        "lastName": $('#register-last-name').val(),
                                                                        "password": $('#register-password').val(),
                                                                        "confirmPassword": $('#register-confirm-password').val(),
                                                                        "email": $('#register-email').val(),
                                                                        "date": $('#register-date').val(),
                                                                        "checkboxAgree": $('#register-checkbox-agree').val(),
                                                                        "sex": sex})
                            .then((result) => { console.warn(result);
                                alert("done");
                            }).catch((error) => { console.log(error);
                        })
                        alert('Data was successfully registered on the server');
                        this.$router.push({ name: 'Login' })
                    }
                }
            }
        }
    }
    
</script>
