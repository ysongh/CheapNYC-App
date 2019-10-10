import React from 'react';
import MapView from 'react-native-maps';

const DealsMap = ({ deals }) => {
    const markers = deals.map(deal => {
        return (
            <MapView.Marker
                coordinate={{
                    latitude: deal.latitude,
                    longitude: deal.longitude
                }}
                title={ deal.company }
                description={ deal.location } />
        );
    });

    return (
        <MapView
            style={{ height: 500 }}
            initialRegion={{
                latitude: 40.7478,
                longitude: -73.9560,
                latitudeDelta: 0.5252,
                longitudeDelta: 0.5242,
            }} >
                { markers }
        </MapView>
    );
};

export default DealsMap;