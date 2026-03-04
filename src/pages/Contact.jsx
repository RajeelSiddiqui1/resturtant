import React from 'react';
import { useTheme } from '../App';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const { isDark } = useTheme();

  const additionalInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Us',
      details: '123 Culinary Street, Food City, FC 12345',
      description: 'Located in the heart of the city, easy to find and convenient parking available.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Available Monday through Sunday, 11:00 AM to 10:00 PM for reservations and inquiries.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      details: 'info@mhrestaurant.com',
      description: 'For general inquiries, feedback, or large party reservations.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Opening Hours',
      details: 'Mon-Sun: 11:00 AM - 10:00 PM',
      description: 'We are open daily for lunch and dinner. Happy hour from 3:00 PM to 6:00 PM.',
    },
  ];

  const faqs = [
    {
      question: 'Do I need a reservation?',
      answer: 'While walk-ins are welcome, we highly recommend making a reservation, especially on weekends and holidays, to ensure you have a table waiting for you.',
    },
    {
      question: 'Is there private dining available?',
      answer: 'Yes! We have private dining rooms available for special events, corporate gatherings, and celebrations. Contact us for more information.',
    },
    {
      question: 'Do you accommodate dietary restrictions?',
      answer: 'Absolutely! We offer a variety of vegetarian, vegan, and gluten-free options. Please inform your server of any dietary restrictions.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'For parties of 6 or more, we request at least 24 hours notice for cancellation. No-shows may be charged a fee.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className={`py-16 md:py-24 ${isDark ? 'bg-dark-200' : 'bg-gray-900'}`}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Contact <span className="text-primary-500">Us</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions or want to make a reservation? We'd love to hear from you. Get in touch with us today.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm full={true} />

      {/* Additional Info Section */}
      <section className={`py-16 md:py-24 ${isDark ? 'bg-dark-200' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalInfo.map((info, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  isDark ? 'bg-dark-300 hover:bg-dark-400' : 'bg-white hover:shadow-xl'
                }`}
              >
                <div className="w-12 h-12 bg-primary-500/10 text-primary-500 rounded-lg flex items-center justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {info.title}
                </h3>
                <p className={`font-medium mb-2 ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
                  {info.details}
                </p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 dark:bg-dark-300 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-500">View on Google Maps</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-16 md:py-24 ${isDark ? 'bg-dark-100' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className={`text-3xl md:text-4xl font-display font-bold mt-2 mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Frequently Asked <span className="text-primary-500">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${isDark ? 'bg-dark-300' : 'bg-gray-50'}`}
              >
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {faq.question}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
