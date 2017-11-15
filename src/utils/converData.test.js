import {
  convertMinutesToHours,
  toHours,
  convertHoursToMinutes,
  toMinutes
} from './convertData';

describe('utils/convertData/convertMinutesToHours', () => {
  it('should be active from 4 to 12 ids', () => {
    expect(
      convertMinutesToHours([
        {
          bt: 240,
          et: 779
        }
      ])
    ).toEqual([
      { id: 0, active: false },
      { id: 1, active: false },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: true },
      { id: 5, active: true },
      { id: 6, active: true },
      { id: 7, active: true },
      { id: 8, active: true },
      { id: 9, active: true },
      { id: 10, active: true },
      { id: 11, active: true },
      { id: 12, active: true },
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
    ]);
  });

  it('should be active from 4 to 12 and from 19 to 21 ids', () => {
    expect(
      convertMinutesToHours([
        {
          bt: 240,
          et: 779
        },
        {
          bt: 1140,
          et: 1319
        }
      ])
    ).toEqual([
      { id: 0, active: false },
      { id: 1, active: false },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: true },
      { id: 5, active: true },
      { id: 6, active: true },
      { id: 7, active: true },
      { id: 8, active: true },
      { id: 9, active: true },
      { id: 10, active: true },
      { id: 11, active: true },
      { id: 12, active: true },
      { id: 13, active: false },
      { id: 14, active: false },
      { id: 15, active: false },
      { id: 16, active: false },
      { id: 17, active: false },
      { id: 18, active: false },
      { id: 19, active: true },
      { id: 20, active: true },
      { id: 21, active: true },
      { id: 22, active: false },
      { id: 23, active: false }
    ]);
  });

  it('should be active all day ', () => {
    expect(
      convertMinutesToHours([
        {
          bt: 0,
          et: 1439
        }
      ])
    ).toEqual([
      { id: 0, active: true },
      { id: 1, active: true },
      { id: 2, active: true },
      { id: 3, active: true },
      { id: 4, active: true },
      { id: 5, active: true },
      { id: 6, active: true },
      { id: 7, active: true },
      { id: 8, active: true },
      { id: 9, active: true },
      { id: 10, active: true },
      { id: 11, active: true },
      { id: 12, active: true },
      { id: 13, active: true },
      { id: 14, active: true },
      { id: 15, active: true },
      { id: 16, active: true },
      { id: 17, active: true },
      { id: 18, active: true },
      { id: 19, active: true },
      { id: 20, active: true },
      { id: 21, active: true },
      { id: 22, active: true },
      { id: 23, active: true }
    ]);
  });

  it('should be active 0 id ', () => {
    expect(
      convertMinutesToHours([
        {
          bt: 0,
          et: 59
        }
      ])
    ).toEqual([
      { id: 0, active: true },
      { id: 1, active: false },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: false },
      { id: 5, active: false },
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
    ]);
  });
});

describe('utils/convertData/toHours', () => {
  const data = {
    mo: [
      {
        bt: 240,
        et: 779
      }
    ],
    fr: [
      {
        bt: 660,
        et: 1019
      }
    ]
  };
  it('should convert to hours', () => {
    expect(toHours(data)).toEqual({
      mo: [
        { id: 0, active: false },
        { id: 1, active: false },
        { id: 2, active: false },
        { id: 3, active: false },
        { id: 4, active: true },
        { id: 5, active: true },
        { id: 6, active: true },
        { id: 7, active: true },
        { id: 8, active: true },
        { id: 9, active: true },
        { id: 10, active: true },
        { id: 11, active: true },
        { id: 12, active: true },
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
      ],
      fr: [
        { id: 0, active: false },
        { id: 1, active: false },
        { id: 2, active: false },
        { id: 3, active: false },
        { id: 4, active: false },
        { id: 5, active: false },
        { id: 6, active: false },
        { id: 7, active: false },
        { id: 8, active: false },
        { id: 9, active: false },
        { id: 10, active: false },
        { id: 11, active: true },
        { id: 12, active: true },
        { id: 13, active: true },
        { id: 14, active: true },
        { id: 15, active: true },
        { id: 16, active: true },
        { id: 17, active: false },
        { id: 18, active: false },
        { id: 19, active: false },
        { id: 20, active: false },
        { id: 21, active: false },
        { id: 22, active: false },
        { id: 23, active: false }
      ]
    });
  });
});

describe('utils/convertData/convertHoursToMinutes', () => {
  it('should be active from 0 to 59', () => {
    expect(
      convertHoursToMinutes([
        { id: 0, active: true },
        { id: 1, active: false },
        { id: 2, active: false },
        { id: 3, active: false },
        { id: 4, active: false },
        { id: 5, active: false },
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
      ])
    ).toEqual([{ bt: 0, et: 59 }]);
  });

  it('should be active all day', () => {
    expect(
      convertHoursToMinutes([
        { id: 0, active: true },
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: true },
        { id: 4, active: true },
        { id: 5, active: true },
        { id: 6, active: true },
        { id: 7, active: true },
        { id: 8, active: true },
        { id: 9, active: true },
        { id: 10, active: true },
        { id: 11, active: true },
        { id: 12, active: true },
        { id: 13, active: true },
        { id: 14, active: true },
        { id: 15, active: true },
        { id: 16, active: true },
        { id: 17, active: true },
        { id: 18, active: true },
        { id: 19, active: true },
        { id: 20, active: true },
        { id: 21, active: true },
        { id: 22, active: true },
        { id: 23, active: true }
      ])
    ).toEqual([{ bt: 0, et: 1439 }]);
  });

  it('should be from 240 to 779 and from 1140 to 1319', () => {
    expect(
      convertHoursToMinutes([
        { id: 0, active: false },
        { id: 1, active: false },
        { id: 2, active: false },
        { id: 3, active: false },
        { id: 4, active: true },
        { id: 5, active: true },
        { id: 6, active: true },
        { id: 7, active: true },
        { id: 8, active: true },
        { id: 9, active: true },
        { id: 10, active: true },
        { id: 11, active: true },
        { id: 12, active: true },
        { id: 13, active: false },
        { id: 14, active: false },
        { id: 15, active: false },
        { id: 16, active: false },
        { id: 17, active: false },
        { id: 18, active: false },
        { id: 19, active: true },
        { id: 20, active: true },
        { id: 21, active: true },
        { id: 22, active: false },
        { id: 23, active: false }
      ])
    ).toEqual([
      {
        bt: 240,
        et: 779
      },
      {
        bt: 1140,
        et: 1319
      }
    ]);
  });
});

describe('utils/convertData/toMinutes', () => {
  const data = {
    mo: [
      { id: 0, active: false },
      { id: 1, active: false },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: true },
      { id: 5, active: true },
      { id: 6, active: true },
      { id: 7, active: true },
      { id: 8, active: true },
      { id: 9, active: true },
      { id: 10, active: true },
      { id: 11, active: true },
      { id: 12, active: true },
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
    ],
    fr: [
      { id: 0, active: false },
      { id: 1, active: false },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: false },
      { id: 5, active: false },
      { id: 6, active: false },
      { id: 7, active: false },
      { id: 8, active: false },
      { id: 9, active: false },
      { id: 10, active: false },
      { id: 11, active: true },
      { id: 12, active: true },
      { id: 13, active: true },
      { id: 14, active: true },
      { id: 15, active: true },
      { id: 16, active: true },
      { id: 17, active: false },
      { id: 18, active: false },
      { id: 19, active: false },
      { id: 20, active: false },
      { id: 21, active: false },
      { id: 22, active: false },
      { id: 23, active: false }
    ]
  };
  it('should convert to minutes', () => {
    expect(toMinutes(data)).toEqual({
      mo: [
        {
          bt: 240,
          et: 779
        }
      ],
      fr: [
        {
          bt: 660,
          et: 1019
        }
      ]
    });
  });
});
