import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  title, //
  description,
  numberOfPlayers,
  skillLevel,
}) => (
  <Card className="text-center">
    <Card.Header>Event</Card.Header>
    <Card.Body>
      <Card.Title>{description}</Card.Title>
      <Card.Text>{numberOfPlayers} players needed</Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Skill Level: {skillLevel}</Card.Footer>
  </Card>
);

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  skillLevel: PropTypes.number.isRequired,
};

export default EventCard;
