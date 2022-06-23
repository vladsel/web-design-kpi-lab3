<template>
    <div id="ControlView">
        <div class="container-fluid">
            <form id="control-form">
                <div class="board">
                    <div class="container text-white" style="font-size: 1.25em;">
                        <h2 class="title text-center text-info" style="font-size: 2.0em;"><br><i>Control mode</i></h2><br>
                        <div class="row bg-info bg-opacity-25 border-start border-top border-end border-info border-4 rounded-top mt-3 pt-5">
                            <div class="col text-end pt-1" id="study-row-1-col-1">
                                {{$store.state.putWord_1_1}}
                            </div>
                            <div class="col-1 text-center text-dark"
                                style="font-size: larger; padding-left: 0px; padding-right: 0px;">
                                <strong><hArr class="me-3 ms-3" style="color:black">&hArr;</hArr></strong>
                            </div>
                            <div class="col text-start text-light" id="control-div-input-row-1-col-2">
                                <input type="text" class="form-control-sm bg-secondary text-white border-white text-center
                                    border-start border-top border-end border-bottom" style="font-size: 0.8em; width: 70%" 
                                    id="control-form-input-row-1-col-2" required>
                            </div>
                        </div>
                        <div class="row bg-info bg-opacity-25 border-start border-end border-info border-4">
                            <div class="col text-end pt-1" id="study-row-2-col-1">
                                {{$store.state.putWord_2_1}}
                            </div>
                            <div class="col-1 text-center text-dark"
                                style="font-size: larger; padding-left: 0px; padding-right: 0px;">
                                <strong><hArr class="me-3 ms-3" style="color:black">&hArr;</hArr></strong>
                            </div>
                            <div class="col text-start text-light" id="control-div-input-row-2-col-2">
                                <input type="text" class="form-control-sm bg-secondary text-white border-white text-center
                                    border-start border-top border-end border-bottom" style="font-size: 0.8em; width: 70%"
                                    id="control-form-input-row-2-col-2" required>
                            </div>
                        </div>
                        <div class="row bg-info bg-opacity-25 border-start border-end border-info border-4">
                            <div class="col text-end pt-1" id="study-row-3-col-1">
                                {{$store.state.putWord_3_1}}
                            </div>
                            <div class="col-1 text-center text-dark"
                                style="font-size: larger; padding-left: 0px; padding-right: 0px;">
                                <strong><hArr class="me-3 ms-3" style="color:black">&hArr;</hArr></strong>
                            </div>
                            <div class="col text-start text-light" id="control-div-input-row-3-col-2">
                                <input type="text" class="form-control-sm bg-secondary text-white border-white text-center
                                    border-start border-top border-end border-bottom" style="font-size: 0.8em; width: 70%"
                                    id="control-form-input-row-3-col-2" required>
                            </div>
                        </div>
                        <div class="row bg-info bg-opacity-25 border-start border-end border-info border-4">
                            <div class="col text-end pt-1" id="study-row-4-col-1">
                                {{$store.state.putWord_4_1}}
                            </div>
                            <div class="col-1 text-center text-dark"
                                style="font-size: larger; padding-left: 0px; padding-right: 0px;">
                                <strong><hArr class="me-3 ms-3" style="color:black">&hArr;</hArr></strong>
                            </div>
                            <div class="col text-start text-light" id="control-div-input-row-4-col-2">
                                <input type="text" class="form-control-sm bg-secondary text-white border-white text-center
                                    border-start border-top border-end border-bottom" style="font-size: 0.8em; width: 70%"
                                    id="control-form-input-row-4-col-2" required>
                            </div>
                        </div>
                        <div class="row bg-info bg-opacity-25 border-start border-end border-bottom border-info border-4 rounded-bottom pb-5">
                            <div class="col text-end pt-1" id="study-row-5-col-1">
                                {{$store.state.putWord_5_1}}
                            </div>
                            <div class="col-1 text-center text-dark"
                                style="font-size: larger; padding-left: 0px; padding-right: 0px;">
                                <strong><hArr class="me-3 ms-3" style="color:black">&hArr;</hArr></strong>
                            </div>
                            <div class="col text-start text-light" id="control-div-input-row-5-col-2">
                                <input type="text" class="form-control-sm bg-secondary text-white border-white text-center
                                    border-start border-top border-end border-bottom" style="font-size: 0.8em; width: 70%"
                                    id="control-form-input-row-5-col-2" required>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="d-grid gap-2 text-center">
                                <button class="btn btn-lg btn-primary border-info border-2 text-white" id="control-next" type="button" @click="checkWords">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
//   import start from '@/script/start'

    export default {
        name: 'ControlView',
        components: {
            // start
        },
        methods: {
            checkWords() {
                this.$store.state.controlWord_1 = null;
                this.$store.state.controlWord_2 = null;
                this.$store.state.controlWord_3 = null;
                this.$store.state.controlWord_4 = null;
                this.$store.state.controlWord_5 = null;

                var invalidForm = false;

                if (this.$store.state.logined == false) {
                    alert("You need to login to see words")
                    invalidForm = true;
                    this.$router.push({ name: 'Login' })
                }

                if (invalidForm == false) {

                    var emptyForm = false;

                    $('#control-form input').each(function() {
                        if ($(this).val() === '') 
                            emptyForm = true;
                    });

                    if (emptyForm == false) {
                        if ($('#control-form-input-row-1-col-2').val().toLowerCase().trim() ==
                            this.$store.state.putWord_1_2.toLowerCase()) {
                                document.querySelector('#control-div-input-row-1-col-2').innerHTML = `true`;
                        }
                        else
                            document.querySelector('#control-div-input-row-1-col-2').innerHTML = `false`;

                        if ($('#control-form-input-row-2-col-2').val().toLowerCase().trim() ==
                            this.$store.state.putWord_2_2.toLowerCase()) {
                                document.querySelector('#control-div-input-row-2-col-2').innerHTML = `true`;
                        }
                        else
                            document.querySelector('#control-div-input-row-2-col-2').innerHTML = `false`;

                        if ($('#control-form-input-row-3-col-2').val().toLowerCase().trim() ==
                            this.$store.state.putWord_3_2.toLowerCase()) {
                                document.querySelector('#control-div-input-row-3-col-2').innerHTML = `true`;
                        }
                        else
                            document.querySelector('#control-div-input-row-3-col-2').innerHTML = `false`;

                        if ($('#control-form-input-row-4-col-2').val().toLowerCase().trim() ==
                            this.$store.state.putWord_4_2.toLowerCase()) {
                                document.querySelector('#control-div-input-row-4-col-2').innerHTML = `true`;
                        }
                        else
                            document.querySelector('#control-div-input-row-4-col-2').innerHTML = `false`;

                        if ($('#control-form-input-row-5-col-2').val().toLowerCase().trim() ==
                            this.$store.state.putWord_5_2.toLowerCase()) {
                                document.querySelector('#control-div-input-row-5-col-2').innerHTML = `true`;
                        }
                        else
                            document.querySelector('#control-div-input-row-5-col-2').innerHTML = `false`;
                    }
                }
            }
        }
    }
</script>

<style>
    .board {
        min-height: 100vh;
        background-image: url(../../img/board1.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>
