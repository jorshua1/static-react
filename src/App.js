import React from "react";
import Info from './Components/Info';
import About from './Components/About';
import Interests from './Components/Interests';
import Footer from './Components/Footer';


function App(){
    return(
        <div className="min-h-screen bg-[#23252c] flex justify-center items-center">
            <div className="bg-[#1a1b21] h-auto rounded-2xl md:w-1/2 sm:w-auto lg:w-96">
                <Info />
                <About />
                <Interests />
                <Footer />
            </div>
        </div>
    )
}

export default App