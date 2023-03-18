<template>
  <div class="page">
    <nav>
      <div class="nav-content">
        <!-- <img src="./assets/logo.png" /> -->
        <h1 id="eo" @click="redirect">EO</h1>
        <div class="routes">
          <router-link :to="{name:'Home'}">Home</router-link>
          <router-link :to="{name:'Projects'}">Projects</router-link>
          <router-link :to="{name:'Resume'}">Resume</router-link>
          <router-link :to="{name:'Contact'}">Contact</router-link>
        </div>
      </div>
    </nav>
    <router-view />
    <footer>
      <div class="footer-content">
        <div class="footer-paragraphs">
          <a href="https://twitter.com/EmmaOdedele?t=EGg7S1DJso6iTZez5LWL_A&s=09" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://instagram.com/emma_odedele?igshid=ZDdkNTZiNTM=" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/emmanuel-odedele-56b4001b1/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.facebook.com/Emmauel.Odedele" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://github.com/EmmanuelOdedele" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  component: {},
  methods:{
    redirect() {
      this.$router.push({name:'Home'})
    }
  }
};
</script>

<style>
#app {
  font-family: Campton, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page {
  display: flex;
  flex-direction: column;
  height: 100%;
  /* background: url(./assets/rm380-10.jpg); */
  /* background-repeat: no-repeat;
  background-size: cover ;
  background-attachment: fixed;
  background-image: linear-gradient(160deg, white, #f1f5f8) ; */
}


footer {
  justify-content: center;
  /* background: blanchedalmond; */
  height: 90px;
  display: flex;
}

.footer-content {
  /* background-color: #2c3e; */
  justify-content: left;
  display: flex;
  width: 67%;
}

.footer-paragraphs{
  display: flex;
  /* background: brown; */
  width: 50%;
  justify-content: space-between;
}

footer a {
  display: inline;
  margin: 0;
  font-size: small;
  text-decoration: none;
  color: #2c3e50;
}

img {
  width: 30px;
}

#eo{
  margin: 0;
  cursor: pointer;
}

nav {
  /* background: #42b983; */
  height: 100px;
  padding: 0 120px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  /* position: fixed; */
  /* top: 0; */
}

.nav-content {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  /* background: pink; */
}


nav a {
  color: #2c3e50;
  margin-left: 25px;
  text-decoration: none;
}

nav a:hover{
  color:#ffd16d;
  transition: 0.2s ease-in-out;
}

nav a.router-link-exact-active {
  color: #ffb921;
}
</style>
