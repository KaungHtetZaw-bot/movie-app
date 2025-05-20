import axios from "axios";

const api_key = "827da30611996413a99ad00d7811e0a4";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { api, api_key };
