<template>
  <div class="home-container">
    <div class="home-content">
      <h1 id="myname">I'm Emmanuel Odedele</h1>
      <p class="detail">
        Frontend developer (AltSchooler), Graphic designer, Illustrator,
        Animation and Car enthisiast and lover of music.
      </p>
      <p class="detail">
        Learning and working to make magic happen on the internet. View my
        <span id="projects" @click="projects">Projects</span>, <span id="resume" @click="resume">Resume</span>, <span id="contact" @click="contact">Contact Me</span>, or send me an email at
        emmaodedele@gmail.com.
        <!-- é -->
      </p>
      <br />
      <p class="detail">You are welcome to my Portfolio.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    projects(){
      this.$router.push({name:'Projects'})
    },
    resume(){
      this.$router.push({name:'Resume'})
    },
    contact(){
      this.$router.push({name:'Contact'})
    }
  }
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
  padding: 120px 0;
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
  line-height: 1.6;
}

#projects, #resume, #contact{
  cursor: pointer;
  background: #e7e7e7;
  color: #192430;
  padding: 2px 10px;
  border-radius: 5px;
}

</style>
