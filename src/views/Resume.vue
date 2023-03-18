<template>
  <div class="resume-container">
    <div class="resume-content">
      <h1 id="page-title">Resume.</h1>
      <p class="detail">View or download the resume</p>
      <br />

      <div class="resume">
        <div class="resume-item"><p>My Resume Picture</p></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  components: {},
};
</script>

<style>
.resume-container {
  /* background: grey; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* margin-top: 80px; */
}
.resume-content {
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

/* .resume{
background-color: #444;
} */

.resume-item {
  margin-top: 25px;
  background-color: aliceblue;
  height: 500px;
  width: 400px;
  border: 1px solid #2c3e50;
}

.resume-item p {
  margin: 5px 0 0 5px;
  font-size: small;
}
</style>
