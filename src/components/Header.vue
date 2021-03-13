<template>
  <header id="header" class="transparent-header floating-header header-size-md">
    <div id="header-wrap">
      <div class="container">
        <div class="header-row">
          <!-- Logo
						============================================= -->
          <div id="logo">
           <router-link 
             to="/"
              class="standard-logo"
              data-dark-logo="images/logo-dark.png"
              ><img src="images/logo.png" alt="Canvas Logo"
            /></router-link >
            <router-link 
              to="/"
              class="retina-logo"
              data-dark-logo="images/logo-dark@2x.png"
              ><img src="images/logo@2x.png" alt="Canvas Logo"
            /></router-link >
          </div>
          <!-- #logo end -->

          <div class="header-misc">
            <!-- Top Search
							============================================= -->
            <div id="top-search" class="header-misc-icon">
              <a href="#" id="top-search-trigger"
                ><i class="icon-line-search"></i><i class="icon-line-cross"></i
              ></a>
            </div>
            <!-- #top-search end -->

            <a
              href="#"
              class="button button-rounded ml-3 d-none d-sm-block"
              >Get Started</a
            >
          </div>

          <div id="primary-menu-trigger">
            <svg class="svg-trigger" viewBox="0 0 100 100">
              <path
                d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
              ></path>
              <path d="m 30,50 h 40"></path>
              <path
                d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
              ></path>
            </svg>
          </div>

          <!-- Primary Navigation
						============================================= -->
          <nav class="primary-menu with-arrows">
            <ul class="menu-container">
              <li class="menu-item current">
                <router-link to="/"  class="menu-link"><div>Home </div></router-link >
              </li>
              <li class="menu-item">
                <router-link  to="/what-we-do"  class="menu-link" href="demo-seo-about.html"
                  ><div>What We Do</div></router-link 
                >
              </li>
              <li class="menu-item mega-menu">
                <div class="menu-link"><div>Services</div></div>
                <div class="mega-menu-content mega-menu-style-2 px-0">
                  <div class="container">
                    <div class="row">
                      <router-link
                       to="/seo"
                        class="mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4"
                      >
                        <div class="feature-box">
                          <div class="fbox-icon mb-2">
                            
                            <img
                              src="demos/seo/images/icons/seo.svg"
                              alt="Feature Icon"
                              class="bg-transparent rounded-0"
                            />
                          </div>
                          <div class="fbox-content">
                            <h3 class="nott ls0">SEO Optimization</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Commodi, ipsa!
                            </p>
                          </div>
                        </div>
                      </router-link>
                      <a
                       
                        class="mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4"
                      >
                        <div class="feature-box">
                          <div class="fbox-icon mb-2">
                            <img
                              src="demos/seo/images/icons/social.svg"
                              alt="Feature Icon"
                              class="bg-transparent rounded-0"
                            />
                          </div>
                          <div class="fbox-content">
                            <h3 class="nott ls0">Social Media Marketing</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Commodi, ipsa!
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                       
                        class="mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4"
                      >
                        <div class="feature-box">
                          <div class="fbox-icon mb-2">
                            <img
                              src="demos/seo/images/icons/adword.svg"
                              alt="Feature Icon"
                              class="bg-transparent rounded-0"
                            />
                          </div>
                          <div class="fbox-content">
                            <h3 class="nott ls0">Adwords Campaign</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Commodi, ipsa!
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                       
                        class="mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4"
                      >
                        <div class="feature-box">
                          <div class="fbox-icon mb-2">
                            <img
                              src="demos/seo/images/icons/experience.svg"
                              alt="Feature Icon"
                              class="bg-transparent rounded-0"
                            />
                          </div>
                          <div class="fbox-content">
                            <h3 class="nott ls0">Customer Experience</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Commodi, ipsa!
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        
                        class="mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4"
                      >
                        <div class="feature-box">
                          <div class="fbox-icon mb-2">
                            <img
                              src="demos/seo/images/icons/analysis.svg"
                              alt="Feature Icon"
                              class="bg-transparent rounded-0"
                            />
                          </div>
                          <div class="fbox-content">
                            <h3 class="nott ls0">Digital Analysis</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Commodi, ipsa!
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                      
                        class="mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4"
                      >
                        <div class="feature-box">
                          <div class="fbox-icon mb-2">
                            <img
                              src="demos/seo/images/icons/content_marketing.svg"
                              alt="Feature Icon"
                              class="bg-transparent rounded-0"
                            />
                          </div>
                          <div class="fbox-content">
                            <h3 class="nott ls0">Content Marketing</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Commodi, ipsa!
                            </p>
                          </div>
                        </div>
                      </a>
                      <div
                        class="mega-menu-column sub-menu-container col-12 p-0"
                      >
                        <a
                         
                          class="button button-rounded button-large nott ls0 btn-block text-center m-0 rounded-0 py-3 button-light"
                          >View All <i class="icon-line-arrow-right"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="menu-item" >
                <router-link to="/faqs" class="menu-link" 
                  ><div>FAQs</div></router-link
                >
              </li>
              <li class="menu-item">
                <router-link to="/contact" class="menu-link" 
                  ><div>Contact</div></router-link
                >
              </li>
            </ul>
          </nav>
          <!-- #primary-menu end -->

          <form class="top-search-form" action="search.html" method="get">
            <input
              type="text"
              name="q"
              class="form-control"
              value=""
              placeholder="Type &amp; Hit Enter.."
              autocomplete="off"
            />
          </form>
        </div>
      </div>
    </div>
    <div class="header-wrap-clone"></div>
  </header>
</template>

<script>
export default {
  name: "Header",
 
};
</script>