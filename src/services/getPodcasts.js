export const getPodcasts = async() => {

    const url = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
    const resp = await fetch( url );
    const data = await resp.json();
    return data?.feed?.entry;
}