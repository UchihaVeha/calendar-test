import React from 'react';
import { shallow } from 'enzyme';
import { DayComponent, styles } from './Day';

describe('Components/WeekCalendar/Day', () => {
  let wrapper;
  let spyHandleMouseDown;
  let spyHandleMouseOver;
  let spyHandleAllDayClick;
  const dayId = 'day id';
  const classes = Object.keys(styles).reduce(
    (acc, key) => ({
      ...acc,
      [key]: key
    }),
    {}
  );
  const hours = [
    { id: 0, active: false },
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: true },
    { id: 5, active: true },
    { id: 6, active: false },
    { id: 7, active: false },
    { id: 8, active: false },
    { id: 9, active: false },
    { id: 10, active: false },
    { id: 11, active: false },
    { id: 12, active: false },
    { id: 13, active: false },
    { id: 14, active: false },
    { id: 15, active: false },
    { id: 16, active: false },
    { id: 17, active: false },
    { id: 18, active: false },
    { id: 19, active: false },
    { id: 20, active: false },
    { id: 21, active: false },
    { id: 22, active: false },
    { id: 23, active: false }
  ];

  beforeEach(() => {
    spyHandleMouseDown = jest.fn();
    spyHandleMouseOver = jest.fn();
    spyHandleAllDayClick = jest.fn();
    wrapper = shallow(
      <DayComponent
        classes={classes}
        dayId={dayId}
        hours={hours}
        handleMouseDown={spyHandleMouseDown}
        handleMouseOver={spyHandleMouseOver}
        handleAllDayClick={spyHandleAllDayClick}
      />
    );
  });

  it('should render day label', () => {
    expect(wrapper.find('td').at(0)).toHaveText(dayId);
  });

  it('should render active hours', () => {
    expect(wrapper.find('td').at(6)).toHaveClassName('active');
    expect(wrapper.find('td').at(7)).toHaveClassName('active');
  });

  it('should render active hours', () => {
    expect(wrapper.find('td').at(6)).toHaveClassName('active');
    expect(wrapper.find('td').at(7)).toHaveClassName('active');
  });

  it('should handle with mouse down event', () => {
    wrapper
      .find('td')
      .at(3)
      .simulate('mousedown');
    expect(spyHandleMouseDown).toHaveBeenCalledWith(dayId, 1);
  });

  it('should handle with mouse over event', () => {
    wrapper
      .find('td')
      .at(3)
      .simulate('mouseover');
    expect(spyHandleMouseOver).toHaveBeenCalledWith(dayId, 1);
  });

  it('should handle with all day click', () => {
    wrapper
      .find('td')
      .at(1)
      .simulate('click');
    expect(spyHandleAllDayClick).toHaveBeenCalledWith(dayId);
  });
});
