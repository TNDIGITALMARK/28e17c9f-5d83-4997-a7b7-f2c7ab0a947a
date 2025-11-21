'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[hsl(var(--footer-background))] text-[hsl(var(--footer-foreground))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path
                  d="M12 2L4 7v10l8 5 8-5V7l-8-5z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                />
                <path
                  d="M12 12l-4-2.5M12 12l4-2.5M12 12v5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                />
              </svg>
              <span className="text-lg font-semibold tracking-wider uppercase">Aurora Atelier</span>
            </div>
            <p className="text-sm text-[hsl(var(--footer-foreground))] opacity-80 mb-4">
              Discover curated goods for a refined lifestyle
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Help & Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Newsletter</h3>
            <p className="text-sm opacity-80 mb-4">
              Subscribe for exclusive offers and updates
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded bg-white/10 border border-white/20 text-sm placeholder:text-white/50 focus:outline-none focus:border-accent"
              />
              <Button type="submit" variant="primary" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm opacity-60">
            © 2024 AURORA ATELIER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
