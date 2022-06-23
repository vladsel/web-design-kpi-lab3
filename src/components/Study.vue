<template>
    <div id="study">
        <Navbar></Navbar>
        <StudyView></StudyView>
        <Footer></Footer>
    </div>
</template>

<script>

  import Navbar from '@/view/Navbar'
  import Footer from '@/view/Footer'
  import StudyView from '@/view/StudyView'
    // import start from '../../public/script/start'

  export default {
    name: 'Study',
    components: {
        StudyView,
        Navbar,
        Footer
    }
  }
</script>
