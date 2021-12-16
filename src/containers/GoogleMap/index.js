import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, TextInput, FlatList } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import mapStyle from './mapStyles';
import colors from '../../themes/colors';
import ListItem from './components/listItem';

export default class GoogleMap extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            latitude: 42.882004,
            longitude: 74.582748,
            shopList: [
                {
                    id: '1',
                    name: 'First Shop',
                    address: 'Yangon',
                    phone: '+959780433369'
                },
                {
                    id: '2',
                    name: 'Second Shop',
                    address: 'Mon',
                    phone: '+959780433369'
                },
                {
                    id: '3',
                    name: 'Third Shop',
                    address: 'Shan',
                    phone: '+959780433369'
                },
            ],
        }
    }

    componentDidMount = () => {
        this.getUserLocation();
    }

    getUserLocation = () => {
        Geolocation.getCurrentPosition(position =>
            this.setState({ latitude: JSON.stringify(position.coords.latitude), longitude: JSON.stringify(position.coords.longitude) }, () => { })
        );
    }

    onPressMap = (event) => {
        const coordinate = event.nativeEvent.coordinate;
        if (coordinate) {
            this.setState({ latitude: coordinate.latitude, longitude: coordinate.longitude }, () => { });
        }
    }

    onSearch = () => {

    }

    onChangeSearch = () => {

    }

    onSearchAgentByKeyword = () => {

    }

    onClickFlatListItem = () => {

    }

    renderItem = ({ item }) => (
        <ListItem
            shopItem={item}
            onClickFlatListItem={this.onClickFlatListItem}
        />
    );

    render() {
        const { latitude, longitude, shopList } = this.state;
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.container}
                    customMapStyle={mapStyle}
                    onPress={(event) => this.onPressMap(event)}
                    region={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    showsUserLocation={true}
                >
                    <Marker
                        key="Pin Location"
                        coordinate={{
                            latitude: latitude,
                            longitude: longitude,
                        }}
                        title="My locations"
                        draggable
                        pinColor="#FF0000"
                    />
                </MapView>
                <TouchableOpacity
                    style={styles.searchContainer}
                    onPress={() => this.onSearch()}
                >
                    <TextInput
                        style={styles.inputSearch}
                        placeholder="Search"
                        onChangeText={(text) => this.onChangeSearch(text)}
                        underlineColorAndroid="transparent"
                        onSubmitEditing={() => this.onSearchAgentByKeyword()}
                    />
                    {/* <Icon name="search" size={20} color={colors.lightGray} /> */}
                </TouchableOpacity>
                <View style={styles.shopListContainer}>
                    <FlatList
                        data={shopList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        onClickFlatListItem={this.onClickFlatListItem}
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#ECE2E0',
        height: 40,
        top: 18,
        right: 18,
        left: 18,
        paddingLeft: 24,
        paddingRight: 24,
        borderWidth: 1,
        borderRadius: 24,
    },
    inputSearch: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    shopListContainer: {
        position: 'absolute',
        bottom: 0,
    },
    shopListView: {

    }
});