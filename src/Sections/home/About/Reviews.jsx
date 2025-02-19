import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import reviewImage from "../../../assets/images/review-user.jpg"; // Replace with actual user image
import backgroundImage from "../../../assets/images/review-user.jpg"; // Replace with actual background image

const reviews = [
  {
    name: "Lerato M.",
    text: "I've never felt more confident! The skincare products are top quality, and my skin has never looked better. Delivery was fast and seamless!",
    img: reviewImage,
  },
  {
    name: "Sipho D.",
    text: "Booking was easy, and my stylist was amazing! The service felt personalized, and I’m excited for my next session.",
    img: reviewImage,
  },
  {
    name: "Aisha K.",
    text: "The convenience is unmatched! I love how simple it is to book an appointment, and the professionals are so talented.",
    img: reviewImage,
  },
];

const Reviews = () => {
  return (
    <section
      className="w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center relative px-6 md:px-16 py-12"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 w-full max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-8">
          Real Stories, Real Glow—Because Trust is Everything
        </h1>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="p-6">
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                <img src={review.img} alt={review.name} className="w-16 h-16 rounded-full mb-4" />
                <h3 className="text-lg font-bold">{review.name}</h3>
                <p className="text-sm text-gray-600 text-center mt-2">{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
