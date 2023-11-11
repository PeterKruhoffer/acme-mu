import { FlashList } from "@shopify/flash-list";
import { atom } from "jotai";
import { View } from "react-native";

import MessageCard from "../../components/MessageCard";

const DATA = [
  {
    type: "Msg",
    item: {
      id: "1",
      name: "Navn",
      subject: "Ferie",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  },
  {
    type: "Msg",
    item: {
      id: "2",
      name: "Navn",
      subject: "Ferie",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  },
  {
    type: "Msg",
    item: {
      id: "3",
      name: "Navn",
      subject: "Ferie",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  },
];

export const messagesAtom = atom(DATA.reverse());

function Message() {
  const messages = messagesAtom.init;
  return (
    <View className="p-4 flex justify-center items-center flex-1">
      <View className="h-full w-full">
        <FlashList
          data={messages}
          estimatedItemSize={200}
          ItemSeparatorComponent={() => <View className="p-1" />}
          contentContainerStyle={{ paddingVertical: 16 }}
          renderItem={({ item }) => <MessageCard item={item.item} />}
        />
      </View>
    </View>
  );
}

export default Message;
