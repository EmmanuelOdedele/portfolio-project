<template>
  <form>
    <label>Name:</label>
    <input type="text" />

    <label>Email:</label>
    <input type="email" />

    <label>Message:</label>
    <textarea></textarea>

    <div class="submit">
      <button id="contact-button">Send Message</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 520px;
  background: #2c3e50;
  text-align: left;
  padding: 20px 40px 40px 40px;
  border-radius: 10px;
  /* display: flex; */
}
label {
  color: #e7e7e7;
  display: inline-block;
  margin: 30px 0 8px;
  font-size: 1em;
  /* text-transform: uppercase; */
  letter-spacing: 1px;
  /* font-weight: bold; */
}
input {
  display: block;
  padding: 10px 10px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #2c3e50;
  border-radius: 5px;
  font-family: Campton, Helvetica, Arial, sans-serif;
  font-size: medium;
}
input:focus, textarea:focus{
  outline: none;
}
textarea {
  font-size: medium;
  font-family: Campton, Helvetica, Arial, sans-serif;
  display: block;
  padding: 10px 10px;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 100px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #2c3e50;
  border-radius: 5px;
}

.labelcursor {
  cursor: pointer;
}
#contact-button {
  font-size: medium;
  background-color: #e7e7e7;
  border: 0;
  padding: 10px 20px;
  margin-top: 30px;
  color: #2c3e50;
  border-radius: 5px;
  font-family: Campton, Helvetica, Arial, sans-serif;
}
#contact-button:hover{
  background:#7d8791;
  /* color: #192430; */
  color: #e7e7e7;
  transition: 0.2s ease-in;
}
.submit {
  text-align: left;
}
</style>
