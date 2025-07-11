import { HiAcademicCap, HiBookOpen, HiLightBulb, HiUsers, HiGlobe } from 'react-icons/hi';

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About Dr. Rohit Singh</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Assistant Professor (Grade-II) at NIT Jalandhar with expertise in Wireless Communication and Intelligent Systems
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiAcademicCap className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Dr. Rohit Singh</h3>
              <p className="text-blue-600 font-medium mb-4">Assistant Professor (Grade-II)</p>
              <div className="space-y-2 text-sm text-slate-600">
                <p>Electronics & Communication Engineering</p>
                <p>NIT Jalandhar, Punjab, India</p>
                <p className="text-blue-600 font-medium">Member, IEEE</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Research Summary</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed mb-4">
                Dr. Rohit Singh (Member, IEEE) is a distinguished researcher in the field of wireless communication 
                with a strong academic background spanning premier institutions in India. He earned his B.Tech from 
                MIT Moradabad (2014), M.Tech from NIT Jalandhar (2017), and Ph.D. from IIT Ropar (2021) with a 
                focus on vehicular radar and communication systems.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                His research work has been published in reputed IEEE journals and conferences, contributing 
                significantly to the advancement of wireless communication technologies. Currently serving as 
                an Assistant Professor at NIT Jalandhar, his research interests encompass cutting-edge areas 
                including intelligent reflecting surfaces and dual-function radar communications.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Dr. Singh&apos;s expertise spans multiple domains of modern communication systems, with particular 
                emphasis on solving real-world challenges in interference mitigation, resource optimization, 
                and next-generation wireless technologies including 6G and IoT applications.
              </p>
            </div>
          </div>
        </div>

        {/* Educational Qualifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Educational Qualifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiAcademicCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Ph.D.</h3>
              <p className="text-blue-600 font-medium mb-2">Wireless Communication</p>
              <p className="text-slate-600 text-sm">IIT Ropar (2021)</p>
              <p className="text-slate-500 text-xs mt-2">Focus: Vehicular Radar & Communication Systems</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiAcademicCap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">M.Tech</h3>
              <p className="text-green-600 font-medium mb-2">Electronics & Communication</p>
              <p className="text-slate-600 text-sm">NIT Jalandhar (2017)</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiAcademicCap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">B.Tech</h3>
              <p className="text-purple-600 font-medium mb-2">Electronics & Communication</p>
              <p className="text-slate-600 text-sm">MIT Moradabad (2014)</p>
            </div>
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Wireless Communication",
                description: "Advanced wireless communication systems and protocols",
                icon: HiGlobe,
                color: "blue"
              },
              {
                title: "Interference Mitigation",
                description: "Techniques for reducing interference in communication systems",
                icon: HiLightBulb,
                color: "green"
              },
              {
                title: "Communication Resource Reuse",
                description: "Efficient utilization of communication resources",
                icon: HiBookOpen,
                color: "purple"
              },
              {
                title: "Long Range (LoRa) Communication",
                description: "IoT and long-range communication protocols",
                icon: HiGlobe,
                color: "orange"
              },
              {
                title: "Intelligent Reflecting Surfaces",
                description: "IRS technology for enhanced communication systems",
                icon: HiLightBulb,
                color: "red"
              },
              {
                title: "6G & Future Networks",
                description: "Next-generation wireless communication technologies",
                icon: HiUsers,
                color: "indigo"
              }
            ].map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
                  <div className={`w-12 h-12 bg-${interest.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 text-${interest.color}-600`} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{interest.title}</h3>
                  <p className="text-slate-600 text-sm">{interest.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Professional Affiliations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Professional Affiliations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">IEEE Reviewer</h3>
              <div className="space-y-2 text-slate-700">
                <p>• IEEE Transactions on Vehicular Technology</p>
                <p>• IEEE Network Magazine</p>
                <p>• IEEE Communications Letters</p>
                <p>• IEEE Journal on Selected Areas in Communications</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Conference Reviewer</h3>
              <div className="space-y-2 text-slate-700">
                <p>• IEEE Globecom</p>
                <p>• IEEE PIMRC</p>
                <p>• IEEE International Conferences</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Collaborations */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Research Collaborations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiUsers className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Dr. Aryan Kaushik</h3>
              <p className="text-blue-600 font-medium mb-2">University of Sussex</p>
              <p className="text-slate-600 text-sm">International Research Collaboration</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiUsers className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Dr. Wonjae Shin</h3>
              <p className="text-green-600 font-medium mb-2">Korea University</p>
              <p className="text-slate-600 text-sm">International Research Collaboration</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
