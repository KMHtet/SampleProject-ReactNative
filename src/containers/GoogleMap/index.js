import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, TextInput, FlatList, Keyboard, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import mapStyle from './mapStyles';
import { findIndex } from 'lodash';
import colors from '../../themes/colors';
import ListItem from './components/listItem';
import ItemMaker from './components/itemMaker';
import images from '../../assets/images';
import { deviceWidth, deviceHeight_by_six } from '../../themes/metrics';

const shopListForFind = [
    {
        id: '1',
        name: 'First Shop',
        address: 'Yangon',
        phone: '+959780433369',
        type: 1,
        longitude: -122.01763442068022,
        latitude: 37.346672265083015
    },
    {
        id: '2',
        name: 'Second Shop',
        address: 'Mon',
        phone: '+959780433369',
        type: 1,
        longitude: -122.01771846258296,
        latitude: 37.331526776581
    },
    {
        id: '3',
        name: 'Third Shop',
        address: 'Shan',
        phone: '+959780433369',
        type: 2,
        longitude: -122.03483154715794,
        latitude: 37.318564208635465
    },
    {
        id: '4',
        name: '4 Shop',
        address: 'Yangon',
        phone: '+959780433369',
        type: 2,
        longitude: -122.05603018826382,
        latitude: 37.31486721068774
    },
    {
        id: '5',
        name: '5 Shop',
        address: 'Mon',
        phone: '+959780433369',
        type: 2,
        longitude: -122.0415530988555,
        latitude: 37.33072215794611
    },
    {
        id: '6',
        name: 'six Shop',
        address: 'Shan',
        phone: '+959780433369',
        type: 2,
        longitude: -122.01979086812617,
        latitude: 37.30336896825523
    },
];

export default class GoogleMap extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            latitude: 42.882004,
            longitude: 74.582748,
            searchKeyword: null,
            shopList: [
                {
                    id: '1',
                    name: 'First Shop',
                    address: 'Yangon',
                    phone: '+959780433369',
                    type: 1,
                    longitude: -122.01763442068022,
                    latitude: 37.346672265083015
                },
                {
                    id: '2',
                    name: 'Second Shop',
                    address: 'Mon',
                    phone: '+959780433369',
                    type: 2,
                    longitude: -122.01771846258296,
                    latitude: 37.331526776581
                },
                {
                    id: '3',
                    name: 'Third Shop',
                    address: 'Shan',
                    phone: '+959780433369',
                    type: 2,
                    longitude: -122.03483154715794,
                    latitude: 37.318564208635465
                },
                {
                    id: '4',
                    name: '4 Shop',
                    address: 'Yangon',
                    phone: '+959780433369',
                    type: 2,
                    longitude: -122.05603018826382,
                    latitude: 37.31486721068774
                },
                {
                    id: '5',
                    name: '5 Shop',
                    address: 'Mon',
                    phone: '+959780433369',
                    type: 1,
                    longitude: -122.0415530988555,
                    latitude: 37.33072215794611
                },
                {
                    id: '6',
                    name: '6 Shop',
                    address: 'Shan',
                    phone: '+959780433369',
                    type: 1,
                    longitude: -122.01979086812617,
                    latitude: 37.30336896825523
                },
            ],
        };
        this.refMaker = new Array(100).fill(null);
        this.refMap = React.createRef();
    }

    componentDidMount = () => {
        this.getUserLocation();
    }

    getUserLocation = () => {
        const { shopList } = this.state;
        Geolocation.getCurrentPosition(position =>
            this.setState({ shopList: shopListForFind, latitude: JSON.stringify(position.coords.latitude), longitude: JSON.stringify(position.coords.longitude) }, () => { })
        );
    }

    onPressMap = (event) => {
        const coordinate = event.nativeEvent.coordinate;
        if (coordinate) {
            this.setState({ latitude: coordinate.latitude, longitude: coordinate.longitude }, () => { });
        }
        const shopListMockData = this.onCreateMockData(coordinate.latitude, coordinate.longitude);
        this.setState({ shopList: shopListMockData }, () => { });
    }

    onCreateMockData = (lat, lon) => {
        let shopMockList = [];
        shopMockList.push({
            id: 0,
            name: 'shop ' + id,
            address: 'Mon',
            phone: '+959688360940',
            type: 2,
            latitude: lat + 0.01,
            longitude: lon + 0.01,
        });
        shopMockList.push({
            id: 1,
            name: 'shop 1',
            address: 'Mon',
            phone: '+959688360940',
            type: 2,
            latitude: lat - 0.01,
            longitude: lon + 0.01,
        });
        shopMockList.push({
            id: 2,
            name: 'shop 2',
            address: 'Mon',
            phone: '+959688360940',
            type: 2,
            latitude: lat + 0.01,
            longitude: lon - 0.01,
        });
        shopMockList.push({
            id: 3,
            name: 'shop 3',
            address: 'Mon',
            phone: '+959688360940',
            type: 1,
            latitude: lat - 0.01,
            longitude: lon - 0.01,
        });
        shopMockList.push({
            id: 4,
            name: 'shop 4',
            address: 'Mon',
            phone: '+959688360940',
            type: 2,
            latitude: lat + 0.015,
            longitude: lon + 0.015,
        });
        shopMockList.push({
            id: 5,
            name: 'shop ' + id,
            address: 'Mon',
            phone: '+959688360940',
            type: 1,
            latitude: lat - 0.015,
            longitude: lon - 0.015,
        });
        return shopMockList;
    };

    onChangeSearch = (text) => {
        this.setState({ searchKeyword: text }, () => { });
    }

    onSearch = (searchKeyword) => {
        Keyboard.dismiss();
        if (searchKeyword) {
            this.refMaker = new Array(0).fill(null);
            this.clearCallout();
            this.findShop(searchKeyword);
        }
    }

    findShop = (searchKeyword) => {
        const { shopList } = this.state;
        const keyWord = searchKeyword.toLowerCase().split(' ');
        const filterShop = shopList.filter(item => keyWord.every(
            key => item.name.toLocaleLowerCase().split(' ').indexOf(key) > -1 ||
            item.address.toLocaleLowerCase().split(' ').indexOf(key) > -1
        ));
        this.setState({
            shopList: filterShop,
        }, () => {

        })
    }

    clearCallout = () => {
        const { shopList } = this.state;
        shopList.forEach((item, index) => {
            if (this.refMaker[index]) {
                this.refMaker[index].hideCallout();
            }
        });
    }

    onClickFlatListItem = async (storeSelected) => {
        const { shopList } = this.state;
        await this.selectStore(storeSelected);
        const indexOfStore = findIndex(
            shopList,
            (it) => it.id === storeSelected.id
        );
        if (this.refMaker[indexOfStore]) {
            setTimeout(() => {
                this.refMaker[indexOfStore].showCallout();
            }, 0);
        }
    }

    renderItem = ({ item }) => (
        <ListItem
            shopItem={item}
            navigation={this.props.navigation}
            onClickFlatListItem={this.onClickFlatListItem}
        />
    );

    renderMaker = (it, id) => {
        return (
            <ItemMaker
                ref={(r) => (this.refMaker[id] = r)}
                it={it}
                id={id}
                key={id}
                selectStore={(it) => this.selectStore(it)}
            />

        );
    };

    selectStore = (it) => {
        this.refMap &&
            this.refMap.current &&
            this.refMap.current.animateToRegion({
                latitude: it.latitude,
                longitude: it.longitude,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
            });
        this.scrollToIndex(it);
    }

    scrollToIndex = (storeSelected) => {
        const { shopList } = this.state;
        const indexOfStore = findIndex(
            shopList,
            (it) => it.id === storeSelected.id
        );
        this.flatListRef.scrollToIndex({ animated: true, index: indexOfStore });
    }

    render() {
        const { latitude, longitude, shopList, searchKeyword } = this.state;
        return (
            <View style={styles.container}>
                <MapView
                    ref={this.refMap}
                    style={styles.container}
                    customMapStyle={mapStyle}
                    showsMyLocationButton={true}
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
                        key="Point Location"
                        coordinate={{
                            latitude: latitude,
                            longitude: longitude,
                        }}
                        title="Point locations"
                        draggable
                        pinColor="#2457F0"
                    />
                    {shopList.map((it, id) => this.renderMaker(it, id))}
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
                        onSubmitEditing={() => this.onSearch(searchKeyword)}
                    />
                    <Image
                        source={images.search}
                        style={styles.img}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.panel}
                    activeOpacity={0.2}
                    onPress={() => this.getUserLocation()}
                >
                    <Image
                        source={images.current_location}
                        style={styles.img_current_location}
                    />
                </TouchableOpacity>
                <View style={styles.shopListContainer}>
                    <FlatList
                        ref={(ref) => { this.flatListRef = ref; }}
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
    panel: {
        width: 48,
        height: 48,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        right: 16,
        bottom: deviceHeight_by_six + 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        shadowOpacity: 0.4,
      },
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

    },
    img: {
        height: 15,
        width: 15,
        marginRight: 5,
        resizeMode: "contain"
    },
    img_current_location: {
        height: 25,
        width: 25,
        resizeMode: "contain"
    }
});