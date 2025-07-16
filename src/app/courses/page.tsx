import { ongoingCourses, createSlugFromTitle } from '@/data/courses';
import Link from 'next/link';
import { HiAcademicCap, HiBookOpen, HiUsers, HiLightBulb, HiDesktopComputer, HiClock } from 'react-icons/hi';

export default function Courses() {
  const courses = [
    {
      code: "EC-301",
      title: "Digital Communication Systems",
      level: "Undergraduate",
      credits: 3,
      description: "Fundamentals of digital communication, modulation techniques, error control coding, and system performance analysis.",
      topics: ["Digital Modulation", "Channel Coding", "Signal Processing", "System Design"],
      icon: "📡"
    },
    {
      code: "EC-401",
      title: "Wireless Communication",
      level: "Undergraduate",
      credits: 3,
      description: "Principles of wireless communication systems, cellular networks, antenna systems, and propagation models.",
      topics: ["Cellular Systems", "MIMO", "Channel Modeling", "Network Planning"],
      icon: "📱"
    },
    {
      code: "EC-501",
      title: "Advanced Wireless Networks",
      level: "Postgraduate",
      credits: 3,
      description: "Advanced topics in wireless networks including 5G/6G technologies, network optimization, and emerging protocols.",
      topics: ["5G/6G Networks", "Beamforming", "Massive MIMO", "Network Slicing"],
      icon: "🌐"
    },
    {
      code: "EC-502",
      title: "Intelligent Communication Systems",
      level: "Postgraduate",
      credits: 3,
      description: "AI/ML applications in communication systems, intelligent reflecting surfaces, and cognitive radio networks.",
      topics: ["AI in Communications", "IRS Technology", "Cognitive Radio", "Machine Learning"],
      icon: "🤖"
    }
  ];

  const workshops = [
    {
      title: "Hands-on Training for VLSI and Communication Modelling",
      duration: "5 Days",
      dates: "06–10 Mar 2023",
      venue: "ECE Dept, NIT Jalandhar",
      role: "Coordinator",
      participants: "30+",
      description: "Comprehensive training program covering VLSI design and communication system modeling with practical implementation."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Courses & Teaching</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive curriculum in electronics and communication engineering with focus on modern technologies
          </p>
        </div>

        {/* Currently Ongoing Courses Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {ongoingCourses.map((course) => {
              const courseSlug = createSlugFromTitle(course.name);
              const typeColor = course.type === 'Theory' 
                ? 'bg-blue-100 text-blue-800 border-blue-200' 
                : course.type === 'Laboratory'
                ? 'bg-green-100 text-green-800 border-green-200'
                : 'bg-purple-100 text-purple-800 border-purple-200';
              
              const completedLessons = course.timeline.filter(item => item.status === 'completed').length;
              const totalLessons = course.timeline.length;
              const progressPercentage = (completedLessons / totalLessons) * 100;

              return (
                <Link
                  key={course.id}
                  href={`/courses/${courseSlug}`}
                  className="group bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
                          {course.code}
                        </span>
                        <span className={`text-xs font-medium px-2 py-1 rounded border ${typeColor}`}>
                          {course.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                        {course.name}
                      </h3>
                      <p className="text-sm text-slate-600 mb-2">{course.abbreviation}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 mb-1">{course.credits} Credits</div>
                      <div className="text-xs text-slate-600 font-medium">{course.semester}</div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-slate-600">Progress</span>
                      <span className="text-xs text-slate-500">
                        {completedLessons}/{totalLessons} lessons
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <HiClock className="w-3 h-3" />
                      <span>{course.hoursVenue}</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 group-hover:text-blue-700">
                      <span>View Details</span>
                      <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Teaching Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiLightBulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Innovation-Driven</h3>
                <p className="text-slate-600 text-sm">
                  Encouraging creative thinking and innovative approaches to solve real-world engineering challenges
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiDesktopComputer className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Hands-on Learning</h3>
                <p className="text-slate-600 text-sm">
                  Practical implementation and laboratory experiences to reinforce theoretical concepts
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiUsers className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Collaborative Learning</h3>
                <p className="text-slate-600 text-sm">
                  Fostering teamwork and collaborative problem-solving in engineering projects
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Offerings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Course Offerings</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{course.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{course.title}</h3>
                      <p className="text-sm text-slate-500">{course.code}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded text-xs font-medium ${
                      course.level === 'Undergraduate' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {course.level}
                    </span>
                    <p className="text-sm text-slate-500 mt-1">{course.credits} Credits</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-4">{course.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workshops & Training */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Workshops & Training Programs</h2>
          <div className="space-y-6">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{workshop.title}</h3>
                    <p className="text-slate-700 mb-4">{workshop.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-slate-600">
                      <div className="flex items-center space-x-2">
                        <HiAcademicCap className="w-4 h-4" />
                        <span>Role: {workshop.role}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <HiUsers className="w-4 h-4" />
                        <span>{workshop.participants} Participants</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <HiClock className="w-4 h-4 text-blue-600" />
                        <span className="text-slate-700">Duration: {workshop.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <HiBookOpen className="w-4 h-4 text-green-600" />
                        <span className="text-slate-700">Dates: {workshop.dates}</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <HiDesktopComputer className="w-4 h-4 text-purple-600 mt-0.5" />
                        <span className="text-slate-700">{workshop.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Teaching Resources & Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Course Materials</h3>
              <p className="text-slate-600 text-sm">Comprehensive lecture notes, presentations, and reference materials</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Lab Sessions</h3>
              <p className="text-slate-600 text-sm">MATLAB, Python, and specialized software for practical implementation</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Research Projects</h3>
              <p className="text-slate-600 text-sm">Integration of current research topics into curriculum</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Industry Connect</h3>
              <p className="text-slate-600 text-sm">Industry-relevant case studies and guest lectures</p>
            </div>
          </div>
        </section>

        {/* Student Outcomes */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Student Outcomes & Achievements</h2>
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-xl font-bold mb-2">High Success Rate</h3>
                <p className="text-slate-300 text-sm">Students consistently achieve excellent academic performance in courses</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="text-xl font-bold mb-2">Research Excellence</h3>
                <p className="text-slate-300 text-sm">Students actively participate in research projects and publish papers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-xl font-bold mb-2">Industry Placement</h3>
                <p className="text-slate-300 text-sm">Strong placement record in leading technology companies</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
