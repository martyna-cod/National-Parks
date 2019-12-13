import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ParksScreen from "./ParksScreen";
import Images from "./Images";
import Details from "./Details";

function Separator() {
  return <View style={styles.separator} />;
}

class HomeScreen extends React.Component {
  state = {
    fontLoaded: false
  };
  async componentWillMount() {
    await Expo.Font.loadAsync({
      "Lilita One": require("./assets/fonts/LilitaOne-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://images.squarespace-cdn.com/content/v1/57b9b98a29687f1ef5c622df/1504130520495-HVFBN4AQQ32HC8EUC078/ke17ZwdGBToddI8pDm48kI8rPctsbQLvwZGVZ9mJtiwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcKOEUgBUYQ7_rAKz3ua5P688z_NBkl7hnOWNnadXp-t3TWcH_hqFDpbwpPia4p95m/morskie+oko?format=1500w"
        }}
        style={styles.container}
      >
        {this.state.fontLoaded ? (
          <Text
            style={{
              marginLeft: 20,
              marginBottom: 40,
              color: "white",
              textDecorationStyle: "dashed",
              fontWeight: "bold",
              fontSize: 38,
              textAlign: "center",
              textAlignVertical: "center"
            }}
          >
            Natural beauty of Poland. Discover Polish nature
          </Text>
        ) : null}
        <Separator />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Parks")}
        >
          <View
            style={{
              backgroundColor: "#3eb043",
              alignItems: "center",
              width: 150,
              height: 40,
              justifyContent: "center",
              borderRadius: 15
            }}
          >
            <Text style={{ color: "white" }}>See parks</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
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
    marginVertical: 1
  }
});
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Parks: ParksScreen,
    Images: Images,
    Details: Details
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(RootStack);
