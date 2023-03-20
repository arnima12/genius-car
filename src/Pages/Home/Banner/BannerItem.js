import React from 'react';
import './BannerItem.css'
const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-image">
        <img src={image} className="w-full rounded-xl" alt="" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-3xl lg:text-6xl font-bold text-white">Affordable <br />
          Price for Car <br />
          Service</h1>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-3/4 lg:w-2/5 mt-8 lg:mt-0">
        <p className="hidden lg:block text-xl font-bold text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-24 top-3/4 ">
        <button className="btn btn-error w-28 lg:w-32 text-white border-none text-[10px] lg:text-[12px]">Discover More</button>
        <button className="btn btn-outline btn-error w-28 lg:w-32 text-[10px] lg:text-[12px] hidden md:block">Buy now</button>
      </div>
      <div className="absolute hidden md:flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle bg-red-500">❮</a>
        <a href={`#slide${next}`} className="btn btn-circle bg-red-500">❯</a>
      </div>
    </div>
  );
};

export default BannerItem;