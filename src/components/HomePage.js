import React from "react";
import homeimage from "../images/homeimage.jpg"
import Navbar from "./Navbar";
import { useHistory } from 'react-router-dom';

const HomePage = () => {

    const history = useHistory();

    return (
        <div>
            <div className="h-screen overflow-hidden">
                <div className="relative">
                    <img src={homeimage} alt="UrbanCrop" />
                    <div className="absolute top-0 w-full">
                        <Navbar name="Home" />
                    </div>
                    <div className="absolute top-16 w-full">
                        <div className="pt-32">
                            <div className="text-center">
                                <h1 className="text-6xl font-extrabold pt-20"><span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-500">URBANCROP</span></h1><br />
                                <h1 className="mt-4 mb-12 text-xl">Making Urban Agriculture easy for you.</h1>
                                <button onClick={() => history.push('/plants/')} className="text-white rounded-md px-5 py-3 bg-gradient-to-r from-green-600 to-green-300 hover:from-green-800 hover:to-green-500">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;