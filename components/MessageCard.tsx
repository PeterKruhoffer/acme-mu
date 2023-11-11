import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, Pressable } from "react-native";

type MessageCardProps = {
  item: {
    id: string;
    name: string;
    subject: string;
    description: string;
  };
};

function MessageCard(props: MessageCardProps) {
  return (
    <Link
      href={{
        pathname: "/cards/messages/[messageDetails]",
        params: { messageDetails: props.item.id },
      }}
      asChild
    >
      <Pressable className="w-full h-52 bg-white relative p-4">
        <View className="flex-row gap-x-2">
          <View className="bg-black rounded-full w-8 h-8 flex justify-center items-center">
            <Text className="text-white">HF</Text>
          </View>
          <Text className="text-lg">{props.item.name}</Text>
        </View>
        <View className="p-6">
          <Text className="text-sm py-1">{props.item.subject}</Text>
          <Text className="text-sm py-1" numberOfLines={2}>
            {props.item.description}
          </Text>
        </View>
        <View className="absolute bottom-4 left-4 flex flex-row gap-2">
          <FontAwesome name="file-text" size={20} color="black" />
          <Text className="text-sm">dokumenter</Text>
        </View>
      </Pressable>
    </Link>
  );
}

export default MessageCard;
