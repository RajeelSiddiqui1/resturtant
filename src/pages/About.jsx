import React from 'react';
import { useTheme } from '../App';

const About = () => {
  const { isDark } = useTheme();

  const teamMembers = [
    {
      name: 'John Anderson',
      role: 'Head Chef',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'With over 20 years of experience in fine dining, John brings culinary excellence to every dish.',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Sous Chef',
      image: 'https://images.unsplash.com/photo-1583394293214-28ez69de469f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Sarah specializes in creating innovative dishes that blend traditional and modern flavors.',
    },
    {
      name: 'Michael Chen',
      role: 'Pastry Chef',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Michael creates stunning desserts that are as beautiful as they are delicious.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Restaurant Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Emily ensures every guest has an exceptional dining experience from start to finish.',
    },
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Quality',
      description: 'We never compromise on the quality of our ingredients, ensuring every dish meets our high standards.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Hospitality',
      description: 'We treat every guest like family, providing warm and welcoming service that makes you feel at home.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sustainability',
      description: 'We are committed to sustainable practices, sourcing from local farms and minimizing our environmental impact.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We continuously innovate, exploring new flavors and techniques to surprise and delight our guests.',
    },
  ];

  const achievements = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '50k+', label: 'Happy Customers' },
    { number: '100+', label: 'Menu Items' },
    { number: '25+', label: 'Awards Won' },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className={`py-16 md:py-24 ${isDark ? 'bg-dark-200' : 'bg-gray-900'}`}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            About <span className="text-primary-500">MH Restaurant</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the story behind our culinary excellence and meet the passionate team dedicated to creating memorable dining experiences.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className={`py-16 md:py-24 ${isDark ? 'bg-dark-200' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Restaurant interior"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Gourmet dish"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Chef preparing food"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Restaurant ambiance"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years</div>
              </div>
            </div>

            <div>
              <span className="text-primary-500 font-semibold uppercase tracking-wider">Our Story</span>
              <h2 className={`text-3xl md:text-4xl font-display font-bold mt-2 mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                A Journey of <span className="text-primary-500">Passion & Flavor</span>
              </h2>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                Founded in 2009, MH Restaurant began as a small family-owned bistro with a simple mission: to serve exceptional food made with love and the finest ingredients.
              </p>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
                Over the years, we've grown from a humble corner café to one of the city's most beloved fine dining destinations. Yet, our core values remain unchanged – quality, hospitality, and a genuine passion for culinary excellence.
              </p>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
                Today, our team of award-winning chefs continues to push boundaries, crafting innovative dishes that celebrate both traditional flavors and modern techniques. Every plate that leaves our kitchen tells a story of dedication, creativity, and love for the culinary arts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={`py-16 ${isDark ? 'bg-dark-300' : 'bg-primary-500'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-white/80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className={`py-16 md:py-24 ${isDark ? 'bg-dark-200' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold uppercase tracking-wider">Our Values</span>
            <h2 className={`text-3xl md:text-4xl font-display font-bold mt-2 mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              What Drives <span className="text-primary-500">Us</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Our core values guide everything we do, from the ingredients we select to the service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 ${
                  isDark ? 'bg-dark-300 hover:bg-dark-400' : 'bg-white hover:shadow-xl'
                }`}
              >
                <div className="w-16 h-16 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {value.title}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className={`py-16 md:py-24 ${isDark ? 'bg-dark-200' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold uppercase tracking-wider">Our Team</span>
            <h2 className={`text-3xl md:text-4xl font-display font-bold mt-2 mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Meet The <span className="text-primary-500">People</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Our talented team of professionals is dedicated to providing you with an exceptional dining experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  isDark ? 'bg-dark-300' : 'bg-gray-50'
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${isDark ? 'bg-dark-300' : 'bg-gray-900'}`}>
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Experience MH Restaurant Today
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Ready to taste the difference? Book your table now and let us treat you to an unforgettable dining experience.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
