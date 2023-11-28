import { useState } from "react";
import { AuthLayout } from "../ui";
import axios from "axios";

const Donate = () => {
     const [email, setEmail] = useState("");
     const [amount, setAmount] = useState("");
     const [firstName, setFirstName] = useState("");
     const [lastName, setlastName] = useState("");
     const url = `https://gentle-meadow-34262-85701791dbf4.herokuapp.com/wishes/donate`;

     const onSubmit = (e: { preventDefault: () => void; }) => {
          e.preventDefault();
          axios.post(url,
               {
                    email,
                    amount,
                    firstName,
                    lastName
               }).then(res => {
                    console.log(res);
                    window.open(res.request.responseURL, "_blank");
               }).catch(err => {
                    console.log(err);
               });
     }

     return (
          <AuthLayout>
               <section className={`bg-[#630000] p-8 rounded-[12px] my-4`}>
                    <h1 className={`capitalize text-[#fff] font-montserrat text-xl mb-8`}>Make a donation</h1>
                    <form action="" className={`flex gap-4 flex-col`} onSubmit={onSubmit}>
                         <div className={``}>
                              <label htmlFor="email" className={`block mb-2 text-[#fff] text-base nd:text-xl`}>Email Address</label>
                         <input type="email" placeholder="Email Address" id="email" className={`w-full px-5 py-3 mt-2 text-[#fff] bg-transparent border-2 font-montserrat border-[#fff] rounded-[10px] placeholder-gray-400`}
                         onChange={(e) => setEmail(e.target.value)} />
                         </div>

                         <div>
                              <label htmlFor="amount" className={`block mb-2 text-[#fff] text-base nd:text-xl`}>Amount</label>
                         <input type="text" placeholder="Amount" id="amount" className={`w-full px-5 py-3 mt-2 text-[#fff] bg-transparent border-2 font-montserrat border-[#fff] rounded-[10px] placeholder-gray-400`}
                         onChange={(e) => setAmount(e.target.value)} />
                         </div>

                         <div>
                              <label htmlFor="first name" className={`block mb-2 text-[#fff] text-base nd:text-xl`}>First Name</label>
                              <input type="text" placeholder="First Name" id="first name" className={`w-full px-5 py-3 mt-2 text-[#fff] bg-transparent border-2 font-montserrat border-[#fff] rounded-[10px] placeholder-gray-400`}
                         onChange={(e) => setFirstName(e.target.value)}     />
                         </div>

                         <div>
                              <label htmlFor="last name" className={`block mb-2 text-[#fff] text-base nd:text-xl`}>Last Name</label>
                              <input type="text" placeholder="Last Name" id="name" className={`w-full px-5 py-3 mt-2 text-[#fff] bg-transparent border-2 font-montserrat border-[#fff] rounded-[10px] placeholder-gray-400`}
                         onChange={(e) => setlastName(e.target.value)}     />
                         </div>

                         <button className={`mt-6 rounded-[10px] font-montserrat font-[600] text-lg leading-normal w-full transition-colors duration-200 p-2 text-[#600000] md:p-4 bg-gray-300`}>Pay</button>
                    </form>
                    {/* {<div>{response}
                    </div>} */}
          </section>
    </AuthLayout>

          
     );
}

export default Donate;