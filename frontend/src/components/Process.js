import React from 'react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Collection & Sorting',
      description: 'Advanced collection systems gather post-consumer soft plastics from various sources across South Africa.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Cleaning & Preparation',
      description: 'Rigorous cleaning processes remove contaminants and prepare materials for transformation.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Processing & Pelletizing',
      description: 'State-of-the-art technology transforms cleaned plastics into high-quality food-grade pellets.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Quality Control & Distribution',
      description: 'Comprehensive testing ensures food-grade standards before distribution to manufacturing partners.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From waste to wealth through innovative technology and sustainable practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Process Image */}
          <div className="animate-on-scroll">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542274368-443d694d79aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwZmFjdG9yeXxlbnwwfHx8dGVhbHwxNzUyMzM2OTgwfDA&ixlib=rb-4.1.0&q=85" 
                alt="Industrial processing pipes" 
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="animate-on-scroll">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-teal-600">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-on-scroll">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10,000+</div>
            <div className="text-gray-600">Tons Processed</div>
          </div>
          <div className="animate-on-scroll">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">95%</div>
            <div className="text-gray-600">Purity Rate</div>
          </div>
          <div className="animate-on-scroll">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-600">Operations</div>
          </div>
          <div className="animate-on-scroll">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-gray-600">Food Grade</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;