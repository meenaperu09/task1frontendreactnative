import React, { Component } from 'react';
import {Text} from 'react-native';
import { Footer, Tab, Button, Icon, FooterTab} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class AppFooter extends Component {
  render() {
    return (
      <Footer>
      <FooterTab>
            <Button>
              <Text style={{fontSize: 10, color: '#1dcaff',fontWeight: 'bold'}}>All</Text>
            </Button>
            <Button>
            <Text style={{fontSize: 10, color: 'grey',fontWeight: 'bold'}}>Mentions</Text>
            </Button>
            <Button>
            <Text></Text>
            </Button>
            <Button>
              <Feather name={'settings'} style={{fontSize: 8,color: '#1dcaff',fontWeight: 'bold'}}/>
            </Button>
          </FooterTab>
          </Footer>
    );
  }
}

module.export = AppFooter;