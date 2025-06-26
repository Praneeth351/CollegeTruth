let BASE_URL = process.env.REACT_APP_SERVER;

if (!BASE_URL) {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    BASE_URL = "http://localhost:4000/";
  } else {
    BASE_URL = "https://collegetruth-backend.onrender.com/";
  }
}

// ✅ Ensure BASE_URL always ends with a slash
if (!BASE_URL.endsWith("/")) {
  BASE_URL += "/";
}

export { BASE_URL };
