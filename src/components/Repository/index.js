import React from 'react';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Star from '../../assets/icons/star';
import Fork from '../../assets/icons/fork';
import Issue from '../../assets/icons/issue';

import './repository.css';

export default function Repository(props) {
  const {
    name,
    description,
    language,
    forks_count,
    stargazers_count,
    open_issues_count,
    updated_at
  } = props;

  return (
    <li className="repository">
      <h3 className="repository__title">{name}</h3>
      <p className="repository__description">{description}</p>
      <div className="repository__informations">
        {language && (
          <span className="repository__informations__item">{language}</span>
        )}
        <span className="repository__informations__item">
          <Fork /> {forks_count}
        </span>
        <span className="repository__informations__item">
          <Star /> {stargazers_count}
        </span>
        <span className="repository__informations__item">
          <Issue />
          {open_issues_count}
        </span>
        <span className="repository__informations__item">
          Há {distanceInWords(updated_at, new Date(), { locale: pt })}
        </span>
      </div>
    </li>
  );
}
