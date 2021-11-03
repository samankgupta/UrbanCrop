import React from "react";
import plantDetails from "./PlantDetails";
import Navbar from "./Navbar";
import { useHistory } from 'react-router-dom';

export default function Plants() {

    const history = useHistory();

    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    return (
        <div className="bg-bgcolor pb-10">
            <Navbar name="Plants" />
            <h2 className="font-bold text-5xl m-10 mb-20 text-green-800">Plants</h2>
            <div className="m-10 grid grid-cols-3 gap-12">
                {plantDetails.map(plant =>
                    <div>
                        <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-full" onClick={() => history.push('/details/' + plant['name'])}>
                            <div className="relative">
                                <img className="mx-auto h-72 w-full" alt="" src={images[plant['image']].default} />
                                <h1 className="pl-4 mt-2 pt-2 text-lg font-bold">{plant['name']}</h1>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center">
                                    <p className="text-sm">{plant['description']}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}