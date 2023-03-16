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
          <p>Twitter</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Github</p>
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
  /* background: url(./assets/rm380-10.jpg);
  background-repeat: no-repeat;
  background-size: cover ; */
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

footer p {
  display: inline;
  margin: 0;
  font-size: small;
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
  height: 80px;
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
