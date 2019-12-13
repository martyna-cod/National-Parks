import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import Images from "./Images";
import Details from "./Details";

function Separator() {
  return <View style={styles.separator} />;
}

export default class ParksScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Separator />

          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Details")}
            >
              <Image
                style={{ width: 350, height: 250, borderRadius: 10 }}
                source={{
                  uri:
                    "https://www.polen.travel/images/nl-NL/images/POIT_Amsterdam/Gosia/Tatry_73.jpg"
                }}
              />
              <Text style={styles.text}>Tatra National Park</Text>
            </TouchableOpacity>
            <Separator />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Details")}
            >
              <Image
                style={{ width: 350, height: 250, borderRadius: 10 }}
                source={{
                  uri:
                    "https://dag08uxs564ub.cloudfront.net/images/The_Landscape_of_Bieszczady_Mountains.max-1280x768.jpg"
                }}
              />
              <Text style={styles.text}>Bialowieza National Park</Text>
            </TouchableOpacity>
            <Separator />
          </View>

          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Details")}
            >
              <Image
                style={{ width: 350, height: 250, borderRadius: 10 }}
                source={{
                  uri:
                    "https://lh4.googleusercontent.com/proxy/MBAfZdeu_K9y7JtcshxDiRsNGBtcE7fDoDQOjNgjD9ET8otmMUBARBjfMCdJmAKErD01uOCmyKi_BHdxCJyoWqCcLxHCDdl1up7tLUyXDsOeTPuvSAqN0MDxEoFDlpH2fZ69A8gEWEEJYJvtbtlIGY7yhcc=w357-h238-k-no"
                }}
              />
              <Text style={styles.text}>Ojcow National Park</Text>
            </TouchableOpacity>
            <Separator />
          </View>

          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Details")}
            >
              <Image
                style={{ width: 350, height: 250, borderRadius: 10 }}
                source={{
                  uri:
                    "https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2017/01/6234018582_b44ce8edf7_b-1.jpg"
                }}
              />
              <Text style={styles.text}>Slowinski National Park</Text>
            </TouchableOpacity>
            <Separator />
          </View>

          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Images")}
            >
              <Image
                style={{ width: 350, height: 250, borderRadius: 10 }}
                source={{
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Qnl-lOXwy0Qn-hTAN63P9yGIZRRmRAsgQ1yZF_tIa3yB8Pqlgg&s"
                }}
              />
              <Text style={styles.text}>Bory Tucholskie</Text>
              <Separator />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Images")}
            >
              <Image
                style={{ width: 350, height: 250, borderRadius: 10 }}
                source={{
                  uri:
                    "https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2017/01/7176346859_01e9d14aa0_k-1.jpg"
                }}
              />
              <Text style={styles.text}>Karkonosze National Park</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Images")}
              ></TouchableOpacity>
              <Separator />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Images")}
            >
              <Image
                style={{ width: 350, height: 250, borderRadius: 10 }}
                source={{
                  uri:
                    "https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2018/03/1930045.jpg"
                }}
              />
              <Text style={styles.text}>Pieniny</Text>
              <Separator />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Images")}
            >
              <Image
                style={{ width: 350, height: 250, borderRadius: 10 }}
                source={{
                  uri:
                    "https://www.polen.travel/images/nl-NL/images/POIT_Amsterdam/Gosia/bieszczady.jpg"
                }}
              />
              <Text style={styles.text}>Bieszczady </Text>
            </TouchableOpacity>
            <Separator />
          </View>
          <Separator />

          <Separator />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 0
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 2
  },
  header: {
    fontSize: 40,
    marginTop: 25,
    marginBottom: 25,
    textAlign: "center",
    backgroundColor: "grey"
  },

  title: {
    textAlign: "center",
    marginVertical: 8,
    height: 100,
    marginTop: 50,
    marginBottom: 50,
    fontSize: 35
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  separator: {
    marginVertical: 5
  },
  text: {
    position: "absolute",
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 200,
    color: "white"
  }
});

module.exports = ParksScreen;
