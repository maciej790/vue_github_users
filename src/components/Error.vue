<template>
  <div class="error">
    <i class="fa-solid fa-face-sad-cry fa-4x"></i>
    <h3>No data!</h3>
  </div>
</template>
<script>
export default {
  name: 'Error',
};
</script>
<style lang="scss" scoped>
@import "../_variables.scss";

.error {
  position: fixed;
  top: 300px;
  color: $text_gray;
  text-align: center;

  i {
    margin: 0 0 20px 0;
  }
}
</style>
