<template>
  <div class="contact-container">
    <div class="contact-content">
      <h1 id="page-title">Repository Info.</h1>
      <div class="repo-container" v-if="repos.length">
        <div v-for="repo in filteredRepos">
          {{ repo.name }}
          {{ repo.id }}
          {{ repo.html_url }}
          {{ repo.homepage }}
        </div>
      </div>
      <div v-else>Loading repositories...</div>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import axios from "axios";


export default {
  name: "RepoInfo",
  components: { ContactForm },
  props: ["id"],
  data() {
    return {
      repos: [],
    };
  },

  computed: {
    filteredRepos() {
      return this.repos.filter((repo) => repo.id == this.$route.params.id);
    },
  },

  created: function () {
    axios
      .get("https://api.github.com/users/EmmanuelOdedele/repos")
      .then((response) => {
        this.repos = response.data;
        console.log(this.repos);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.contact-container {
  /* background: grey; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* margin-top: 80px; */
}
.contact-content {
  display: flex;
  flex-direction: column;
  width: 67%;
  /* background: thistle; */
  padding: 80px 0 60px 0;
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

/* .form-container{
background-color: #444;
} */
</style>
