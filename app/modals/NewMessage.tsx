import { router } from "expo-router";
import { useAtom } from "jotai";
import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";

import { messagesAtom } from "../cards/message";

function NewMessage() {
  const [msg, setMsg] = useAtom(messagesAtom);
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSendMsg() {
    setMsg([
      {
        type: "Msg",
        item: {
          id: (msg.length + 1).toString(),
          name,
          subject,
          description: message,
        },
      },
      ...msg,
    ]);
    router.back();
  }
  return (
    <View className="flex-1 items-center py-8">
      <View className="w-full p-4 gap-4">
        <TextInput
          className="border p-2 text-lg"
          placeholder="Emne"
          value={subject}
          onChangeText={setSubject}
        />
        <TextInput
          className="border p-2 text-lg"
          placeholder="Navn"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className="border p-2 h-32 text-lg"
          placeholder="Besked"
          multiline
          editable
          numberOfLines={5}
          maxLength={250}
          value={message}
          onChangeText={setMessage}
        />
      </View>
      <Pressable onPress={handleSendMsg} className="border bg-black px-2 py-1">
        <Text className="text-white text-lg">Send</Text>
      </Pressable>
    </View>
  );
}

export default NewMessage;
