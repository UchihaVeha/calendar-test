import * as React from 'react';
import propTypes from 'prop-types';
import injectSheet from 'react-jss';
import { toMinutes } from 'utils/convertData';
import Day from './Day';

const headHoursLabel = [
  '00:00',
  '03:00',
  '06:00',
  '09:00',
  '12:00',
  '15:00',
  '18:00',
  '21:00'
];

const dayIds = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

export const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  hourLabel: {
    fontWeight: 'normal',
    fontSize: 12,
    color: 'grey',
    textAlign: 'left',
    position: 'relative',
    '&:before': {
      position: 'absolute',
      display: 'block',
      content: '""',
      width: 1,
      height: 8,
      left: 0,
      bottom: -1,
      background: 'grey'
    }
  },
  bigLabel: {
    fontWeight: 'normal',
    fontSize: 12,
    color: 'grey',
    textTransform: 'uppercase',
    padding: '0 5px',
    width: 12
  },
  title: {
    fontWeight: 'normal',
    color: 'grey',
    textTransform: 'uppercase'
  },
  actions: {
    marginTop: '25px',
    textAlign: 'right',
    '&>button': {
      background: 'darkgrey',
      border: '1px solid darkgrey',
      borderRadius: '5px',
      padding: '4px 12px',
      marginLeft: '5px',
      color: 'white',
      '&:hover': {
        cursor: 'pointer'
      }
    }
  }
};

export class WeekCalendarComponent extends React.PureComponent {
  state = this.props.days;

  componentDidMount() {
    document.documentElement.addEventListener('mouseup', this.onMouseUp);
  }

  componentWillUnmount() {
    document.documentElement.removeEventListener('mouseup', this.onMouseUp);
  }

  onMouseUp = () => {
    this.selectedDayId = null;
  };
  selectedDayId = null;

  toggleHour = (dayId, hourId, isMouseOver = false) => {
    this.setState({
      [dayId]: this.state[dayId].map(hour => {
        if (hour.id === hourId) {
          return {
            ...hour,
            active: isMouseOver ? true : !hour.active
          };
        }
        return hour;
      })
    });
  };

  handleMouseDown = (dayId, hourId) => {
    this.selectedDayId = dayId;
    this.toggleHour(dayId, hourId);
  };

  handleMouseOver = (dayId, hourId) => {
    if (this.selectedDayId === dayId) {
      this.toggleHour(dayId, hourId, true);
    }
  };

  handleAllDayClick = dayId => {
    const active = this.state[dayId].reduce(
      (acc, hour) => acc && hour.active,
      true
    );
    this.setState({
      [dayId]: this.state[dayId].map(hour => ({
        ...hour,
        active: !active
      }))
    });
  };

  handleSaveClick = () => {
    console.log(toMinutes(this.state));
    this.props.updateWeek(toMinutes(this.state), this.props.weekId);
  };

  handleClearClick = () => {
    this.setState(this.props.days);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h4 className={classes.title}>Set schedule</h4>
        <table role="grid" className={classes.table}>
          <thead>
            <tr>
              <th key="empty" className={classes.bigLabel} />
              <th key="all day" className={classes.bigLabel}>
                all day
              </th>
              {headHoursLabel.map(label => (
                <th colSpan="3" key={label} className={classes.hourLabel}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dayIds.map(day => (
              <Day
                key={day}
                dayId={day}
                hours={this.state[day]}
                handleMouseDown={this.handleMouseDown}
                handleMouseOver={this.handleMouseOver}
                handleAllDayClick={this.handleAllDayClick}
              />
            ))}
          </tbody>
        </table>
        <div className={classes.actions}>
          <button onClick={this.handleClearClick}>Clear</button>
          <button onClick={this.handleSaveClick}>Save Changes</button>
        </div>
      </div>
    );
  }
}

WeekCalendarComponent.propTypes = {
  days: propTypes.object.isRequired,
  weekId: propTypes.number.isRequired,
  updateWeek: propTypes.func.isRequired
};

export default injectSheet(styles)(WeekCalendarComponent);
