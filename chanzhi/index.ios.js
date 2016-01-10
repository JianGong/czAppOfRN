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
   AppRegistry,
 } = React;

 var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

 var chanzhi = React.createClass({
   statics: {
     title: '蝉知博客客户端',
     description: '蝉知客户端reactnative版本',
   },

   displayName: '蝉知RN客户端',

   getInitialState: function() {
     return {
       selectedTab: '推荐文章',
       notifCount: 0,
       presses: 0,
     };
   },

   _renderContent: function(color: string, pageText: string, num?: number) {
     return (
       <View style={[styles.tabContent, {backgroundColor: color}]}>
         <Text style={styles.tabText}>{pageText}</Text>
         <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
       </View>
     );
   },

   render: function() {
     return (
       <TabBarIOS
         tintColor="white"
         barTintColor="darkslateblue">
         <TabBarIOS.Item
           title="推荐产品"
           icon={{uri: base64Icon, scale: 3}}
           selected={this.state.selectedTab === '推荐产品'}
           onPress={() => {
             this.setState({
               selectedTab: '推荐产品',
             });
           }}>
           {this._renderContent('#414A8C', '个人中心')}
         </TabBarIOS.Item>
         <TabBarIOS.Item
           icon={{uri: base64Icon, scale: 3}}
           title="推荐文章"
           badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
           selected={this.state.selectedTab === '推荐文章'}
           onPress={() => {
             this.setState({
               selectedTab: '推荐文章',
               notifCount: this.state.notifCount + 1,
             });
           }}>
           {this._renderContent('#783E33', '推荐文章', this.state.notifCount)}
         </TabBarIOS.Item>
         <TabBarIOS.Item
           icon={require('./flux.png')}
           title="More"
           selected={this.state.selectedTab === '个人中心'}
           onPress={() => {
             this.setState({
               selectedTab: '个人中心',
               presses: this.state.presses + 1
             });
           }}>
           <View><Text>464646</Text></View>
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
 });

AppRegistry.registerComponent('chanzhi', () => chanzhi);
