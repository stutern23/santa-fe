import React, { useState } from 'react';
import Sidebar from './sidebar';
import style from "./style.module.css";
import Santa1 from "../../assets/pngwing 4.svg";
import Santa2 from "../../assets/image 4.svg";
import Santa3 from "../../assets/image 5.svg";
import PlayBtn from "../../assets/Polygon 1.svg";
import Mic from "../../assets/ic_round-mic.svg";
import Dashboard from "../../assets/ic_round-dashboard.svg";
import Chat from "../../assets/ic_round-chat.svg";
import Gift from "../../assets/mdi_gift.svg";
import Donate from "../../assets/bxs_donate-heart.svg";
import Setting from "../../assets/icon-park-solid_setting-two.svg";
import Logo from "../../assets/Frame 14 (1).svg";
import { Link } from 'react-router-dom';

const Home = () => {
     const [toggle, setToggle] = useState(false);
  return (
       <section className={`${style.home_bg} relative`}>
            <div>
                 <div className={`bg-[rgba(133,128,128,0.68)] fixed top-0 bottom-0 left-0 right-0 w-full h-[100vh] z-[5] ${toggle ? `block` : `hidden`}`}>
               </div>
                 <div className={`h-[100vh] bg-[#fff] z-[7] fixed border-r border-[rgba(255,255,255,0.83)] ${toggle ? `w-[180px]` : `w-[80px]` }`}>
                      <div className={`flex flex-col gap-[1.2rem]`}>
                           <div className={`my-8 flex flex-col gap-8 `}>
                                <div className={`border-b pb-8 border-[#370000] px-3`}>
                                     <Link to="/">
                                          <img src={Logo} alt="Brand Logo" />
                                     </Link>
                                </div>

                                <div className={`ml-auto px-3`} onClick={() => setToggle((prevState) => !prevState)}>
                                     <img src={PlayBtn} alt="toggle button" className={`w-[15px] h-[15px]  cursor-pointer ${toggle ? `rotate-0` : `rotate-[90deg]`}`} />
                                </div>
                           </div>

                           <div className={`flex gap-[.5rem] items-center  p-3 cursor-pointer ${toggle ? `justify-start gap-[.3rem]` : `justify-center`}`}>
                                <Link to="/home">
                                     <img src={Dashboard} alt="Dashboard icon" />
                                </Link>
                                
                                <Link to="./home"  className={`text-[#370000] text-[1rem] font-[500] capitalize ${toggle ? `block` : `hidden`}`}>dashboard</Link>
                           </div>
                           <div className={`flex gap-[.5rem] items-center p-3 cursor-pointer ${toggle ? `justify-start gap-[.3rem]` : `justify-center`}`}>
                                <Link to="/home">
                                     <img src={Chat} alt="Chat icon" />
                                </Link>
                                
                                <Link to="./home"  className={`text-[#370000] text-[1rem] font-[500] capitalize ${toggle ? `block` : `hidden`}`}>chat with santa</Link>
                           </div>
                           <div className={`flex gap-[.5rem] items-center p-3 cursor-pointer ${toggle ? `justify-start gap-[.3rem]` : `justify-center`}`}>
                                <Link to="/home">
                                     <img src={Gift} alt="Gift icon" />
                                </Link>
                                
                                <Link to="./home"  className={`text-[#370000] text-[1rem] font-[500] capitalize ${toggle ? `block` : `hidden`}`}>free gifts</Link>
                           </div>
                           <div className={`flex gap-[.5rem] items-center p-3 cursor-pointer ${toggle ? `justify-start gap-[.3rem]` : `justify-center`}`}>
                                <Link to="/home">
                                     <img src={Donate} alt="Donate icon" />
                                </Link>
                                
                                <Link to="./home"  className={`text-[#370000] text-[1rem] font-[500] capitalize ${toggle ? `block` : `hidden`}`}>Donate</Link>
                           </div>
                           <div className={`flex gap-[.5rem] items-center p-3 cursor-pointer ${toggle ? `justify-start gap-[.3rem]` : `justify-center`}`}>
                                <Link to="/home">
                                     <img src={Setting} alt="Setting icon" />
                                </Link>
                                
                                <Link to="./home"  className={`text-[#370000] text-[1rem] font-[500] capitalize ${toggle ? `block` : `hidden`}`}>Setting</Link>
                           </div>
                      </div>
                 </div>
          </div>
            
            <div className={`p-4`}>
                 <div className={`grid gap-[1.5rem] gri`}>
                      <div className={`bg-[#fff] p-4 rounded-[10px] flex gap-[1.5rem] justify-start gap-[.3rem] items-center flex-col md:flex-row md:px-8 `}>
                           <div>
                                <h1 className={`font-[600] text-[2rem] leading-[42px] text-[#370000] uppercase md:text-[3rem] text-center mb-[1rem] md:text-left`}>have a wish?</h1>
                                <p className={`font-[400] text-[1rem] leading-[30px] text-[#370000] md:text-[1.2rem] text-center md:text-left`}>SantaAI is an AI that grants your wish blah blah blah</p>
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