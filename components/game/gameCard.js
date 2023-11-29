import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const GameCard = ({
  id,
  title, //
  maker,
  numberOfPlayers,
  skillLevel,
}) => (
  <Card className="text-center">
    <Card.Header>{title}</Card.Header>
    <Card.Body>
      <Card.Title>By: {maker}</Card.Title>
      <Card.Text>{numberOfPlayers} players needed</Card.Text>
    </Card.Body>
    <Link href={`/games/edit/${id}`} passHref>
      <Button variant="primary" className="m-2">
        Edit Event
      </Button>
    </Link>
    <Card.Footer className="text-muted">Skill Level: {skillLevel}</Card.Footer>
  </Card>
);

GameCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  skillLevel: PropTypes.number.isRequired,
};

export default GameCard;
