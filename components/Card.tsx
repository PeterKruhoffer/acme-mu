import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text, Pressable } from 'react-native'
import { Link } from 'expo-router'

export default function Card(props: { item: { title: string } }) {
  return (
    <Link href="/cards/ActivityDetails" asChild>
      <Pressable className="w-[85vw]">
        <View className="bg-gray-300 h-32" />
        <View className="p-4 h-32 bg-white relative">
          <Text className="text-lg">{props.item.title}</Text>
          <Text className="text-sm">Sub-title</Text>
          <View className="absolute bottom-2 left-4 flex flex-row gap-2">
            <Text className="text-sm">Link?</Text>
            <FontAwesome name="long-arrow-right" size={20} color="white" />
          </View>
        </View>
      </Pressable>
    </Link>
  )
}
