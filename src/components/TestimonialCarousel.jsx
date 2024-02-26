import React from 'react';
import Slider from 'react-slick';

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const testimonials = [
    { name: "John Doe", text: "Fantastic event! Our company gained a lot of exposure." },
    { name: "Jane Smith", text: "A great opportunity to connect with industry leaders." },
    // Add more testimonials as needed
  ];

  return (
    <section className="testimonial-carousel">
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>{testimonial.text}</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialCarousel;
