import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import mapStyle from './mapStyles';

export default class GoogleMap extends React.PureComponent {
    render() {
        return (
            <MapView
                style={styles.container}
                customMapStyle={mapStyle}
                showsIndoorLevelPicker
                showsScale
                showDirection
                showLightBox
                showModal
                showsUserLocation
                showsMyLocationButton
                showsCompass={false}
                followsUserLocation
                showsPointsOfInterest
                showsIndoors
                showsBuildings
                region={{
                    latitude: 42.882004,
                    longitude: 74.582748,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                showsUserLocation={true}
            >
                <Marker
                    key="Pin Location"
                    coordinate={{
                        latitude: 42.882004,
                        longitude: 74.582748,
                    }}
                    title="My locations"
                    draggable
                    pinColor="#FF0000"
                />
            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});