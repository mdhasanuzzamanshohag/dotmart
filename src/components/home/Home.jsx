import { FaChevronRight, FaEnvelope, FaThumbsUp } from "react-icons/fa";

import BrandCard from "./BrandCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const brand = useLoaderData();
  const { banner_img } = brand;
    
    return (
      <div className="w-[80%] mx-auto">
        {/* <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/premium-psd/realistic-purple-phone-screen-mockup_99366-551.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Online Shopping</h1>
              <p className="mb-5">
                Buy Authentic Products and Get Fast Delivery. Buy Original
                Apple, Samsung, Sony, Google, Intel, Xiaomi Products.
              </p>
              <Link to="/shop">
                <button className="btn btn-primary">Shop Now</button>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        {/* Why People Choose Us */}
        <div className="my-6">
          <div className="flex flex-col items-center my-4">
            <div className="flex gap-2 items-center my-2">
              <span className="p-2 text-white rounded-full bg-[#FF497C]">
                <FaThumbsUp></FaThumbsUp>
              </span>
              <p className="text-[#FF497C] font-bold">Why Us</p>
            </div>
            <h2 className="text-3xl md:text-4xl text-center font-semibold">
              Why People Choose Us
            </h2>
          </div>
          <div className="grid gap-8 my-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="/service6.webp" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Fast & Secure Delivery</h2>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="/service7.webp" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Money Back Guarantee</h2>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="/service8.webp" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">24 Hour Return Policy</h2>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="/service9.webp" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Pro Quality Support</h2>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="/service10.webp" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Fast Support</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Our Top Seller Brands */}
        <div className="my-6">
          <div className="flex flex-col items-center my-4">
            <div className="flex gap-2 items-center my-2">
              <span className="p-2 text-white rounded-full bg-[#FF497C]">
                <FaChevronRight></FaChevronRight>
              </span>
              <p className="text-[#FF497C] font-bold">Buy Now</p>
            </div>
            <h2 className="text-3xl md:text-4xl text-center font-semibold">
              Our Top Seller Brands
            </h2>
          </div>
          <div className="grid gap-8 my-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {brand.map((comp) => (
              <BrandCard key={comp.Id} comp={comp}></BrandCard>
            ))}
          </div>
        </div>

        {/* Poster */}
        <div className="flex my-4 md:my-10 flex-col md:flex-row justify-around gap-6">
          <div className="card md:w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="/poster-01.webp" alt="Shoes" />
            </figure>
            <div className="card-body items-end">
              <p className="card-title">Online Payment</p>
            </div>
          </div>
          <div className="card md:w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="/poster-02.webp" alt="Shoes" />
            </figure>
            <div className="card-body items-start">
              <p className="card-title">Quick Delivery</p>
            </div>
          </div>
        </div>

        {/* People Say About DotMart */}
        <div className="my-6 md:my-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:py-4">
            People Say About DotMart
          </h2>
          <p className="text-lg text-center pb-2 py-2">100+ unique product</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6">
            <div className="card justify-center items-center text-center md:text-start flex-col md:flex-row card-side text-white bg-[#282664] shadow-xl py-4">
              <figure className="w-[40%] md:w-[80%]">
                <img src="/review1.webp" alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-slate-400">
                  Having knowledge of the best tools and services is crucial to
                  succeed in today’s digital world.
                </h2>
                <p className="text-teal-300">Nila Jahan</p>
              </div>
            </div>

            <div className="card justify-center items-center text-center md:text-start flex-col md:flex-row card-side text-white bg-[#282664] shadow-xl py-4">
              <figure className="w-[40%] md:w-[80%]">
                <img src="/review2.webp" alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-slate-400">
                  This website helped me a lot in finding the most suitable
                  shipping company for my amazon business.
                </h2>
                <p className="text-teal-300">Courtney Henry</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <div
            className="hero"
            style={{
              backgroundImage: "url(./bg-image-5.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center gap-1 py-2">
                    <span className="p-2 bg-[#3577F0] rounded-full">
                      <FaEnvelope></FaEnvelope>
                    </span>
                    <p className="font-semibold">Newsletter</p>
                  </div>
                  <h1 className="mb-5 text-5xl font-bold">Get weekly update</h1>
                </div>

                <div className="flex py-4">
                  <input
                    type="text"
                    placeholder="emaple@gmail.com"
                    className="md:w-full max-w-xs rounded-l-lg p-2 outline-4 outline-blue-900"
                  />
                  <button className="p-2 btn-primary font-semiboldbold rounded-r-lg outline-4 outline-blue-900">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;