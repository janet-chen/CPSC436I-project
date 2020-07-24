export const addTrip = input => {
  return {
    type: 'ADD_TRIP',
    title: input.title,
    days: input.days
  };
};

export const deleteTrip = text => {
  return {
    type: 'DELETE_TRIP',
    title: text
  };
};
