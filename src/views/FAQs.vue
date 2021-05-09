<template>
    <div id="FAQs">
        <!-- Page Title
		============================================= -->


		<Hero :pageTitle="this.pageTitle" :bandcamp="this.bandcamp"/>
		<!-- #page-title end -->

		<!-- Content
		============================================= -->
		<section id="content">

			<div class="content-wrap pb-0">

				<div class="container bottommargin">
					<div class="row justify-content-center">
						<div class="col-xl-6 col-lg-8 text-center">
							<div class="heading-block border-bottom-0 center mx-auto">
								<div class="badge badge-pill badge-default">How can we help you?</div>
								<h3 class="nott ls0 mb-3">Frequently Asked Questions</h3>
								<p>Dynamically provide access to resource-leveling mindshare vis-a-vis bricks-and-clicks ideas authoritatively.</p>
							</div>
						</div>

						<div class="clear"></div>

						<!-- Post Content
						============================================= -->
						<div class="col-lg-10">

			

							<div class="clear"></div>

							<Faq/>

						</div>

					</div><!-- .postcontent end -->
				</div>

				<div class="clear"></div>

				<!-- Form Section
				============================================= -->
				<Form/>
			</div>
		</section><!-- #content end -->
    </div>
</template>
<script>

import Hero from "@/components/Hero.vue";
import Form from "@/components/Form.vue";
import Faq from "@/components/Faq.vue";

export default {
  name: "FAQs",
  components: {
    Hero,
	Form,
	Faq,
    
  },
   data(){
    return {
      pageTitle:"FAQs",
      bandcamp:"FAQs",
      
      }
  }
};
</script>