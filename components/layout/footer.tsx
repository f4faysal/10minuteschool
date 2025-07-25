import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-gray-900">
      <div className="container mx-auto py-12 px-4">
        {/* Top Section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-slate-800 dark:text-slate-200">
              10 Minute School
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Empowering learners with efficient and effective educational
              resources to achieve their goals.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-slate-800 dark:text-slate-200">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - IELTS Preparation */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-slate-800 dark:text-slate-200">
              IELTS Prep
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/ielts/listening"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Listening
                </Link>
              </li>
              <li>
                <Link
                  href="/ielts/reading"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Reading
                </Link>
              </li>
              <li>
                <Link
                  href="/ielts/writing"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Writing
                </Link>
              </li>
              <li>
                <Link
                  href="/ielts/speaking"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Speaking
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-slate-800 dark:text-slate-200">
              Contact Us
            </h3>
            <address className="text-sm text-slate-600 dark:text-slate-400 not-italic">
              <p>Email: info@10minuteschool.com</p>
              <p>Phone: +880 1234-567890</p>
            </address>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-400"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            className="text-slate-600 dark:text-slate-400 hover:text-pink-600"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-800"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} 10 Minute School. All rights
            reserved.
          </p>
          <p className="mt-2 flex justify-center space-x-4">
            <Link
              href="/privacy"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
