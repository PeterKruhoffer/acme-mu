import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View>
      <View className="flex justify-center px-8 rounded-br-[90px] pt-16 bg-white h-80">
        <View className="flex flex-row items-center gap-x-2">
          <Text className="text-3xl py-2">Fornavn Efternavn</Text>
          <FontAwesome name="arrow-right" size={15} color="black" />
        </View>
        <Text className="text-xl py-2">Profil og indstilinger</Text>
      </View>
      <View className="flex justify-center gap-8 px-4 py-8">
        <View className="flex flex-row items-center gap-x-2">
          <Text className="text-lg">Medlemskab</Text>
          <FontAwesome name="arrow-right" size={15} color="black" />
        </View>
        <View className="flex flex-row items-center gap-x-2">
          <Text className="text-lg">Arbejde</Text>
          <FontAwesome name="arrow-right" size={15} color="black" />
        </View>
        <View className="flex flex-row items-center gap-x-2">
          <Text className="text-lg">Uddannelse</Text>
          <FontAwesome name="arrow-right" size={15} color="black" />
        </View>
        <View className="flex flex-row items-center gap-x-2">
          <Text className="text-lg">Meld dig ud af Djoef</Text>
          <FontAwesome name="arrow-right" size={15} color="black" />
        </View>
      </View>

      <View className="border border-gray-500 w-full ml-6" />

      <View className="flex justify-center gap-4 px-4 py-8">
        <View className="flex flex-row items-center gap-x-2">
          <Text className="text-sm">Om appen</Text>
          <FontAwesome name="arrow-right" size={15} color="black" />
        </View>
        <View className="flex flex-row items-center gap-x-2">
          <Text className="text-sm">Giv feedback</Text>
          <FontAwesome name="arrow-right" size={15} color="black" />
        </View>
      </View>
    </View>
  );
}
