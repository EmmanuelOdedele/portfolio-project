<template>
    <div class="contact-container">
    <div class="contact-content">
      <h1 id="page-title">Contact Me.</h1>
      <!-- <p class="detail">
        Frontend developer (AltSchooler), Graphic designer, Illustrator,
        Animation and Car enthisiast and lover of music
      </p> -->
      <br/>

      <div class="form-container">
        <ContactForm/> 
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: "Contact",
  components: {ContactForm},
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
