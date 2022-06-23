<template>
    <div id="register">
        <Navbar></Navbar>
        <RegisterView></RegisterView>
        <Footer></Footer>
    </div>
</template>

<script>

  import Navbar from '@/view/Navbar'
  import Footer from '@/view/Footer'
  import RegisterView from '@/view/RegisterView'
  // import start from '../../public/script/start'

  export default {
    name: 'Register',
    components: {
        RegisterView,
        Navbar,
        Footer
    }
  }
</script>
