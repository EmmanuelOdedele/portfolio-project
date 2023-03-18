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
  width: 420px;
  background: #2c3e50;
  text-align: left;
  padding: 20px 40px 40px 40px;
  border-radius: 10px;
  /* display: flex; */
}
label {
  color: #a1b1c0;
  display: inline-block;
  margin: 30px 0 8px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 6px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #2c3e50;
  border-radius: 5px;
}
input:focus, textarea:focus{
  outline: none;
}
textarea {
  font-family: Campton, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: block;
  padding: 6px 6px;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 80px;
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
  background-color: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 30px;
  color: white;
  border-radius: 5px;
}
#contact-button:hover{
  background-color:#ffd16d;
  transition: 0.5s ease-in-out;
  color: #2c3e50;
}
.submit {
  text-align: left;
}
</style>
