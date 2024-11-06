import { Categories } from "@/src/components/categories";
import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Add(){
    return (
        <View className="flex-1 pt-[62]">
            <View className="flex-row justify-between px-[24] mb-[24]">
                <TouchableOpacity onPress={()=>router.back()}>
                    <MaterialIcons name="arrow-back-ios" size={32} color={colors.gray[200]} />
                </TouchableOpacity>
                <Text className="text-2xl font-bold text-gray-200">New</Text>
            </View>

            <Text className="text-gray-400 text-sm px-[24]">
                Select a category
            </Text>
            <Categories/>
        </View>
    )
}