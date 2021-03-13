<template>
  <div>
    <section
      class="gmap vh-60 topmargin-lg"
      data-address="Melbourne, Australia"
      data-markers='[{address: "Melbourne, Australia", html: $("#map-marker-1").html(), icon:{ image: "images/icons/map-icon-red.png", iconsize: [32, 39], iconanchor: [32,39] } }]'
    ></section>
    <div id="map-marker-1" class="d-none">
      <div style="width: 300px">
        <h4 class="mb-2">Hi! We are <span>Envato!</span></h4>
        <p class="mb-0" style="font-size: 1rem">
          Our mission is to help people to <strong>earn</strong> and to
          <strong>learn</strong> online. We operate
          <strong>marketplaces</strong> where hundreds of thousands of people
          buy and sell digital goods every day.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gmap",
 
};
</script>