import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from './url';
const ProductCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://media.istockphoto.com/id/185008027/photo/trumpet.jpg?s=1024x1024&w=is&k=20&c=Qhf_KUCkRhn2SIcWnM8-nTbtKHaDsa28MP--VnuUhS0"
        alt="trumpet"
      />
      <Card.Body>
        <Card.Title>Trumpet</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">$80</Card.Subtitle>
        <Card.Text>
          The professional Brass Trumpet delivers a rich sound with its premium brass and gold-plated finish.
        </Card.Text>
        <Card.Link href="https://media.istockphoto.com/id/185008027/photo/trumpet.jpg?s=1024x1024&w=is&k=20&c=Qhf_KUCkRhn2SIcWnM8-nTbtKHaDsa28MP--VnuUhS0" target="blank">
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
