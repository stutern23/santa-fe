import Santa from "../../assets/pngwing 4.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
     return (
          <section className={`flex flex-col gap-8 md:flex-row p-4 md:p-[4rem] md:items-center`}>
               <div>
                    <img src={Santa} alt="Santa" />
               </div>
               <div className={`text-center text-red-600 font-[600]`}>
                    <p className={`mb-6`}>Ooooops! Check back later 😉</p>
                    <Link to="/home" className={`bg-slate-100 border border-red-600 text-[1rem] font-[500] text-red-600 p-2 rounded-[8px]`}>Go back</Link>
               </div>
          </section>
     )
}

export default ErrorPage;