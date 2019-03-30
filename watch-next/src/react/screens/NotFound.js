import React from "react";

// Components
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const NotFound = () => (
  <ErrorMessage
    message="We can't believe it, we just had it a minute ago!"
    details={"Not found."}
  />
);

export default NotFound;
