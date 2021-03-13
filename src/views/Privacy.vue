<template>
  <div>
    <Hero :pageTitle="this.pageTitle" :bandcamp="this.bandcamp" />
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="single-post mb-0">
            <!-- Single Post
						============================================= -->
            <div class="entry clearfix">
              <!-- Entry Title
							============================================= -->
              <div class="entry-title my-5 text-center">
                <h2>Privacy Policy Page</h2>
              </div>
              <!-- .entry-title end -->

              <!-- Entry Content
							============================================= -->
              <div class="entry-content mt-0">
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Cras mattis
                  consectetur purus sit amet fermentum. Morbi leo risus, porta
                  ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur et.
                </p>

                <p>
                  Nullam id dolor id nibh ultricies vehicula ut id elit.
                  <a href="#">Curabitur blandit tempus porttitor</a>. Integer
                  posuere erat a ante venenatis dapibus posuere velit aliquet.
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Vestibulum id ligula porta felis euismod semper. Donec id elit
                  non mi porta gravida at eget metus. Vestibulum id ligula porta
                  felis euismod semper.
                </p>

                <blockquote>
                  <p>
                    Vestibulum id ligula porta felis euismod semper. Sed posuere
                    consectetur est at lobortis. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula, eget lacinia odio sem nec elit. Donec ullamcorper
                    nulla non metus auctor fringilla. Vestibulum id ligula porta
                    felis euismod semper.
                  </p>
                </blockquote>

                <p>
                  Integer posuere erat a ante venenatis dapibus posuere velit
                  aliquet. Cras mattis consectetur purus sit amet fermentum.
                  Donec id elit non mi porta gravida at eget metus.
                </p>

                <p>
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Aenean lacinia bibendum nulla sed consectetur. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam.
                  <a href="#">Nullam quis risus eget urna</a> mollis ornare vel
                  eu leo. Integer posuere erat a ante venenatis dapibus posuere
                  velit aliquet.
                </p>

                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Cras mattis
                  consectetur purus sit amet fermentum. Morbi leo risus, porta
                  ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur et.
                </p>

                <p>
                  Nullam id dolor id nibh ultricies vehicula ut id elit.
                  Curabitur blandit tempus porttitor. Integer posuere erat a
                  ante venenatis dapibus posuere velit aliquet. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Vestibulum id
                  ligula porta felis euismod semper. Donec id elit non mi porta
                  gravida at eget metus. Vestibulum id ligula porta felis
                  euismod semper.
                </p>
                <!-- Post Single - Content End -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
  name: "Privacy",
  components: {
    Hero,
  },
  data() {
    return {
      pageTitle: "Privacy",
      bandcamp: "Privacy",
    };
  },
};
</script>

