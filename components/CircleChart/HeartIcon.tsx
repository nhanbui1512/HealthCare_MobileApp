import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const HeartIcon = () => {
  // Khởi tạo giá trị hoạt ảnh
  const scale = useSharedValue(1);

  // Tạo hiệu ứng phóng to thu nhỏ
  React.useEffect(() => {
    scale.value = withRepeat(withTiming(1.2, { duration: 500 }), -1, true);
  }, []);

  // Áp dụng style hoạt ảnh
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View>
      <Animated.View style={animatedStyle}>
        <AntDesign name="heart" size={14} color="red" />
      </Animated.View>
    </View>
  );
};

export default HeartIcon;
