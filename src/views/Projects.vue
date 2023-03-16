<template>
  <div class="projects-container">
    <div class="projects-content">
      <h1 id="page-title">Projects.</h1>
      <!-- <p class="detail">
        Frontend developer (AltSchooler), Graphic designer, Illustrator,
        Animation and Car enthisiast and lover of music
      </p> -->
      <br />

      <div class="repo-container" v-if="repos.length">
        <p v-for="repo in repos" :key="repo.id">{{ repo.name }}</p>
      </div>
      <div v-else>Loading repositories...</div>
    </div>
  </div>
</template>

<script>
// import { assertExpressionStatement } from "@babel/types";
// import { ref, onMounted } from "vue";

import axios from "axios";

export default {
  name: "Projects",
  components: {},

  // setup() {
  //   let repos = ref([]);
  //   onMounted(() => {
  //     fetch("https://api.github.com/users/EmmanuelOdedele/repos")
  //       .then((res) => res.json())
  //       .then((data) => (repos = data))
  //       .catch((err) => console.log(err.message));
  //     console.log(repos);
  //   });
  //   return { repos };
  // },

  data() {
    return {
      repos: [],
    };
  },

  created: function () {
    axios.get("https://api.github.com/users/EmmanuelOdedele/repos").then((response) => {
        this.repos = response.data;
      });
  }

  // mounted() {
  //   fetch("https://api.github.com/users/EmmanuelOdedele/repos")
  //     .then((res) => res.json())
  //     .then((data) => (this.repos = data))
  //     .catch((err) => console.log(err.message));
  //   // console.log(repos);
  //   return repos = 'i'
  // },

  // data() {
  //   return {
  //     repos: [],
  //   };
  // },

  // created() {
  //   axios
  //     .get("https://api.github.com/users/EmmanuelOdedele/repos")
  //     .then((response) => {
  //       this.repos = response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   console.log(repos);
  // },
};
</script>

<style>
.projects-container {
  /* background: grey; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* margin-top: 80px; */
}
.projects-content {
  display: flex;
  flex-direction: column;
  width: 67%;
  /* background: thistle; */
  padding: 80px 0 45px 0;
  text-align: left;
}
#page-title {
  font-size: 3em;
  font-weight: 700;
  margin: 6px 0 10px 0;
}

.detail {
  margin: 10px 0 0 0;
}

/* .repo-container {
  background: red;
} */

.repo-container p {
  background: #2c3e50;
  padding: 20px;
  margin: 0 0 15px 0;
  border-radius: 10px;
  max-width: 600px;
  cursor: pointer;
  color: white;
}
</style>
