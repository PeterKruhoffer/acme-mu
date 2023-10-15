import { FlashList } from "@shopify/flash-list";
import { View, Text, useWindowDimensions, ScrollView } from 'react-native'
import Card from "../../components/Card";

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

function Benefits() {
  const { width } = useWindowDimensions();
  const cardWidth = 0.85 * width;
  const seperatorWidth = 4
  const snapToIntervalValue = cardWidth + seperatorWidth
  return (
    <ScrollView className="relative flex-1">
      <View className="rounded-br-[90px] px-4 pt-16 bg-white h-96">
        <Text className="text-3xl py-16 px-4">Fordele</Text>
      </View>
      <View className="py-4 px-2 -mt-36">
        <Text className="text-lg p-2">Lønfordele</Text>
        <FlashList
          data={DATA}
          estimatedItemSize={300}
          decelerationRate="fast"
          snapToInterval={snapToIntervalValue}
          snapToAlignment="start"
          contentContainerStyle={{ paddingHorizontal: 8 }}
          ItemSeparatorComponent={() => <View className="p-1" />}
          ListFooterComponent={() => <View className="p-4 w-2" />}
          horizontal={true}
          nestedScrollEnabled={true}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>
      <View className="py-4 px-2">
        <Text className="text-lg p-2">Aktuelle</Text>
        <FlashList
          data={DATA}
          estimatedItemSize={300}
          decelerationRate="fast"
          snapToInterval={snapToIntervalValue}
          snapToAlignment="start"
          contentContainerStyle={{ paddingHorizontal: 8 }}
          ItemSeparatorComponent={() => <View className="p-1" />}
          ListFooterComponent={() => <View className="p-4 w-2" />}
          horizontal={true}
          nestedScrollEnabled={true}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>
      <View className="py-4 px-2">
        <Text className="text-lg p-2">Flere fordele</Text>
        <FlashList
          data={DATA}
          estimatedItemSize={300}
          decelerationRate="fast"
          snapToInterval={snapToIntervalValue}
          snapToAlignment="start"
          contentContainerStyle={{ paddingHorizontal: 8 }}
          ItemSeparatorComponent={() => <View className="p-1" />}
          ListFooterComponent={() => <View className="p-4 w-2" />}
          horizontal={true}
          nestedScrollEnabled={true}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>
    </ScrollView>
  )
}

export default Benefits
