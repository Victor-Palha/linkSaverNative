import { Image, View, TouchableOpacity } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"
import { colors } from "@/src/styles/colors";
import { Category } from "@/src/components/category";
export default function Index(){
    return (
        <View className="flex flex-1 pt-[62]">
            <View className="pl-[24] flex-row justify-between items-center mb-[32]">
                <Image
                    className="w-[38] h-[32]"
                    source={require("../../assets/logo.png")} 
                />
                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]}/>
                </TouchableOpacity>
            </View>

            <Category
                icon={"code"}
                name={"Development"}
            />
        </View>
    )
}