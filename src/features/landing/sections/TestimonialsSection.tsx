import React from 'react';
import { Star } from 'lucide-react';
import { Reveal } from '../ui';
import { TESTIMONIALS } from '../../../constants';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold mb-16 text-gray-900 font-satoshi">
            O que dizem sobre nós
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal
              key={testimonial.id}
              delay={index * 150}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 text-[#22c55e] fill-current"
                  />
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
