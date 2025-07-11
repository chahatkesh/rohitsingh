import { HiLightBulb, HiCurrencyDollar, HiCalendar, HiUser, HiAcademicCap } from 'react-icons/hi';

export default function Research() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Research Portfolio</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Advancing the frontiers of wireless communication and intelligent systems through innovative research
          </p>
        </div>

        {/* Research Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Research Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Wireless Communication",
                  description: "Advanced research in vehicular radar and communication systems with focus on interference mitigation and resource optimization.",
                  icon: "📡"
                },
                {
                  title: "Intelligent Reflecting Surfaces",
                  description: "Pioneering work in IRS technology for enhanced communication systems and 6G network implementations.",
                  icon: "🔬"
                },
                {
                  title: "LoRa Communication",
                  description: "Research in Long Range communication protocols for IoT applications and smart city infrastructure.",
                  icon: "🌐"
                },
                {
                  title: "Interference Mitigation",
                  description: "Development of novel techniques for reducing interference in multi-user communication environments.",
                  icon: "⚡"
                },
                {
                  title: "6G & Future Networks",
                  description: "Contributing to the development of next-generation wireless communication technologies and standards.",
                  icon: "🚀"
                },
                {
                  title: "ISAC Systems",
                  description: "Integrated Sensing and Communication systems for dual-function radar-communication applications.",
                  icon: "📊"
                }
              ].map((area, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
                  <div className="text-3xl mb-3">{area.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{area.title}</h3>
                  <p className="text-slate-600 text-sm">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Research Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Active Research Projects</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <HiLightBulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      QoS Improvement through Efficient Integration of FR-1 and FR-2 in 6G Open RAN
                    </h3>
                    <p className="text-sm text-slate-500">Principal Investigator (with Dr Brijesh Kumbhani, IIT Ropar)</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Active</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <HiCurrencyDollar className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-slate-600">₹73.3 Lakhs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HiCalendar className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-slate-600">Mar 2025 – Mar 2028</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HiUser className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-slate-600">TCoE (DoT)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HiAcademicCap className="w-5 h-5 text-orange-600" />
                  <span className="text-sm text-slate-600">Co-PI: Dr Brijesh Kumbhani</span>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                This research project focuses on enhancing Quality of Service (QoS) in 6G Open Radio Access Networks 
                through efficient integration of Frequency Range 1 (FR-1) and Frequency Range 2 (FR-2) technologies. 
                The project aims to develop novel algorithms and protocols for seamless handoff management and resource 
                allocation in heterogeneous 6G networks.
              </p>
            </div>
          </div>
        </section>

        {/* Research Methodology */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Research Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Theoretical Analysis</h3>
              <p className="text-slate-600 text-sm">Mathematical modeling and analytical frameworks for communication systems</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Simulation Studies</h3>
              <p className="text-slate-600 text-sm">MATLAB, Python, and specialized tools for system performance evaluation</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Experimental Validation</h3>
              <p className="text-slate-600 text-sm">Hardware prototyping and real-world testing of proposed solutions</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Collaborative Research</h3>
              <p className="text-slate-600 text-sm">International partnerships and interdisciplinary collaborations</p>
            </div>
          </div>
        </section>

        {/* Research Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Research Impact & Contributions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Publications & Recognition</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Journal Publications</span>
                  <span className="text-2xl font-bold text-blue-600">24+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Conference Papers</span>
                  <span className="text-2xl font-bold text-green-600">6+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Book Chapters</span>
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">IEEE Publications</span>
                  <span className="text-2xl font-bold text-orange-600">Multiple</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Research Leadership</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">PhD Students Supervised</span>
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Events Organized</span>
                  <span className="text-2xl font-bold text-green-600">4+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">International Collaborations</span>
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Peer Reviews</span>
                  <span className="text-2xl font-bold text-orange-600">Multiple</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Research Directions */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Future Research Directions</h2>
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="text-lg font-semibold mb-2">AI-Driven Networks</h3>
                <p className="text-slate-300 text-sm">Integration of AI/ML in communication systems for intelligent resource management</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🛰️</div>
                <h3 className="text-lg font-semibold mb-2">Satellite Integration</h3>
                <p className="text-slate-300 text-sm">Non-terrestrial networks and satellite-terrestrial integration for 6G</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔐</div>
                <h3 className="text-lg font-semibold mb-2">Quantum Communication</h3>
                <p className="text-slate-300 text-sm">Exploring quantum communication protocols for ultra-secure networks</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
