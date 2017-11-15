import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeekDaysByHours } from 'reducers/weekReducers';
import { updateWeek } from 'actions/weekActions';
import WeekCalendar from 'components/WeekCalendar';

const CalendarConnected = props => <WeekCalendar {...props} />;

const mapStateToProps = state => ({
  weekId: 0,
  week: getWeekDaysByHours(state, 0)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateWeek }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CalendarConnected);
