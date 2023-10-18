import { FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native'
import InfoCard from '../../components/InfoCard'
import { FlashList } from "@shopify/flash-list";
import Card from '../../components/Card';

const DATA = [
  {
    type: "Msg",
    title: "First Item",
  },
  {
    type: "Msg",
    title: "Second Item",
  },
  {
    type: "Activity",
    title: "Third Item",
  },
  {
    type: "Msg",
    title: "Fourth Item",
  },
  {
    type: "Activity",
    title: "Fifth Item",
  },
  {
    type: "Msg",
    title: "Sixth Item",
  },
  {
    type: "Activity",
    title: "Seventh Item",
  }
]

function Timeline() {
  return (
    <View className='flex flex-1 pt-12'>
      <View className='flex-row items-center gap-x-2 p-2'>
        <FontAwesome name="plus" size={20} color="black" />
        <Text className='text-lg'>Ny besked</Text>
      </View>
      <View className='w-screen bg-black h-auto py-1 flex flex-row items-center justify-center gap-x-2'>
        <FontAwesome name="arrow-up" size={20} color="white" />
        <Text className='text-lg text-white'>Kommende begivenheder(1)</Text>
      </View>
      <FlashList
        data={DATA}
        estimatedItemSize={300}
        decelerationRate="fast"
        bounces={false}
        ListHeaderComponent={() => (
          <View className="ml-4 w-full h-16 relative">
            <View className='flex flex-col gap-y-1 pb-1'>
              <View className='w-1 h-1 bg-black' />
              <View className='w-1 h-1 bg-black' />
              <View className='w-1 h-1 bg-black' />
            </View>
            <View className='w-1 h-10 bg-black' />
            <View className='absolute top-1/2 -left-[2px] w-full flex-row items-center gap-2'>
              <FontAwesome name="circle" size={10} color="black" />
              <Text className='text-sm'>I DAG</Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View className="ml-4 w-full h-16 relative">
            <View className='w-1 h-full bg-black' />
            <View className='absolute top-1/2 -left-[2px] w-full flex-row items-center gap-2'>
              <FontAwesome name="circle" size={10} color="black" />
              <Text className='text-sm'>7. November 2019</Text>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View className="p-4 w-full flex items-center justify-center">
            <FontAwesome name="rocket" size={140} color="black" />
          </View>
        )}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => {
          return item.type === "Msg" ? (
            <InfoCard item={item} />
          ) : (
            <Card item={item} />
          )
        }}
      />
    </View>
  )
}

export default Timeline
