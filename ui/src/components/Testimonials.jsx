import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Senior Nurse",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote: "HealthStaff Connect helped me find the perfect position at a leading hospital in Mumbai. Their personal attention to my career goals made all the difference."
  },
  {
    name: "Rajesh Kumar",
    role: "Healthcare Assistant",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote: "The team's support was exceptional. They understood my requirements and found me opportunities that perfectly matched my experience and preferences."
  },
  {
    name: "Anjali Patel",
    role: "Registered Nurse",
    image: "https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote: "I've been working with HealthStaff Connect for two years now, and they've consistently provided me with excellent opportunities and support."
  },
  {
    name: "Dr. Rahul Mehta",
    role: "Physiotherapist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote: "The professional environment and patient-focused approach make this service stand out. Highly recommended for healthcare professionals."
  },
  {
    name: "Sarah Johnson",
    role: "Home Care Specialist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote: "Outstanding service and support. The team goes above and beyond to ensure both caregivers and patients are well-matched and satisfied."
  },
  {
    name: "Dr. Michael Chang",
    role: "Medical Consultant",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    quote: "Their commitment to quality healthcare and professional development is remarkable. A great platform for healthcare professionals."
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 1;
          }
        }
      }, 30);
    };

    startScrolling();

    scrollContainer.addEventListener('mouseenter', () => {
      clearInterval(scrollInterval);
    });

    scrollContainer.addEventListener('mouseleave', () => {
      startScrolling();
    });

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Read what healthcare professionals and patients have to say about their experience with our services
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden gap-6 pb-8 -mx-4 px-4 scroll-smooth"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={index}
              className="flex-none w-[350px] bg-gray-800 p-6 rounded-xl shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 