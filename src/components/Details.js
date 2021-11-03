import React from "react";
import plantDetails from "./PlantDetails";
import Navbar from "./Navbar";
import { useParams, useHistory } from "react-router-dom";
import video from '../images/samplevideo.mp4'
import file from '../images/bell_peppers.txt'

export default function Store() {
    const history = useHistory();
    const { name } = useParams();

    const [plant, setPlant] = React.useState('')

    React.useEffect(() => {
        let plantData = plantDetails.find(pl => pl.name === name);
        if (plantData)
            setPlant(plantData);
        else
            history.push('/plants')
    }, [])

    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className="bg-bgcolor">
            <Navbar name="Plants" />
            <h2 className="font-bold text-5xl m-10 mb-20 text-green-800">{plant ? plant.name : ''}</h2>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-2 col-span-4">
                    <img className="h-80 mx-auto" alt="" src={plant ? images[plant['image']].default : ''} />
                </div>
                <div className="col-start-2 col-span-4">
                    <h2 className="text-lg mx-40 my-10">{plant ? plant.description : ''}</h2>
                </div>
                <div className="col-start-2 col-span-4">
                    <a href={file} download={plant ? plant.procedure : ''}>
                        <button className="text-white rounded-md px-5 py-3 bg-gradient-to-r from-green-600 to-green-300 hover:from-green-800 hover:to-green-500">Download Plant Details</button>
                    </a>
                </div>
                <div className="col-start-2 col-span-4 mx-auto my-20">
                    <video src={video} controls></video>
                </div>
            </div>
        </div>
    )
}