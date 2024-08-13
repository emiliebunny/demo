import { Calendar } from "@/components/Calendar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Calendar />
      </div>
    </main>
  );
}
