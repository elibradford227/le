import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleGame } from '../../../utils/data/gameData';
import GameForm from '../../../components/game/gameForm';
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
    getSingleGame(id).then(setEditItem);
  }, [id]);

  // TODO: pass object to form
  return (<GameForm user={user} obj={editItem} />);
}
