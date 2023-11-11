import { FlashList } from "@shopify/flash-list";
import { View, ScrollView, Text, useWindowDimensions } from "react-native";

import Card from "../../components/Card";
import InfoCard from "../../components/InfoCard";
import UserInfo from "../../components/UserInfo";

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
      name: "Microsoft Teams",
      location: "Lokation",
      description: "Bliv den ultimative Microsoft Teams chatbot på kun 1 dag",
    },
  },
  {
    type: "Activity",
    item: {
      id: "5",
      name: "Presentation Master",
      location: "Lokation",
      description: "Presenter som aldrig før med vores 2 dages kursus",
    },
  },
];

export default function TabOneScreen() {
  const { width } = useWindowDimensions();
  const cardWidth = 0.85 * width;
  const seperatorWidth = 4;
  const snapToIntervalValue = cardWidth + seperatorWidth;
  return (
    <ScrollView className="bg-gray-200">
      <UserInfo />
      <View className="py-8" />
      <View className="px-4">
        <InfoCard
          item={{
            title:
              "Hvis du ændrer til/fra Danmark, så kontakt os på 33 95 97 00",
          }}
        />
      </View>
      <Text className="text-2xl px-4 py-8">Aktuelt</Text>
      <FlashList
        data={DATA}
        estimatedItemSize={300}
        decelerationRate="fast"
        snapToInterval={snapToIntervalValue}
        snapToAlignment="start"
        disableAutoLayout
        horizontal
        ItemSeparatorComponent={() => <View className="p-1" />}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => <Card item={item.item} />}
      />
      <View className="px-4 py-8 flex-2">
        <Text className="text-2xl py-4">Anbefalede aktiviteter</Text>
        <InfoCard item={{ title: "Title" }} />
      </View>
    </ScrollView>
  );
}
