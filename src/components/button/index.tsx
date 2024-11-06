import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
type ButtonProps = TouchableOpacityProps & {
    title: string
}
export function Button({ title, ...rest }: ButtonProps){
    return (
        <TouchableOpacity {...rest} className="h-[52] w-full bg-green-300 rounded-[8] justify-center items-center">
            <Text className="text-green-900 font-bold">{title}</Text>
        </TouchableOpacity>
    )

}