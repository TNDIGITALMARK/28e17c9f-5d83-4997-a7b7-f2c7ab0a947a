'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';

export function Header() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 flex items-center justify-center">
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
            </div>
            <span className="text-lg font-semibold tracking-wider uppercase">Aurora Atelier</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              HOME
            </Link>
            <Link href="/#products" className="text-sm font-medium hover:text-primary transition-colors">
              SHOP
            </Link>
            <Link href="/#categories" className="text-sm font-medium hover:text-primary transition-colors">
              COLLECTIONS
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
              ABOUT US
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:text-primary transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
            <Link
              href="/cart"
              className="relative p-2 hover:text-primary transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 hover:text-primary transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
