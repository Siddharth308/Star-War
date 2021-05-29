import React from "react";

function useFetchData(link) {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  React.useEffect(() => {
      setIsLoading(true)
    fetch(link)
    .then((response) => response.json())
    .then((data) => {
      setData(data.results)
      console.log(data)
    })
      .catch((err) => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [link]);

  return {
    data,
    isLoading,
    isError
  };
}
const useDebounce = (query, delay) => {
  const [debounceQuery, setDebounceQuery] = React.useState(query);
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceQuery(query);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [query, delay]);
  return { debounceQuery };
};
export { useFetchData, useDebounce };
