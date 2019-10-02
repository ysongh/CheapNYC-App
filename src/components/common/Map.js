import React from 'react';
import MapView from 'react-native-maps';

const Map = ({ latitude, longitude, company, location }) => {
    return (
        <MapView
            style={{ height: 280 }}
            initialRegion={{
                latitude: latitude || 40.7478,
                longitude: longitude || -73.9560,
                latitudeDelta: 0.0052,
                longitudeDelta: 0.0042,
            }} >
            <MapView.Marker
                coordinate={{
                    latitude: latitude || 40.7478,
                    longitude: longitude || -73.9560,
                }}
                title={ company }
                description={ location } />
        </MapView>
    );
};

export default Map;