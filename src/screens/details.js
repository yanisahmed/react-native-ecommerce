import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { AntDesign } from '@expo/vector-icons';

export default function Details({ navigation }) {
    const [favourite, setFavourite] = useState(false)
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("../../assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("../../assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("../../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("../../assets/fonts/Inter-Thin.ttf"),
  });
  const handleFavourite = () => {
    setFavourite(!favourite)
  }
  console.log(favourite)

  if (!fontsLoaded) {
    return <Text>Font is loading....</Text>;
  }

  const handOrderNow = () => {
    navigation.navigate("Details");
  };

  const headerBg = "../../assets/images/pexels-nastyasensei-1199562.jpg";
  return (
    <View style={styles.container}>
      <View style={styles.appHeader}>
        <ImageBackground style={styles.headerWraper} source={require(headerBg)}>
          <Image
            style={styles.appLogo}
            source={require("../../assets/images/logo.png")}
          />
        </ImageBackground>
      </View>
      <View style={styles.appBody}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>
            Boston Lettuce
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>1.10</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              marginStart: 10,
              color: "#dedede",
            }}
          >
            $/piece
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Text style={{ fontWeight: "bold", fontSize: 24, color: "green" }}>
            -150
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 24, color: "green" }}>
            gr/piece
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>Spain</Text>
        </View>

        <View>
          <Text style={styles.description}>
            Quis id ullamco dolore minim sint officia anim ut quis aliquip
            deserunt labore cupidatat. Consequat in deserunt sunt sit qui et do.
            In sit sit eu est Lorem amet.
          </Text>
        </View>
        <View style={styles.btnContainer}>
            <Pressable style={{width: 60, height: 50, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}} onPress={handleFavourite}>
                {favourite ? (<AntDesign  name="heart" size={24} color="black"  />) : (<AntDesign name="hearto" size={24} color="black" />) }
            </Pressable>
          <Pressable style={styles.btn} onPress={handOrderNow}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Inter-ExtraBold",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              Add to Cart
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D4DFF",
  },
  appHeader: {
    flex: 1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  appBody: {
    flex: 2,
    backgroundColor: "#fedefe",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerWraper: {
    minHeight: 350,
  },
  appLogo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginLeft: 30,
    marginTop: 30,
  },
  giftBox: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: "#ededed",
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  giftBoxImage: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Inter-Bold",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontFamily: "Inter-Regular",
    marginBottom: 20,
    marginTop: 20
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  btn: {
    width: 250,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "green",
    borderRadius: 15,
    marginBottom: 10,
    textTransform: 'uppercase'
  },
});
