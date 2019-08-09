import React from "react";
import { distanceInWords } from "date-fns";
import pt from "date-fns/locale/pt";
import Star from "../../assets/icons/star";
import Fork from "../../assets/icons/fork";
import Issue from "../../assets/icons/issue";

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
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <div>
        <span>{language}</span>
        <span>
          <Fork /> {forks_count}
        </span>
        <span>
          <Star /> {stargazers_count}
        </span>
        <span>
          <Issue />
          {open_issues_count}
        </span>
        <span>
          Há {distanceInWords(updated_at, new Date(), { locale: pt })}
        </span>
      </div>
    </div>
  );
}
