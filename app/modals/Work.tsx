import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "react-native";

import LabelAndDetail from "../../components/LabelAndDetail";

function Work() {
  return (
    <View className="bg-white flex flex-1">
      <View className="bg-black w-full h-28 p-8 flex flex-row items-center justify-between">
        <View className="flex-row">
          <FontAwesome name="briefcase" size={40} color="white" />
          <View className="flex flex-col px-8">
            <Text className="text-white text-2xl">I job</Text>
          </View>
        </View>
        <FontAwesome name="pencil" size={30} color="white" />
      </View>

      <View className="p-8">
        <LabelAndDetail
          label="Arbejdsplads"
          title="Justitsministeriets Departement"
        />
        <LabelAndDetail label="Titel" title="Konsulent" />
        <LabelAndDetail label="Arbejdstid" title="Deltid (< 29,9)" />
        <LabelAndDetail
          label="Stillingskategori"
          title="Fuldmægtig, konsulent mv. (ikke leder)"
        />
        <LabelAndDetail label="Ansættelsesforhold" title="Overenskomstansat" />
        <LabelAndDetail label="Ansættelsesdato" title="01-07-2019" />
      </View>
    </View>
  );
}

export default Work;
