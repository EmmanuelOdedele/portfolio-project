<template>
  <div class="repoinfo-container">
    <div class="repoinfo-content">
      <h1 id="page-title">Repository Info.</h1>
      <div class="repo-container" v-if="repos.length">
        <div v-for="repo in filteredRepos">
          <h2>{{ repo.name }}</h2>
          <div id="repoinfo">
            <p>
              <i>Description:</i> <br />
              {{ repo.description }}
            </p>
            <div id="divider"></div>
            <p>
              <i>Language:</i>
              {{ repo.language }}
            </p>
            <div id="divider"></div>
            <p>
              <span><i>Forks:</i> {{ repo.forks }}</span>
              <span class="fsw">Stars: {{ repo.stargazers_count }}</span>
              <span class="fsw">Watchers: {{ repo.watchers_count }}</span>
            </p>
            <div id="divider"></div>
            <p>
              <i>Visibility:</i>
              {{ repo.visibility }}
            </p>
            <div id="divider"></div>
            <p>
              <i>View on Github:</i> <br />
              <a :href="repo.html_url">{{ repo.html_url }}</a>
            </p>
            <div id="divider"></div>
            <p>
              <i>Site:</i> <br />
              <a :href="repo.homepage" target="_blank" rel="noreferrer">{{
                repo.homepage
              }}</a>
            </p>
          </div>
        </div>
      </div>
      <div v-else>Loading repository info...</div>
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

<style scoped>
.repoinfo-container {
  /* background: grey; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* margin-top: 80px; */
}
.repoinfo-content {
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

#repoinfo {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 60%;
  background: #2c3e50;
  color: white;
  font-size: small;
  text-align: left;
  padding: 10px 40px 20px 40px;
  border-radius: 10px;
  /* display: flex; */
  word-wrap: break-word;
}

#repoinfo p {
  margin-bottom: 5px;
}

#divider {
  width: 100%;
  height: 1px;
  background-color: white;
  margin-top: 10px;
}

.fsw {
  margin-left: 15px;
}

a {
  text-decoration: none;
  color: white;
}
/* .repo-container {
  background-color: #444;
} */
</style>
