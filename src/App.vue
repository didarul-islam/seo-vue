<template>
  <div class="home">
    <div id="wrapper" class="clearfix">
     
      <Topbar />
  
      <Header />
   
       <router-view />

      <Footer />
     
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
    Topbar,
  },
};
</script>

