import React from 'react';
import Nav from './nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin,} from '@fortawesome/free-brands-svg-icons';
import { faPen, faToolbox, faBrush, faDatabase} from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      {/* Hero Section Start */}
      <section id="home" className="pt-28">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-5 lg:w-1/2">
              <h1 className="text-base font-semibold text-gray py-5">WEBSITE DEVELOPER</h1>
              <h1 className="text-4xl font-bold">Let’s <span className="text-oren">discuss</span> your <span className="text-oren">website application</span> with me!</h1>
              <p className="text-base font-normal text-gray py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis</p>
            </div>
            <div className="max-w-full self-end px-5 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img src="/hero.png" alt="" className="w-mx-auto lg:scale-90 lg:ml-20" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Introduction */}
      <section id="Information" className="pt-20 shadow-sm">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 mb-10 justify-center text-center">
              <h1 className="text-2xl font-bold">Service We Can Help You</h1>
              <p className="text-base font-normal text-gray">Management information systems are basically used to manage a variety of data for work processes and Administration becomes easier and more organized.</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:mt-10 place-items-center">
                {/* Card 1 */}
                <div className="max-w-[300px] max-h-fit mx-5 mt-10 rounded overflow-hidden shadow-lg md:hover:scale-125 transition duration-500 cursor-pointer hover:z-5 aos-init aos-animate bg-card bg-opacity-40 hover:bg-white">
                  <div className="flex-center pt-5 pb-4">
                    <a className="duration-300 text-center font-normal hover:shadow-lg text-dark border-2 py-1 px-2 w-[150px] rounded-full" href="#"><FontAwesomeIcon icon={faBrush} size="1x" /></a>
                  </div>
                  <div className="px-6">
                    <div className="font-bold text-xl mb-2">Web Design</div>
                    <p className="text-gray font-normal text-sm py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi voluptatum dolorem hic doloremque dolores.</p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="max-w-[300px] max-h-fit mx-5 mt-10 rounded overflow-hidden shadow-lg md:hover:scale-125 transition duration-500 cursor-pointer hover:z-5 aos-init aos-animate bg-card bg-opacity-40 hover:bg-white">
                  <div className="flex-center pt-5 pb-4">
                    <a className="duration-300 text-center font-normal hover:shadow-lg text-dark border-2 py-1 px-2 w-[150px] rounded-full" href="#"><FontAwesomeIcon icon={faDatabase} size="1x" /></a>
                  </div>
                  <div className="px-6">
                    <div className="font-bold text-xl mb-2">Database</div>
                    <p className="text-gray font-normal text-sm py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi voluptatum dolorem hic doloremque dolores.</p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="max-w-[300px] max-h-fit mx-5 mt-10 rounded overflow-hidden shadow-lg md:hover:scale-125 transition duration-500 cursor-pointer hover:z-5 aos-init aos-animate bg-card bg-opacity-40 hover:bg-white">
                  <div className="flex-center pt-5 pb-4">
                    <a className="duration-300 text-center font-normal hover:shadow-lg text-dark border-2 py-1 px-2 w-[150px] rounded-full" href="#"><FontAwesomeIcon icon={faToolbox} size="1x" /></a>
                  </div>
                  <div className="px-6">
                    <div className="font-bold text-xl mb-2">Prototype</div>
                    <p className="text-gray font-normal text-sm py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi voluptatum dolorem hic doloremque dolores.</p>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="max-w-[300px] max-h-fit mx-5 mt-10 rounded overflow-hidden shadow-lg md:hover:scale-125 transition duration-500 cursor-pointer hover:z-5 aos-init aos-animate bg-card bg-opacity-40 hover:bg-white">
                  <div className="flex-center pt-5 pb-4">
                    <a className="duration-300 text-center font-normal hover:shadow-lg text-dark border-2 py-1 px-2 w-[150px] rounded-full" href="#"><FontAwesomeIcon icon={faPen} size="1x" /></a>
                  </div>
                  <div className="px-6">
                    <div className="font-bold text-xl mb-2">Content Writing</div>
                    <p className="text-gray font-normal text-sm py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi voluptatum dolorem hic doloremque dolores.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End */}

      {/* Information Section Start */}
      <section id="Information" className="pt-20 shadow-sm ">
        <div className="container">
          <div className="flex flex-wrap justify-center ">
            <div className="w-full px-4 mb-10 justify-center text-center">
              <p className="font-bold text-base text-oren text-center">Information System</p>
              <h1 className="text-2xl font-bold">Management Information System</h1>
              <p className="text-base font-normal text-gray">Management information systems are basically used to manage a variety of data for work processes and Administration becomes easier and more organized.</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:mt-10 place-items-center">
                {/* <!-- Card 1 --> */}
                <div className="max-w-[300px] max-h-fit mx-5 mt-10 rounded overflow-hidden shadow-lg md:hover:scale-125 transition duration-500 cursor-pointer hover:z-5 aos-init aos-animate bg-white bg-opacity-40 hover:bg-white">
                  <img className="w-full" src="/hero.png" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Desktop Application</div>
                    <p className="text-gray font-normal text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi voluptatum dolorem hic doloremque dolores.
                    </p>
                    <div className="flex-center pt-5 pb-4">
                      <a className="duration-300 text-center font-normal hover:shadow-lg hover:bg-red-700 text-red border-2 py-1 px-2 w-[150px] rounded-full" href="#">Show More</a>
                    </div>
                  </div>
                </div>
                {/* <!-- Card 2 --> */}
                <div className="max-w-[300px] max-h-fit mx-5 mt-10 rounded overflow-hidden shadow-lg md:hover:scale-125 transition duration-500 cursor-pointer hover:z-5 aos-init aos-animate bg-white bg-opacity-40 hover:bg-white">
                  <img className="w-full" src="/hero.png" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Desktop Application</div>
                    <p className="text-gray font-normal text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi voluptatum dolorem hic doloremque dolores.
                    </p>
                    <div className="flex-center pt-5 pb-4">
                      <a className="duration-300 text-center font-normal hover:shadow-lg hover:bg-red-700 text-red border-2 py-1 px-2 w-[150px] rounded-full" href="#">Show More</a>
                    </div>
                  </div>
                </div>
                {/* <!-- Card 3  --> */}
                <div className="max-w-[300px] max-h-fit mx-5 mt-10 rounded overflow-hidden shadow-lg md:hover:scale-125 transition duration-500 cursor-pointer hover:z-5 aos-init aos-animate bg-white bg-opacity-40 hover:bg-white">
                  <img className="w-full" src="/hero.png" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Desktop Application</div>
                    <p className="text-gray font-normal text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi voluptatum dolorem hic doloremque dolores.
                    </p>
                    <div className="flex-center pt-5 pb-4">
                      <a className="duration-300 text-center font-normal hover:shadow-lg hover:bg-red-700 text-red border-2 py-1 px-2 w-[150px] rounded-full" href="#">Show More</a>
                    </div>
                  </div>
                </div>
                {/* <!-- Card 4 --> */}
                <div className="max-w-[300px] max-h-fit mx-5 mt-10 rounded overflow-hidden shadow-lg md:hover:scale-125 transition duration-500 cursor-pointer hover:z-5 aos-init aos-animate bg-white bg-opacity-40 hover:bg-white">
                  <img className="w-full" src="/hero.png" alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Desktop Application</div>
                    <p className="text-gray font-normal text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi voluptatum dolorem hic doloremque dolores.
                    </p>
                    <div className="flex-center pt-5 pb-4">
                      <a className="duration-300 text-center font-normal hover:shadow-lg hover:bg-red-700 text-red border-2 py-1 px-2 w-[150px] rounded-full" href="#">Show More</a>
                    </div>
                  </div>
                </div>
                {/* <!-- end card --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer --> */}
      <footer className="w-full bg-black/5 p-4 text-center shadow-lg">
        <div className="mt-6 lg:mb-0 mb-6">
          <button className="bg-navy text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 mb-3">
            <FontAwesomeIcon icon={faInstagram} />
          </button>
          <button className="bg-navy text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 mb-3">
            <FontAwesomeIcon icon={faGithub} />
          </button>
          <button className="bg-navy text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 mb-3">
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </div>
        <p>© 2024 Copyright: <a href="#">daffaaptar</a></p>
      </footer>
    </>
  );
}

export default App;
