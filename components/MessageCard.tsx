import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

type MessageCardProps = {
  item: {
    name: string
    subject: string
    description: string
  }
}

function MessageCard(props: MessageCardProps) {
  return (
    <Link href="/cards/MessageDetails" asChild>
      <Pressable className="w-full h-48 bg-blue-700 relative p-4">
        <View className='flex-row gap-x-2'>
          <View className='bg-black rounded-full w-8 h-8 flex justify-center items-center'>
            <Text className='text-white'>HF</Text>
          </View>
          <Text className="text-lg text-white">{props.item.name}</Text>
        </View>
        <View className='p-6'>
          <Text className="text-sm text-white">{props.item.subject}</Text>
          <Text className="text-sm text-white">{props.item.description}</Text>
        </View>
        <View className="absolute bottom-4 left-4 flex flex-row gap-2">
          <FontAwesome name="file-text" size={20} color="white" />
          <Text className="text-sm text-white">dokumenter</Text>
        </View>
      </Pressable>
    </Link>
  )
}

export default MessageCard;
