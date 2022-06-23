<template>
    <div id="StudyView">
        <div class="container-fluid">
            <div class="board">
                <div class="container text-white" style="font-size: 1.25em;" id="study-table">
                    <h2 class="title text-center text-info" style="font-size: 2.0em;"><br><i>Study mode</i></h2><br>
                    <div class="row bg-info bg-opacity-25 border-start border-top border-end border-info border-4 rounded-top mt-3 pt-5">
                        <div class="col text-end text-light pt-1" id="study-row-1-col-1">
                            {{$store.state.putWord_1_1}}
                        </div>
                        <div class="col-1 text-center text-white"
                            style="font-size: larger; padding-left: 0px; padding-right: 0px;">
                            <strong><hArr class="me-3 ms-3" style="color:black">&hArr;</hArr></strong>
                            <!-- <nobr>{{$store.state.putWord_1_1}} <strong><hArr class="me-4 ms-4" style="color:black">&hArr;</hArr></strong> {{$store.state.putWord_1_2}}</nobr> -->
                        </div>
                        <div class="col text-start text-light pt-1" id="study-row-1-col-2">
                            {{$store.state.putWord_1_2}}
                        </div>
                    </div>
                    <div class="row bg-info bg-opacity-25 border-start border-end border-info border-4">
                        <div class="col text-end pt-1" id="study-row-2-col-1">
                            {{$store.state.putWord_2_1}}
                        </div>
                        <div class="col-1 text-center text-light text-white"
                            style="font-size: larger; padding-left: 0px; padding-right: 0px;">
                            <strong><hArr class="me-3 ms-3" style="color:black">&hArr;</hArr></strong>
                            <!-- <nobr>{{$store.state.putWord_2_1}} <strong><hArr class="me-4 ms-4" style="color:black">&hArr;</hArr></strong> {{$store.state.putWord_2_2}}</nobr> -->
                        </div>
                        <div class="col text-start text-light pt-1" id="study-row-2-col-2">
                            {{$store.state.putWord_2_2}}
                        </div>
                    </div>
                    <div class="row bg-info bg-opacity-25 border-start border-end border-info border-4">
                        <div class="col text-end text-light pt-1" id="study-row-3-col-1">
                            {{$store.state.putWord_3_1}}
                        </div>
                        <div class="col-1 text-center text-white"
                            style="font-size: larger; padding-left: 0px; padding-right: 0px;">
                            <strong><hArr class="me-3 ms-3" style="color:black">&hArr;</hArr></strong>
                            <!-- <nobr>{{$store.state.putWord_3_1}} <strong><hArr class="me-4 ms-4" style="color:black">&hArr;</hArr></strong> {{$store.state.putWord_3_2}}</nobr> -->
                        </div>
                        <div class="col text-start text-light pt-1" id="study-row-3-col-2">
                            {{$store.state.putWord_3_2}}
                        </div>
                    </div>
                    <div class="row bg-info bg-opacity-25 border-start border-end border-info border-4">
                        <div class="col text-end text-light pt-1" id="study-row-4-col-1">
                            {{$store.state.putWord_4_1}}
                        </div>
                        <div class="col-1 text-center text-white"
                            style="font-size: larger; padding-left: 0px; padding-right: 0px;">
                            <strong><hArr class="me-3 ms-3" style="color:black">&hArr;</hArr></strong>
                            <!-- <nobr>{{$store.state.putWord_4_1}} <strong><hArr class="me-4 ms-4" style="color:black">&hArr;</hArr></strong> {{$store.state.putWord_4_2}}</nobr> -->
                        </div>
                        <div class="col text-start text-light pt-1" id="study-row-4-col-2">
                            {{$store.state.putWord_4_2}}
                        </div>
                    </div>
                    <div class="row bg-info bg-opacity-25 border-start border-end border-bottom border-info border-4 rounded-bottom pb-5">
                        <div class="col text-end text-light pt-1" id="study-row-5-col-1">
                            {{$store.state.putWord_5_1}}
                        </div>
                        <div class="col-1 text-center text-white"
                            style="font-size: larger; padding-left: 0px; padding-right: 0px;">
                            <strong><hArr class="me-3 ms-3" style="color:black">&hArr;</hArr></strong>
                            <!-- <nobr>{{$store.state.putWord_5_1}} <strong><hArr class="me-4 ms-4" style="color:black">&hArr;</hArr></strong> {{$store.state.putWord_5_2}}</nobr> -->
                        </div>
                        <div class="col text-start text-light pt-1" id="study-row-5-col-2">
                            {{$store.state.putWord_5_2}}
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="d-grid gap-2 text-center">
                            <button class="btn btn-lg btn-primary border-info border-2 text-white" type="button" id="study-next" @click="showWords">Show words</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//   import start from '@/script/start'

    export default {
        name: 'StudyView',
        components: {
            // start
        },
        methods: {
            showWords() {
                var invalidForm = false;

                if (this.$store.state.logined == false) {
                    alert("You need to login to see words")
                    invalidForm = true;
                    this.$router.push({ name: 'Login' })
                }

                if (invalidForm == false) {
                    var count = 1;
                    for (let pair of this.$store.state.words.entries()) {
                        if (count == 1) {
                            this.$store.state.putWord_1_1 = pair[0];
                            this.$store.state.putWord_1_2 = pair[1];
                        }
                        if (count == 2) {
                            this.$store.state.putWord_2_1 = pair[0];
                            this.$store.state.putWord_2_2 = pair[1];
                        }
                        if (count == 3) {
                            this.$store.state.putWord_3_1 = pair[0];
                            this.$store.state.putWord_3_2 = pair[1];
                        }
                        if (count == 4) {
                            this.$store.state.putWord_4_1 = pair[0];
                            this.$store.state.putWord_4_2 = pair[1];
                        }
                        if (count == 5) {
                            this.$store.state.putWord_5_1 = pair[0];
                            this.$store.state.putWord_5_2 = pair[1];
                        }
                        count++;
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
