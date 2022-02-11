import { View, Text, Image, FlatList, ScrollView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import moviesData from "../assets/moviesData";
import Row from "../components/Row";
const HomeScreen = () => {
  return (
    <View
      showsVerticalScrollIndicator={false}
      style={tw` flex-1 bg-black mt-8 p-2`}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={moviesData}
        renderItem={({ item }) => <Row item={item} />}
      />
    </View>
  );
};

export default HomeScreen;
