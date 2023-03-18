<template>
  <div class="projects-container">
    <div class="projects-content">
      <h1 id="page-title">Projects.</h1>
      <br />

      <div class="repo-container" v-if="repos.length">
        <p v-for="repo in repos" :key="repo.id">
          <router-link id="link" :to="{ name: 'RepoInfo', params: { id: repo.id } }">
            <div id="repo-name">{{ repo.name }}</div>
          </router-link>
        </p>
      </div>
      <div v-else>Loading repositories...</div>

      <!-- Pagination -->
      <div class="pagination">
        <button v-if="page > 1" @click="previousPage">Previous</button>
        <button
          v-for="pageNumber in visiblePageNumbers"
          :key="pageNumber"
          :class="{ active: page === pageNumber }"
          @click="changePage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
        <button v-if="page < totalPages" @click="nextPage">Next</button>
      </div>
    </div>
  </div>

  <!-- <div class="loader" v-if="loading"></div> -->
</template>

<script>
import axios from "axios";

export default {
  name: "Projects",

  data() {
    return {
      repos: [],
      page: 1,
      perPage: 4,
      total: 0,
      // loading: false,
    };
  },

  methods: {
    getRepositories(page) {
      // this.loading = true;
      axios
        .get("https://api.github.com/users/EmmanuelOdedele/repos", {
          params: {
            page, // Set the page number to fetch
            per_page: this.perPage, // Set the number of items per page
          },
        })
        .then((response) => {
          this.repos = response.data;
          const linkHeader = response.headers["link"];
          if (linkHeader) {
            const lastLink = linkHeader
              .split(",")
              .find((link) => link.includes('rel="last"'));
            if (lastLink) {
              const lastPage = parseInt(lastLink.match(/page=(\d+)/)[1]);
              this.total = (lastPage - 1) * this.perPage + this.repos.length;
            }
          }
          console.log(this.repos);
        })
        .catch((error) => {
          console.log(error);
        });
      // .finally(() => {
      //   this.loading = false;
      // });
    },

    previousPage() {
      if (this.page > 1) {
        this.getRepositories(this.page - 1);
        this.page -= 1;
      }
    },

    nextPage() {
      if (this.page < this.totalPages) {
        this.getRepositories(this.page + 1);
        this.page += 1;
      }
    },

    changePage(pageNumber) {
      if (this.page !== pageNumber) {
        this.getRepositories(pageNumber);
        this.page = pageNumber;
      }
    },
  },

  mounted() {
    this.getRepositories(this.page);
  },

  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    visiblePageNumbers() {
      let start = Math.max(1, this.page - 1);
      let end = Math.min(this.totalPages, this.page + 1);
      if (end - start < 2) {
        if (start === 1) {
          end = Math.min(this.totalPages, end + 1);
        } else {
          start = Math.max(1, start - 1);
        }
      }
      const pageNumbers = [];
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    },
  },
};
</script>

<style scoped>
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
  padding: 80px 0 0 0;
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
  background: blue;
} */

/* .repo-container p {
  background: #2c3e50;
  padding: 20px;
  margin: 0 0 20px 0;
  border-radius: 10px;
  width: 450px;
  cursor: pointer;
  transition: transform 0.2s;
} */
/* .repo-container p:hover {
  transform: scale(1.03);
  background: #243444;
} */
#repo-name {
  color: white;
  text-decoration: none;
  background: #2c3e50;
  padding: 20px;
  margin: 0 0 10px 0;
  border-radius: 10px;
  width: 60%;
  cursor: pointer;
  /* transition: transform 0.2s; */
}


#link{
  text-decoration: none;
}

/* .loader {
  position: relative;
  width: 20px;
  height: 20px;
  margin: 0 auto;
}

.loader::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: #007aff;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
} */

.pagination {
  display: flex;
  /* justify-content: center;
  align-items: center; */
  padding: 20px 0 60px 0;
  gap: 20px;
  /* background-color: red; */
}

.pagination button {
  margin-top: 0;
  font-size: medium;
  border: 0;
  padding: 10px 20px;
  border-radius: 5px;
  color: #2c3e50;
  font-family: Campton, Helvetica, Arial, sans-serif;
}
.pagination button.active {
  background-color: #ffd16d;
}

.pagination button:hover {
  cursor: pointer;
  background-color: #e7e7e7;
  transition: 0.1s ease-in;
}
</style>
