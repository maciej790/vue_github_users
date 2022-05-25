<template>
  <form class="search">
    <i class="fa-solid fa-magnifying-glass fa-2x"></i>
    <input class="search__input" placeholder="Search Github username..." v-model="inputValue" />
    <button class="search__button" @click="handleSearch">Search</button>
  </form>
</template>
<script>
import { ref } from 'vue';

export default {
  name: 'SearchForm',
  emits: ['handleClick'],

  setup(props, { emit }) {
    const inputValue = ref('');

    const handleSearch = (e) => {
      e.preventDefault();
      if (inputValue.value) {
        emit('handleClick', inputValue.value);
      }
    };

    return {
      handleSearch,
      inputValue,
    };
  },
};
</script>
<style lang="scss">
@import "../_variables.scss";

.search {
  width: 90%;
  margin-top: 50px;
  background: $light_blue;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;

  .search__input {
    background: transparent;
    text-align: center;
    width: 60%;
    height: 55px;
    border: none;
    outline: none;
    color: $text_gray;
    font-size: 17px;

    &::placeholder {
      color: $text_gray;
      font-size: 17px;
    }
  }

  .search__button {
    width: 30%;
    height: 55px;
    border: none;
    outline: none;
    border-radius: 15px;
    background: $search_button;
    color: $text_white;
    font-size: 20px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }

  i {
    color: $text_blue;
  }
}
</style>
