import React from "react";

export default function LandingPage({onLogin}) {
  return (
    <div className="bg-gray-50 font-[Poppins]">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">ShikshaLite</h1>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 mr-4"
              onClick={onLogin}
            >
              Log In
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              onClick={onLogin}
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="py-20 bg-[#f0f4ff]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Your Virtual Classroom, Reimagined.
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              ShikshaLite is the ultimate online learning platform designed to
              connect remote students with dedicated teachers. Experience
              education without boundaries.
            </p>
            <a
              href="#"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
              onClick={onLogin}
            >
              Get Started for Free
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800">
                Built for the Modern Remote Classroom
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Engage your students like never before with tools designed for
                online learning.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="material-icons text-blue-600 text-[40px]">
                    videocam
                  </span>
                </div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                  Live Interactive Classes
                </h4>
                <p className="text-gray-600">
                  Host high-quality video classes with whiteboards, screen
                  sharing, and real-time chat to keep students engaged.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="material-icons text-green-600 text-[40px]">
                    forum
                  </span>
                </div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                  Seamless Communication
                </h4>
                <p className="text-gray-600">
                  Foster a strong student-teacher connection with dedicated
                  discussion forums and one-on-one messaging.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="material-icons text-yellow-600 text-[40px]">
                    assignment
                  </span>
                </div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                  Online Assignments & Quizzes
                </h4>
                <p className="text-gray-600">
                  Create, distribute, and grade assignments effortlessly.
                  Provide instant feedback to help students learn and grow.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">ShikshaLite</h4>
              <p className="text-gray-400">Education Without Boundaries.</p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2024 ShikshaLite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
