import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, PressableProps } from "react-native";

type CategoryProps = PressableProps & {
    name: string
    icon: keyof typeof MaterialIcons["glyphMap"]
    isSelected: boolean
}
export function Category({name, icon, isSelected, ...rest}: CategoryProps){
    const color = isSelected ? colors.green[300] : colors.gray[400]

    return (
        <Pressable className="flex-row items-center gap-2" {...rest}>
            <MaterialIcons name={icon ?? "code"} size={16} color={color}/>
            <Text 
                className="text-lg font-bold"
                style={{color}}
            >{name}</Text>
        </Pressable>
    )
}