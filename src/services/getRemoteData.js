export const getRemoteData = async (url) => {
  const resp = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
  ).catch(function (error) {
    console.error(error);
  });
  const data = await resp.json();
  return JSON.parse(data.contents);
};
