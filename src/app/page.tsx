import Link from "next/link";
import { HiMail, HiAcademicCap, HiBookOpen, HiUsers, HiLightBulb } from 'react-icons/hi';
import { SiGooglescholar } from 'react-icons/si';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-slate-50 py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Dr. Rohit Singh
              </h1>
              <p className="text-lg lg:text-xl text-blue-600 font-medium">
                Assistant Professor (Grade-II)
              </p>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                Department of Electronics and Communication Engineering<br />
                Dr. B R Ambedkar National Institute of Technology, Jalandhar
              </p>
              <p className="text-slate-700 leading-relaxed">
                Specialized in Wireless Communication, Interference Mitigation, Communication Resource Reuse, 
                Long Range (LoRa) Communication, and Intelligent Reflecting Surfaces. Member of IEEE with 
                extensive research experience in vehicular radar and communication systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-center">
                  Learn More
                </Link>
                <Link href="/contact" className="bg-slate-100 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors duration-200 font-medium text-center">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HiAcademicCap className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
                  </div>
                  <p className="text-slate-600 font-medium">Professor Photo</p>
                  <p className="text-sm text-slate-500">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <HiBookOpen className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1 lg:mb-2">24+</h3>
              <p className="text-sm lg:text-base text-slate-600">Publications</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <HiUsers className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1 lg:mb-2">3</h3>
              <p className="text-sm lg:text-base text-slate-600">PhD Students</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <HiLightBulb className="w-6 h-6 lg:w-8 lg:h-8 text-purple-600" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1 lg:mb-2">₹73.3L</h3>
              <p className="text-sm lg:text-base text-slate-600">Research Funding</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                <HiAcademicCap className="w-6 h-6 lg:w-8 lg:h-8 text-orange-600" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1 lg:mb-2">IIT</h3>
              <p className="text-sm lg:text-base text-slate-600">PhD from IIT Ropar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 lg:mb-4">Research Highlights</h2>
            <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto">
              Cutting-edge research in wireless communication and intelligent systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 lg:p-6 hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 lg:mb-4">
                <HiLightBulb className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2 lg:mb-3">Wireless Communication</h3>
              <p className="text-sm lg:text-base text-slate-600">
                Advanced research in vehicular radar and communication systems with focus on interference mitigation.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 lg:p-6 hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 lg:mb-4">
                <HiLightBulb className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2 lg:mb-3">Intelligent Reflecting Surfaces</h3>
              <p className="text-sm lg:text-base text-slate-600">
                Pioneering work in IRS technology for enhanced communication systems and 6G networks.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 lg:p-6 hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 lg:mb-4">
                <HiLightBulb className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2 lg:mb-3">LoRa Communication</h3>
              <p className="text-sm lg:text-base text-slate-600">
                Research in Long Range communication protocols for IoT and smart city applications.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 lg:mt-12">
            <Link href="/research" className="bg-blue-600 text-white px-6 lg:px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Explore Research
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 lg:mb-4">Recent Publications</h2>
            <p className="text-base lg:text-lg text-slate-600">
              Latest contributions to the field of electronics and communication engineering
            </p>
          </div>
          <div className="space-y-4 lg:space-y-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-4 lg:p-6 border border-slate-200">
              <div className="flex items-start justify-between mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">2025</span>
                <span className="text-xs lg:text-sm text-slate-500">IEEE Communications Letters</span>
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-slate-900 mb-2">
                THz Hybridization in CRAN-Based Vehicular Networks: Performance and Handoff Implications
              </h3>
              <p className="text-slate-600 text-xs lg:text-sm mb-3">
                S K Singh, N Gupta, Rohit Singh, B. Kumbhani
              </p>
              <a href="https://ieeexplore.ieee.org/abstract/document/10884875/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-xs lg:text-sm font-medium">
                View Publication →
              </a>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 lg:p-6 border border-slate-200">
              <div className="flex items-start justify-between mb-3">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">2025</span>
                <span className="text-xs lg:text-sm text-slate-500">Academic Press</span>
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-slate-900 mb-2">
                ISAC standardization and synergies with key technology enablers: overview and future prospects
              </h3>
              <p className="text-slate-600 text-xs lg:text-sm mb-3">
                Rohit Singh, Aryan Kaushik, Miguel Dajer, Marco Di Renzo
              </p>
              <span className="text-slate-500 text-xs lg:text-sm">Book Chapter</span>
            </div>
          </div>
          <div className="text-center mt-8 lg:mt-12">
            <Link href="/publications" className="bg-slate-100 text-slate-700 px-6 lg:px-8 py-3 rounded-lg hover:bg-slate-200 transition-colors duration-200 font-medium">
              View All Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 lg:py-16 bg-slate-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">Get in Touch</h2>
          <p className="text-base lg:text-lg text-slate-300 mb-6 lg:mb-8 max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or have questions about my work? 
            I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:rohits@nitj.ac.in" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2">
              <HiMail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a href="https://scholar.google.com/citations?user=sKTZXpQAAAAJ&hl=en&authuser=6" target="_blank" rel="noopener noreferrer" className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors duration-200 font-medium flex items-center justify-center space-x-2">
              <SiGooglescholar className="w-5 h-5" />
              <span>Google Scholar</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}