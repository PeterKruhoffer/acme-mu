import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text } from 'react-native'

export default function InfoCard(props: { item: { title: string } }) {
  return (
    <View className="p-4 h-48 relative w-full bg-[#b2c9a7]">
      <Text className="text-lg">{props.item.title}</Text>
      <Text className="text-sm">Sub-title</Text>
      <View className="absolute bottom-2 left-4 flex flex-row gap-2">
        <Text className="text-sm">Link?</Text>
        <FontAwesome name="long-arrow-right" size={20} color="black" />
      </View>
    </View>
  )
}