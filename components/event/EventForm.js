import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createEvent } from '../../utils/data/eventData';
import { getGames } from '../../utils/data/gameData';
import { getGamers } from '../../utils/data/gamerData';

const initialState = {
  time: '00:00:00',
  description: '',
  game: '',
  organizer: '',
  date: '00:00:00',
};

const EventForm = () => {
  const [games, setGames] = useState([]);
  const [gamers, setGamers] = useState([]);
  /*
  Since the input fields are bound to the values of
  the properties of this state variable, you need to
  provide some default values.
  */
  const [currentEvent, setcurrentEvent] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    getGames().then((res) => setGames(res));
    getGamers().then((res) => setGamers(res));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcurrentEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    const event = {
      game: Number(currentEvent.game),
      description: currentEvent.description,
      date: currentEvent.date,
      time: currentEvent.time,
      organizer: Number(currentEvent.organizer),
    };

    // Send POST request to your API
    createEvent(event).then(() => router.push('/events/events'));
    console.warn(event);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Game</Form.Label>
          <Form.Select
            name="game"
            required
            value={currentEvent.game}
            onChange={handleChange}
          >
            <option value="">Select a game</option>
            {
                games.map((game) => (
                  <option
                    key={game.id}
                    value={game.id}
                  >
                    {game.title}
                  </option>
                ))
            }
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>description</Form.Label>
          <Form.Control
            name="description"
            required
            value={currentEvent.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>time</Form.Label>
          <input
            type="time"
            name="time"
            required
            value={currentEvent.time}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>date</Form.Label>
          <input
            type="date"
            name="date"
            required
            value={currentEvent.date}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Organizer</Form.Label>
          <Form.Select
            name="organizer"
            required
            value={currentEvent.organizer}
            onChange={handleChange}
          >
            <option value="">Select an organizer</option>
            {
                gamers.map((gamer) => (
                  <option
                    key={gamer.id}
                    value={gamer.id}
                  >
                    {gamer.bio}
                  </option>
                ))
            }
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

EventForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventForm;
