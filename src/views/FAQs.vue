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

							<div class="grid-filter-wrap justify-content-center">
								<ul class="grid-filter style-4 customjs">

									<li class="activeFilter"><a href="#" class="font-weight-semibold" data-filter="all">All</a></li>
									<li><a href="#" class="font-weight-semibold" data-filter=".faq-marketplace">Marketplace</a></li>
									<li><a href="#" class="font-weight-semibold" data-filter=".faq-authors">Authors</a></li>
									<li><a href="#" class="font-weight-semibold" data-filter=".faq-legal">Legal</a></li>
									<li><a href="#" class="font-weight-semibold" data-filter=".faq-itemdiscussion">Item Discussion</a></li>
									<li><a href="#" class="font-weight-semibold" data-filter=".faq-affiliates">Affiliates</a></li>
									<li><a href="#" class="font-weight-semibold" data-filter=".faq-miscellaneous">Miscellaneous</a></li>

								</ul>
							</div>

							<div class="clear"></div>

							<div id="faqs" class="faqs">

								<div class="toggle faq pb-3 mb-4 faq-marketplace faq-authors">
									<div class="toggle-header">
										<div class="toggle-icon color">
											<i class="toggle-closed icon-question-sign"></i>
											<i class="toggle-open icon-question-sign"></i>
										</div>
										<div class="toggle-title font-weight-semibold pl-1">
											How do I become an author?
										</div>
										<div class="toggle-icon color">
											<i class="toggle-closed icon-chevron-down text-black-50"></i>
											<i class="toggle-open icon-chevron-up color"></i>
										</div>
									</div>
									<div class="toggle-content text-black-50 pl-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.</div>
								</div>

								<div class="toggle faq pb-3 mb-4 faq-authors faq-miscellaneous">
									<div class="toggle-header">
										<div class="toggle-icon color">
											<i class="toggle-closed icon-comments-alt"></i>
											<i class="toggle-open icon-comments-alt"></i>
										</div>
										<div class="toggle-title font-weight-semibold pl-1">
											Helpful Resources for Authors
										</div>
										<div class="toggle-icon color">
											<i class="toggle-closed icon-chevron-down text-black-50"></i>
											<i class="toggle-open icon-chevron-up color"></i>
										</div>
									</div>
									<div class="toggle-content text-black-50 pl-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.</div>
								</div>

								<div class="toggle faq pb-3 mb-4 faq-miscellaneous">
									<div class="toggle-header">
										<div class="toggle-icon color">
											<i class="toggle-closed icon-lock3"></i>
											<i class="toggle-open icon-lock3"></i>
										</div>
										<div class="toggle-title font-weight-semibold pl-1">
											How much money can I make?
										</div>
										<div class="toggle-icon color">
											<i class="toggle-closed icon-chevron-down text-black-50"></i>
											<i class="toggle-open icon-chevron-up color"></i>
										</div>
									</div>
									<div class="toggle-content text-black-50 pl-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.</div>
								</div>

								<div class="toggle faq pb-3 mb-4 faq-authors faq-legal faq-itemdiscussion">
									<div class="toggle-header">
										<div class="toggle-icon color">
											<i class="toggle-closed icon-download-alt"></i>
											<i class="toggle-open icon-download-alt"></i>
										</div>
										<div class="toggle-title font-weight-semibold pl-1">
											Can I offer my items for free on a promotional basis?
										</div>
										<div class="toggle-icon color">
											<i class="toggle-closed icon-chevron-down text-black-50"></i>
											<i class="toggle-open icon-chevron-up color"></i>
										</div>
									</div>
									<div class="toggle-content text-black-50 pl-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.</div>
								</div>

								<div class="toggle faq pb-3 mb-4 faq-marketplace faq-authors">
									<div class="toggle-header">
										<div class="toggle-icon color">
											<i class="toggle-closed icon-ok"></i>
											<i class="toggle-open icon-ok"></i>
										</div>
										<div class="toggle-title font-weight-semibold pl-1">
											An Introduction to the Marketplaces for Authors
										</div>
										<div class="toggle-icon color">
											<i class="toggle-closed icon-chevron-down text-black-50"></i>
											<i class="toggle-open icon-chevron-up color"></i>
										</div>
									</div>
									<div class="toggle-content text-black-50 pl-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.</div>
								</div>

								<div class="toggle faq pb-3 mb-4 faq-affiliates faq-miscellaneous">
									<div class="toggle-header">
										<div class="toggle-icon color">
											<i class="toggle-closed icon-money"></i>
											<i class="toggle-open icon-money"></i>
										</div>
										<div class="toggle-title font-weight-semibold pl-1">
											How does the Tuts+ Premium affiliate program work?
										</div>
										<div class="toggle-icon color">
											<i class="toggle-closed icon-chevron-down text-black-50"></i>
											<i class="toggle-open icon-chevron-up color"></i>
										</div>
									</div>
									<div class="toggle-content text-black-50 pl-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.</div>
								</div>

								<div class="toggle faq pb-3 mb-4 faq-legal faq-itemdiscussion">
									<div class="toggle-header">
										<div class="toggle-icon color">
											<i class="toggle-closed icon-picture"></i>
											<i class="toggle-open icon-picture"></i>
										</div>
										<div class="toggle-title font-weight-semibold pl-1">
											What Images, Videos, Code or Music Can I Use in my Items?
										</div>
										<div class="toggle-icon color">
											<i class="toggle-closed icon-chevron-down text-black-50"></i>
											<i class="toggle-open icon-chevron-up color"></i>
										</div>
									</div>
									<div class="toggle-content text-black-50 pl-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.</div>
								</div>

								<div class="toggle faq pb-3 mb-4 faq-legal faq-authors faq-itemdiscussion">
									<div class="toggle-header">
										<div class="toggle-icon color">
											<i class="toggle-closed icon-file3"></i>
											<i class="toggle-open icon-file3"></i>
										</div>
										<div class="toggle-title font-weight-semibold pl-1">
											Can I use trademarked names in my items?
										</div>
										<div class="toggle-icon color">
											<i class="toggle-closed icon-chevron-down text-black-50"></i>
											<i class="toggle-open icon-chevron-up color"></i>
										</div>
									</div>
									<div class="toggle-content text-black-50 pl-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.</div>
								</div>

								<div class="toggle faq pb-3 mb-4 faq-affiliates">
									<div class="toggle-header">
										<div class="toggle-icon color">
											<i class="toggle-closed icon-bar-chart"></i>
											<i class="toggle-open icon-bar-chart"></i>
										</div>
										<div class="toggle-title font-weight-semibold pl-1">
											Tips for Increasing Your Referral Income
										</div>
										<div class="toggle-icon color">
											<i class="toggle-closed icon-chevron-down text-black-50"></i>
											<i class="toggle-open icon-chevron-up color"></i>
										</div>
									</div>
									<div class="toggle-content text-black-50 pl-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.</div>
								</div>

								<div class="toggle faq pb-3 mb-4 faq-authors faq-itemdiscussion">
									<div class="toggle-header">
										<div class="toggle-icon color">
											<i class="toggle-closed icon-phone3"></i>
											<i class="toggle-open icon-phone3"></i>
										</div>
										<div class="toggle-title font-weight-semibold pl-1">
											How can I get support for an item which isn't working correctly?
										</div>
										<div class="toggle-icon color">
											<i class="toggle-closed icon-chevron-down text-black-50"></i>
											<i class="toggle-open icon-chevron-up color"></i>
										</div>
									</div>
									<div class="toggle-content text-black-50 pl-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.</div>
								</div>

								<div class="toggle faq pb-3 mb-4 faq-marketplace faq-itemdiscussion">
									<div class="toggle-header">
										<div class="toggle-icon color">
											<i class="toggle-closed icon-credit"></i>
											<i class="toggle-open icon-credit"></i>
										</div>
										<div class="toggle-title font-weight-semibold pl-1">
											How do I pay for items on the Marketplaces?
										</div>
										<div class="toggle-icon color">
											<i class="toggle-closed icon-chevron-down text-black-50"></i>
											<i class="toggle-open icon-chevron-up color"></i>
										</div>
									</div>
									<div class="toggle-content text-black-50 pl-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum, vero ipsum molestiae minima odio quo voluptate illum excepturi quam cum voluptates doloribus quae nisi tempore necessitatibus dolores ducimus enim libero eaque explicabo suscipit animi at quaerat aliquid ex expedita perspiciatis? Saepe, aperiam, nam unde quas beatae vero vitae nulla.</div>
								</div>

							</div>

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

export default {
  name: "FAQs",
  components: {
    Hero,
	Form,
    
  },
   data(){
    return {
      pageTitle:"FAQs",
      bandcamp:"FAQs",
      
      }
  }
};
</script>