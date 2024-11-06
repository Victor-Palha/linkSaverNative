import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

export function Category(){
    return (
        <Pressable className="flex flex-row items-center gap-2">
            <MaterialIcons name="code" size={16} color={colors.gray[400]}/>
            <Text className="text-lg font-bold text-gray-400">Projects</Text>
        </Pressable>
    )
}