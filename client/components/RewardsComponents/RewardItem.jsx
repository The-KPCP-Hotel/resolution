import React from 'react';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const RewardItem = ({reward}) => {
  const { stickerImg, price } = reward;

  let cost;
  switch (price) {
  case 'tier1':
    cost = 10;
    break;
  case 'tier2':
    cost = 20;
    break;
  default:
    cost = 10;
    break;
  }

  return (
    <Col>
      {cost}
      <Image src={stickerImg} />
    </Col>
  );
};

export default RewardItem;