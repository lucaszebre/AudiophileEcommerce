import React from 'react';
import AlsoLikeCart from './alsoLikeCart';
import '../styles/AlsoLikeCart';

// Define the interface for the props
interface AlsoLikeProps {
  imageD1: string;
  imageT1: string;
  imageM1: string;
  title1: string;
  details1: boolean;
  link1: string;

  imageD2: string;
  imageT2: string;
  imageM2: string;
  title2: string;
  details2: boolean;
  link2: string;

  imageD3: string;
  imageT3: string;
  imageM3: string;
  title3: string;
  details3: boolean;
  link3: string;
}

const AlsoLike: React.FC<AlsoLikeProps> = (props) => {
  return (
    <div className="AlsoLikeContainer"> 
      <h2>YOU MAY ALSO LIKE</h2>
      <div className="AlsoLikeWrapper">
        <AlsoLikeCart
          imageD={props.imageD1}
          imageT={props.imageT1}
          imageM={props.imageM1}
          title={props.title1}
          details={props.details1}
          link={props.link1}
        />
        <AlsoLikeCart
          imageD={props.imageD2}
          imageT={props.imageT2}
          imageM={props.imageM2}
          title={props.title2}
          details={props.details2}
          link={props.link2}
        />
        <AlsoLikeCart
          imageD={props.imageD3}
          imageT={props.imageT3}
          imageM={props.imageM3}
          title={props.title3}
          details={props.details3}
          link={props.link3}
        />
      </div>
    </div>
  );
}

export default AlsoLike;

