import React from 'react';
import { Scissors, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, onBook }) => (
  <div className="flex flex-col p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
    <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-sm text-slate-600 flex-1">{description}</p>
    <button onClick={() => onBook(title)} className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
      Book Now
    </button>
  </div>
);

const HowItWorks = () => (
  <div id="how" className="mt-16 grid md:grid-cols-3 gap-6">
    {[
      { step: '1', title: 'Choose a service', text: 'Alterations, repairs, or custom tailoring.' },
      { step: '2', title: 'Share details', text: 'Garment, pickup preferences, and address.' },
      { step: '3', title: 'We pick up & deliver', text: 'Track progress and get it delivered.' },
    ].map((s) => (
      <div key={s.step} className="flex items-start gap-3">
        <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
        <div>
          <p className="font-medium text-slate-900">{s.title}</p>
          <p className="text-sm text-slate-600">{s.text}</p>
        </div>
      </div>
    ))}
  </div>
);

const Services = ({ onBook }) => {
  const items = [
    {
      icon: Scissors,
      title: 'Alterations',
      description: 'Perfect fits for your garments — hems, tapering, waist adjustments, and more.',
    },
    {
      icon: Wrench,
      title: 'Repairs',
      description: 'Fix zippers, buttons, tears, and restore your favorites to like-new condition.',
    },
    {
      icon: Sparkles,
      title: 'Custom Tailoring',
      description: 'Get bespoke shirts, pants, or blazers made to your exact measurements.',
    },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Services</h2>
        <p className="mt-2 text-slate-600">Select a service to get started. We will confirm pickup details and timelines.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <ServiceCard key={item.title} icon={item.icon} title={item.title} description={item.description} onBook={onBook} />
          ))}
        </div>

        <HowItWorks />
      </div>
    </section>
  );
};

export default Services;
