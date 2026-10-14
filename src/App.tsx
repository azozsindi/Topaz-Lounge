/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { VisualGallery } from './components/VisualGallery.tsx';
import { MenuSection } from './components/MenuSection.tsx';
import { LoungeExperience } from './components/LoungeExperience.tsx';
import { LocationAndHours } from './components/LocationAndHours.tsx';
import { GoogleMapsReviewsCard } from './components/GoogleMapsReviewsCard.tsx';
import { Footer } from './components/Footer.tsx';
import { ReservationModal } from './components/ReservationModal.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0807] text-[#f5f0e8] flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <VisualGallery />
        <MenuSection />
        <LoungeExperience onOpenBooking={() => setIsBookingOpen(true)} />
        <LocationAndHours />
        <GoogleMapsReviewsCard />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <FloatingActions />

      {/* Booking / Inquiry Modal */}
      <ReservationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
