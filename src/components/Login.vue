<template>
    <div id="login">
        <Navbar></Navbar>
        <LoginView></LoginView>
        <Footer></Footer>
    </div>
</template>

<script>

  import Navbar from '@/view/Navbar'
  import Footer from '@/view/Footer'
  import LoginView from '@/view/LoginView'
  // import start from '../../public/script/start'

  export default {
    name: 'Login',
    components: {
        LoginView,
        Navbar,
        Footer
    }
  }
</script>
