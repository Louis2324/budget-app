//local storage fetcher
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
