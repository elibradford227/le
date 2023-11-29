import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import EventCard from '../../components/event/eventCard';
import { getEvents } from '../../utils/data/eventData';

function Home() {
  const [events, setEvents] = useState([]);

  const router = useRouter();

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
  }, []);

  return (
    <article className="events">
      <h1>events</h1>
      <Button
        onClick={() => {
          router.push('/events/new/new');
        }}
      >
        Register New Event
      </Button>
      {events.map((event) => (
        <section key={`event--${event.id}`} className="event">
          <EventCard id={event.id} title={event.title} description={event.description} numberOfPlayers={event.number_of_players} skillLevel={event.skill_level} />
        </section>
      ))}
    </article>
  );
}

export default Home;
