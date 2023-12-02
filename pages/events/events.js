import React, { useEffect, useState, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import EventCard from '../../components/event/eventCard';
import { getEvents, leaveEvent, joinEvent } from '../../utils/data/eventData';
import { useAuth } from '../../utils/context/authContext';

function Home() {
  const [events, setEvents] = useState([]);

  const user = useAuth();

  const router = useRouter();

  const leaveEventFunc = useCallback((eventId, userId) => {
    console.warn(eventId, userId);
    leaveEvent(eventId, userId).then(router.reload);
  }, []);

  const joinEventFunc = useCallback((eventId, uid) => {
    joinEvent(eventId, uid).then(router.reload);
  }, []);

  useEffect(() => {
    getEvents(user.user.uid).then((data) => setEvents(data));
  }, [user.user.uid]);

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
        event.joined
          ? (
            <section key={`event--${event.id}`} className="event">
              <EventCard id={event.id} title={event.title} description={event.description} numberOfPlayers={event.number_of_players} skillLevel={event.skill_level} />
              <Button variant="danger" onClick={() => leaveEventFunc(event.id, user.user.uid)}>
                Leave Event
              </Button>
            </section>
          )
          : (
            <section key={`event--${event.id}`} className="event">
              <EventCard id={event.id} title={event.title} description={event.description} numberOfPlayers={event.number_of_players} skillLevel={event.skill_level} />
              <Button variant="danger" onClick={() => joinEventFunc(event.id, user.user.uid)}>
                Join Event
              </Button>
            </section>
          )
        // <section key={`event--${event.id}`} className="event">
        //   <EventCard id={event.id} title={event.title} description={event.description} numberOfPlayers={event.number_of_players} skillLevel={event.skill_level} />
        // </section>
      ))}
    </article>
  );
}

export default Home;
