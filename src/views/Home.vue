<template>
  <div class="home-container">
    <div class="home-content">
      <h1 id="myname">I'm Emmanuel Odedele</h1>
      <p class="detail">
        Frontend developer (AltSchooler), Graphic designer, Illustrator,
        Animation and Car enthisiast and lover of music
      </p>
      <p class="detail">
        Learning and working to make magic happen on the internet. View my
        Projects, Resume, Contact Me, or send me an email at
        emmaodedele@gmail.com.
        <!-- é -->
      </p>
      <br />
      <p class="detail">Check out my projects</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
.home-container {
  /* background: grey; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.home-content {
  display: flex;
  flex-direction: column;
  width: 67%;
  /* background: thistle; */
  text-align: left;
}
#myname {
  font-size: 3em;
  font-weight: 700;
  margin: 6px 0 10px 0;
  animation: MoveUpDown 10s ease-in-out infinite;
}
@keyframes MoveUpDown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.detail {
  margin: 10px 0 0 0;
}
</style>
