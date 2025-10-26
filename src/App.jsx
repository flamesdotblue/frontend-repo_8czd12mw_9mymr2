import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedContact from './components/FeaturedContact';
import { X } from 'lucide-react';

export default function App() {
  const [authOpen, setAuthOpen] = React.useState(false);
  const [authMode, setAuthMode] = React.useState('login'); // 'login' | 'signup'
  const [role, setRole] = React.useState('customer'); // 'customer' | 'tailor'

  const [bookingOpen, setBookingOpen] = React.useState(false);
  const [bookingService, setBookingService] = React.useState('Alterations');

  const openLogin = () => { setAuthMode('login'); setAuthOpen(true); };
  const openSignup = () => { setAuthMode('signup'); setAuthOpen(true); };

  const openBooking = (service) => { setBookingService(service); setBookingOpen(true); };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Auth submit', { mode: authMode, role, ...data });
    alert(`${authMode === 'login' ? 'Logged in' : 'Signed up'} as ${role}.`);
    setAuthOpen(false);
    form.reset();
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Booking submit', { service: bookingService, ...data });
    alert('Booking submitted! We\'ll confirm shortly.');
    setBookingOpen(false);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onLogin={openLogin} onSignup={openSignup} />
      <Hero onPrimary={() => openBooking('Alterations')} onSecondary={() => {}} />
      <Services onBook={openBooking} />
      <FeaturedContact />

      {authOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-slate-900/60" onClick={() => setAuthOpen(false)} />
          <div className="relative z-10 w-full max-w-md mx-auto p-6 rounded-xl bg-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex p-1 rounded-lg bg-slate-100">
                <button onClick={() => setAuthMode('login')} className={`px-3 py-1.5 rounded-md text-sm font-medium ${authMode === 'login' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}>Login</button>
                <button onClick={() => setAuthMode('signup')} className={`px-3 py-1.5 rounded-md text-sm font-medium ${authMode === 'signup' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}>Sign Up</button>
              </div>
              <button onClick={() => setAuthOpen(false)} aria-label="Close" className="p-2 rounded-md hover:bg-slate-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-4">
              <label className="text-sm text-slate-700">I am a</label>
              <div className="mt-2 inline-flex p-1 rounded-lg bg-slate-100">
                <button onClick={() => setRole('customer')} className={`px-3 py-1.5 rounded-md text-sm font-medium ${role === 'customer' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}>Customer</button>
                <button onClick={() => setRole('tailor')} className={`px-3 py-1.5 rounded-md text-sm font-medium ${role === 'tailor' ? 'bg-white shadow text-slate-900' : 'text-slate-600'}`}>Tailor</button>
              </div>
            </div>

            <form onSubmit={handleAuthSubmit} className="grid gap-3">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-sm text-slate-700 mb-1">Full Name</label>
                  <input name="name" required className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
                </div>
              )}
              <div>
                <label className="block text-sm text-slate-700 mb-1">Email</label>
                <input name="email" type="email" required className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Password</label>
                <input name="password" type="password" required className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
              </div>
              <button type="submit" className="mt-1 inline-flex justify-center px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700">
                {authMode === 'login' ? 'Login' : 'Create account'}
              </button>
            </form>
          </div>
        </div>
      )}

      {bookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-slate-900/60" onClick={() => setBookingOpen(false)} />
          <div className="relative z-10 w-full max-w-2xl mx-auto p-6 rounded-xl bg-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Book: {bookingService}</h3>
              <button onClick={() => setBookingOpen(false)} aria-label="Close" className="p-2 rounded-md hover:bg-slate-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleBookingSubmit} className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm text-slate-700 mb-1">Service</label>
                <input value={bookingService} readOnly className="w-full px-3 py-2 rounded-md border border-slate-300 bg-slate-100 text-slate-700" />
              </div>

              <div>
                <label className="block text-sm text-slate-700 mb-1">Garment Type</label>
                <select name="garment" required className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white">
                  <option value="Shirt">Shirt</option>
                  <option value="Pant">Pant</option>
                  <option value="Blazer">Blazer</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-700 mb-1">Pickup Date</label>
                <input name="pickup_date" type="date" required className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-slate-700 mb-1">Address</label>
                <input name="address" required placeholder="House, Street, City, Pincode" className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-slate-700 mb-1">Measurements / Notes</label>
                <textarea name="notes" rows="4" placeholder="Include key measurements or special instructions" className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white" />
              </div>

              <div className="md:col-span-2 flex justify-end gap-2 mt-2">
                <button type="button" onClick={() => setBookingOpen(false)} className="px-4 py-2 rounded-md border border-slate-200 text-slate-700">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700">Confirm Booking</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer className="border-t border-slate-200 text-center py-6 text-sm text-slate-600">© {new Date().getFullYear()} PocketTailor. All rights reserved.</footer>
    </div>
  );
}
