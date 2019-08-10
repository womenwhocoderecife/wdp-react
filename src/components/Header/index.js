import React, { useState, useEffect } from 'react';
import { getInformations } from '../../services/getRepositoriesData';

import './header.css';

const Header = () => {
  const [infos, setInfos] = useState({});

  useEffect(() => {
    async function fetchInfo() {
      const result = await getInformations('womenwhocoderecife');
      setInfos(result.data);
    }
    fetchInfo();
  }, []);

  return (
    <header className="header">
      <img className="header__img" src={infos.avatar_url} alt="avatar" />
      <div>
        <h1 className="header__name">{infos.name}</h1>
        <p className="header__description">{infos.description}</p>
      </div>
    </header>
  );
};

export default Header;
