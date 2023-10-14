import Card from "../../components/Card";
import { View, ScrollView } from "react-native";
import UserInfo from "../../components/UserInfo";

export default function TabOneScreen() {
  return (
    <ScrollView className="bg-white">
      <View className="flex-1 pt-12">
        <UserInfo />
        <View className="py-8" />
        <View className="p-2">
          <Card item={{ title: "Title" }} />
        </View>
      </View>
    </ScrollView>
  );
}
