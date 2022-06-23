<template>
    <div id="HomeView">
        <div class="container-fluid">
            <div class="row row-cols-2 bg-light">
                <div class="col-sm-6 col-12 text-center"> 
                    <h1 class="title" style="font-size: 3.05em; color: rgb(188, 66, 66);">
                        <br><i>Learning English Words</i></h1>
                </div>
                <div class="col-sm-6 col-12 text-center">
                    <p style="font-size: 1.2em; font-family:Verdana, Geneva, Tahoma, sans-serif;">
                        <br><br><strong>Welcome!</strong> This website was created to help you learn English words,
                            it works in two modes: learning mode and knowledge control.</p>
                    <p style="font-size: 1.2em; font-family:Verdana, Geneva, Tahoma, sans-serif;">
                        <strong>To get started,</strong> you need to register or login your profile and
                            then select the desired study mode in the navigation bar.</p> 
                </div>
            </div>
            <div class="row">
                <div class="col text-center" id="bg_words">
                    <!-- <img src="../img/words.png" width="auto" alt=""> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//   import start from '@/script/start'

    export default {
        name: 'HomeView',
        components: {
            // start
        }
    }
</script>

<style>
    #bg_words {
        min-height: 70vh;
        background-image: url(../../img/words.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 60vw;
    }
</style>
