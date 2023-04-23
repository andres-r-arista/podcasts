export const getRemoteData = async (url) => {
  const resp = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
  )
  const data = await resp.json();
  return JSON.parse(data.contents);
};
