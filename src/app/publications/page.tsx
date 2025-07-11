import { HiBookOpen, HiExternalLink, HiCalendar, HiUser } from 'react-icons/hi';

export default function Publications() {
  const journalPublications = [
    {
      year: "2025",
      title: "THz Hybridization in CRAN-Based Vehicular Networks: Performance and Handoff Implications",
      authors: "S K Singh, N Gupta, Rohit Singh, B. Kumbhani",
      journal: "IEEE Communications Letters",
      link: "https://ieeexplore.ieee.org/abstract/document/10884875/",
      type: "journal"
    }
  ];

  const conferencePublications = [
    {
      year: "2024",
      title: "Integrated AI and 6G Driven e-Health: Enabling Design Challenges and Future Prospects",
      authors: "Authors: Multiple Contributors including Rohit Singh",
      conference: "IEEE CSCN",
      link: "https://ieeexplore.ieee.org/abstract/document/10849692",
      type: "conference"
    }
  ];

  const bookChapters = [
    {
      year: "2025",
      title: "ISAC standardization and synergies with key technology enablers: overview and future prospects",
      authors: "Rohit Singh, Aryan Kaushik, Miguel Dajer, Marco Di Renzo",
      publisher: "Academic Press",
      isbn: "B978-0-44-322143",
      type: "book"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Publications</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Research contributions to the advancement of wireless communication and electronics engineering
          </p>
        </div>

        {/* Publication Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <HiBookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">24+</h3>
            <p className="text-blue-700 font-medium">Journal Publications</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <HiUser className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">6+</h3>
            <p className="text-green-700 font-medium">Conference Papers</p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <HiCalendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-purple-900 mb-2">1</h3>
            <p className="text-purple-700 font-medium">Book Chapters</p>
          </div>
        </div>

        {/* Journal Publications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">📝 Journal Publications</h2>
          <div className="space-y-6">
            {journalPublications.map((pub, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">{pub.year}</span>
                  <span className="text-sm text-slate-500">{pub.journal}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{pub.title}</h3>
                <p className="text-slate-600 mb-4">{pub.authors}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <HiBookOpen className="w-4 h-4" />
                    <span>Journal Article</span>
                  </div>
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <span>View Publication</span>
                    <HiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-center">
              <p className="text-slate-600 mb-2">📚 Complete List Available</p>
              <p className="text-sm text-slate-500">
                This is 1 of 24+ journal publications. The complete list includes publications in renowned 
                IEEE journals and other prestigious venues.
              </p>
            </div>
          </div>
        </section>

        {/* Conference Publications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">🗣️ Conference Publications</h2>
          <div className="space-y-6">
            {conferencePublications.map((pub, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">{pub.year}</span>
                  <span className="text-sm text-slate-500">{pub.conference}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{pub.title}</h3>
                <p className="text-slate-600 mb-4">{pub.authors}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <HiUser className="w-4 h-4" />
                    <span>Conference Paper</span>
                  </div>
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <span>View Publication</span>
                    <HiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-center">
              <p className="text-slate-600 mb-2">📋 Additional Conference Papers</p>
              <p className="text-sm text-slate-500">
                This is 1 of 6+ conference publications presented at international IEEE conferences 
                and other prestigious venues.
              </p>
            </div>
          </div>
        </section>

        {/* Book Chapters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">📗 Book/Chapter Publications</h2>
          <div className="space-y-6">
            {bookChapters.map((pub, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded">{pub.year}</span>
                  <span className="text-sm text-slate-500">{pub.publisher}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{pub.title}</h3>
                <p className="text-slate-600 mb-3">{pub.authors}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-2">
                      <HiBookOpen className="w-4 h-4" />
                      <span>Book Chapter</span>
                    </div>
                    <span>ISBN: {pub.isbn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Research Publication Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                area: "Wireless Communication",
                description: "Vehicular networks, interference mitigation, resource allocation",
                count: "15+",
                color: "blue"
              },
              {
                area: "6G & Future Networks",
                description: "Open RAN, THz communication, network integration",
                count: "8+",
                color: "green"
              },
              {
                area: "Intelligent Systems",
                description: "IRS, AI-driven networks, smart communication",
                count: "6+",
                color: "purple"
              },
              {
                area: "IoT & LoRa",
                description: "Long-range communication, IoT protocols",
                count: "4+",
                color: "orange"
              },
              {
                area: "ISAC Systems",
                description: "Integrated sensing and communication",
                count: "3+",
                color: "red"
              },
              {
                area: "Healthcare Tech",
                description: "e-Health, biomedical communication systems",
                count: "2+",
                color: "indigo"
              }
            ].map((area, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-center">
                <div className={`w-12 h-12 bg-${area.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{area.area}</h3>
                <p className="text-slate-600 text-sm mb-3">{area.description}</p>
                <span className={`bg-${area.color}-100 text-${area.color}-800 text-xs font-medium px-2.5 py-1 rounded`}>
                  {area.count} Publications
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Explore Full Publication List</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              For a complete list of publications, citations, and research metrics, 
              visit my Google Scholar profile.
            </p>
            <a 
              href="https://scholar.google.com/citations?user=sKTZXpQAAAAJ&hl=en&authuser=6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium inline-flex items-center space-x-2"
            >
              <span>View Google Scholar</span>
              <HiExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
