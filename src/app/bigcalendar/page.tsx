'use client';

import { BigCalendar, Event } from "@/components/BigCalendar";

const sample_data: Event[] = [
  // {
  //   title: "Streaming",
  //   start: new Date("2024-08-14T16:45:00+07:00"),
  //   end: new Date("2024-08-14T22:45:00+07:00"),
  // },
  // {
  //   title: "Streaming",
  //   start: new Date("2024-08-15T16:45:00+07:00"),
  //   end: new Date("2024-08-15T22:45:00+07:00"),
  // },
  // {
  //   title: "Streaming",
  //   start: new Date("2024-08-16T16:45:00+07:00"),
  //   end: new Date("2024-08-16T22:45:00+07:00"),
  // },
  // {
  //   title: "Streaming",
  //   start: new Date("2024-08-17T16:45:00+07:00"),
  //   end: new Date("2024-08-17T22:45:00+07:00"),
  // },
  {
    title: "Streaming",
    start: new Date("2024-08-18T16:45:00+07:00"),
    end: new Date("2024-08-18T22:45:00+07:00"),
  },
  {
    title: "Streaming",
    start: new Date("2024-08-19T16:45:00+07:00"),
    end: new Date("2024-08-19T22:45:00+07:00"),
  },
  {
    title: "Streaming",
    start: new Date("2024-08-20T16:45:00+07:00"),
    end: new Date("2024-08-20T22:45:00+07:00"),
  },
  {
    title: "Streaming",
    start: new Date("2024-08-21T16:45:00+07:00"),
    end: new Date("2024-08-21T22:45:00+07:00"),
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="py-2">
        <BigCalendar data={sample_data} />
      </div>

    </main>
  );
}
