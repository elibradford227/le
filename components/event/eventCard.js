import PropTypes from 'prop-types';
import React from 'react';
import Card from 'react-bootstrap/card';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const EventCard = ({
  id,
  title, //
  description,
  numberOfPlayers,
  skillLevel,
}) => (
  <Card className="text-center">
    <Card.Header>Event</Card.Header>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Title>{description}</Card.Title>
      <Card.Text>{numberOfPlayers} players needed</Card.Text>
      <Link href={`/events/edit/${id}`} passHref>
        <Button variant="primary" className="m-2">
          Edit Event
        </Button>
      </Link>
    </Card.Body>
    <Card.Footer className="text-muted">Skill Level: {skillLevel}</Card.Footer>
  </Card>
);

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  skillLevel: PropTypes.number.isRequired,
};

export default EventCard;
