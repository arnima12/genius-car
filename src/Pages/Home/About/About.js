import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import part from '../../../assets/images/about_us/parts.jpg';
const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative mb-16">
          <img src={person} className="w-4/5 rounded-lg shadow-2xl" alt=" " />
          <img src={part} className="absolute right-8 top-1/2 w-3/5 rounded-lg shadow-2xl border-8 border-white" alt=" " />
        </div>
        <div className="w-1/2">
          <h4 className="text-sm font-bold text-red-600"> About Us</h4>
          <h2 className="py-6 text-3xl md:text-4xl font-bold">
            We are qualified & of experience in this field</h2>
          <p className="py-6 text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <p className="py-6 text-sm">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="btn bg-red-600 text-white border-none">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;