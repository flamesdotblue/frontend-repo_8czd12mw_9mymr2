import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = ({ onPrimary, onSecondary }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
              <Sparkles className="w-4 h-4" />
              Tailoring made simple
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Your local tailor, one tap away
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Book alterations, repairs, or custom fits with trusted tailors nearby. Fast pickup, precise measurements, effortless delivery.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={onPrimary} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700">
                Book a service
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#tailors" onClick={onSecondary} className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium">
                Find tailors
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Built by Dhruv Rajak (Roll No: 23101606)
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-white shadow-sm border border-slate-200 p-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-50" />
              <div className="rounded-lg bg-gradient-to-br from-rose-100 to-rose-50" />
              <div className="rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-50" />
              <div className="rounded-lg bg-gradient-to-br from-amber-100 to-amber-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
