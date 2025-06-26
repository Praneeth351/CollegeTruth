let BASE_URL = process.env.REACT_APP_SERVER;

if (!BASE_URL) {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    BASE_URL = "http://localhost:4000/";
  } else {
    BASE_URL = "https://your-backend.onrender.com/";
  }
}

export { BASE_URL };
