export const getCheckins = async (id) => {
  const res = await fetch(`/api/checkins/`);
  if (res.ok) {
    return await res.json();
  } else if (res.status === 404) {
    console.log("No Checkins Available :(");
    return {};
  }
};

export const createCheckin = async (songId, review, rating, userId) => {
  const response = await fetch(`/api/users/${userId}/checkins`, {
    // const response = await fetch(`/api/users/checkins/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      songId,
      review,
      rating,
    }),
  });
  console.log("this works");
  return await response.json();
};
