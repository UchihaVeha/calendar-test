import React from 'react';
import { shallow, mount } from 'enzyme';
import simulant from 'simulant';
import { toMinutes } from 'utils/convertData';
import { WeekCalendarComponent, styles } from './WeekCalendar';

import Day from './Day';

describe('Components/WeekCalendar', () => {
  let wrapper;
  let spyUpdateWeek;
  const classes = Object.keys(styles).reduce(
    (acc, key) => ({
      ...acc,
      [key]: key
    }),
    {}
  );
  const weekId = 0;
  const days = {
    mo: Array.from({ length: 23 }, (v, k) => ({ id: k, active: !!(k % 2) })),
    tu: Array.from({ length: 23 }, (v, k) => ({ id: k, active: !!(k % 2) })),
    we: Array.from({ length: 23 }, (v, k) => ({ id: k, active: !!(k % 2) })),
    th: Array.from({ length: 23 }, (v, k) => ({ id: k, active: !!(k % 2) })),
    fr: Array.from({ length: 23 }, (v, k) => ({ id: k, active: !!(k % 2) })),
    sa: Array.from({ length: 23 }, (v, k) => ({ id: k, active: !!(k % 2) })),
    su: Array.from({ length: 23 }, (v, k) => ({ id: k, active: !!(k % 2) }))
  };

  beforeEach(() => {
    spyUpdateWeek = jest.fn();
    wrapper = shallow(
      <WeekCalendarComponent
        classes={classes}
        weekId={weekId}
        days={days}
        updateWeek={spyUpdateWeek}
      />
    );
  });

  it('should have title', () => {
    expect(wrapper.find('h4')).toHaveText('Set schedule');
  });

  it('should have All Day label', () => {
    expect(wrapper.find('th').at(1)).toHaveText('all day');
  });

  it('should have time labels', () => {
    expect(wrapper.find('th').at(2)).toHaveText('00:00');
    expect(wrapper.find('th').at(3)).toHaveText('03:00');
    expect(wrapper.find('th').at(4)).toHaveText('06:00');
    expect(wrapper.find('th').at(5)).toHaveText('09:00');
    expect(wrapper.find('th').at(6)).toHaveText('12:00');
    expect(wrapper.find('th').at(7)).toHaveText('15:00');
    expect(wrapper.find('th').at(8)).toHaveText('18:00');
    expect(wrapper.find('th').at(9)).toHaveText('21:00');
  });

  it('should render Day components', () => {
    expect(wrapper.find(Day)).toHaveLength(7);
  });

  it('should have button clear', () => {
    expect(wrapper.find('button').at(0)).toHaveText('Clear');
  });

  it('should reset state on click clear', () => {
    const newState = { mo: [], tu: [], we: [], th: [], fr: [], sa: [], su: [] };
    wrapper.setState(newState);
    expect(wrapper.state()).toEqual(newState);
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(wrapper.state()).toEqual(days);
  });

  it('should have button save changes', () => {
    expect(wrapper.find('button').at(1)).toHaveText('Save Changes');
  });

  it('should call updateWeek on click save changes', () => {
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(spyUpdateWeek).toBeCalledWith(toMinutes(days), weekId);
  });

  it('should set selectedDayId to null on mouseup', () => {
    const node = document.createElement('div');
    document.body.appendChild(node);
    wrapper = mount(
      <WeekCalendarComponent
        classes={classes}
        weekId={weekId}
        days={days}
        updateWeek={spyUpdateWeek}
      />,
      { attachTo: node }
    );
    expect(wrapper.instance().selectedDayId).toBeNull();
    wrapper.instance().selectedDayId = 'mo';
    simulant.fire(document.documentElement, 'mouseup');
    expect(wrapper.instance().selectedDayId).toBeNull();
    document.body.removeChild(node);
  });

  it('should handle with handleMouseDown', () => {
    const dayId = 'test day id';
    const hourId = 2;
    const spyToggleHour = jest.fn();
    wrapper.instance().toggleHour = spyToggleHour;
    expect(wrapper.instance().selectedDayId).toBeNull();
    wrapper.instance().handleMouseDown(dayId, hourId);
    expect(wrapper.instance().selectedDayId).toBe(dayId);
    expect(spyToggleHour).toHaveBeenCalledWith(dayId, hourId);
  });

  it('should handle with handleMouseOver', () => {
    const dayId = 'test day id';
    const hourId = 2;
    const spyToggleHour = jest.fn();
    wrapper.instance().toggleHour = spyToggleHour;
    expect(wrapper.instance().selectedDayId).toBeNull();
    wrapper.instance().handleMouseOver(dayId, hourId);
    expect(spyToggleHour).not.toHaveBeenCalled();
    wrapper.instance().selectedDayId = dayId;
    wrapper.instance().handleMouseOver(dayId, hourId, true);
    expect(spyToggleHour).toHaveBeenCalledWith(dayId, hourId, true);
  });

  it('should handle with toggleHour', () => {
    const dayId = 'mo';
    const hourId = 2;
    expect(wrapper.state()).toEqual(days);
    wrapper.instance().toggleHour(dayId, hourId);
    expect(wrapper.state('mo')[2]).toEqual({ id: 2, active: true });
    wrapper.instance().toggleHour(dayId, hourId);
    expect(wrapper.state('mo')[2]).toEqual({ id: 2, active: false });
  });
});
