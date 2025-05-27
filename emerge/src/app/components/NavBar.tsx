'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  const [mapsOpen, setMapsOpen] = useState(false);

  // Close dropdown when clicking outside
  // Optional: Add this for better UX
  // useEffect(() => {
  //   function handleClickOutside(e) {
  //     if (!e.target.closest('.dropdown')) setMapsOpen(false);
  //   }
  //   if (mapsOpen) document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, [mapsOpen]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <Image src="/logo.svg" alt="EMERGE Logo" width={35} height={35} />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link href="/" className="nav-link" id="home" >Home</Link>
        </li>

        <li className="dropdown">
          <button
            className="dropdown-toggle"
            aria-expanded={mapsOpen}
            onClick={() => setMapsOpen((open) => !open)}
            // Remove hover handlers for click-based dropdown
          >
            Maps ▼
          </button>
          {mapsOpen && (
            <ul className="dropdown-menu" onMouseLeave={() => setMapsOpen(false)}>
              <li>
                <Link href="/risk-map" className="dropdown-link" onClick={() => setMapsOpen(false)}>
                  Risk Map
                </Link>
              </li>
              <li>
                <Link href="/hazard-visualization" className="dropdown-link" onClick={() => setMapsOpen(false)}>
                  Hazard Visualization
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link href="/responder-allocation" className="nav-link" id="allocation">Responder Allocation</Link>
        </li>

        <li>
          <Link href="/about" className="nav-link" id="about">About</Link>
        </li>
      </ul>

      {/* Profile Button */}
      <button className="profile-button">
        <div className="profile-info">
          <span>Anna Freeman</span>
          <span className="profile-role">Responder</span>
        </div>
        <div className="profile-img-container">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={100}
            height={100}
            priority
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </button>

      {/* STYLES */}
      <style jsx>{`
        .navbar {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #faf5f5;
          padding: 0.4rem 2rem;
          z-index: 1000;
        }

        .logo-container {
          display: flex;
          align-items: center;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
          flex-grow: 1;
          justify-content: center;
        }

        :global(.nav-link),
        .dropdown-toggle,
        :global(.dropdown-link) {
          font-weight: 400;
          background: none;
          border: none;
          color: black !important;
          cursor: pointer;
          font-size: 1rem;
          font-family: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        :global(#home:hover),
        :global(#allocation:hover),
        :global(#about:hover),
        .dropdown-toggle:hover,
        :global(.dropdown-link:hover) {
          color: #B92727 !important;
        }
  

        .dropdown {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 2.2rem;
          left: 0;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 1rem;
          list-style: none;
          z-index: 100;
          min-width: 180px;
        }

        .dropdown-link {
          display: block;
          padding: 0.5rem 1.5rem;
          white-space: nowrap;
        }

        .profile-button {
          display: flex;
          align-items: center;
          background-color: #B92727;
          color: white;
          border: none;
          border-radius: 1rem;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          font-weight: bold;
          gap: 0.5rem;
          cursor: pointer;
        }

        .profile-img-container {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .profile-role {
          font-size: 0.7rem;
          font-weight: 400;
          opacity: 0.85;
          margin-top: -5px;
          text-align: center;
        }
      `}</style>
    </nav>
  );
}