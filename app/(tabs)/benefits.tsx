import { FlashList } from "@shopify/flash-list";
import { View, Text } from 'react-native'
import Card from "../../components/Card";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Second Item",
  },
]

function Benefits() {
  return (
    <View>
      <Text>Benefits</Text>

      <FlashList
        data={DATA}
        estimatedItemSize={300}
        decelerationRate="fast"
        snapToInterval={340}
        snapToAlignment="start"
        contentContainerStyle={{ paddingHorizontal: 8 }}
        ItemSeparatorComponent={() => <View className="p-1" />}
        ListFooterComponent={() => <View className="p-4 w-2" />}
        horizontal={true}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  )
}

export default Benefits
