import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text } from "react-native";

function UserInfo() {
  return (
    <View className="flex gap-2 rounded-br-3xl p-4 bg-white h-80 relative">
      <Text className="text-2xl py-8">Godmorgen Fornavn</Text>

      <View className="py-2 absolute bottom-12 left-4">
        <View className="flex flex-row gap-x-4">
          <Text className="text-lg">Du har 1 ulæst besked</Text>
          <FontAwesome name="arrow-right" size={20} color="black" />
        </View>
        <View className="flex flex-row gap-x-4">
          <Text className="text-lg">Du har 1 kommende begivenhed</Text>
          <FontAwesome name="arrow-right" size={20} color="black" />
        </View>
      </View>

      <View className="absolute -bottom-10 right-4">
        <View className="flex-row gap-x-8">
          <View className="flex-col">
            <FontAwesome name="phone" size={40} color="black" />
            <Text className="text-lg text-center">Ring</Text>
          </View>
          <View>
            <FontAwesome name="envelope" size={40} color="black" />
            <Text className="text-lg text-center">Skriv</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default UserInfo;
