import { TextInput, TextInputProps } from "react-native"

type InputProps = TextInputProps & {

}
export function Input({ ...rest }: InputProps){
    return (
    <TextInput
        className="w-full h-[52] bg-gray-900 rounded-[8] border-2 border-gray-800 px-[16] text-gray-100 p-[7]"
        {...rest}
    />
)
}