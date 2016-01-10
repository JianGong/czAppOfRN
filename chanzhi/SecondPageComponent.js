
var React=require('react-native');

var {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} = React;

var FirstPageComponent = require('./FirstPageComponent');

var SecondPageComponent = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
    },
    _pressButton: function() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    },
    render: function() {
      return (  <View>
            <TouchableOpacity onPress={this._pressButton}>
                <Text style={styles.text} >上一页</Text>
            </TouchableOpacity>
        </View>
      );
    }
});
var styles = StyleSheet.create({
  text:{
    marginTop:30,
    padding:50
  },
});
module.exports=SecondPageComponent;
