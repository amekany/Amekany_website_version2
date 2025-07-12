import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'ISO 9001:2015',
      subtitle: 'Quality Management',
      description: 'Certified quality management system ensuring consistent product excellence.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Food Grade Certified',
      subtitle: 'FDA Compliant',
      description: 'Our pellets meet strict food-grade standards for safe packaging applications.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'ISO 14001:2015',
      subtitle: 'Environmental Management',
      description: 'Committed to environmental responsibility and sustainable practices.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'HACCP Certified',
      subtitle: 'Food Safety',
      description: 'Hazard Analysis Critical Control Points certification for food safety.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  const impacts = [
    {
      metric: '50,000',
      unit: 'tons',
      label: 'CO₂ Reduced Annually',
      description: 'Equivalent to removing 10,000 cars from the road'
    },
    {
      metric: '100,000',
      unit: 'tons',
      label: 'Plastic Waste Diverted',
      description: 'Preventing plastic from entering landfills and oceans'
    },
    {
      metric: '85%',
      unit: 'less',
      label: 'Energy Consumption',
      description: 'Compared to virgin plastic production'
    },
    {
      metric: '200+',
      unit: 'partners',
      label: 'Global Network',
      description: 'Manufacturing partners across 15 countries'
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certifications & <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted standards, measurable impact, and certified excellence in sustainable plastic recycling
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <div key={index} className="animate-on-scroll">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-teal-600 font-semibold mb-3">{cert.subtitle}</p>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Environmental Impact
            </h3>
            <p className="text-xl text-gray-600">
              Making a real difference in the fight against plastic waste
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold gradient-text">
                    {impact.metric}
                  </span>
                  <span className="text-xl text-gray-600 ml-2">{impact.unit}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{impact.label}</h4>
                <p className="text-gray-600 text-sm">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;