import { View, Text } from 'react-native';

function LabelAndDetail(detail: { label: string, title: string }) {
  return (
    <View className='py-4'>
      <Text className='uppercase text-black/90'>{detail.label}</Text>
      <Text className='py-1 text-lg'>{detail.title}</Text>
    </View>
  )
}

export default LabelAndDetail;
