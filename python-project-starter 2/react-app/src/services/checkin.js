export const getCheckins = async (id) => {
  const res = await fetch(`/api/movies/${id}/reviews`);
  if (res.ok) {
    return await res.json();
  } else if (res.status === 404) {
    console.log("No Checkins Available :(");
    return {};
  }
};

export const createCheckin = async (
  id,
  userId,
  songId,
  artistId,
  review,
  rating
) => {
  const response = await fetch(`/api/users/${userId}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      userId,
      songId,
      artistId,
      review,
      rating,
    }),
  });
  return await response.json();
};
