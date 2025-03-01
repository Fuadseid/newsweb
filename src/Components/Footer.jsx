import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Me</h3>
          <p className="text-gray-400">
            I am passionate developers and designers creating
            user-friendly and performant web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="https://portfolio-react-31s6.vercel.app/about" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
           
            <li>
              <a href="https://portfolio-react-31s6.vercel.app/contact-me" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
      
            <a
              href="https://www.instagram.com/fuadseidm07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/fuad-seid-8b61322a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-bold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Stay updated with our latest news and updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;