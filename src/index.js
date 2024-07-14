import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} />
    <StarRating
      color="red"
      size="48"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    <App />
  </React.StrictMode>
);
