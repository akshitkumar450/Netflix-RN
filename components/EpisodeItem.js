import { View, Text, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";
const EpisodeItem = ({ movieItem }) => {
  return (
    <View style={tw`my-3`}>
      <View style={tw`flex-row items-center justify-between mb-2`}>
        <View style={tw`flex-1 flex-row items-center`}>
          <Image
            source={{ uri: movieItem.poster }}
            style={{
              width: 90,
              height: 70,
              resizeMode: "cover",
              borderRadius: 10,
            }}
          />
          <View style={tw`ml-2`}>
            <Text style={tw`text-gray-400 `}>{movieItem.title}</Text>
            <Text style={tw`text-gray-500 text-xs`}>{movieItem.duration}</Text>
          </View>
        </View>
        <View>
          <AntDesign name="download" size={24} color="white" />
        </View>
      </View>
      <Text style={tw`text-gray-400`}>{movieItem.plot}</Text>
    </View>
  );
};

export default EpisodeItem;
