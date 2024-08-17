type Props = {
  timeslotHeight: number; // height of 1 slot in rem
  numberOfSlots: number; // number of slots to take on lane, 4 slots = 1 Hours
  topPosition: number; // position of this slot from top, counting as number of slots. example at 01:00 hour, there are 4 slots from top then put 4 here
};

export default function CalendarSlot({ timeslotHeight, numberOfSlots, topPosition }: Props) {
  return (
    <div className={`relative top-[${topPosition * timeslotHeight}rem] h-[${numberOfSlots * timeslotHeight}rem] pb-[.1rem] px-1`}>
      <div className="h-full bg-rose-400 rounded-md">

      </div>
    </div>
  );
}