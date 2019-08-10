import React, { useState, useEffect } from 'react';
import Repository from '../Repository';

import './repositories.css';
import { getRepositories } from '../../services/getRepositoriesData';

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getRepositories('womenwhocoderecife');
      setRepositories(result.data);
    };
    fetchData();
  }, []);

  return (
    <ul className="repositories">
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
    </ul>
  );
};

export default Repositories;
