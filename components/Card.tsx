import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";

export default function Card(props: { item: { title: string } }) {
  return (
    <LinearGradient
      colors={["#1e3a8a", "#3b82f6"]}
      end={{ x: 0.1, y: 0.9 }}
      className="rounded"
    >
      <View className="p-4 h-36 relative w-[85vw]">
        <Text className="text-lg text-white">{props.item.title}</Text>
        <Text className="text-sm text-white">Sub-title</Text>
        <View className="absolute bottom-2 left-4 flex flex-row gap-2">
          <Text className="text-sm text-white">Link?</Text>
          <FontAwesome name="long-arrow-right" size={20} color="white" />
        </View>
      </View>
    </LinearGradient>
  )
}
