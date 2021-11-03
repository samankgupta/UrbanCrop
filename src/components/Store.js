import React from "react";
import plantDetails from "./PlantDetails";
import Navbar from "./Navbar";

export default function Store() {

    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
    return (
        <div className="bg-bgcolor pb-10">
            <Navbar name="Store" />
            <h2 className="font-bold text-5xl m-10 mb-20 text-green-800">Store</h2>
            <div className="m-16 grid grid-cols-3 gap-16">
                {plantDetails.map(plant =>
                    <div>
                        <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-full">
                            <div className="relative">
                                <img className="mx-auto h-64 w-full" alt="" src={images[plant['image']].default} />
                                <h1 className="pl-4 mt-2 pt-2 text-xl font-bold">{plant['name']}</h1>
                            </div>
                            <div className="p-4">
                                <div className="grid justify-items-center gap-5">
                                    <div class="flex flex-col md:flex-row justify-between items-center text-gray-900 mt-2">
                                        <p class="font-bold text-xl mr-16">{plant['price']}</p>
                                        <button
                                            class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                            to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}