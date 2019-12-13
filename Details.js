import * as React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import ParksScreen from "./ParksScreen";

function Separator() {
  return <View style={styles.separator} />;
}

class Details extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
            <View>
              <Separator />
              <Separator />
            </View>
            <Separator />
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Images")}
              >
                <Image
                  style={{ width: 350, height: 250, borderRadius: 10 }}
                  source={{
                    uri:
                      "http://tpn.pl/upload/default/1024x768x4/fot-marcin-bukowski.jpg"
                  }}
                />
                <Text style={styles.text}>See animals</Text>
                <Separator />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("")}
              >
                <Image
                  style={{ width: 350, height: 250, borderRadius: 10 }}
                  source={{
                    uri:
                      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/09/4b/a3/74.jpg"
                  }}
                />
                <Text style={styles.text}>What to do</Text>
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
                      "https://media-cdn.tripadvisor.com/media/photo-s/0b/4d/1e/87/morskie-oko.jpg"
                  }}
                />
                <Text style={styles.text}>Top Attractions</Text>
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
                      "https://cdn.steemitimages.com/DQmWqrtMUvu1sPmxMJKFJAzksDwNrtAfXijUY4t6hg3KEbY/817-327433.jpg"
                  }}
                />
                <Text style={styles.text}>Tatra Guide</Text>
                <Separator />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  separator: {
    marginVertical: 5
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 2
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

module.exports = Details;
