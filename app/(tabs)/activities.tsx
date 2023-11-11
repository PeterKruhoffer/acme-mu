import { FontAwesome } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { atom } from "jotai";
import { View, Text } from "react-native";

import ActivityCard from "../../components/ActivityCard";

const DATA = [
  {
    type: "Activity",
    item: {
      id: "1",
      name: "Excel mester",
      location: "Lokation",
      description: "Bliv den ultimative Excel mester på 2 dage",
    },
  },
  {
    type: "Activity",
    item: {
      id: "2",
      name: "Powerpoint professionel",
      location: "Lokation",
      description:
        "Bliv den ultimative Powerpoint professionel på din arbejdsplads",
    },
  },
  {
    type: "Activity",
    item: {
      id: "3",
      name: "Agile Evangelist",
      location: "Lokation",
      description: "Bliv den ultimative Agile Evangelist for dine kollager",
    },
  },
  {
    type: "Activity",
    item: {
      id: "4",
      name: "Agile Evangelist",
      location: "Lokation",
      description: "Bliv den ultimative Agile Evangelist for dine kollager",
    },
  },
  {
    type: "Activity",
    item: {
      id: "5",
      name: "Agile Evangelist",
      location: "Lokation",
      description: "Bliv den ultimative Agile Evangelist for dine kollager",
    },
  },
];

export const activitiesAtom = atom(DATA.reverse());

function ActivityScreen() {
  const activities = activitiesAtom.init
  return (
    <View className="flex flex-1 pt-14">
      <View className="w-screen bg-black h-auto py-1 flex flex-row items-center justify-center gap-x-2">
        <FontAwesome name="arrow-up" size={20} color="white" />
        <Text className="text-lg text-white">Kommende begivenheder(1)</Text>
      </View>
      <FlashList
        data={activities}
        estimatedItemSize={300}
        decelerationRate="fast"
        bounces={false}
        ListHeaderComponent={() => (
          <View className="ml-4 w-full h-16 relative">
            <View className="flex flex-col gap-y-1 pb-1">
              <View className="w-1 h-1 bg-black" />
              <View className="w-1 h-1 bg-black" />
              <View className="w-1 h-1 bg-black" />
            </View>
            <View className="w-1 h-10 bg-black" />
            <View className="absolute top-1/2 -left-[2px] w-full flex-row items-center gap-2">
              <FontAwesome name="circle" size={10} color="black" />
              <Text className="text-sm">I DAG</Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View className="ml-4 w-full h-16 relative">
            <View className="w-1 h-full bg-black" />
            <View className="absolute top-1/2 -left-[2px] w-full flex-row items-center gap-2">
              <FontAwesome name="circle" size={10} color="black" />
              <Text className="text-sm">7. November 2019</Text>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View className="p-4 w-full flex items-center justify-center" />
        )}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => {
          return <ActivityCard item={item.item} />
        }}
      />
    </View>
  );
}

export default ActivityScreen;
