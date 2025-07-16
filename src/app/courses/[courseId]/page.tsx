import React from "react";
import { HiOutlineDocument, HiOutlinePresentationChartBar, HiOutlineLink } from "react-icons/hi";

const courses = {
  "adc-evl": {
    abbreviation: "ADC(EVL)",
    code: "ECDC0211",
    name: "Analog and Digital Communication",
    type: "Theory",
    hoursVenue: "3 Hours",
    semester: "B.Tech-ECE-3B",
    timeline: [
      {
        sno: 1,
        date: "2025-07-16",
        title: "Introduction to ADC(EVL)",
        resources: [
          { type: "pdf" as const, url: "#", name: "Lecture 1.pdf" },
          { type: "ppt" as const, url: "#", name: "Slides.pptx" }
        ]
      }
    ]
  },
  "dcniot-lab": {
    abbreviation: "DCNIoT-Lab",
    code: "ECDC0335",
    name: "Data Communication Networks and IoT Lab",
    type: "Laboratory",
    hoursVenue: "Communication Sys Lab",
    semester: "B.Tech-ECE-5",
    timeline: [
      {
        sno: 1,
        date: "2025-07-16",
        title: "Lab Introduction",
        resources: [
          { type: "pdf" as const, url: "#", name: "Lab Manual.pdf" }
        ]
      }
    ]
  },
  "amc": {
    abbreviation: "AMC",
    code: "ECPC-405",
    name: "Advanced Mobile Communication",
    type: "Theory",
    hoursVenue: "LT-102",
    semester: "B.Tech-ECE-7",
    timeline: [
      {
        sno: 1,
        date: "2025-07-16",
        title: "Introduction to AMC",
        resources: [
          { type: "pdf" as const, url: "#", name: "AMC Intro.pdf" },
          { type: "ppt" as const, url: "#", name: "AMC Slides.pptx" },
          { type: "link" as const, url: "#", name: "AMC Slides.pptx" }
        ]
      }
    ]
  }
};

type ResourceType = "pdf" | "ppt" | "link";
type Resource = { type: ResourceType; url: string; name: string };
type TimelineItem = { sno: number; date: string; title: string; resources: Resource[] };
type Course = {
  abbreviation: string;
  code: string;
  name: string;
  type: string;
  hoursVenue: string;
  semester: string;
  timeline: TimelineItem[];
};

function getIcon(type: ResourceType) {
  switch (type) {
    case "pdf":
      return <HiOutlineDocument className="w-5 h-5 text-red-600" title="PDF" />;
    case "ppt":
      return <HiOutlinePresentationChartBar className="w-5 h-5 text-orange-600" title="PPT" />;
    default:
      return <HiOutlineLink className="w-5 h-5 text-blue-600" title="Link" />;
  }
}

interface ParamsType { courseId: keyof typeof courses }

export default function CourseDetailPage({ params }: { params: ParamsType }) {
  const course: Course | undefined = courses[params.courseId];
  if (!course) {
    return <div className="p-8">Course not found.</div>;
  }
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
      <div className="mb-6 grid grid-cols-2 gap-4">
        <div><span className="font-semibold">Abbreviation:</span> {course.abbreviation}</div>
        <div><span className="font-semibold">Subject Code:</span> {course.code}</div>
        <div><span className="font-semibold">Subject Type:</span> {course.type}</div>
        <div><span className="font-semibold">Hours / Venue:</span> {course.hoursVenue}</div>
        <div><span className="font-semibold">Semester:</span> {course.semester}</div>
      </div>
      <h2 className="text-xl font-semibold mb-3 mt-8">Course Timeline</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg mb-8">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">S. No.</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Title / Topic</th>
              <th className="px-4 py-2">Resources</th>
            </tr>
          </thead>
          <tbody>
            {course.timeline.map((item: TimelineItem) => (
              <tr key={item.sno}>
                <td className="px-4 py-2">{item.sno}</td>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">{item.title}</td>
                <td className="px-4 py-2 flex gap-2">
                  {item.resources.map((res: Resource, idx: number) => (
                    <a key={idx} href={res.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                      {getIcon(res.type)}
                      <span className="sr-only">{res.name}</span>
                    </a>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
