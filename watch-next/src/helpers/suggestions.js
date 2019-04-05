export const findSuggestion = suggestions => {
  if (!suggestions.length) {
    const error = { message: `What the hell! You have seen all the movies.` };

    return { error };
  }
  const index = Math.floor(Math.random() * suggestions.length);

  const currentSuggestion = suggestions.splice(index, 1)[0];

  return { suggestions, currentSuggestion };
};

export const rewindHelper = (
  suggestions,
  currentSuggestion,
  alreadySuggested
) => {
  if (!alreadySuggested.length > 0) {
    return false;
  }

  // Add current suggestion back to suggestions
  suggestions.push(currentSuggestion);

  currentSuggestion = alreadySuggested.splice(
    [alreadySuggested.length - 1],
    1
  )[0];

  // Remove previous opinion from suggestion
  delete currentSuggestion.opinion;

  return { currentSuggestion, suggestions, alreadySuggested };
};

export const voteHelper = (alreadySuggested, currentSuggestion, opinion) => {
  if (currentSuggestion.opinion) {
    // Prevent the user from vote more than once
    return false;
  }

  currentSuggestion.opinion = opinion;

  alreadySuggested.push(currentSuggestion);

  return alreadySuggested;
};
