<template>
  <div id="WhatWeDo">
    <!-- Page Title
		============================================= -->

  	<Hero :pageTitle="this.pageTitle" :bandcamp="this.bandcamp"/>
    <!-- #page-title end -->

    <!-- Content
		============================================= -->
    <section id="content">
      <div class="content-wrap py-0 overflow-visible">
        <div
          class="card mx-auto mw-md border-0 shadow rounded-xl card-seo-about mb-5 mb-lg-0"
        >
         <PageTraffic/>
        </div>

        <!-- Features
				============================================= -->
       <Services/>

        <!-- Features
				============================================= -->
      <ServiceDetails/>

        <!-- Testimonials
				============================================= -->
        <!-- <Testimonials /> -->

        <!-- Promo/Contact
				============================================= -->
              <!-- <Promo/> -->
      </div>
    </section>
    <!-- #content end -->
  </div>
</template>
<script>
// import Testimonials from "@/components/Testimonials.vue";
// import Promo from "@/components/Promo.vue";
import Hero from "@/components/Hero.vue";
import PageTraffic from "@/components/PageTraffic.vue";
import Services from "@/components/Services.vue";
import ServiceDetails from "@/components/ServiceDetails.vue";
export default {
  name: "HomePart",
  components: {
    // Testimonials,
    // Promo,
    Hero,
    PageTraffic,
    Services,
    ServiceDetails,
  },
  data(){
    return {
      pageTitle:"What We Do",
      bandcamp:"What We Do",
      
      }
  }
};
</script>
