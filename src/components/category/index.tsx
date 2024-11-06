import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, PressableProps } from "react-native";

type CategoryProps = PressableProps & {
    name: string
    icon: keyof typeof MaterialIcons["glyphMap"]
}
export function Category({name, icon, ...rest}: CategoryProps){
    return (
        <Pressable className="flex flex-row items-center gap-2" {...rest}>
            <MaterialIcons name={icon ?? "code"} size={16} color={colors.gray[400]}/>
            <Text className="text-lg font-bold text-gray-400">{name}</Text>
        </Pressable>
    )
}