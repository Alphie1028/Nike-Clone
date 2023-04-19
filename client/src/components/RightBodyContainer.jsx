import React, { useEffect, useState } from 'react';
import Members from './members';
import Price from './Price';
import ShoeButtonGroup from './ShoeButtonGroup';
import FreeSR from './FreeSR';
import Reviews from './Reviews';
import InformationBlock from './InformationBlock';
import SizeGuide from './SizeGuide';
import Interest from './Interest';
import AddToCart from './AddToCart';
import Favorite from './Favorite';

const RightBodyContainer = (props) => {
  const [memberAccess, setMemberAccess] = useState(true);

  return (
    <div id='right-body-container'>
      {memberAccess && <Members />}
      <p style={{ margin: '0 0 5px 0', 'font-weight': '450', 'font-size': '28px', 'font-family': '"Helvetica Neue",Helvetica,Arial,sans-serif' }}>
        Air Jordan 1 Mid
      </p>
      <p style={{ margin: '0 0 20px 0', 'font-weight': '450', 'font-size': '16px', 'font-family': '"Helvetica Neue",Helvetica,Arial,sans-serif' }}>
        Men's Shoes
      </p>
      <Price
        setPrice={props.setPrice}
        price={props.price}
      />
      <ShoeButtonGroup
        setCurrentShoe={props.setCurrentShoe}
        currentShoe={props.currentShoe}
        setPrice={props.setPrice}
        id={props.id}
        setId={props.setId}
        setMemberAccess={setMemberAccess}
        focusImage={props.focusImage}
        setFocusedImage={props.setFocusedImage}
        thumbnailImages={props.thumbnailImages}
        setThumbnailImages={props.setThumbnailImages}
        shoeid={props.shoeid}
        setSizeArray={props.setSizeArray}
        setInterest={props.setInterest}
      />
      <SizeGuide sizeArray={props.sizeArray} />
      <Interest interest={props.interest} />
      <AddToCart />
      <Favorite />
      {props.currentShoe ? <InformationBlock currentShoe={props.currentShoe} /> : null}

      <FreeSR />
      <Reviews
        id={props.id}
        data={props.data}
      />
    </div>
  );
};

export default RightBodyContainer;
