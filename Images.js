import React from "react";
import { StyleSheet, View, Image, ScrollView, Dimensions } from "react-native";

class Images extends React.Component {
  render() {
    let dimensions = Dimensions.get("window");
    let imageHeight = Math.round((dimensions.width * 33) / 16);
    let imageWidth = dimensions.width;

    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
        >
          <Image
            style={{ height: imageHeight, width: imageWidth, resizeMode:"contain" }}
            source={{
              uri:
                "https://wf1.xcdn.pl/files/12/01/04/671058_399pxLynx_lynx_poing_83.jpg"
            }}
          />

          <Image
            style={{ height: imageHeight, width: imageWidth, resizeMode:"contain" }}
            source={{ uri: "http://carnivores.eu/upload/filemanager/strona/drapiezniki/zdjecia%20na%20stronach%20-%20Drapiezniki/rys_zima.jpg" }}
          />

          <Image
            style={{ height: imageHeight, width: imageWidth, resizeMode:"contain" }}
            source={{
              uri:
                "https://howlingforjustice.files.wordpress.com/2011/05/gray-winter-wolf-_-all-about-wolves.jpg"
            }}
          />
          <Image
            style={{ height: imageHeight, width: imageWidth,  resizeMode:"contain" }}
            source={{
              uri:
                "http://2.bp.blogspot.com/-opAKEPXU5Ro/Ucxec2hKtOI/AAAAAAAABRY/8gyozdbKWgY/s600/450px-Medved_mzoo.jpg"
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  }
});

module.exports = Images;
