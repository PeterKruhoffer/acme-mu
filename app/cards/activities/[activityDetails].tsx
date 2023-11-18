import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { useAtom } from "jotai";
import { Text, View } from "react-native";

import { activitiesAtom } from "../../(tabs)/activities";

function ActivityDetails() {
  const { activityDetails } = useLocalSearchParams();
  const [activities] = useAtom(activitiesAtom);
  const activity = activities.find(
    (item) => item?.item?.id === activityDetails
  );

  return (
    <LinearGradient
      colors={["#0284c7", "#2563eb", "#0284c7"]}
      locations={[0.3, 0.6, 0.9]}
      className="flex flex-1 p-8 gap-4"
    >
      <Text className="text-2xl text-white">{activity?.item.name}</Text>
      <View className="flex flex-row items-center gap-x-2">
        <Text className="text-lg text-white">{activity?.item.location}</Text>
        <FontAwesome name="map-marker" size={20} color="white" />
      </View>
      <View className="p-px bg-gray-200" />
      <Text className="text-xl text-white">{activity?.item.description}</Text>
    </LinearGradient>
  );
}

export default ActivityDetails;
