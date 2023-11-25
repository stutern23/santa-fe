import React from 'react';
import Sidebar from './sidebar';
import style from "./style.module.css";
import Santa1 from "../../assets/pngwing 4.svg";
import Santa2 from "../../assets/image 4.svg";
import Santa3 from "../../assets/image 5.svg";
import PlayBtn from "../../assets/Polygon 1.svg";
import Mic from "../../assets/ic_round-mic.svg";


const Home = () => {
  return (
       <section className={`${style.home_bg} relative`}>
            <Sidebar />
            <div className={`${style.resize_width} ${style.resize_width_desktop} p-4`}>
                 <div className={`grid gap-[1.5rem] my-4`}>
                      <div className={`bg-[#fff] p-4 rounded-[10px] flex gap-[1.5rem] justify-start items-center flex-col md:flex-row md:justify-between md:px-8 lg:px-[4rem]`}>
                           <div>
                                <h1 className={`font-[700] text-[2rem] leading-[42px] text-[#370000] uppercase md:text-[3rem] text-center mb-[1rem] md:text-left`}>have a wish?</h1>
                                <p className={`font-[500] text-[1rem] leading-[30px] text-[#370000] md:text-[1.2rem] text-center md:text-left max-w-[80%] mx-auto md:mx-0`}>SantaAI is an AI that grants your wish blah blah blah</p>
                         </div>
                         <div>
                                <img src={Santa1} alt="A picture of Santa" />
                         </div>
                           
                      </div>

                      <div className={`grid md:grid-cols-2 gap-[1.5rem] `}>
                           <div className={`relative`}>
                                <img src={Santa2} alt="A picture of Santa carrying kids" className={`rounded-[10px] w-full h-full object-cover`} />
                                <div className={`rounded-[10px] absolute right-0 left-0 bottom-0 top-0 bg-[rgba(42,0,0,0.55)] flex justify-center items-center`}>
                                     <div className={`w-[80px] h-[80px] rounded-full border-2 border-[#fff] bg-[rgba(255,255,255,0.56)] flex justify-center items-center cursor-pointer`}>
                                          <img src={PlayBtn} alt="Play button" />
                                          
                                     </div>
                                     
                                </div>
                           </div>
                           <div className={`relative`}>
                                <img src={Santa3} alt="A picture of cheering" className={`rounded-[10px] w-full h-full object-cover`} />
                                <div className={`rounded-[10px] absolute right-0 left-0 bottom-0 top-0 bg-[rgba(42,0,0,0.55)] flex justify-center items-center`}>
                                     <div className={`w-[80px] h-[80px] rounded-full border-2 border-[#fff] bg-[rgba(255,255,255,0.56)] flex justify-center items-center cursor-pointer`}>
                                          <img src={PlayBtn} alt="Play button" />
                                          
                                     </div>
                                     
                                </div>
                           </div>
                      </div>

                      <div className={`grid md:grid-cols-4 gap-[1rem]`}>
                           <div className={`w-full h-[120px] rounded-[10.28px] bg-[#f30000] mx-auto`}></div>
                           <div className={`w-full h-[120px] rounded-[10.28px] bg-[#f30000] mx-auto`}></div>
                           <div className={`w-full h-[120px] rounded-[10.28px] bg-[#f30000] mx-auto`}></div>
                           <div className={`w-full h-[120px] rounded-[10.28px] bg-[#f30000] mx-auto`}></div>
                      </div>
                      <div>
                           <div className={`relative`}>
                                <input type="text" name="" id="" placeholder='Hi, I am SantaAI, what do you want for christmas' className={`${style.textInput} p-3 bg-[#fff] border border-[#370000] rounded-[10px] w-full outline-none`} />
                                <div className={`absolute bg-[#f30000] w-[25px] h-[25px] rounded-full flex justify-center items-center p-1 right-[14px] top-[13px]`}>
                                     <img src={Mic}  alt="Microphone" />
                                     
                                </div>
                           </div>
                      </div>
                 </div>
            </div>
    </section>
  )
}

export default Home