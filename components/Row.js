import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

// for typescript item(props)
// interface HomeScreenProps{
//     category:{
//         id:string,
//         title:string,
//         movies:{
//             id:string,
//             poster:string
//         }[] //movies is an array of object having id and poster
//     }
// }

const Row = ({ item }) => {
  return (
    <>
      <Text style={tw`text-white text-xl mb-3 `}>{item.title}</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={item.movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <Image
                source={{
                  uri: item.poster,
                }}
                style={{
                  width: 100,
                  height: 180,
                  resizeMode: "cover",
                  borderRadius: 5,
                  marginHorizontal: 5,
                }}
              />
            </View>
          );
        }}
      />
    </>
  );
};

export default Row;
