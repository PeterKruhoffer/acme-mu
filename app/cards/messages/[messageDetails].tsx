import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { useAtom } from "jotai";
import { Text } from "react-native";

import { timeLineAtom } from "../../(tabs)/activities";

function MessageDetails() {
  const { messageDetails } = useLocalSearchParams();
  const [timeLine] = useAtom(timeLineAtom);
  const message = timeLine.find((item) => item?.item?.id === messageDetails);
  return (
    <LinearGradient
      colors={["#fb923c", "#fbbf24"]}
      locations={[0.8, 0.3]}
      className="flex flex-1 p-8 gap-4"
    >
      <Text className="text-xl">{message?.item?.name}</Text>
      <Text className="text-xl">{message?.item?.subject}</Text>
      <Text className="text-xl">{message?.item?.description}</Text>
    </LinearGradient>
  );
}

export default MessageDetails;
