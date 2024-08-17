'use client';

import { Calendar } from "@/components/Calendar";
import { GoogleSchedule,  WeekSchedule } from "@/types/Schedule";
import { useEffect, useState } from "react";

const sample_data: GoogleSchedule[] = [
  {
    title: "Streaming",
    start: "2024-08-14T16:45:00+07:00",
    end: "2024-08-14T22:45:00+07:00",
  },
  {
    title: "Streaming",
    start: "2024-08-15T16:45:00+07:00",
    end: "2024-08-15T22:45:00+07:00",
  },
  {
    title: "Streaming",
    start: "2024-08-16T16:45:00+07:00",
    end: "2024-08-16T22:45:00+07:00",
  },
  {
    title: "Streaming",
    start: "2024-08-17T16:45:00+07:00",
    end: "2024-08-17T22:45:00+07:00",
  },
  {
    title: "Streaming",
    start: "2024-08-18T16:45:00+07:00",
    end: "2024-08-18T22:45:00+07:00",
  },
  {
    title: "Streaming",
    start: "2024-08-19T16:45:00+07:00",
    end: "2024-08-19T22:45:00+07:00",
  },
  {
    title: "Streaming",
    start: "2024-08-20T16:45:00+07:00",
    end: "2024-08-20T22:45:00+07:00",
  },
  {
    title: "Streaming",
    start: "2024-08-21T16:45:00+07:00",
    end: "2024-08-21T22:45:00+07:00",
  },
];

export default function Home() {
  const [weekData, setWeekData] = useState<WeekSchedule[]>([]);

  useEffect(() => {
    const data: WeekSchedule[] = [
      {
        day_of_week: "Monday",
        date: "12/08/2024",
        schedule: []
      },
      {
        day_of_week: "Tuesday",
        date: "13/08/2024",
        schedule: []
      },
      {
        day_of_week: "Wednesday",
        date: "14/08/2024",
        schedule: [
          {
            title: "Streaming",
            start: "2024-08-14T16:45:00+07:00",
            end: "2024-08-14T22:45:00+07:00",
            length_in_slot: 24,
            positionY_in_slot: 67
          },
        ]
      },
      {
        day_of_week: "Thursday",
        date: "15/08/2024",
        schedule: [
          {
            title: "Streaming",
            start: "2024-08-15T16:00:00+07:00",
            end: "2024-08-15T22:00:00+07:00",
            length_in_slot: 24,
            positionY_in_slot: 64
          },
        ]
      },
      {
        day_of_week: "Friday",
        date: "16/08/2024",
        schedule: [
          {
            title: "Streaming",
            start: "2024-08-16T09:30:00+07:00",
            end: "2024-08-16T10:30:00+07:00",
            length_in_slot: 4,
            positionY_in_slot: 38
          },
        ]
      },
      {
        day_of_week: "Saturday",
        date: "17/08/2024",
        schedule: [
          {
            title: "Streaming",
            start: "2024-08-17T12:00:00+07:00",
            end: "2024-08-17T14:30:00+07:00",
            length_in_slot: 8,
            positionY_in_slot: 48
          },
        ]
      },
      {
        day_of_week: "Sunday",
        date: "18/08/2024",
        schedule: [
          {
            title: "Streaming",
            start: "2024-08-18T10:00:00+07:00",
            end: "2024-08-18T12:00:00+07:00",
            length_in_slot: 8,
            positionY_in_slot: 40
          },
          {
            title: "Streaming",
            start: "2024-08-18T13:00:00+07:00",
            end: "2024-08-18T15:00:00+07:00",
            length_in_slot: 8,
            positionY_in_slot: 52
          },
        ]
      },
    ];

    setWeekData(data);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="py-2">
        <Calendar data={weekData} />
      </div>

    </main>
  );
}
