<template>
  <header class="header">
    <h1 class="header__title">Devfinder</h1>
    <button class="header__switcher">
      <p>LIGHT</p>
      <i class="fa-solid fa-sun"></i>
    </button>
  </header>
</template>
<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
@import "../_variables.scss";
.header {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 0 0;

  .header__title {
    color: $text_white;
  }

  .header__switcher {
    border: none;
    outline: none;
    background: transparent;
    color: $text_white;
    display: flex;
    justify-content: space-evenly;
    width: 120px;
    padding: 7px 0 7px 0;
    font-size: 16px;
  }
}
</style>
