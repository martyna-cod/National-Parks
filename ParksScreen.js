import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

export default class ParksScreen extends React.Component {
  render() {
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView style={styles.scrollView}>
       
         <ImageBackground source={{uri:"https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2017/01/6126449759_970e106a5e_o.jpg"}}
        style={styles.container}>
        <View style={styles.inner}></View>
        </ImageBackground>
   
    <Separator />
         <View>
         <Text style={styles.header}>National Parks in Poland</Text>
         </View>
      <View>
      <Image
          style={{width: 350, height: 250, borderRadius: 10}}
          source={{uri:"https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2017/01/6126449759_970e106a5e_o.jpg"}}
        />
         <Separator />
        <Button
          title="Tatra National Park"
          color="#71d1ff"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <Separator />
      <View>
      <Image
          style={{width: 350, height: 250, borderRadius: 10}}
          source={{uri:"https://lh4.googleusercontent.com/proxy/MBAfZdeu_K9y7JtcshxDiRsNGBtcE7fDoDQOjNgjD9ET8otmMUBARBjfMCdJmAKErD01uOCmyKi_BHdxCJyoWqCcLxHCDdl1up7tLUyXDsOeTPuvSAqN0MDxEoFDlpH2fZ69A8gEWEEJYJvtbtlIGY7yhcc=w357-h238-k-no"}}
        />
         <Separator />
        <Button
          title="Ojcow National Park"
          color="#71d1ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
      <View>
      <Image
          style={{width: 350, height: 250, borderRadius: 10}}
          source={{uri:"https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2017/01/6234018582_b44ce8edf7_b-1.jpg"}}
        />
         <Separator />
        <Button
          title="Slowinski National Park"
          color="#71d1ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
      <View>
      <Image
          style={{width: 350, height: 250, borderRadius: 10}}
          source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Qnl-lOXwy0Qn-hTAN63P9yGIZRRmRAsgQ1yZF_tIa3yB8Pqlgg&s"}}
        />
         <Separator />
        <Button
          title="Bory Tucholskie"
          color="#71d1ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
      <View>
      <Image
          style={{width: 350, height: 250, borderRadius: 10,}}
          source={{uri:"https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2017/01/7176346859_01e9d14aa0_k-1.jpg"}}
        />
         <Separator />
        <Button
          title="Karkonosze National Park"
          color="#71d1ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
      <View>
      <Image
          style={{width: 350, height: 250, borderRadius: 10}}
          source={{uri:"https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/03/1930045.jpg"}}
        />
         <Separator />
        <Button
          title="Pieniny"
          color="#71d1ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
      <View>
      <Image
          style={{width: 350, height: 250, borderRadius: 10}}
          source={{uri:"https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2017/01/8727318195_04931b6d44_k-1.jpg"}}
        />
         <Separator />
        <Button
          title="Bieszczady National Park"
          color="#71d1ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
  
      <Separator />
 
      </ScrollView>
    </SafeAreaView>
 
  )}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 0,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 2,
  },
  header: {
    fontSize: 40,
    marginTop: 25,
    marginBottom: 25,
    textAlign: "center",
    backgroundColor: 'grey'
  },
 
  title: {
    textAlign: 'center',
    marginVertical: 8,
    height: 100,
    marginTop: 50,
    marginBottom: 50,
    fontSize: 35
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,

  },
})

module.exports = ParksScreen