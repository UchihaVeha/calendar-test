import * as React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';
import CheckCircleIcon from './CheckCircleIcon';

export const styles = {
  hour: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#DBD9DB lightgrey',
    width: 12,
    height: 26
  },
  allHour: {
    textAlign: 'center',
    background: 'darkgrey',
    paddingTop: 4
  },
  dayLabel: {
    fontWeight: 'normal',
    textTransform: 'uppercase',
    fontSize: 10,
    textAlign: 'left',
    color: 'darkgrey',
    padding: 5
  },
  active: {
    background: '#DBD9DB'
  }
};

export const DayComponent = ({
  dayId,
  hours,
  classes,
  handleMouseDown,
  handleMouseOver,
  handleAllDayClick
}) => (
  <tr>
    <td
      key="label"
      className={classNames(classes.hour, classes.dayLabel, {
        [classes.active]: hours.reduce((acc, hour) => acc || hour.active, false)
      })}
    >
      {dayId}
    </td>
    <td
      key="all day"
      role="gridcell"
      onClick={() => handleAllDayClick(dayId)}
      onKeyPress={e => e.key === 13 && handleAllDayClick(dayId)}
      className={classNames(classes.hour, classes.allHour)}
    >
      {hours.reduce((acc, hour) => acc && hour.active, true) ? (
        <CheckCircleIcon />
      ) : null}
    </td>
    {hours.map(hour => (
      <td
        key={hour.id}
        role="gridcell"
        className={classNames(classes.hour, { [classes.active]: hour.active })}
        onMouseDown={() => handleMouseDown(dayId, hour.id)}
        onMouseOver={() => handleMouseOver(dayId, hour.id)}
        onFocus={() => handleMouseOver(dayId, hour.id)}
      />
    ))}
  </tr>
);

DayComponent.propTypes = {
  dayId: propTypes.string.isRequired,
  hours: propTypes.arrayOf(propTypes.object).isRequired,
  handleMouseDown: propTypes.func.isRequired,
  handleMouseOver: propTypes.func.isRequired,
  handleAllDayClick: propTypes.func.isRequired
};

export default injectSheet(styles)(DayComponent);
