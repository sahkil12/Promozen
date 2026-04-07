import { Autoplay, Navigation, Pagination } from "swiper/modules";
import BgGridDesign from "../../../utils/BgGridDesign";
import SectionHeader from "../../../utils/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReviewCard from "../../../utils/Cards/ReviewCard";

// IMPORTANT CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {

     const reviews = [
          {
               name: "Rafiq Hasan",
               role: "CEO, TechBangla",
               comment: "Promozen transformed our online presence completely. Our organic traffic increased by 300% in just 3 months. Their team is professional, creative, and always delivers on time. Highly recommended!",
               stars: 5
          },
          {
               name: "Sarah Ahmed",
               role: "Founder, StyleHub BD",
               comment: "The social media designs are absolutely stunning. Our engagement doubled since we started working with Promozen. They understand brand aesthetics like no one else.",
               stars: 5
          },
          {
               name: "Kamal Uddin",
               role: "Director, FreshMart",
               comment: "Professional, responsive, and incredibly talented team. They delivered our website ahead of schedule and it looks world-class. The ROI from their digital marketing is exceptional.",
               stars: 5
          },
          {
               name: "Imran Khan",
               role: "Owner, GreenLeaf Organics",
               comment: "From motion graphics to social media management, Promozen handles everything with such quality. Our brand looks premium now and customers notice the difference. Outstanding work!",
               stars: 5
          },
          {
               name: "Fatima Begum",
               role: "Marketing Head, EduFirst",
               comment: "Their YouTube SEO service helped us grow from 500 to 50,000 subscribers in 6 months. Incredible results and always transparent with their reporting.",
               stars: 5
          }
     ];

     return (
          <section className="relative bg-secondary overflow-hidden inter">

               <div className="relative py-16 lg:py-20 z-10 w-full xl:max-w-[75%] mx-auto px-4 md:px-6">

                    <div className="pointer-events-none">
                         <BgGridDesign />
                    </div>

                    <SectionHeader
                         header="Testimonials"
                         title1="What Clients"
                         title2="Say"
                         center={true}
                    />
                    {/* swiper */}
                    <div className="max-w-7xl mx-auto">
                         <Swiper
                              modules={[Navigation, Pagination, Autoplay]}
                              slidesPerView={1}
                              centeredSlides={true}
                              spaceBetween={40}
                              loop={true}

                              autoplay={{
                                   delay: 2500,
                                   disableOnInteraction: false
                              }}

                              onBeforeInit={(swiper) => {
                                   swiper.params.navigation.prevEl = ".custom-prev";
                                   swiper.params.navigation.nextEl = ".custom-next";
                              }}

                              navigation={{
                                   prevEl: ".custom-prev",
                                   nextEl: ".custom-next",
                              }}

                              pagination={{
                                   el: ".custom-pagination",
                                   clickable: true,
                              }}

                              breakpoints={{
                                   768: {
                                        slidesPerView: 1.5,
                                        centeredSlides: true,
                                   },
                                   1024: {
                                        slidesPerView: 2.6,
                                        centeredSlides: true,
                                   },
                              }}

                              className="pb-10"
                         >
                              {reviews.map((review, index) => (
                                   <SwiperSlide key={index}>
                                        {({ isActive }) => (
                                             <ReviewCard
                                                  review={review}
                                                  isActive={isActive}
                                             />
                                        )}
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>
                    {/* arrows */}
                    <div className="flex justify-center items-center max-w-62 mx-auto">
                         {/* Left Arrow */}
                         <button
                              className="custom-prev bg-base-100 w-16 h-11 rounded-full flex justify-center items-center transition hover:bg-primary active:bg-primary cursor-pointer"
                              aria-label="Previous Review"
                         >
                              <FaArrowLeft className="text-base-200" />
                         </button>

                         {/* Pagination Dots */}
                         <div className={`custom-pagination flex justify-center w-fit`}></div>
                         {/*Right Arrow */}
                         <button
                              className="custom-next bg-base-100 w-16 h-11 rounded-full flex justify-center items-center transition hover:bg-primary active:bg-primary cursor-pointer"
                              aria-label="Next Review"
                         >
                              <FaArrowRight className="text-base-200" />
                         </button>
                    </div>

               </div>

          </section>
     );
};

export default Testimonials;