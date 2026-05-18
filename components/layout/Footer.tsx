"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

const WHATSAPP_NUMBER = "9909957177";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--sky)]">
                <Image
                  src="/images/logo.png"
                  alt="AB Travels"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p
                  className="font-bold text-xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  AB Travels
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <p className="text-sky-300 text-xs">At-Tankal, Navsari</p>
                  <span className="text-[10px] font-bold bg-[var(--sky)]/20 text-[var(--sky)] px-1.5 py-0.5 rounded-full">
                    Since 2015
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sky-100/70 text-sm leading-relaxed mb-5">
              Your trusted travel partner from Navsari, Gujarat. We make every
              journey memorable — from domestic getaways to sacred pilgrimages.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold text-base mb-5 text-[var(--sky-light)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "All Packages", href: "/packages" },
                { label: "Umrah & Hajj", href: "/umrah-hajj" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sky-100/70 hover:text-[var(--sky)] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="text-[var(--sky)] text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Package Categories */}
          <div>
            <h4
              className="font-bold text-base mb-5 text-[var(--sky-light)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Packages
            </h4>
            <ul className="space-y-3">
              {[
                {
                  label: "🇮🇳 Domestic Tours",
                  href: "/packages?category=domestic",
                },
                {
                  label: "✈️ International Tours",
                  href: "/packages?category=international",
                },
                {
                  label: "🕌 Umrah Packages",
                  href: "/packages?category=umrah",
                },
                { label: "🕋 Hajj Packages", href: "/packages?category=hajj" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sky-100/70 hover:text-[var(--sky)] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="text-[var(--sky)] text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-bold text-base mb-5 text-[var(--sky-light)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-sky-100/70">
                <MapPin
                  size={16}
                  className="text-[var(--sky)] mt-0.5 shrink-0"
                />
                <span>
                  At-Tankal, Navsari,
                  <br />
                  Gujarat, India
                </span>
              </li>
              <li>
                <a
                  href={`tel:${WHATSAPP_NUMBER}`}
                  className="flex items-center gap-3 text-sm text-sky-100/70 hover:text-[var(--sky)] transition-colors"
                >
                  <Phone size={16} className="text-[var(--sky)] shrink-0" />
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href="mailto:abtravels@gmail.com"
                  className="flex items-center gap-3 text-sm text-sky-100/70 hover:text-[var(--sky)] transition-colors"
                >
                  <Mail size={16} className="text-[var(--sky)] shrink-0" />
                  abtravels@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-sky-100/70">
                <Clock
                  size={16}
                  className="text-[var(--sky)] mt-0.5 shrink-0"
                />
                <span>
                  Tue – Sun: 9am – 6pm
                  <br />
                  Monday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sky-100/50 text-xs">
            © 2015–{new Date().getFullYear()} AB Travels, At-Tankal, Navsari.
            All rights reserved.
          </p>
          <p className="text-sky-100/40 text-xs flex items-center gap-1">
            Designed &amp; Developed with ❤️ by{" "}
            <a
              href="https://aezazdesai.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-300/70 hover:text-[var(--sky)] transition-colors inline-flex items-center gap-0.5 group"
            >
              Aezaz Desai
              <ExternalLink
                size={10}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
