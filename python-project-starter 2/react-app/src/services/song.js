export const getSongs = async () => {
  const response = await fetch("/api/songs/");
  // return await response.json();
  const songs = await response.json();
  return songs.songs;
};

export const getSong = async (id) => {
  const response = await fetch(`/api/songs/${id}`);
  return await response.json();
};

export const createSong = async (payload) => {
  const response = await fetch("/api/songs/", {
    method: "POST",
    body: payload,
  });

  return await response.json();
};

export const editSong = async (payload, id) => {
  const response = await fetch(`/api/songs/${id}`, {
    method: "PATCH",
    body: payload,
  });

  return await response.json();
};
