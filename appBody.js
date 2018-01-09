import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Right, Body, Fab} from 'native-base';
import {Text,StyleSheet,Image,Link,View} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class AppBody extends Component {
  render() {
    return (
      <Container>
      <Header hasTabs> 
      <Tabs tabBarUnderlineStyle={{backgroundColor:'#1dcaff', height:1}}>
      <Tab heading={ <TabHeading><Button transparent active><Foundation name= {'home'} style={{fontSize: 20, color: '#1dcaff'}}/></Button></TabHeading>}>         
      </Tab>
      <Tab heading={ <TabHeading><Button transparent><Icon name= {'ios-search-outline'} style={{fontSize: 20, color: 'grey'}}/></Button></TabHeading>}>
      </Tab>
      <Tab heading={ <TabHeading><Button transparent><Icon name= {'ios-notifications-outline'} style={{fontSize: 20, color: 'grey'}}/></Button></TabHeading>}>
      </Tab>
      <Tab heading={ <TabHeading><Button transparent><Icon name= {'ios-mail-outline'} style={{fontSize: 20, color: 'grey'}}/></Button></TabHeading>}>
      </Tab>
      </Tabs>
      </Header>
      <Content>
       <Card> 
       {/* card 1 = Smarter Every day Twitter details */}
         <CardItem Avatar>
           <Left>
           <Thumbnail source={require('../img/smartereveryday.jpg')}/>
           </Left>
               <Body>
             <View style={{flexDirection: 'row'}}> 
               <Text style={{fontSize: 10, fontWeight: 'bold'}}>Smarter Every Day</Text>
               <Icon name= {'ios-checkmark-circle'} style={{fontSize: 8, color: '#1dcaff'}}/>
               <Text style={{fontSize: 10, color: 'grey'}}>@smartereveryday</Text>
               <Text style={{fontSize: 10, color: 'grey'}}> .30 m</Text>
               <Text></Text>
               <Icon  name= {'ios-arrow-down'} style={{fontSize: 8, color: 'grey'}}/>
               </View>
               <Text style={{fontSize: 10}}>What do you call this game, and where are you from?</Text>
               <Text style={{fontSize: 10, color: '#1dcaff'}}>http://ift.tt/2k83QLd</Text>
               </Body>
               <Right>
               </Right>
               </CardItem> 
         <CardItem cardBody>
<Left>
  </Left>
           <Body>
            <Image source={require('../img/SmarterEveryDayTwtImg.jpg')} style={{height: 150, width: 230, flex: 1}}/>
           </Body>
           <Right>
          </Right>
         </CardItem>
         <CardItem cardBody>
              <Left></Left>
              <Body>
              <View style={{flexDirection: 'row'}}>
                  <Button transparent>
                  <Icon name= {'ios-text-outline'}  style={{fontSize: 8,color: 'grey'}}/>
                  <Text style={{fontSize: 6, color: 'grey'}}>60              </Text>
                </Button>
                <Button transparent>
                <MaterialCommunityIcons name= {'twitter-retweet'}  style={{fontSize: 8,color: 'grey'}} />
                  <Text style={{fontSize: 6, color: 'grey'}}>2            </Text>
                </Button>
              <Button transparent>
                  <Icon name= {'ios-heart-outline'}  style={{fontSize: 8,color: 'grey'}} />
                  <Text style={{fontSize: 6, color: 'grey'}}>19           </Text>
                </Button>  
                <Button transparent>
                  <Icon active name= {'ios-mail-outline'}   style={{fontSize: 8,color: 'grey'}} />
                  <Text></Text>
                </Button>
                </View>
                </Body>
            </CardItem>
       </Card>
       <Card> 
       {/* card 2 = Srinivas Kodali Twitter details */}
         <CardItem Avatar>
           <Left>
           <Thumbnail source={require('../img/Srinivaskodali.jpg')}/>
           </Left>
               <Body>
              <View style={{flexDirection: 'row'}}>
               <Text style={{fontSize: 10, fontWeight: 'bold'}}>Srinivas Kodali</Text>
               {/* <Icon name= {'ios-checkmark-circle'} style={{fontSize: 8, color: '#1dcaff'}}/> */}
               <Text style={{fontSize: 10, color: 'grey'}}>@digitaldutta</Text>
               <Text style={{fontSize: 10, color: 'grey'}}>                  .24 m</Text>
               {/* <Text> </Text> */}
               <Icon  name= {'ios-arrow-down'} style={{fontSize: 8, color: 'grey'}}/>
               </View>
               <View style={{flexDirection: 'row'}}>
               <Text style={{fontSize: 10}}>The committee was pro govt majorly. Not that the paper is bad, but it has its objectives misplaced</Text>
               </View>
               <Text style={{fontSize: 10, color: '#1dcaff'}}>#RightToPrivacy</Text>
               </Body>
               <Right>
               </Right>
               </CardItem> 
         <CardItem cardBody>
<Left>
  </Left>
           <Body>
            <Image source={require('../img/SrinivasKodaliTwtImg.jpg')} style={{height: 150, width: 230, flex: 1}}/>
           </Body>
           <Right>
           <Fab 
            style={{ backgroundColor: '#1dcaff'}}
            position="bottomRight">
            <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 11,color: 'white'}}>+</Text>
            <MaterialCommunityIcons name= {'feather'}  style={{fontSize: 12,color: 'white'}}/>
            </View>
           </Fab>
             </Right>
         </CardItem>
         <CardItem cardBody>
              <Left></Left>
              <Body>
              <View style={{flexDirection: 'row'}}>
                  <Button transparent>
                  <Icon name= {'ios-text-outline'}  style={{fontSize: 8,color: 'grey'}}/>
                  {/* <Text style={{fontSize: 6, color: 'grey'}}></Text> */}
                </Button>
                <Button transparent>
                <MaterialCommunityIcons name= {'twitter-retweet'}  style={{fontSize: 8,color: 'grey'}}/>
                  {/* <Text style={{fontSize: 6, color: 'grey'}}></Text> */}
                </Button>
              <Button transparent>
                  <Icon name= {'ios-heart-outline'}  style={{fontSize: 8,color: 'grey'}}/>
                  {/* <Text style={{fontSize: 6, color: 'grey'}}></Text> */}
                </Button>  
                <Button transparent>
                  <Icon active name= {'ios-mail-outline'}   style={{fontSize: 8,color: 'grey'}}/>
                  <Text></Text>
                </Button>
                </View>
                </Body>
            </CardItem>
       </Card>
        </Content>
        </Container>
  ); 
  }
}

module.export = AppBody;