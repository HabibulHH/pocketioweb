import Link from "next/link";
import { company } from "@/lib/company";

const linkClass =
  "text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors";

export default function Footer() {
  return (
    <footer className="bg-orange-50 dark:bg-black border-t border-orange-100 dark:border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold text-gray-900 dark:text-white">{company.name}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Software company in Dhaka, Bangladesh, building business software and WhatsApp Business messaging tools.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/#products" className={linkClass}>WhatsApp CRM</Link></li>
              <li><Link href="/#products" className={linkClass}>EdTech Platform</Link></li>
              <li><Link href="/#products" className={linkClass}>Hotel Booking</Link></li>
              <li><Link href="/#products" className={linkClass}>Ecommerce</Link></li>
              <li><Link href="/#products" className={linkClass}>AI Agents</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/#about" className={linkClass}>About Us</Link></li>
              <li><Link href="/#contact" className={linkClass}>Contact</Link></li>
              <li><Link href="/privacy" className={linkClass}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={linkClass}>Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>
                {company.addressLines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </p>
              <p>
                <a href={company.phoneHref} className={linkClass}>{company.phone}</a>
              </p>
              <p>
                <a href={`mailto:${company.email}`} className={linkClass}>{company.email}</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-orange-100 dark:border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={linkClass}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
