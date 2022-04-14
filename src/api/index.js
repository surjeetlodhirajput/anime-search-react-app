const axios = require("axios");
export const fetchPosts=(query)=>axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&page=1`);


