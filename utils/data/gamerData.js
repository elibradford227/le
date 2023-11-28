import { clientCredentials } from '../client';

const getGamers = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/gamers`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createGamers = (gamer) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/gamers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gamer),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getGameTypes = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/gametypes`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { getGamers, createGamers, getGameTypes };
