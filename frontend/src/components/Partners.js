import React from 'react';

const Partners = () => {
  const testimonials = [
    {
      quote: "Amekany's consistent quality and reliable supply have been game-changers for our packaging operations. Their food-grade pellets exceed our expectations every time.",
      author: "Sarah Johnson",
      position: "Supply Chain Director",
      company: "Global Packaging Solutions"
    },
    {
      quote: "Working with Amekany has allowed us to significantly reduce our environmental footprint while maintaining the highest quality standards in our products.",
      author: "Michael Chen",
      position: "Sustainability Manager",
      company: "EcoTech Industries"
    },
    {
      quote: "The technical support and custom formulations from Amekany have been instrumental in developing our new sustainable product line.",
      author: "Dr. Lisa Williams",
      position: "R&D Director",
      company: "Innovation Materials Corp"
    }
  ];

  const partnerLogos = [
    { name: 'Global Packaging Solutions', logo: '/api/placeholder/150/60' },
    { name: 'EcoTech Industries', logo: '/api/placeholder/150/60' },
    { name: 'Innovation Materials Corp', logo: '/api/placeholder/150/60' },
    { name: 'Sustainable Solutions Ltd', logo: '/api/placeholder/150/60' },
    { name: 'Green Manufacturing Co', logo: '/api/placeholder/150/60' },
    { name: 'Future Plastics Inc', logo: '/api/placeholder/150/60' }
  ];

  return (
    <section id="partners" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partners & <span className="gradient-text">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders worldwide for sustainable plastic solutions
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-on-scroll">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift h-full">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-teal-500 mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H8.414l-2.707 2.707A1 1 0 014 15.414V13H4a1 1 0 01-1-1V4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 italic leading-relaxed mb-6">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                  <div className="text-sm text-teal-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white rounded-xl p-6 shadow-sm hover-lift text-center">
              <div className="text-gray-600 font-semibold">Global Packaging</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover-lift text-center">
              <div className="text-gray-600 font-semibold">EcoTech Industries</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover-lift text-center">
              <div className="text-gray-600 font-semibold">Innovation Materials</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover-lift text-center">
              <div className="text-gray-600 font-semibold">Sustainable Solutions</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover-lift text-center">
              <div className="text-gray-600 font-semibold">Green Manufacturing</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover-lift text-center">
              <div className="text-gray-600 font-semibold">Future Plastics</div>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img 
                src="https://images.pexels.com/photos/32955243/pexels-photo-32955243.jpeg" 
                alt="Industrial partnership" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="animate-on-scroll">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Become a <span className="gradient-text">Partner</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Join our global network of manufacturers committed to sustainability and quality. 
                Together, we can create a circular economy for plastic materials.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Reliable supply chain and logistics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Technical support and custom solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Sustainability certifications and reporting</span>
                </div>
              </div>
              <a
                href="#contact"
                className="btn-primary inline-block"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;