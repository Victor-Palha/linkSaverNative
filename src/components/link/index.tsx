import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";

type LinksProps = {
    name: string,
    link: string
    onDetails: () => void
}

export function Link({ name, link, onDetails }: LinksProps) {
    return (
        <View className="flex-row w-full items-center gap-[12]">
            <View className="flex-1">
                <Text className="text-gray-100 text-lg font-bold" numberOfLines={1}>{name}</Text>
                <Text className="text-gray-400 text-sm" numberOfLines={1}>{link}</Text>
            </View>
            <TouchableOpacity onPress={onDetails}>
                <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} />
            </TouchableOpacity>
        </View>
    )
}