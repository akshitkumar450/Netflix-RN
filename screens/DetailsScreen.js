import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import movie from "../assets/movie";
import tw from "tailwind-react-native-classnames";
import {
  MaterialIcons,
  Entypo,
  AntDesign,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
const DetailsScreen = () => {
  const movieItem = movie.seasons.items[0].episodes.items[0];
  console.log(movieItem);
  return (
    <View style={tw` flex-1`}>
      <Image
        source={{
          uri: movieItem.poster,
        }}
        style={{
          width: "100%",
          aspectRatio: 16 / 9,
          resizeMode: "cover",
        }}
      />
      <ScrollView>
        <View style={tw`p-2`}>
          <Text style={tw`text-white text-3xl mt-1 font-semibold `}>
            {movie.title}
          </Text>
          <View style={tw`flex-row`}>
            <Text style={tw`text-green-500`}>98% match</Text>
            <Text style={tw`text-gray-500 ml-4`}>{movie.year}</Text>
            <View style={[tw`bg-yellow-400 rounded-md mx-2`, { padding: 2 }]}>
              <Text style={tw`text-black`}>12+</Text>
            </View>
            <Text style={tw`text-gray-500 mr-4`}>
              {movie.numberOfSeasons} seasons
            </Text>
            <MaterialIcons name="hd" size={24} color="gray" />
          </View>

          <Pressable
            style={tw`bg-gray-200 rounded-md my-2 h-10 justify-center`}>
            <View style={tw`flex-row items-center justify-center`}>
              <Entypo name="controller-play" size={24} color="black" />
              <Text style={tw`text-lg font-semibold`}>Play</Text>
            </View>
          </Pressable>

          <Pressable
            style={tw`bg-gray-900 rounded-md mt-2 h-10 justify-center`}>
            <View style={tw`flex-row items-center justify-center`}>
              <AntDesign name="download" size={24} color="white" />
              <Text style={tw`text-lg text-white font-semibold ml-2`}>
                Download
              </Text>
            </View>
          </Pressable>
          <Text style={tw`text-gray-300 my-2`}>{movie.plot}</Text>
          <Text style={tw`text-gray-300`} numberOfLines={1}>
            Cast : {movie.cast}
          </Text>
          <Text style={tw`text-gray-300`}>Created By : {movie.creator}</Text>

          <View style={tw`flex-row justify-around items-center`}>
            <View style={tw`items-center`}>
              <AntDesign name="plus" size={28} color="white" />
              <Text style={tw`text-gray-300 `}>My List</Text>
            </View>
            <View style={tw`items-center`}>
              <Feather name="thumbs-up" size={28} color="white" />
              <Text style={tw`text-gray-300`}>Rate</Text>
            </View>
            <View style={tw`items-center`}>
              <Feather name="send" size={28} color="white" />
              <Text style={tw`text-gray-300`}>Share</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
