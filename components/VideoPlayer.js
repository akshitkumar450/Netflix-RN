import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Video } from "expo-av";

const VideoPlayer = ({ video, poster }) => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  //   for changing the video on clicking the image
  useEffect(() => {
    if (!videoRef.current) return;
    (async () => {
      await videoRef?.current?.unloadAsync();
      await videoRef?.current?.loadAsync({ uri: video }, {}, false);
    })();
  }, [poster, video]);
  return (
    <View style={tw`mt-8 flex-1`}>
      <View style={tw`h-full`}>
        <Video
          ref={videoRef}
          style={styles.video}
          posterSource={{
            uri: poster,
          }}
          usePoster={true}
          source={{
            uri: video,
          }}
          useNativeControls
          resizeMode="cover"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
    </View>
  );
};

export default VideoPlayer;
const styles = StyleSheet.create({
  video: {
    alignSelf: "center",
    width: 350,
    height: "100%",
  },
});
