import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from 'react-native';

function Membership() {
  return (
    <View className='bg-white flex flex-1'>

      <View className='bg-black w-full h-28 p-8 flex flex-row'>
        <FontAwesome name="id-card" size={40} color="white" />
        <View className="flex flex-col px-8">
          <Text className='text-white'>Medlemsnummer</Text>
          <Text className='text-white text-3xl'>83838383</Text>
        </View>
      </View>

      <View className="p-8">
        <Text className="text-2xl">Kontingent</Text>
        <Text className="py-4">
          Lorem ipsum dolor atset Lorem ipsum dolor atsetLorem ipsum dolor atsetLorem ipsum dolor atsetLorem ipsum dolor atsetLorem ipsum dolor atsetLorem ipsum dolor atsetLorem ipsum dolor atsetLorem ipsum dolor atset
        </Text>

        <View className="flex pt-4 flex-row border-b-2 border-gray-400 items-center justify-between">
          <Text className="uppercase">Kontingent PR. Måned</Text>
          <Text className="text-lg uppercase">301,00 kr.</Text>
        </View>
      </View>

      <View className="px-8 flex-row gap-x-4 items-center">
        <FontAwesome name="info-circle" size={25} color="black" />
        <Text>Du er medlem af Djøf Offentlig</Text>
      </View>

      <View className="p-8">
        <Text className="text-2xl">Medlemstype</Text>
        <Text className="text-lg">Djøf Offentlig</Text>
        <View className="pt-8 pb-2 border-b-2 border-gray-400">
          <Text className="uppercase">Djøf Offentlig</Text>
        </View>
      </View>
    </View>
  );
}

export default Membership;
