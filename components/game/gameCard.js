import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { deleteGame } from '../../utils/data/gameData';

export default function GameCard({
  id,
  title, //
  maker,
  numberOfPlayers,
  skillLevel,
}) {
  const { router } = useRouter();
  const deleteThisGame = () => {
    if (window.confirm('Delete Game?')) {
      deleteGame(id).then(() => router.push('/games/games'));
    }
  };
  return (
    <Card className="text-center">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>By: {maker}</Card.Title>
        <Card.Text>{numberOfPlayers} players needed</Card.Text>
      </Card.Body>
      <Link href={`/games/edit/${id}`} passHref>
        <Button variant="primary" className="m-2">
          Edit Game
        </Button>
      </Link>
      <Button variant="danger" onClick={deleteThisGame} className="m-2">
        Delete Game
      </Button>
      <Card.Footer className="text-muted">Skill Level: {skillLevel}</Card.Footer>
    </Card>
  );
}

GameCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  skillLevel: PropTypes.number.isRequired,
};

// export default GameCard;
