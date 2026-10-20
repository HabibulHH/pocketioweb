import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/lib/company";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-black dark:to-gray-950 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-screen flex flex-col justify-center py-20 grain-texture">
          <div className="relative z-10 text-center space-y-8">
            {/* Company Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-700 dark:text-orange-300 font-medium text-sm">
              <span className="mr-2">🚀</span>
              Building the Future of Technology
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 dark:from-orange-600 dark:via-orange-500 dark:to-orange-700 animate-gradient bg-[length:200%_auto] [text-shadow:0_2px_10px_rgba(0,0,0,0.2)] dark:[text-shadow:0_0_30px_rgba(251,146,60,0.4)]">
                Transform Your
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 dark:from-orange-700 dark:via-orange-600 dark:to-orange-800 animate-gradient-slow bg-[length:200%_auto] [text-shadow:0_2px_10px_rgba(0,0,0,0.2)] dark:[text-shadow:0_0_35px_rgba(251,146,60,0.5)]">
                Digital Future
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We build scalable, fast, and modern solutions that drive digital transformation,
              accelerate AI adoption, and deliver results at unprecedented speed.
            </p>

            {/* Key Value Props */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm sm:text-base">
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-400">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Enterprise Scale</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-400">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-400">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Rapid Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex justify-center gap-4 flex-wrap">
              <a href="#products" className="group bg-orange-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                View Products
                <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#contact" className="bg-white dark:bg-gray-900 text-orange-600 dark:text-orange-400 px-10 py-4 rounded-xl font-semibold text-lg border-2 border-orange-500 dark:border-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg">
                Contact Us
              </a>
            </div>

            {/* Stats/Trust Indicators */}
            <div className="mt-16 pt-16 border-t border-orange-200 dark:border-gray-800">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-500 mt-2">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-500 mt-2">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">10M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-500 mt-2">API Calls Daily</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-500 mt-2">Global Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-black dark:to-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Innovative solutions designed to transform industries and accelerate growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* EdTech Platform */}
            <div
              className="group relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-black p-8 rounded-2xl border-2 border-orange-100 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-xl block"
            >
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-8">EdTech Platform</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Comprehensive learning management system with AI-powered personalization and analytics
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">LMS</span>
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">AI Learning</span>
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">Analytics</span>
              </div>
            </div>

            {/* Hotel Booking System */}
            <div
              className="group relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-black p-8 rounded-2xl border-2 border-orange-100 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-xl block"
            >
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-8">Hotel Booking System</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                End-to-end hotel management and booking platform with real-time availability and revenue optimization
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">Reservations</span>
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">PMS</span>
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">Revenue Mgmt</span>
              </div>
            </div>

            {/* WhatsApp CRM */}
            <div
              className="group relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-black p-8 rounded-2xl border-2 border-orange-100 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-xl block"
            >
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-8">WhatsApp CRM</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Customer relationship management built on the official WhatsApp Business Platform, with automation and multi-agent support
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">Automation</span>
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">Multi-Agent</span>
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">Broadcasts</span>
              </div>
            </div>

            {/* Ecommerce */}
            <div
              className="group relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-black p-8 rounded-2xl border-2 border-orange-100 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-xl block"
            >
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-8">Ecommerce Platform</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Scalable online commerce solution with inventory management, payments, and omnichannel selling
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">Multi-vendor</span>
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">Payments</span>
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">Inventory</span>
              </div>
            </div>

            {/* AI Agents */}
            <div
              className="group relative bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-black p-8 rounded-2xl border-2 border-orange-100 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-xl block lg:col-span-2"
            >
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-8">AI Agents</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Intelligent automation agents powered by advanced AI for customer service, data processing, and workflow optimization
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">GPT-4</span>
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">Automation</span>
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">NLP</span>
                <span className="px-3 py-1 bg-orange-200 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-medium">ML</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-orange-100 dark:border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About {company.name}
            </h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                {company.name} is a software company based in Dhaka, Bangladesh. We design, build and run
                software for businesses, including learning platforms, hotel booking, ecommerce, AI agents
                and customer messaging tools.
              </p>
              <p>
                Our WhatsApp CRM is built on the official WhatsApp Business Platform. Businesses connect
                their own WhatsApp Business accounts, manage customer conversations in a shared inbox and
                send approved message templates. Each business keeps ownership of its WhatsApp account and
                its customer data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-orange-100 dark:border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-10">
            Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border-2 border-orange-100 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Office</h3>
              <address className="not-italic text-gray-600 dark:text-gray-400">
                {company.name}
                {company.addressLines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
            </div>
            <div className="p-8 rounded-2xl border-2 border-orange-100 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Phone</h3>
              <a href={company.phoneHref} className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400">
                {company.phone}
              </a>
            </div>
            <div className="p-8 rounded-2xl border-2 border-orange-100 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Email</h3>
              <a href={`mailto:${company.email}`} className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400">
                {company.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
