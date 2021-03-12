<template>
  <div class="home">
    <!-- Slider
				============================================= -->
    <Slider />
    <section id="content">
      <div class="content-wrap pt-0">
        <!-- Client Carousel
				============================================= -->
        <OCPart />

        <!-- Features
				============================================= -->

        <WhatWeDo />

        <!-- Pricing
				============================================= -->
        <Pricing />
        <!-- Form Section
				============================================= -->
        <ApplyForm />

        <!-- Works/Projects
				============================================= -->
        <Project />

        <!-- Features
				============================================= -->
        <Features />

        <!-- Testimonials
				============================================= -->
        <Testimonials />

        <!-- Blogs
				============================================= -->
        <Blogs />

        <!-- Promo/Contact
				============================================= -->
        <Promo />
      </div>
    </section>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import OCPart from "@/components/OCPart.vue";
import WhatWeDo from "@/components/WhatWeDo.vue";
import Pricing from "@/components/Pricing.vue";
import ApplyForm from "@/components/ApplyForm.vue";
import Project from "@/components/Project.vue";
import Features from "@/components/Features.vue";
import Testimonials from "@/components/Testimonials.vue";
import Blogs from "@/components/Blogs.vue";
import Promo from "@/components/Promo.vue";

export default {
  name: "Home",
  components: {
    Slider,
    OCPart,
    WhatWeDo,
    Pricing,
    ApplyForm,
    Project,
    Features,
    Testimonials,
    Blogs,
    Promo,
  },
};
</script>
