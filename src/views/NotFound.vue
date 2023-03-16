<template>
  <div class="nf-container">
    <div class="nf-content">
      <div class="animated">
        <h3 id="page-title">404</h3>
        <p class="detail">Page not found</p>
      </div>

      <p class="detail2">Use any of the links above to navigate back</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style>
.nf-container {
  /* background: grey; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* margin-top: 80px; */
}
.nf-content {
  display: flex;
  flex-direction: column;
  width: 67%;
  /* background: thistle; */
  padding: 100px 0;
  text-align: center;
  
}
.animated{
    animation: MoveUpDown 5s ease-in-out infinite;
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

.nf-content #page-title {
  font-size: 3em;
  font-weight: 700;
  margin: 0px;
  padding: 0;
}

.nf-content .detail {
  margin: 0;
}

.nf-content .detail2 {
  margin: 30px 0 0 0;
  font-size: small;
}
</style>
