import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MyCalloutView from './myCalloutView';
import MyMarkerView from './myMakerView';

export default class ItemMaker extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    select = () => {
        const { selectStore, it } = this.props;
        selectStore && selectStore(it);
    };

    showCallout() {
        this.setState({ data: this.props.it }, () => {
            setTimeout(() => {
                this.refMarker.showCallout();
            }, 10);
        });
    }

    hideCallout() {
        this.refMarker.hideCallout();
    }

    render() {
        const { it, id } = this.props;
        return (
            <Marker
                ref={(r) => (this.refMarker = r)}
                key={id}
                coordinate={{
                    latitude: it.latitude,
                    longitude: it.longitude,
                }}
                stopPropagation={true}
                onPress={this.select}
            >
                <MyMarkerView it={it} />
                <MapView.Callout>
                    <MyCalloutView
                        it={it}
                    />
                </MapView.Callout>
            </Marker>
        )
    }
}