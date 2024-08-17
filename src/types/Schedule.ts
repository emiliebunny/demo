export type GoogleSchedule = {
  title: string;
  start: string;
  end: string;
};

export type Schedule = GoogleSchedule & {
  length_in_slot: number;
  positionY_in_slot: number;
};

export type WeekSchedule = {
  day_of_week: string;
  date: string;
  schedule: Schedule[];
};