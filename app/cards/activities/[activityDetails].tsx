import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { useAtom } from "jotai";
import { Text } from "react-native";
import { timeLineAtom } from "../../(tabs)/Timeline";

function ActivityDetails() {
  const { activityDetails } = useLocalSearchParams();
  const [timeLine] = useAtom(timeLineAtom);
  const activity = timeLine.find((item) => item?.item?.id === activityDetails);
  return (
    <LinearGradient
      colors={["#0284c7", "#2563eb"]}
      locations={[0.3, 0.8]}
      className="flex flex-1 p-8 gap-4"
    >
      <Text className="text-2xl text-white">{activity?.item.name}</Text>
      <Text className="text-2xl text-white">{activity?.item.location}</Text>
      <Text className="text-2xl text-white">{activity?.item.description}</Text>
    </LinearGradient>
  );
}

export default ActivityDetails;
