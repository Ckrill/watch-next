const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.status + ": " + response.statusText);
  }
  return response.json();
};

export default handleErrors;
