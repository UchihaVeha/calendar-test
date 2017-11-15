export const convertMinutesToHours = minutes => {
  const hours = [];
  for (let i = 0; i < 24; i++) {
    const hour = { id: i, active: false };
    minutes.forEach(val => {
      if (val.bt <= i * 60 && val.et > i * 60) {
        hour.active = true;
      }
    });
    hours.push(hour);
  }
  return hours;
};
export const toHours = week =>
  Object.keys(week).reduce(
    (acc, key) => ({
      ...acc,
      [key]: convertMinutesToHours(week[key])
    }),
    {}
  );

export const convertHoursToMinutes = hours =>
  hours.reduce((acc, value, index) => {
    if (value.active && (!acc.length || acc[acc.length - 1].et)) {
      acc.push({ bt: value.id * 60, et: null });
    } else if (!value.active && (acc.length && !acc[acc.length - 1].et)) {
      acc[acc.length - 1].et = value.id * 60 - 1;
    }
    if (index === hours.length - 1 && acc.length && !acc[acc.length - 1].et) {
      acc[acc.length - 1].et = value.id * 60 + 59;
    }
    return acc;
  }, []);

export const toMinutes = week =>
  Object.keys(week).reduce(
    (acc, key) => ({
      ...acc,
      [key]: convertHoursToMinutes(week[key])
    }),
    {}
  );
