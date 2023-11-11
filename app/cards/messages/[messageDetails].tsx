import { useLocalSearchParams } from "expo-router";
import { useAtom } from "jotai";
import { Button, Text, View, ScrollView } from "react-native";

import { messagesAtom } from "../message";

function MessageDetails() {
  const { messageDetails } = useLocalSearchParams();
  const [msg] = useAtom(messagesAtom);
  const message = msg.find((item) => item?.item?.id === messageDetails);
  return (
    <View className="flex flex-1 p-4 gap-4">
      <View className="flex gap-y-2 p-2">
        <Text className="text-lg shadow">Fra: {message?.item?.name}</Text>
        <Text className="text-lg">Emne: {message?.item?.subject}</Text>
      </View>
      <View className="p-px bg-gray-200" />
      <ScrollView className="p-2">
        <Text className="text-xl py-4">{message?.item?.description}</Text>
      </ScrollView>
      <Button title="Send svar" />
    </View>
  );
}

export default MessageDetails;
