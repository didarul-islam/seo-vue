<template>
  <section
    id="page-title"
    class="page-title-parallax page-title-center page-title-dark include-header"
    style="
      background-image: linear-gradient(to top, rgba(254, 150, 3, 0.5), #39384d),
        url('demos/seo/images/services/content_marketing-title.jpg');
      background-size: cover;
      padding: 120px 0;
    "
    data-bottom-top="background-position:0px 300px;"
    data-top-bottom="background-position:0px -300px;"
  >
    <div id="particles-line"></div>

    <div class="container clearfix mt-4">
      <div class="badge badge-pill border border-light text-light">
        Get In Touch
      </div>
      <h1>{{pageTitle}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{bandcamp}}</li>
      </ol>
    </div>
  </section>
</template>
<script>
export default {
  name: "Hero",
  props:[
    "bandcamp", 
    "pageTitle"
  ]
 
};
</script>