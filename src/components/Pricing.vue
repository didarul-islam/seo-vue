<template>
     <div
        class="section m-0"
        style="
          background: url('demos/seo/images/sections/4.png') no-repeat center
            top;
          background-size: cover;
          padding: 140px 0 0;
        "
      >
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-4 mt-4">
              <div class="heading-block border-bottom-0 bottommargin-sm">
                <div class="badge badge-pill badge-default">Pricing Table</div>
                <h3 class="nott ls0">
                  No Hidden Charges. <br />Choose Your Best Plan.
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt dolore voluptatem assumenda quae possimus sunt
                dignissimos tempora officia.
              </p>
              <div
                class="pricing-tenure-switcher d-flex align-items-center mb-4 position-relative"
                data-container="#pricing-switch"
              >
                <span class="pts-left font-weight-bold text-muted"
                  >Monthly</span
                >
                <div class="pts-switcher mx-3">
                  <div class="switch">
                    <input
                      id="switch-toggle-pricing-tenure"
                      class="switch-toggle switch-toggle-round"
                      type="checkbox"
                    />
                    <label
                      for="switch-toggle-pricing-tenure"
                      class="mb-0"
                    ></label>
                  </div>
                </div>
                <span class="pts-right font-weight-bold text-muted"
                  >Yearly</span
                >
                <div class="price-discount"></div>
              </div>
            </div>

            <div class="col-lg-8">
              <div id="section-pricing" class="page-section p-0 m-0">
                <div
                  id="pricing-switch"
                  class="pricing row align-items-end no-gutters col-mb-50 mb-4"
                >
                  <div class="col-md-6">
                    <div class="pricing-box">
                      <div class="pricing-title">
                        <img
                          class="mb-2 bg-transparent rounded-0"
                          src="demos/seo/images/icons/man.svg"
                          alt="Pricing Icon"
                          width="50"
                        />
                        <h3>Single User Plan</h3>
                        <span>Most Popular</span>
                      </div>
                      <div class="pricing-price">
                        <div class="pts-switch-content-left">
                          <span class="price-unit">&dollar;</span>5<span
                            class="price-tenure"
                            >Per Month</span
                          >
                        </div>
                        <div class="pts-switch-content-right">
                          <span class="price-unit">&dollar;</span>48<span
                            class="price-tenure"
                            >Per Year</span
                          >
                        </div>
                      </div>
                      <div class="pricing-features border-0 bg-transparent">
                        <ul>
                          <li>
                            <i class="icon-check-circle color mr-2"></i
                            ><strong>Limited</strong> Support
                          </li>
                          <li class="pts-switch-content-left text-black-50">
                            <i class="icon-minus-circle mr-2"></i
                            ><del style="opacity: 0.5"
                              ><strong>1</strong> Free Optimization</del
                            >
                          </li>
                          <li class="pts-switch-content-right">
                            <i class="icon-check-circle color mr-2"></i
                            ><strong>1</strong> Free Optimization
                          </li>
                          <li>
                            <i class="icon-check-circle color mr-2"></i
                            ><strong>100+</strong> Pages
                          </li>
                          <li>
                            <i class="icon-check-circle color mr-2"></i
                            ><strong>Single</strong> User License
                          </li>
                          <li>
                            <i class="icon-check-circle color mr-2"></i>Phone
                            &amp; Email Support
                          </li>
                        </ul>
                      </div>
                      <div class="pricing-action">
                        <div class="pts-switch-content-left">
                          <a
                            href="#"
                            class="button button-large button-rounded btn-block text-capitalize m-0 ls0"
                            >Get Started</a
                          >
                        </div>
                        <div class="pts-switch-content-right">
                          <a
                            href="#"
                            class="button button-large button-rounded btn-block text-capitalize m-0 ls0"
                            >Get Started</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="pricing-box">
                      <div class="pricing-title">
                        <img
                          class="mb-2 bg-transparent rounded-0"
                          src="demos/seo/images/icons/group.svg"
                          alt="Pricing Icon"
                          width="60"
                        />
                        <h3>Multiple User Plan</h3>
                      </div>
                      <div class="pricing-price">
                        <div class="pts-switch-content-left">
                          <span class="price-unit">&dollar;</span>12<span
                            class="price-tenure"
                            >Per Month</span
                          >
                        </div>
                        <div class="pts-switch-content-right">
                          <span class="price-unit">&dollar;</span>115<span
                            class="price-tenure"
                            >Per Year</span
                          >
                        </div>
                      </div>
                      <div class="pricing-features border-0 bg-transparent">
                        <ul>
                          <li>
                            <i class="icon-check-circle color mr-2"></i
                            ><strong>24*7</strong> Support
                          </li>
                          <li>
                            <i class="icon-check-circle color mr-2"></i
                            ><strong>10</strong> Free Optimization
                          </li>
                          <li>
                            <i class="icon-check-circle color mr-2"></i
                            ><strong>1000+</strong> Pages
                          </li>
                          <li>
                            <i class="icon-check-circle color mr-2"></i
                            ><strong>Unlimited</strong> User License
                          </li>
                          <li>
                            <i class="icon-check-circle color mr-2"></i>Phone
                            &amp; Email Support
                          </li>
                        </ul>
                      </div>
                      <div class="pricing-action">
                        <div class="pts-switch-content-left">
                          <a
                            href="#"
                            class="button button-rounded button-large button-light text-dark bg-white border btn-block nott m-0 ls0"
                            >Get Started</a
                          >
                        </div>
                        <div class="pts-switch-content-right">
                          <a
                            href="#"
                            class="button button-rounded button-large button-light text-dark bg-white border btn-block nott m-0 ls0"
                            >Get Started</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "Pricing",
 
};
</script>