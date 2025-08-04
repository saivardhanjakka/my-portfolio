import { Mail, MapPin, Calendar, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
        {/* Header Section */}
      <header className="pt-20 pb-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-6 md:space-y-0 md:space-x-6 text-center md:text-left">
            {/* Profile Image */}
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden flex-shrink-0">
  <img
    src="/assets/profile.jpg"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

            
            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">JAKKA SAIVARDHAN </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-3"> Full Stack Java Developer</p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>jakkasaivardhan98@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Hyderabad,Telangana</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>1.3 Years Experience</span>
                </div>
              </div>
              
              {/* Social Links and Contact */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mt-4">
                <a
                  href="https://github.com/saivardhanjakka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jakka-saivardhan-559509200/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/9398254813"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
                >
               <FaWhatsapp className="w-4 h-4" />
                  <span>Contact me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header