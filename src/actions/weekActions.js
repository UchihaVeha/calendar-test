export const UPDATE_WEEK_REQUEST = 'UPDATE_WEEK_REQUEST';

export const updateWeek = (value, id) => ({
  type: UPDATE_WEEK_REQUEST,
  value,
  id
});
