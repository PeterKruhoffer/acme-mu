import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function InfoCard(props: { item: { title: string } }) {
  return (
    <Link href="/cards/InfoDetails" asChild>
      <Pressable className="p-4 h-36 relative w-full bg-[#b2c9a7]">
        <Text className="text-xl">{props.item.title}</Text>
        <View className="absolute bottom-2 left-4 flex flex-row gap-2">
          <Text className="text-sm">Læs mere</Text>
          <FontAwesome name="long-arrow-right" size={20} color="black" />
        </View>
      </Pressable>
    </Link>
  );
}
