import { WeekSchedule } from "@/types/Schedule";
import CalendarSlot from "./CalendarSlot";

const TITLE_HEIGHT = "h-[5rem]"; //If we want to use only number here (not the whole class name), we need to put it in tailwind.config.ts safelist array
const TIMESLOT_HEIGHT = 2; // The height of 15 minutes timeslot in rem unit, 15 minutes = 2 rem; so 1 hour = 8rem
const LANE_HEIGHT = TIMESLOT_HEIGHT * 4 * 24; // The height of whole lane in rem unit, must equal TIMESLOT_HEIGHT * 4 slots in an hour * 24 hours

type Props = {
  data: WeekSchedule[];
};

export default function Calendar({ data }: Props) {
  return (
    <div className="w-[1000px] flex flex-row space-x-[2px] px-2 rounded-lg bg-emerald-400">
      <div className="basis-full flex flex-col items-end pr-2 pb-2">
        <div className={`${TITLE_HEIGHT}`}></div>
        {Array.from(Array(24).keys()).map((el) => (
          <div
            key={`timeslot-${el}`}
            className={`h-[${TIMESLOT_HEIGHT * 4}rem] relative top-[-0.75rem]`}
          >
            {`${el.toString().padStart(2, "0")}`}:00
          </div>
        ))}
        <div className="relative top-[-0.75rem]">24:00</div>
      </div>
      {data.map((el, idx) => (
        <div key={`cal-lane-${el.day_of_week}`} className="basis-full">
          <Lane title={el.day_of_week} active={el.schedule.length > 0}>
            {
              el.schedule.map((s, idx) => <CalendarSlot key={`${idx}-${s.title}`} slotREM={TIMESLOT_HEIGHT} slotDuration={s.duration_in_slot} slotPositionY={s.positionY_in_slot} />)
            }
          </Lane>
        </div>
      ))}
    </div>
  );
}

type LaneProps = {
  title: string;
  active: boolean;
  children: React.ReactNode;
};

function Lane({ title, active, children }: LaneProps) {
  return (
    <div className="flex flex-col">
      <div className="h-20 text-lg flex items-center justify-center">
        {title}
      </div>
      <div
        className={`h-[${LANE_HEIGHT}rem] w-full ${active ? "bg-white" : "bg-gray-300"}`}
      >
        {children}
      </div>
    </div>
  );
}
