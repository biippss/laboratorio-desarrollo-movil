import axios from "axios";

const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL;
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const githubClient = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  },
});

export const fetchRepositories = async () => {
  const response = await githubClient.get("/user/repos");
  return response.data;
};

export const fetchUserInfo = async () => {
  const response = await githubClient.get("/user");
  return response.data;
};

export const createRepository = async (repository: any) => {
  const response = await githubClient.post("/user/repos", repository);
  return response.data;
};
