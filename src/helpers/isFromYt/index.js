const isFromYt = (url) => /^(?:https?:\/\/)?(?:(?:www\.)?youtube.com\/watch\?v=|youtu.be\/)(\w+)$/.exec(url);
export default isFromYt;
