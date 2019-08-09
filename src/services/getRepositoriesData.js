import axios from "axios";

export const getRepositories = orgName =>
  axios(`https://api.github.com/orgs/${orgName}/repos`);
