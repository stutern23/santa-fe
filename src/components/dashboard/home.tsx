import style from "./style.module.css";
import Santa1 from "../../assets/pngwing 4.svg";
// import Mic from "../../assets/ic_round-mic.svg";
import { DashboardLayout } from "../ui";
// import { useVoiceRecord } from "../../hooks/useRecord";
import { Link } from "react-router-dom";
import Snow from "../../assets/snow02.gif";

const wishes = [
  {
    id: 0,
    wish: ` I wonder how Santa celebrates Christmas day. After the late-night shift he pulls, I bet he stays in bed all day and does nothing. Sounds nice.`,
  },
  {
    id: 2,
    wish: ` This holiday season I think I will donate my bathroom scale. that way I won’t be weighed down with guilt going into the new year!`,
  },
  {
    id: 3,
    wish: `If I were to re-write the “12 Days of Christmas,” I would include things like chocolate, cocktails, and fancy dinners instead of French hens and turtle doves.`,
  },
  {
    id: 4,
    wish: ` Merry Christmas! I hope Santa brings you presents – and not sickness – this holiday season!`,
  },

]

const Home = () => {
  // const { audio, startRecording, stopRecording, isRecording } =
  //   useVoiceRecord();

  return (
    <DashboardLayout>
      <div className={`grid gap-[1.5rem] my-4`}>
        <div
          className={`bg-white p-4 rounded-[10px] flex gap-[1.5rem] justify-start items-center flex-col md:flex-row md:justify-between md:px-8 lg:px-[4rem] `}
        >
          <div className="font-montserrat">
            <h1
              className={`font-bold text-[2rem] leading-[42px] text-PRIMARY uppercase md:text-[3rem] text-center mb-[1rem] md:text-left`}
            >
              have a wish?
            </h1>
            <p
              className={`font-[500] text-[1rem] leading-[30px] text-PRIMARY md:text-[1.2rem] text-center md:text-left max-w-[80%] mx-auto md:mx-0`}
            >
              SantaAI is an AI that grants your wish blah blah blah
            </p>
          </div>
          <div>
            <img src={Santa1} alt="A picture of Santa" />
          </div>
        </div>

        <div className={`grid md:grid-cols-2 gap-[1.5rem] `}>
          <div className={`relative`}>
            <iframe src={"https://youtube.com/embed/HvQg_NJalZI?si=2CIfBVENifUqewWs"}
            title="Short Christmas Stories" className={`w-full h-full `} allowFullScreen></iframe>
          </div>
          <div className={`relative`}>
            <div className={`rounded-10`}>
              <iframe src={"https://youtube.com/embed/YEDXBmMv5zE?si=N6MpWvN6osaMiRlR"} className={`w-full h-full`}
              title="Short Christmas Stories"allowFullScreen></iframe>
              
            </div>
          </div>
        </div>

        <div className={`grid md:grid-cols-2 gap-[1rem]`}>
          {wishes.map((wish) => {
            return <div
            className={`w-full rounded-[10.28px] py-8 p-4 bg-[#630000] mx-auto text-[#fff] relative`}
            >
              <div>
                <img src={Snow} alt="Snow flakes" className={`absolute right-0 left-0 top-[20px] bottom-[150px] h-[70%] w-[70%] mx-auto`} />
              </div>
            <p className={`mb-4`}>{wish.wish}</p>
            <Link to="/chat" className={`font-[600] text-[1.1rem] border-2 border-[#fff] rounded-[8px] py-1 px-4`}>Make a wish!</Link>
          </div>
          })}
          
        </div>
        {/* <div>
          <div className={`relative`}>
            {audio ? (
              <audio src={audio} controls />
            ) : (
              <input
                type="text"
                name=""
                id=""
                placeholder="Hi, I am SantaAI, what do you want for christmas"
                className={`${style.textInput} p-3 bg-white border border-PRIMARY rounded-[10px] w-full outline-none font-montserrat`}
              />
            )}

            {!isRecording ? (
              <button
                className={`absolute bg-red-600 w-[25px] h-[25px] rounded-full flex justify-center items-center p-1 right-[14px] top-[13px]`}
                onClick={startRecording}
              >
                <img src={Mic} alt="Microphone" />
              </button>
            ) : (
              <button
                className={`absolute text-white bg-red-600 w-[25px] h-[25px] rounded-full flex justify-center items-center p-1 right-[14px] top-[13px]`}
                onClick={stopRecording}
              >
                s
              </button>
            )}
          </div>
        </div> */}
      </div>
    </DashboardLayout>
  );
};

export default Home;
