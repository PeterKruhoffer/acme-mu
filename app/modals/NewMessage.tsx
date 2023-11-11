import { router } from "expo-router";
import { useAtom } from "jotai";
import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";

import { timeLineAtom } from "../(tabs)/activities";

function NewMessage() {
  const [timeLine, setTimeLine] = useAtom(timeLineAtom);
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSendMsg() {
    setTimeLine([
      {
        type: "Msg",
        item: {
          id: (timeLine.length + 1).toString(),
          name,
          subject,
          description: message,
        },
      },
      ...timeLine,
    ]);
    router.back();
  }
  return (
    <View className="flex-1 items-center py-8">
      <View className="w-full p-4 gap-4">
        <TextInput
          className="border p-2"
          placeholder="Emne"
          value={subject}
          onChangeText={setSubject}
        />
        <TextInput
          className="border p-2"
          placeholder="Navn"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className="border p-2 h-32"
          placeholder="Besked"
          multiline
          editable
          numberOfLines={5}
          maxLength={250}
          value={message}
          onChangeText={setMessage}
        />
      </View>
      <Pressable onPress={handleSendMsg} className="border bg-black p-2">
        <Text className="text-white">Send</Text>
      </Pressable>
    </View>
  );
}

export default NewMessage;
