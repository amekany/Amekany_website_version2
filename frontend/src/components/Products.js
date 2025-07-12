import React from 'react';

const Products = () => {
  const products = [
    {
      name: 'Food-Grade PET Pellets',
      grade: 'Premium Grade',
      description: 'High-quality recycled PET pellets suitable for food packaging applications.',
      specifications: [
        'IV: 0.72-0.78 dl/g',
        'Moisture: <50 ppm',
        'Acetaldehyde: <1 ppm',
        'Color: Clear to light blue'
      ],
      applications: ['Food containers', 'Beverage bottles', 'Packaging films']
    },
    {
      name: 'Industrial Grade Pellets',
      grade: 'Standard Grade',
      description: 'Versatile recycled plastic pellets for various industrial applications.',
      specifications: [
        'Density: 1.38-1.40 g/cm³',
        'Melt flow: 15-25 g/10min',
        'Tensile strength: >50 MPa',
        'Various colors available'
      ],
      applications: ['Automotive parts', 'Industrial containers', 'Construction materials']
    },
    {
      name: 'Custom Formulations',
      grade: 'Tailored Solutions',
      description: 'Bespoke plastic pellet formulations designed for specific client requirements.',
      specifications: [
        'Custom specifications',
        'Additive packages',
        'Color matching',
        'Performance optimization'
      ],
      applications: ['Specialized packaging', 'Technical applications', 'Custom products']
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Products & <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium recycled plastic pellets engineered for excellence and sustainability
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="animate-on-scroll">
              <div className="bg-gray-50 rounded-2xl p-8 hover-lift h-full">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-semibold rounded-lg mb-4">
                    {product.grade}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Specifications:</h4>
                  <ul className="space-y-2">
                    {product.specifications.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, appIndex) => (
                      <span key={appIndex} className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                >
                  Request Sample
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Product Showcase */}
        <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Premium Quality <span className="gradient-text">Guaranteed</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Every batch of our recycled plastic pellets undergoes rigorous testing to ensure 
                they meet the highest industry standards for quality, purity, and performance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Laboratory tested for purity and contamination</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Consistent quality across all production batches</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Certified for food-grade applications</span>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll">
              <img 
                src="https://images.pexels.com/photos/7767738/pexels-photo-7767738.jpeg" 
                alt="Plastic pellets and bottles" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;