import React from 'react';
import Button from './button';
import '../styles/AlsoLikeCart';

// Define the interface for the props
interface AlsoLikeCartProps {
  imageD: string;
  imageT: string;
  imageM: string;
  title: string;
  link: string;
  details: boolean;
}

const AlsoLikeCart: React.FC<AlsoLikeCartProps> = (props) => {
  return (
    <div className="AlsoLikeCartContainer">
      <img className='AlsoLikeCartImageD' src={props.imageD} alt={props.title} />
      <img className='AlsoLikeCartImageT' src={props.imageT} alt={props.title} />
      <img className='AlsoLikeCartImageM' src={props.imageM} alt={props.title} />
      <h1 className='AlsoLikeCartTitle'>{props.title}</h1>
      <Button
        text='SEE PRODUCT'
        color='white'
        backgroundColor='#D87D4A'
        border='none'
        link={props.link}
        details={props.details}
      />
    </div>
  );
}

export default AlsoLikeCart;

