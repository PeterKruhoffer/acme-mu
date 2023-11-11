import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { View, Text, Pressable } from "react-native";


export default function ActivityCard(props: {
  item: { id: string; name: string; location: string; description: string };
}) {
  return (
    <Link
      href={{
        pathname: "/cards/activities/[activityDetails]",
        params: { activityDetails: props.item.id },
      }}
      asChild
    >
      <Pressable className="w-full">
        <LinearGradient
          colors={["#0284c7", "#2563eb", "#1e40af"]}
          end={{ x: 0.7, y: 0.9 }}
          locations={[0.2, 0.4, 0.8]}
          className="h-32"
        />
        <View className="p-4 h-32 bg-white relative">
          <Text className="text-lg">{props.item.name}</Text>
          <View className="flex flex-row gap-2">
            <Text className="text-sm">{props.item.location}</Text>
            <FontAwesome name="map-marker" size={20} color="black" />
          </View>
          <View className="absolute bottom-2 left-4 flex flex-row gap-2">
            <Text className="text-sm">Link</Text>
            <FontAwesome name="long-arrow-right" size={20} color="black" />
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
