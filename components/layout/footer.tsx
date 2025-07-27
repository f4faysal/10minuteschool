import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <Image
            src="https://10minuteschool.com/images/logo.svg"
            alt="10 Minute School"
            width={180}
            height={60}
            className="object-contain mx-auto"
          />
          <h2 className="text-2xl lg:text-3xl font-light text-gray-900">
            Learn anywhere, anytime
          </h2>
          <p className="text-gray-500 text-lg font-light ">
            Download our mobile app for the best learning experience
          </p>
        </div>

        {/* App Download */}
        <div className="flex items-center justify-center gap-4 py-4">
          <Link
            href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool"
            target="_blank"
          >
            <Image
              src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
              alt="Download on the Google Play Store"
              width={120}
              height={40}
              className="h-12 w-auto mx-auto"
            />
          </Link>
          <Link
            href="https://apps.apple.com/us/app/10-minute-school/id1577061772"
            target="_blank"
          >
            <Image
              src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png"
              alt="Download on the Apple App Store"
              width={120}
              height={40}
              className="h-12 w-auto mx-auto"
            />
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 my-10">
          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-4">
              {[
                "Careers",
                "Become a Teacher",
                "Affiliate Program",
                "Privacy Policy",
                "Terms of Service",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light flex items-center group"
                  >
                    {item}
                    <ArrowUpRight
                      size={12}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-4">
              {[
                "Blog",
                "Book Store",
                "Free Guides",
                "Job Prep",
                "Certificates",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light flex items-center group"
                  >
                    {item}
                    <ArrowUpRight
                      size={12}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-gray-500 mb-1">Phone</div>
                <Link
                  href="tel:16910"
                  className="text-sm font-light text-gray-900 hover:text-gray-600"
                >
                  16910
                </Link>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">WhatsApp</div>
                <Link
                  href="https://wa.me/8801896016252"
                  className="text-sm font-light text-gray-900 hover:text-gray-600"
                >
                  +880 189 601 6252
                </Link>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Email</div>
                <Link
                  href="mailto:support@10minuteschool.com"
                  className="text-sm font-light text-gray-900 hover:text-gray-600"
                >
                  support@10minuteschool.com
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-6 uppercase tracking-wider">
              Stay Updated
            </h3>
            <div className="space-y-4">
              <p className="text-sm font-light text-gray-600">
                Get the latest updates and course announcements
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full px-0 py-2 border-0 border-b border-gray-200 focus:border-gray-400 focus:outline-none bg-transparent text-sm placeholder-gray-400"
                />
                <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                  Subscribe →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          {[
            {
              name: "Facebook",
              href: "https://www.facebook.com/10minuteschool/",
              icon: <FaFacebookSquare />,
            },
            {
              name: "Instagram",
              href: "https://www.instagram.com/10ms_insta/",
              icon: <FaInstagram />,
            },
            {
              name: "LinkedIn",
              href: "https://www.linkedin.com/company/10ms/",
              icon: <FaLinkedin />,
            },
            {
              name: "YouTube",
              href: "https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw",
              icon: <FaYoutube />,
            },
            {
              name: "TikTok",
              href: "https://www.tiktok.com/@10minuteschool?lang=en",
              icon: <FaTiktok />,
            },
          ].map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="text-sm font-light flex items-center text-gray-600 hover:text-green-900 transition-colors"
              target="_blank"
            >
              <span className="inline-block mr-1">{social.icon}</span>
              <span>{social.name}</span>
            </Link>
          ))}
        </div>

        {/* Bottom */}
        <div className="text-center">
          <p className="text-xs font-light text-gray-500">
            © 2015–2025 10 Minute School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
