<template>
  <div class="loading">
    <i class="fa-solid fa-circle-notch fa-4x"></i>
  </div>
</template>
<script>
export default {
  name: 'Loading',
};
</script>
<style lang="scss" scoped>
@import "../_variables.scss";

.loading {
  text-align: center;
  position: fixed;
  top: 300px;
  color: $text_gray;
  animation: rotate-center 0.4s ease-in-out infinite both;

  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}
</style>
