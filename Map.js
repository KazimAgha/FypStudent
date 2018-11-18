import React, { Component } from 'react';
import {  View, StyleSheet} from 'react-native';
import { MapView } from 'expo';
// Version can be specified in package.json



export default class Map extends Component{
  constructor(props) {
        super(props);
    }

  render(){
    return(
      <View style={style.container}>
       <MapView
        style={style.map} 
        initialRegion={{
          latitude:  31.5204,
          longitude: 74.3587,
          latitudeDelta: 1.0922,
          longitudeDelta: 1.0421,
        }}
        showsUserLocation={true}
      >
      <MapView.Marker     coordinate={{
                            latitude: 	31.469001,
                            longitude : 74.239317
                        }}
                        title={'7:50 a.m'}
                        description={'10:45 a.m'}
                        />
      </MapView>
      </View>
      
      );
  }
}
const style =StyleSheet.create({
    container : {
        position : 'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        justifyContent: 'flex-end',
        alignItems:'center'
    },

    map: {
        position : 'absolute',
        top : 0,
        left:0,
        bottom:0,
        right:0
    }
});
