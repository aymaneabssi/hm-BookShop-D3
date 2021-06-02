import React from 'react';

import { Card, Button } from 'react-bootstrap';

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={
          this.state.selected
            ? { transform: 'scale(1.1)' }
            : { transform: 'scale(1)' }
        }
      >
        <Card.Img variant='top' src={this.props.book.img} height='300px' />
        <Card.Body>
          <Card.Title>{this.props.book.title.slice(0, 15)}...</Card.Title>
          <Card.Text>${this.props.book.price}</Card.Text>
          <Button variant='success'>Add to Cart</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
