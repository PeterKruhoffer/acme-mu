import { Link, useLocalSearchParams } from "expo-router";
import { useAtom } from "jotai";
import { Text, View, ScrollView } from "react-native";

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
      <Link href="/modals/NewMessage" className="self-center">
        <Text className="text-lg text-blue-500">Send svar</Text>
      </Link>
    </View>
  );
}

export default MessageDetails;
