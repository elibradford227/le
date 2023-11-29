import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleEvent } from '../../../utils/data/eventData';
import EventForm from '../../../components/event/EventForm';
import { useAuth } from '../../../utils/context/authContext';

export default function EditEvent() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { id } = router.query;
  const { user } = useAuth();

  console.warn(id);

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleEvent(id).then(setEditItem);
  }, [id]);

  // TODO: pass object to form
  return (<EventForm user={user} obj={editItem} />);
}
