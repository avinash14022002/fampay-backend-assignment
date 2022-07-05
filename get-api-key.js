
// FAMPAY INTERVIEW BONUS POINT 1 ##############
// ROUND ROBIN WAY TO GET API KEYS
const { API_KEY } = process.env;

const YOUTUBE_API_KEYS = [
  "AIzaSyCH5WqfoBAdMcQUvLC6rrS20fio5BhO3tU",
  "AIzaSyAaMob35c9SiXvTn_ftEGhb3A2gNGaUZd4",
  "AIzaSyAWyVCiEmzGARkkKZt6Pk-QPju3z5tDstk"
]; // adding more API keys to this array, will increase our usage units, and increase our quota

let idx = 0;

module.exports = () => {
    idx = (idx + 1) % YOUTUBE_API_KEYS.length;
    return YOUTUBE_API_KEYS[idx];
};
