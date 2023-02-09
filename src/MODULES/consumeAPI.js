export const getScores = async () => {
  const resFetch = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ONkrKMpyPufkB8PIueYO/scores/');
  const data = await resFetch.json();
  console.log('data:', data);
  const { status } = resFetch; 
  return { data, status };
};

// Id game: ONkrKMpyPufkB8PIueYO

export const postScore = async (user, score) => {
    const resFetch = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    });
    const data = await resFetch.json();
    const { status } = resFetch;
    return { data, status };
  };