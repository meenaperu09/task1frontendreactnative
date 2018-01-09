import React, { Component } from 'react';
import {Text,View} from 'react-native';
import {Container,Header, List, ListItem, Thumbnail, Left, Button, Icon, Title, Body, Right, Segment, Content} from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
        <Header style={{borderBottomWidth: 0}}>
        <Left>
        <View style={{flexDirection: 'row'}}>
        <Thumbnail round small source={require('../img/ShahidhProfile.jpg')}/>
        <Text>   Home</Text>
        </View>
        </Left>
      <Body>
        </Body>
        </Header>
    );
  }
}
module.export = AppHeader;