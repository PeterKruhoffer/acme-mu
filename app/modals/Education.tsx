import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "react-native";

import LabelAndDetail from "../../components/LabelAndDetail";

function Education() {
  return (
    <View className="bg-white flex flex-1">
      <View className="bg-black w-full h-28 p-8 flex flex-row items-center justify-between">
        <View className="flex-row gap-x-2">
          <FontAwesome name="briefcase" size={40} color="white" />
          <View className="flex flex-col px-4">
            <Text className="text-white text-2xl">Uddannelse afsluttet</Text>
          </View>
        </View>
        <FontAwesome name="pencil" size={30} color="white" />
      </View>

      <View className="p-8">
        <LabelAndDetail label="Studiested" title="Handelshøjskolen i Aarhus" />
        <LabelAndDetail label="Studieretning" title="HA / Erhvervsøkonomi" />
        <LabelAndDetail label="Dimittenddato" title="01-07-2019" />
      </View>
    </View>
  );
}

export default Education;
