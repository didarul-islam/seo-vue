<template>
  <div
    class="section mt-3 mb-3"
    style="
      background: url('demos/seo/images/sections/1.jpg') no-repeat center center;
      background-size: cover;
      padding: 100px 0;
    "
  >
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-md-4">
          <div class="heading-block border-bottom-0 bottommargin-sm">
            <div class="badge badge-pill badge-default">Careers</div>
            <h3 class="nott ls0">Get your free Quote today</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            dolore voluptatem assumenda quae possimus sunt dignissimos tempora
            officia.
          </p>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h4 class="mb-3">Apply Now</h4>
              <div class="form-widget">
                <div class="form-result"></div>
                <form
                  class="row mb-0"
                  id="template-contactform"
                  name="template-contactform"
                  action="include/form.php"
                  method="post"
                >
                  <div class="col-12 form-group mb-3">
                    <label for="template-contactform-name">Name:*</label>
                    <input
                      type="text"
                      id="template-contactform-name"
                      name="template-contactform-name"
                      class="form-control input-sm required"
                      value=""
                    />
                  </div>
                  <div class="col-12 form-group mb-3">
                    <label for="template-contactform-email"
                      >Email Address:*</label
                    >
                    <input
                      type="email"
                      id="template-contactform-email"
                      name="template-contactform-email"
                      class="form-control input-sm required"
                      value=""
                    />
                  </div>
                  <div class="col-12 form-group mb-4">
                    <label for="template-contactform-website">Website:*</label>
                    <input
                      type="text"
                      id="template-contactform-website"
                      name="template-contactform-website"
                      class="form-control input-sm required"
                      value=""
                    />
                  </div>
                  <div class="col-12 form-group mb-0">
                    <button
                      class="button button-rounded btn-block nott ls0 m-0"
                      type="submit"
                      id="template-contactform-submit"
                      name="template-contactform-submit"
                      value="submit"
                    >
                      Apply Now
                    </button>
                  </div>

                  <input
                    type="hidden"
                    name="prefix"
                    value="template-contactform-"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 mt-5 mt-md-0 center">
          <a
            href="https://www.youtube.com/watch?v=P3Huse9K6Xs"
            data-lightbox="iframe"
            class="play-icon shadow"
            ><i class="icon-play"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
 
};
</script>