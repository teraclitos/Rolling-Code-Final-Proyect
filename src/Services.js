const getNewsDetail = (params, auth, logout, loading, setData, navigation) => {
  const urlNewsDetail = "https://backend-news-eight.vercel.app/news/news";
  fetch(`${urlNewsDetail}/${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: auth,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (!json.error) {
        setData(json);
      } else {
        logout();
        navigation("/");
      }
    })
    .finally(() => loading(false));
  return auth;
};

export { getNewsDetail };
