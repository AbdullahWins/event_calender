import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [
  {
    title: "Meeting fetyryery",
    reason: "seggssss fetyryery",
    start: new Date(),
  },
  {
    title: "marriage",
    start: "2023-06-01",
  },
  {
    title: "seggs",
    start: "2023-06-05",
  },
  {
    title: "seggs 4",
    start: "2023-06-05",
  },
  {
    title: "Event 4",
    start: "2023-06-05",
  },
  {
    title: "Meeting seggs",
    reason: "seggssss fetyryery",
    start: new Date(),
  },
  {
    title: "seggs",
    start: "2023-06-01",
  },
];

console.log(new Date());

export function CalenderModule() {
  return (
    <div className="w-1/3 h-2/3">
      <h1>Calender</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
}

// // a custom render function
// function renderEventContent(eventInfo) {
//   return (
//     <div className="flex flex-col text-center w-full h-full bg-emerald-200">
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//       <p>lol</p>
//     </div>
//   );
// }

// Custom event rendering
const renderEventContent = ({ event }) => (
  <div className="bg-red-200 p-2 border-none">
    <strong>{event.title}</strong>
    <br />
    <span>{event.start.toLocaleDateString()}</span>
  </div>
);

export default CalenderModule;
