import React from 'react';
import { MAP_CARD } from '../../common/Helper';

const MapCard = () => {
    return (
        <div>
            <h2 className="text-7xl text-center font-bold">MapCard</h2>
            <div className="justify-center flex">
                {MAP_CARD.map((obj, index) => (
                    <div key={index} className="flex flex-col items-center m-4">
                        <img src={obj.image} alt={obj.heading} className="w-full h-auto" />
                        <h2 className="font-semibold text-3xl mt-4">{obj.heading}</h2>
                        <p className="font-light text-base text-black mt-2">{obj.paragraph}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MapCard;
