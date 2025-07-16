import React from "react";
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { findCourseByTitle } from '@/data/courses';
import { 
  HiOutlineDocument, 
  HiOutlinePresentationChartBar, 
  HiOutlineLink,
  HiOutlinePlay,
  HiOutlineDocumentText,
  HiArrowLeft,
  HiClock,
  HiAcademicCap,
  HiBookOpen,
  HiCheckCircle,
  HiChevronRight,
  HiUsers
} from "react-icons/hi";

function getResourceIcon(type: string) {
  switch (type) {
    case "pdf":
      return <HiOutlineDocument className="w-5 h-5 text-red-600" />;
    case "ppt":
      return <HiOutlinePresentationChartBar className="w-5 h-5 text-orange-600" />;
    case "video":
      return <HiOutlinePlay className="w-5 h-5 text-green-600" />;
    case "document":
      return <HiOutlineDocumentText className="w-5 h-5 text-blue-600" />;
    default:
      return <HiOutlineLink className="w-5 h-5 text-blue-600" />;
  }
}

function getStatusBadge(status?: string) {
  switch (status) {
    case 'completed':
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <HiCheckCircle className="w-3 h-3" />
          Completed
        </span>
      );
    case 'current':
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          <HiClock className="w-3 h-3" />
          Current
        </span>
      );
    case 'upcoming':
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
          <HiClock className="w-3 h-3" />
          Upcoming
        </span>
      );
    default:
      return null;
  }
}

interface ParamsType { 
  courseId: string;
}

export default function CourseDetailPage({ params }: { params: ParamsType }) {
  const course = findCourseByTitle(params.courseId);
  
  if (!course) {
    notFound();
  }

  const completedLessons = course.timeline.filter(item => item.status === 'completed').length;
  const totalLessons = course.timeline.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  const typeColor = course.type === 'Theory' 
    ? 'bg-blue-100 text-blue-800 border-blue-200' 
    : course.type === 'Laboratory'
    ? 'bg-green-100 text-green-800 border-green-200'
    : 'bg-purple-100 text-purple-800 border-purple-200';

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link 
              href="/courses" 
              className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <HiArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Courses</span>
            </Link>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                  {course.code}
                </span>
                <span className={`text-sm font-medium px-3 py-1 rounded-lg border ${typeColor}`}>
                  {course.type}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-slate-900 mb-2">{course.name}</h1>
              <p className="text-lg text-slate-600 mb-4">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <HiAcademicCap className="w-4 h-4" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiBookOpen className="w-4 h-4" />
                  <span>{course.credits} Credits</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiClock className="w-4 h-4" />
                  <span>{course.hoursVenue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiUsers className="w-4 h-4" />
                  <span>{course.semester}</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-80">
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-slate-900">Course Progress</h3>
                  <span className="text-sm text-slate-600">
                    {completedLessons}/{totalLessons}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-slate-500">
                  {Math.round(progressPercentage)}% completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-3 space-y-8">
            {/* Course Timeline */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Course Timeline</h2>
              
              <div className="space-y-4">
                {course.timeline.map((item, index) => (
                  <div 
                    key={item.sno} 
                    className={`relative pl-8 pb-6 ${index < course.timeline.length - 1 ? 'border-l-2 border-slate-200' : ''}`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-0 w-4 h-4 rounded-full border-2 transform -translate-x-2 ${
                      item.status === 'completed' 
                        ? 'bg-green-500 border-green-500' 
                        : item.status === 'current'
                        ? 'bg-blue-500 border-blue-500'
                        : 'bg-slate-300 border-slate-300'
                    }`}></div>
                    
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                            {getStatusBadge(item.status)}
                          </div>
                          {item.description && (
                            <p className="text-slate-600 text-sm mb-2">{item.description}</p>
                          )}
                          <p className="text-xs text-slate-500">
                            Session {item.sno} • {new Date(item.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </p>
                        </div>
                      </div>
                      
                      {item.resources.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-slate-900 mb-2">Resources</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {item.resources.map((resource, idx) => (
                              <a 
                                key={idx}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                              >
                                {getResourceIcon(resource.type)}
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-slate-900 group-hover:text-blue-700 truncate">
                                    {resource.name}
                                  </p>
                                  {resource.description && (
                                    <p className="text-xs text-slate-500 truncate">
                                      {resource.description}
                                    </p>
                                  )}
                                </div>
                                <HiChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning Outcomes */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Learning Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                    </div>
                    <p className="text-sm text-slate-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-1 space-y-6">
            {/* Course Info */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Course Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Abbreviation</label>
                  <p className="text-sm font-medium text-slate-900">{course.abbreviation}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Credits</label>
                  <p className="text-sm font-medium text-slate-900">{course.credits}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Semester</label>
                  <p className="text-sm font-medium text-slate-900">{course.semester}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Instructor</label>
                  <p className="text-sm font-medium text-slate-900">{course.instructor}</p>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            {course.prerequisites && course.prerequisites.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Prerequisites</h3>
                <div className="space-y-2">
                  {course.prerequisites.map((prereq, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-slate-700">
                      <HiCheckCircle className="w-4 h-4 text-green-500" />
                      {prereq}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Assessment Pattern */}
            {course.assessmentPattern && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Assessment Pattern</h3>
                <div className="space-y-3">
                  {course.assessmentPattern.map((assessment, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-slate-700">{assessment.component}</span>
                      <span className="text-sm font-medium text-slate-900">{assessment.weightage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Textbooks */}
            {course.textbooks && course.textbooks.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Textbooks</h3>
                <div className="space-y-3">
                  {course.textbooks.map((book, index) => (
                    <div key={index} className="text-sm">
                      <p className="font-medium text-slate-900">{book.title}</p>
                      <p className="text-slate-600">by {book.author}</p>
                      <p className="text-slate-500">{book.publisher}, {book.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
