import React from 'react';

const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Closing the Loop for a 
              <span className="gradient-text"> Cleaner Future</span>
            </h3>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At Amekany, we're revolutionizing the plastic industry by transforming 
              post-consumer soft plastics into premium food-grade plastic pellets. 
              Our innovative approach doesn't just reduce waste—it creates valuable 
              resources that drive sustainable economic growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Environmental Impact</h4>
                  <p className="text-gray-600">Reducing plastic waste and carbon footprint through innovative recycling technology.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                  <p className="text-gray-600">Producing food-grade pellets that meet the highest international standards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-on-scroll">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/9324374/pexels-photo-9324374.jpeg" 
                alt="Sustainability and recycling" 
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;