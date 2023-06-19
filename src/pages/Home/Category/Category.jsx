import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle 
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img className="md:h-[250px] sm:h-[150px]"  src="https://i.ibb.co/N7C924q/115826376-shop-toys-toy-store-inside-toy-shop-rows-of-shelves-with-toys-children-s-joy-wide-selectio.webp" alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img className="md:h-[250px] sm:h-[150px]"  src='https://i.ibb.co/TPrSsvr/best-makeup-shops-in-rome-best-makeup-brands-in-italy-best-cosmetics-shops-rome-trastevere-shopping.jpg' alt="" />
                   
                </SwiperSlide>
                <SwiperSlide>
                    <img className="md:h-[250px] sm:h-[150px]"  src='https://i.ibb.co/GWphT8y/3f571cbed868a6a503ec6586f99f1266.jpg' alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img className="md:h-[250px] sm:h-[150px]"  src='https://i.ibb.co/D7017P6/shopping-beauty-products.jpg'alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img className="md:h-[250px] sm:h-[150px]"  src='https://i.ibb.co/RS7QJNq/the-perfume-shop-upgrades-swansea-store-2.jpg'alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img className="md:h-[250px] sm:h-[150px]" src='https://i.ibb.co/YbT2hNn/moscow-russiaapril-242016-diapers-children-260nw-411464611.jpg' alt="" />
                    
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;