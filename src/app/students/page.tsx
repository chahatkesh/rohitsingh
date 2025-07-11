import { HiAcademicCap, HiUser, HiLightBulb, HiBookOpen, HiStar } from 'react-icons/hi';

export default function Students() {
  const phdStudents = [
    {
      name: "Amit Dolas",
      topic: "Biomedical and Communication",
      status: "Ongoing",
      year: "2023",
      supervisor: "Dr Rohit Singh",
      description: "Research focused on advanced biomedical communication systems and healthcare technology integration.",
      researchAreas: ["Biomedical Systems", "Healthcare IoT", "Signal Processing", "Medical Communications"]
    },
    {
      name: "Anjali Bharti",
      topic: "Vehicular Communications",
      status: "Ongoing",
      year: "2023",
      supervisor: "Dr Rohit Singh",
      description: "Investigating next-generation vehicular communication networks and V2X technologies.",
      researchAreas: ["V2X Communications", "Vehicular Networks", "5G/6G", "Intelligent Transportation"]
    },
    {
      name: "Kamal Kishor",
      topic: "Wireless for Healthcare",
      status: "Ongoing",
      year: "2023",
      supervisor: "Dr Rohit Singh",
      description: "Development of wireless communication solutions for healthcare applications and remote monitoring.",
      researchAreas: ["Wireless Healthcare", "Remote Monitoring", "IoMT", "Telemedicine"]
    }
  ];

  const researchOpportunities = [
    {
      level: "PhD",
      positions: "2-3",
      areas: ["Wireless Communication", "6G Networks", "IRS Technology", "AI in Communications"],
      requirements: ["M.Tech/M.E. in ECE/EE", "GATE/NET qualified", "Strong mathematical background", "Programming skills (MATLAB/Python)"],
      funding: "Available through institute fellowships and research projects"
    },
    {
      level: "M.Tech Thesis",
      positions: "4-5",
      areas: ["IoT Communications", "LoRa Networks", "Signal Processing", "Communication Protocols"],
      requirements: ["B.Tech in ECE/EE", "Good academic record", "Interest in research", "Basic programming knowledge"],
      funding: "Project-based stipend available"
    },
    {
      level: "B.Tech Projects",
      positions: "6-8",
      areas: ["Digital Communication", "Wireless Systems", "MATLAB Simulations", "Hardware Implementations"],
      requirements: ["ECE/EE undergraduate", "Strong fundamentals", "Team work skills", "Willingness to learn"],
      funding: "Not applicable"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Students & Research Supervision</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mentoring the next generation of researchers and engineers in cutting-edge communication technologies
          </p>
        </div>

        {/* Supervision Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Research Supervision Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiLightBulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Innovation Focus</h3>
                <p className="text-slate-600 text-sm">
                  Encouraging original thinking and novel approaches to solve complex engineering problems
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiBookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Research Excellence</h3>
                <p className="text-slate-600 text-sm">
                  Maintaining high standards in research methodology and publication quality
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiUser className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Personal Growth</h3>
                <p className="text-slate-600 text-sm">
                  Supporting holistic development of technical and professional skills
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current PhD Students */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">🎓 Current PhD Students</h2>
          <div className="space-y-8">
            {phdStudents.map((student, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-1">{student.name}</h3>
                        <p className="text-blue-600 font-medium mb-2">{student.topic}</p>
                        <p className="text-slate-600 text-sm">Supervisor: {student.supervisor}</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {student.status}
                        </span>
                        <p className="text-sm text-slate-500 mt-1">Started: {student.year}</p>
                      </div>
                    </div>
                    <p className="text-slate-700 mb-4">{student.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Research Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {student.researchAreas.map((area, areaIndex) => (
                          <span key={areaIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="bg-slate-50 rounded-lg p-6 text-center">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <HiAcademicCap className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">PhD Scholar</h4>
                      <p className="text-slate-600 text-sm">NIT Jalandhar</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Opportunities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">🔬 Research Opportunities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {researchOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${
                    opportunity.level === 'PhD' ? 'bg-blue-100' : 
                    opportunity.level === 'M.Tech Thesis' ? 'bg-green-100' : 'bg-purple-100'
                  } rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <HiAcademicCap className={`w-8 h-8 ${
                      opportunity.level === 'PhD' ? 'text-blue-600' : 
                      opportunity.level === 'M.Tech Thesis' ? 'text-green-600' : 'text-purple-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{opportunity.level}</h3>
                  <p className="text-slate-600">Available Positions: {opportunity.positions}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Research Areas:</h4>
                    <div className="space-y-1">
                      {opportunity.areas.map((area, areaIndex) => (
                        <p key={areaIndex} className="text-slate-600 text-sm">• {area}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Requirements:</h4>
                    <div className="space-y-1">
                      {opportunity.requirements.map((req, reqIndex) => (
                        <p key={reqIndex} className="text-slate-600 text-sm">• {req}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Funding:</h4>
                    <p className="text-slate-600 text-sm">{opportunity.funding}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">🏆 Student Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiBookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">5+</h3>
              <p className="text-slate-600">Publications by Students</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiStar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">3</h3>
              <p className="text-slate-600">Best Paper Awards</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiUser className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">100%</h3>
              <p className="text-slate-600">PhD Completion Rate</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiLightBulb className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">2</h3>
              <p className="text-slate-600">Patent Applications</p>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Application Process</h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">How to Apply</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">1</span>
                    <p className="text-slate-700 text-sm">Send detailed CV with academic transcripts</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">2</span>
                    <p className="text-slate-700 text-sm">Include research statement outlining interests</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">3</span>
                    <p className="text-slate-700 text-sm">Provide GATE/NET scores (for PhD applicants)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">4</span>
                    <p className="text-slate-700 text-sm">Schedule interview meeting for discussion</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">What We Look For</h3>
                <div className="space-y-2">
                  <p className="text-slate-700 text-sm">• Strong technical foundation in ECE/EE</p>
                  <p className="text-slate-700 text-sm">• Passion for research and innovation</p>
                  <p className="text-slate-700 text-sm">• Good communication and writing skills</p>
                  <p className="text-slate-700 text-sm">• Programming experience (preferred)</p>
                  <p className="text-slate-700 text-sm">• Team collaboration abilities</p>
                  <p className="text-slate-700 text-sm">• Self-motivated and dedicated approach</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Research */}
        <section>
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in Research?</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join our research group and work on cutting-edge problems in wireless communication 
              and intelligent systems. Let&apos;s shape the future of technology together.
            </p>
            <a 
              href="mailto:rohits@nitj.ac.in?subject=Research%20Opportunity%20Inquiry"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium inline-flex items-center space-x-2"
            >
              <span>Contact for Research Opportunities</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
