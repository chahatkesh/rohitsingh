import { HiMail, HiPhone, HiLocationMarker, HiAcademicCap } from 'react-icons/hi';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <HiAcademicCap className="w-5 h-5 mr-2" />
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <HiMail className="w-5 h-5 mt-0.5 text-blue-400" />
                <div>
                  <p className="text-sm text-slate-300">Email</p>
                  <a href="mailto:rohits@nitj.ac.in" className="text-white hover:text-blue-400 transition-colors">
                    rohits@nitj.ac.in
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <HiPhone className="w-5 h-5 mt-0.5 text-blue-400" />
                <div>
                  <p className="text-sm text-slate-300">Phone</p>
                  <a href="tel:+917087513174" className="text-white hover:text-blue-400 transition-colors">
                    +91-7087513174
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <HiLocationMarker className="w-5 h-5 mt-0.5 text-blue-400" />
                <div>
                  <p className="text-sm text-slate-300">Address</p>
                  <p className="text-white">
                    Department of Electronics and Communication Engineering<br />
                    Dr. B R Ambedkar National Institute of Technology<br />
                    Jalandhar, Punjab, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="/about" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">About</a>
              <a href="/research" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Research</a>
              <a href="/publications" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Publications</a>
              <a href="/courses" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Courses</a>
              <a href="/students" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Students</a>
              <a href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Contact</a>
            </div>
          </div>

          {/* Social Links & Professional Profiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Professional Profiles</h3>
            <div className="space-y-3">
              <a 
                href="https://scholar.google.com/citations?user=sKTZXpQAAAAJ&hl=en&authuser=6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <SiGooglescholar className="w-5 h-5" />
                <span>Google Scholar</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-300">
                <FaLinkedin className="w-5 h-5" />
                <span>LinkedIn (Coming Soon)</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <FaTwitter className="w-5 h-5" />
                <span>Twitter (Coming Soon)</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Research Interests</h4>
              <p className="text-sm text-slate-300">
                Wireless Communication, Interference Mitigation, Communication Resource Reuse, 
                Long Range (LoRa) Communication, Intelligent Reflecting Surfaces
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Dr. Rohit Singh. All rights reserved. | 
            Assistant Professor (Grade-II), NIT Jalandhar
          </p>
        </div>
      </div>
    </footer>
  );
}
