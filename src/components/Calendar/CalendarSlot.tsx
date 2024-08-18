type Props = {
  slotREM: number; // height of 1 slot in rem
  slotDuration: number; // number of slots to take on lane, 4 slots = 1 Hours
  slotPositionY: number; // position of this slot from top, counting as number of slots. example at 01:00 hour, there are 4 slots from top then put 4 here
};

export default function CalendarSlot({ slotREM, slotDuration, slotPositionY }: Props) {
  return (
    <div className={`relative top-[${slotPositionY * slotREM}rem] h-[${slotDuration * slotREM}rem] pb-[.1rem] px-1`}>
      <div className="h-full bg-rose-400 rounded-md">

      </div>
    </div>
  );
}