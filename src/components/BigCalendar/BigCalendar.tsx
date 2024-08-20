'use client';

import { Calendar, Views, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import { Event } from "react-big-calendar";
export { type Event } from "react-big-calendar";

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = dayjsLocalizer(dayjs);

type Props = {
  data: Event[];
};


export default function BigCalendar({ data }: Props) {
  return (
    <Calendar
      defaultView={Views.WEEK}
      localizer={localizer}
      events={data}
      startAccessor="start"
      endAccessor="end"
      style={{ width:800, height: 800 }}
      views={{
        month: false,
        week: true,
        
      }}
    />
  );
}
