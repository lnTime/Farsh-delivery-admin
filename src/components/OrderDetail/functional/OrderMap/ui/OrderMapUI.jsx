import React from 'react';
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps';
import Location from '../../../../../assets/images/location.svg';
import CarIcon from '../../../../../assets/images/car.png';

export const OrderMapUI = () => {
    return (<YMaps>
        <Map defaultState={{ center: [24.713592, 46.676639], zoom: 17 }}>
            <GeoObject
                geometry={{
                    type: 'LineString',
                    coordinates: [
                        [24.713472, 46.675272],
                        [24.714054, 46.676639],
                        [24.714213, 46.676543],
                        [24.714364, 46.676928],
                        [24.714985, 46.676622],
                        [24.714292, 46.674912],
                        [24.713456, 46.675289],
                    ],
                }}
                options={{
                    geodesic: true,
                    strokeWidth: 3,
                    strokeColor: '#000',
                    // strokeStyle: 'dash',
                    strokeStyle: [1,2],

                }}
            />
            <Placemark 
                geometry={[24.713472, 46.675272]}
                options={{
                    preset: 'islands#circleDotIcon',
                    iconColor: '#000',
                }}
            />

            <Placemark 
                geometry={[24.713456, 46.675289]}
                options={{
                    iconLayout: 'default#image',
                    iconImageHref: Location,
                    iconImageSize: [11, 15],                
                }}    
            />

            <Placemark 
                geometry={[24.713460, 46.675300]}
                options={{
                    iconLayout: 'default#image',
                    iconImageHref: CarIcon,
                    iconImageSize: [135, 139],                
                }}    
            />
        </Map>
        
    </YMaps>);
}