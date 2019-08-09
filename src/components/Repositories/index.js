import React, { useState, useEffect } from "react";
import { getRepositories } from "../../services/getRepositoriesData";
import Repository from "../Repository";

// const repos = [
//   {
//     id: 1,
//     name: "workshops_wdp",
//     description: "workshops_wdp Workshop content from Women Dev Projects.",
//     language: "JavaScript",
//     forks_count: 6,
//     stargazers_count: 4,
//     open_issues_count: 2,
//     updated_at: "2018-11-19T00:12:18Z"
//   },
//   {
//     id: 2,
//     name: "womendevprojects",
//     description: "Together! Developing Technology with Impact <3",
//     language: "JavaScript",
//     forks_count: 6,
//     stargazers_count: 4,
//     open_issues_count: 2,
//     updated_at: "2018-11-19T00:12:18Z"
//   }
// ];

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getRepositories("womenwhocoderecife");
      setRepositories(result.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {repositories.map(repository => (
        <Repository
          key={repository.id}
          name={repository.name}
          description={repository.description}
          language={repository.language}
          forks_count={repository.forks_count}
          stargazers_count={repository.stargazers_count}
          open_issues_count={repository.open_issues_count}
          updated_at={repository.updated_at}
        />
      ))}
    </div>
  );
}
