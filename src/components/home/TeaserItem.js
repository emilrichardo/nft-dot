import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
const TeaserItem = ({color,title,text}) => {
    return (
    <li className={color ? color : "teaseritem"}>
      <StaticImage  src="../../assets/body/logo_icon_front.svg"/>
      <h4 className="h3">{ title }</h4>
      <p>{text}</p>
    </li>
    );
}

export default TeaserItem;