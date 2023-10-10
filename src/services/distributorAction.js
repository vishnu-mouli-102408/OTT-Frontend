import axios from "axios";
import { DEV_API } from "../env";
const token = localStorage.getItem("token");
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJoYXJhdGggR2FkaSIsImVtYWlsIjoiYmhhcmF0aC5nYWRpKzEyQGd5dHdvcmt6LmNvbSIsImlhdCI6MTY5NjkyODc2MCwiZXhwIjoxNjk3MTg3OTYwfQ.FNX6ECfNhcg0UXK3bRODxrVg8jCqIC8_znxkFqI1tnk";
export const getAllMoviesDistributor = (data, headers) => {
  const { accepted = false, rejected = false } = data;

  return new Promise((resolve, reject) => {
    axios
      .get(`${DEV_API}/api/v1/getAllUploadedMoviesByMe`, {
        params: { accepted, rejected },
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        resolve({ data: res.data.movies });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
