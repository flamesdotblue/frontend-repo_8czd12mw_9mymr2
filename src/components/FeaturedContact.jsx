import React from 'react';
import { Star, MapPin, Phone, Mail } from 'lucide-react';

const FeaturedTailors = () => {
  const tailors = [
    { id: 1, name: 'Stitch & Fit Studio', rating: 4.9, area: 'Downtown', tags: ['Alterations', 'Custom'] },
    { id: 2, name: 'QuickFix Tailors', rating: 4.7, area: 'Riverside', tags: ['Repairs', 'Zippers'] },
    { id: 3, name: 'Bespoke Atelier', rating: 5.0, area: 'Uptown', tags: ['Suits', 'Blazers'] },
  ];

  return (
    <section id="tailors" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Featured Tailors</h2>
        <p className="mt-2 text-slate-600">Trusted local experts with great reviews.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tailors.map((t) => (
            <div key={t.id} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">{t.name}</h3>
                  <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {t.area}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {t.rating}
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs rounded-md bg-slate-100 text-slate-700">{tag}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a href="#contact" className="text-sm text-indigo-700 font-medium">Contact</a>
                <button className="text-sm text-slate-700 font-medium">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // Replace with API call in future
    console.log('Contact submitted', data);
    alert('Thanks! We\'ll get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Contact Us</h2>
            <p className="mt-2 text-slate-600">Questions, partnerships, or support — we\'re here to help.</p>

            <div className="mt-6 space-y-3 text-slate-700">
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-slate-400" /> +91 98765 43210</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-slate-400" /> support@pockettailor.com</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm text-slate-700 mb-1">Name</label>
                <input name="name" required className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Email</label>
                <input name="email" type="email" required className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Message</label>
                <textarea name="message" rows="4" required className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
              </div>
              <button type="submit" className="inline-flex justify-center px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const FeaturedContact = () => (
  <>
    <FeaturedTailors />
    <Contact />
  </>
);

export default FeaturedContact;
