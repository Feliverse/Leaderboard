export const getScores = async () => {
  const resFetch = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ONkrKMpyPufkB8PIueYO/scores/');
  const data = await resFetch.json();
  console.log('data:', data);
  const { status } = resFetch; 
  if (status !== 200) return 'Error';
  return { data, status };
};

// Id game: ONkrKMpyPufkB8PIueYO