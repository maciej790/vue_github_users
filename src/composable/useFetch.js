import { ref } from 'vue';

const useFetch = () => {
  const data = ref();
  const isError = ref(false);
  const isLoading = ref(false);

  const getData = async (query) => {
    isLoading.value = true;
    try {
      const response = await fetch(query);
      const results = await response.json();
      isError.value = false;
      data.value = results;
      if (!response.ok) {
        throw new Error();
      }
    } catch (e) {
      console.log(e);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    data,
    getData,
    isError,
    isLoading,
  };
};

export default useFetch;
