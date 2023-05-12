import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import questions from "./faq_data"
import Question from "./Components/Question";

function FAQ() {
  const[collapse,setCollapse]=useState(true);
  const handleCollapse = ()=>{setCollapse(collapse=>!collapse)} 
  return (
    <div>
      <Navbar />
      <div class="w-[80%] mx-auto mt-20 mb-20">
      <div class="text-3xl font-bold text-center mb-10 ">FAQ</div>
     <div className="h-[80vh] overflow-y-scroll "> {
        questions?.map((que)=>{
          return <Question re={que}/>
        })
      }</div>
      </div>
      <Footer />
     
      
    </div>
  );
  
}
export default FAQ;
