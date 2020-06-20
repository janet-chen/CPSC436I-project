export const setSearch = (destination) => {
  return {
    type: 'SET',
    newSearch: destination
  };
};

export const saveResults = (imageUrls) => {
  return {
    type: 'SAVE',
    queryResults: imageUrls
  };
};

export const clearResults = () => {
  return {
    type: 'CLEAR'
  };
};
