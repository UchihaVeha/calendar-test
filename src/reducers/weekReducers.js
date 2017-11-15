import { toHours } from 'utils/convertData';
import { UPDATE_WEEK_REQUEST } from 'actions/weekActions';

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_WEEK_REQUEST:
      return {
        ...state,
        [action.id]: action.value
      };
    default:
      return state;
  }
};

export const getWeekDaysByHours = (state, weekId) =>
  toHours(state.weeks[weekId]);
