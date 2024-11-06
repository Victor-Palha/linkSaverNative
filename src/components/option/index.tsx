import { colors } from "@/src/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
type OptionProps = TouchableOpacityProps & {
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
    variant?: "PRIMARY" | "SECONDARY"
}
export function Option({ name, icon, variant = "PRIMARY", ...props }: OptionProps) {
    return (
        <TouchableOpacity {...props} className="flex-row items-center gap-[5]">
            <MaterialIcons name={icon} size={20} color={variant === "PRIMARY" ? colors.green[300] : colors.gray[400]} />
            <Text
                className={`text-lg font-semibold ${variant === "PRIMARY" ? "text-green-300" : "text-gray-400"}`}
            >
                {name}
            </Text>
        </TouchableOpacity>
    )
    
}