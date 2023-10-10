import axios from "axios";
import { DEV_API } from "../env";
// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlByYXZlZW4gZGRkIiwiZW1haWwiOiJwcmF2ZWVucHJha2FzaDExMEBnbWFpbC5jb20iLCJpYXQiOjE2OTY4NzA2MjYsImV4cCI6MTY5NzEyOTgyNn0.arCFBunk4dciH4W5nJzW3sKata8aUqBaCDh_zLdHmL8`;
// const token = localStorage.getItem("token");
export const acceptRejectDistributor = (data, headers) => {
  const token = localStorage.getItem("token");
  const { distributorId, isAccepted = false, isRejected = false } = data;
  return new Promise((resolve, reject) => {
    axios
      .get(`${DEV_API}/api/v1/change-distributor-status/${distributorId}`, {
        params: { isAccepted, isRejected },
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const getDistributors = (data, headers) => {
  const { accepted = false, rejected: reject = false } = data;
  const token = localStorage.getItem("token");
  return new Promise((resolve, rejected) => {
    axios
      .get(`${DEV_API}/api/v1/getDistributors`, {
        params: { accepted, rejected: reject },
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        const data = res.data.distributors;
        resolve({ data });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const getAllMoviesAdmin = (data, headers = {}) => {
  const { accepted = false, rejected: reject = false } = data;
  const token = localStorage.getItem("token");
  return new Promise((resolve, rejected) => {
    axios
      .get(`${DEV_API}/api/v1/getAllMovies`, {
        params: { accepted, rejected: reject },
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        resolve({ data: res.data.movies });
      })
      .catch((err) => {
        rejected(err);
      });
  });
};
export const getAllUsers = () => {
  const token = localStorage.getItem("token");
  return new Promise((resolve, reject) => {
    axios
      .get(`${DEV_API}/api/v1/getAllUsers`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        resolve({ data: res.data.users });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// export const getAllUsers = (data, headers) => {
//   const { movieId, isAccepted = false, isRejected = false } = data;
//   const token = localStorage.getItem("token");
//   return new Promise((resolve, reject) => {
//     axios
//       .get(`${DEV_API}/api/v1/change-movie-status/${movieId}`, {
//         params: { isAccepted, isRejected },
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "ngrok-skip-browser-warning": "69420",
//         },
//       })
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };
// export const distributorMovies = (data) => {
//   const { accepted = false, rejected = false, distributorId } = data;
//   return new Promise((resolve, rejected) => {
//     axios
//       .get(
//         `${DEV_API}/api/v1/getAllUploadedMoviesByDistributor/${distributorId}`,
//         {
//           params: { accepted, rejected },
//         }
//       )
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };
