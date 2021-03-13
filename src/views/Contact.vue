<template>
  <div class="about">
    <!-- Page Title
		============================================= -->

    <Hero />
    <!-- Content
		============================================= -->
    <section id="content">
      <div class="content-wrap pb-0">
        <div class="container mb-3">
          <div class="row justify-content-between">
            <div class="col-lg-3 col-md-6">
              <div class="feature-box flex-column text-center">
                <div class="fbox-image text-center mb-3">
                  <img
                    height="120"
                    src="demos/seo/images/icons/seo.svg"
                    alt="Feature Icon"
                  />
                </div>
                <div class="fbox-content">
                  <h3 class="nott ls0 mb-4">Location:</h3>
                  <p class="text-smaller mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod.
                  </p>
                  <address>
                    <a href="https://maps.google.com">
                      <u
                        >795 Folsom Ave, Suite 600<br />
                        San Francisco, CA 94107</u
                      >
                    </a>
                  </address>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="feature-box flex-column text-center">
                <div class="fbox-image text-center mb-3">
                  <img
                    height="120"
                    src="demos/seo/images/icons/social.svg"
                    alt="Feature Icon"
                  />
                </div>
                <div class="fbox-content">
                  <h3 class="nott ls0 mb-4">Contact Us:</h3>
                  <p class="text-smaller mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod.
                  </p>
                  <a class="btn btn-link" href="mailto:info@canvas.com"
                    ><u>noreply@canvas.com</u></a
                  >
                  <a class="btn btn-link" href="tel:10-22-33445566"
                    ><u>(10) 22 33445566</u></a
                  >
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="feature-box flex-column text-center">
                <div class="fbox-image text-center mb-3">
                  <img
                    height="120"
                    src="demos/seo/images/icons/group.svg"
                    alt="Feature Icon"
                  />
                </div>
                <div class="fbox-content">
                  <h3 class="nott ls0 mb-4">Live Chat:</h3>
                  <p class="text-smaller mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod.
                  </p>
                  <a href="#"><u>Click Here</u></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="clear"></div>

        <!-- Google Map ============================================= -->

        <!-- Form Section
				============================================= -->
       <Form/>
      </div>
    </section>
    <!-- #content end -->
  </div>
</template>
<script>
import Hero from "@/components/Hero.vue";
import Form from "@/components/Form.vue";

export default {
  name: "Contact",
  components: {
    Hero,
	Form,
  },
};
</script>