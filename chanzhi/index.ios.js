/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict';

 var React = require('react-native');
 var {
   StyleSheet,
   TabBarIOS,
   Text,
   View,
   NavigatorIOS,
   AppRegistry,
 } = React;
 var Product = require('./Product');

 var chanzhi = React.createClass({
   statics: {
     title: '蝉知博客客户端',
     description: '蝉知客户端reactnative版本',
   },

   displayName: '蝉知RN客户端',

   getInitialState: function() {
     return {
       selectedTab: '推荐产品',
       notifCount: 0,
       presses: 0,
     };
   },

   render: function() {
     return (
       <TabBarIOS
         tintColor="white"
         barTintColor="darkslateblue">
         <TabBarIOS.Item
           title="推荐产品"
           icon={require('image!product')}
           selected={this.state.selectedTab === '推荐产品'}
           onPress={() => {
             this.setState({
               selectedTab: '推荐产品',
             });
           }}>
           <NavigatorIOS
              barTintColor='#007AFF'
              titleTextColor="#fff"
              tintColor="#fff"
              ref="hh"
              style={styles.container}
              initialRoute={{
                component: Product,
                title: '推荐产品',
                rightButtonTitle: '分类',
                onRightButtonPress: ()=>{
                  this.refs.nav_food.navigator.push({
                    title: '地图',
                    component: Map,
                    passProps:{
                      type:'餐饮'
                    }
                  });
                }
              }}
              />
         </TabBarIOS.Item>
         <TabBarIOS.Item
           icon={require('image!article')}
           title="推荐文章"
           badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
           selected={this.state.selectedTab === '推荐文章'}
           onPress={() => {
             this.setState({
               selectedTab: '推荐文章',
               notifCount: this.state.notifCount + 1,
             });
           }}>
           <View style={styles.tabContent}><Text  style={styles.tabText}>464646</Text></View>
         </TabBarIOS.Item>
         <TabBarIOS.Item
           icon={ require('image!user') }
           title="More"
           selected={this.state.selectedTab === '个人中心'}
           onPress={() => {
             this.setState({
               selectedTab: '个人中心',
               presses: this.state.presses + 1
             });
           }}>
           <View style={styles.tabContent}><Text  style={styles.tabText}>464646</Text></View>
         </TabBarIOS.Item>
       </TabBarIOS>
     );
   },

 });

 var styles = StyleSheet.create({
   tabContent: {
     flex: 1,
     alignItems: 'center',
   },
   tabText: {
     color: 'white',
     margin: 50,
   },
   container: {
    flex: 1
  },
 });

AppRegistry.registerComponent('chanzhi', () => chanzhi);
