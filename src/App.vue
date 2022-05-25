<template>
  <main class="wrapper">
    <Header />
    <SearchForm @handleClick="handleSearch" />
    <Results v-if="data && !isError && !isLoading" :data="data" />
    <Loading v-else-if="isLoading" />
    <Error v-else-if="isError" />
  </main>
</template>
<script>
import Error from './components/Error.vue';
import Header from './components/Header.vue';
import Loading from './components/Loading.vue';
import Results from './components/Results.vue';
import SearchForm from './components/SearchForm.vue';
import useFetch from './composable/useFetch';

export default {
  name: 'App',
  components: {
    Header,
    SearchForm,
    Results,
    Loading,
    Error,
  },

  setup() {
    const {
      getData, data, isError, isLoading,
    } = useFetch();

    const handleSearch = (inputValue) => {
      const query = `https://api.github.com/users/${inputValue}`;
      getData(query);
    };

    return {
      handleSearch,
      data,
      isError,
      isLoading,
    };
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Radio+Canada&family=Roboto+Mono&display=swap");
@import "./_variables.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Roboto Mono", monospace;
  .wrapper {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $dark_blue;
    color: $text_white;
  }
}
</style>
