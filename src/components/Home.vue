<template>
    <div id="home">
        <Navbar></Navbar>
        <HomeView></HomeView>
        <Footer></Footer>
    </div>
</template>

<script>

  import Navbar from '@/view/Navbar'
  import Footer from '@/view/Footer'
  import HomeView from '@/view/HomeView'
  // import start from '../../public/script/start'

  export default {
    name: 'Home',
    components: {
        HomeView,
        Navbar,
        Footer
    }
  }
</script>
