import React from 'react';
import { ExpoLinksView } from '@expo/samples';
import { Text, TouchableOpacity, StyleSheet, ScrollView, View, Image } from 'react-native';
import { WebBrowser } from 'expo';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  _handleGithubPress = () => {
    WebBrowser.openBrowserAsync('https://github.com/Harshmakadia');
  };

  _handleWebsitePress = () => {
    WebBrowser.openBrowserAsync('https://HarshMakadia.github.io');
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        {/* <ExpoLinksView /> */}
        <View style={styles.viewer}>
          <Image source={require('../assets/images/harsh.jpg')} style={styles.profile} />
        </View>
        <Text style={styles.heading}>Harsh Makadia</Text>

        <TouchableOpacity onPress={this._handleWebsitePress} style={styles.item}>
          <View style={styles.viewerBorder}>
            <Text>
              Visit My Website
            </Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this._handleGithubPress} style={styles.item}>
          <View style={styles.viewerBorder}>
            <Text>
            GitHub Profile
            </Text>
          </View>
      </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor  : '#dcdcdc',
    borderWidth : 1,
    borderColor : 'transparent',
    borderBottomColor : 'white'
  },
  heading : {
    textAlign : 'center',
    fontSize: 20,
    height: 35,
    padding: 10,
    marginBottom : 10
  },
  profile:{
    height : 200,
    width: 200,
    borderRadius: 100,
    margin: 5
  },
  viewer : {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
