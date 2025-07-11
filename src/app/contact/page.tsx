import { HiMail, HiPhone, HiLocationMarker, HiOfficeBuilding, HiClock, HiUser } from 'react-icons/hi';
import { SiGooglescholar } from 'react-icons/si';

export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Information</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get in touch for research collaborations, academic inquiries, or professional discussions
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Primary Contact */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Primary Contact</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <HiMail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Email Address</h3>
                  <a href="mailto:rohits@nitj.ac.in" className="text-blue-600 hover:text-blue-700 transition-colors">
                    rohits@nitj.ac.in
                  </a>
                  <p className="text-slate-500 text-sm mt-1">Official NIT Jalandhar email</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <HiPhone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Phone Number</h3>
                  <a href="tel:+917087513174" className="text-green-600 hover:text-green-700 transition-colors">
                    +91-7087513174
                  </a>
                  <p className="text-slate-500 text-sm mt-1">Available during office hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <HiUser className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Professional Profile</h3>
                  <a 
                    href="https://scholar.google.com/citations?user=sKTZXpQAAAAJ&hl=en&authuser=6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 transition-colors flex items-center space-x-2"
                  >
                    <SiGooglescholar className="w-4 h-4" />
                    <span>Google Scholar Profile</span>
                  </a>
                  <p className="text-slate-500 text-sm mt-1">Research publications and citations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Information */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Office Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <HiLocationMarker className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Office Address</h3>
                  <p className="text-slate-700">
                    Department of Electronics and Communication Engineering<br />
                    Dr. B R Ambedkar National Institute of Technology<br />
                    Jalandhar - 144011, Punjab, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <HiOfficeBuilding className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Department</h3>
                  <p className="text-slate-700 mb-1">Electronics and Communication Engineering</p>
                  <p className="text-slate-500 text-sm">Assistant Professor (Grade-II)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <HiClock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Office Hours</h3>
                  <p className="text-slate-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-slate-500 text-sm mt-1">By appointment preferred</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Quick Contact Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Research Collaboration</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Interested in collaborative research projects, joint publications, or academic partnerships
              </p>
              <a 
                href="mailto:rohits@nitj.ac.in?subject=Research%20Collaboration%20Inquiry"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
              >
                Contact for Research
              </a>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Student Inquiries</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Questions about PhD admissions, M.Tech projects, or academic guidance
              </p>
              <a 
                href="mailto:rohits@nitj.ac.in?subject=Student%20Inquiry"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
              >
                Student Queries
              </a>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Professional Consultation</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Industry consultation, technical advisory, or professional discussions
              </p>
              <a 
                href="mailto:rohits@nitj.ac.in?subject=Professional%20Consultation"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-medium"
              >
                Professional Inquiry
              </a>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Location</h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">NIT Jalandhar Campus</h3>
                <div className="space-y-3 text-slate-700">
                  <p><strong>Full Address:</strong></p>
                  <p>
                    Dr. B R Ambedkar National Institute of Technology<br />
                    GT Road, Amritsar Bypass<br />
                    Jalandhar - 144011<br />
                    Punjab, India
                  </p>
                  <p><strong>Nearest Railway Station:</strong> Jalandhar City (3 km)</p>
                  <p><strong>Nearest Airport:</strong> Sri Guru Ram Dass Jee International Airport, Amritsar (85 km)</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HiLocationMarker className="w-12 h-12 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Campus Location</h4>
                  <p className="text-slate-600 text-sm mb-4">
                    Located on the GT Road with easy access to major transportation hubs
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/NIT+Jalandhar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Response Time & Availability</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiMail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Response</h3>
                <p className="text-slate-600 text-sm">Typically within 24-48 hours during working days</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiPhone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone Availability</h3>
                <p className="text-slate-600 text-sm">Monday-Friday, 9:00 AM - 5:00 PM (IST)</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiUser className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">In-Person Meetings</h3>
                <p className="text-slate-600 text-sm">By appointment - please email in advance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Alternative */}
        <section>
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Whether you&apos;re interested in research collaboration, have academic questions, 
              or want to discuss professional opportunities, I&apos;m always open to meaningful conversations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:rohits@nitj.ac.in"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center space-x-2"
              >
                <HiMail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
              <a 
                href="tel:+917087513174"
                className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors duration-200 font-medium flex items-center space-x-2"
              >
                <HiPhone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
