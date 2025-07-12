import React from 'react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-teal-600 to-teal-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Make a 
            <span className="block text-teal-200">Difference?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-teal-100 mb-12 max-w-3xl mx-auto">
            Join the circular economy revolution. Partner with Amekany to transform 
            plastic waste into valuable resources for a sustainable future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started Today
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-700 transition-all duration-300"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
    </section>
  );
};

export default CTA;