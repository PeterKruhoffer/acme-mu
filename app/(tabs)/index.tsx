import InfoCard from "../../components/InfoCard";
import Card from "../../components/Card";
import { View, ScrollView, Text, useWindowDimensions } from "react-native";
import UserInfo from "../../components/UserInfo";
import { FlashList } from "@shopify/flash-list";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Fourth Item",
  },
  {
    title: "Fifth Item",
  },
]

export default function TabOneScreen() {
  const { width } = useWindowDimensions();
  const cardWidth = 0.85 * width;
  const seperatorWidth = 4
  const snapToIntervalValue = cardWidth + seperatorWidth
  return (
    <ScrollView className="bg-gray-200">
      <UserInfo />
      <View className="py-8" />
      <View className="px-4">
        <InfoCard item={{ title: "Hvis du ændrer til/fra Danmark, så kontakt os på 33 95 97 00" }} />
      </View>
      <Text className="text-2xl px-4 py-8">Aktuelt</Text>
      <FlashList
        data={DATA}
        estimatedItemSize={300}
        decelerationRate="fast"
        snapToInterval={snapToIntervalValue}
        snapToAlignment="start"
        disableAutoLayout={true}
        horizontal={true}
        ItemSeparatorComponent={() => <View className="p-1" />}
        ListFooterComponent={() => <View className="p-4 w-2" />}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => <Card item={item} />}
      />
      <View className="px-4 py-8 flex-2">
        <Text className="text-2xl py-4">Anbefalede aktiviteter</Text>
        <InfoCard item={{ title: "Title" }} />
      </View>
    </ScrollView>
  );
}
