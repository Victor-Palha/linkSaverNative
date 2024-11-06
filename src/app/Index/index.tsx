import { Image, View, TouchableOpacity, FlatList, Modal, Text } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"
import { colors } from "@/src/styles/colors";
import { Categories } from "@/src/components/categories";
import { Link } from "@/src/components/link";
import { Option } from "@/src/components/option";
import { router } from "expo-router";
export default function Index(){
    return (
        <View className="flex flex-1 pt-[62]">
            <View className="pl-[24] flex-row justify-between items-center mb-[32]">
                <Image
                    className="w-[38] h-[32]"
                    source={require("../../assets/logo.png")} 
                />
                <TouchableOpacity onPress={()=> router.navigate("/add")}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]}/>
                </TouchableOpacity>
            </View>

            <Categories/>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                keyExtractor={item => item.toString()}
                renderItem={({ item }) => (
                    <Link name="Google" link="https://www.google.com" onDetails={() => {
                        console.log("Details")
                    }}/>
                )}
                showsVerticalScrollIndicator={false}
                className="border-t-2 border-gray-600"
                contentContainerClassName="gap-[20] p-[24] pb-[100]"
            />

            <Modal transparent visible={false}>
                <View className="flex-1 justify-end"> 
                    <View className="bg-gray-900 border-t-2 border-gray-800 pb-[52] p-[24]"> 
                        <View className="w-full flex-row justify-between items-center mb-[32]"> 
                            <Text className="text-base font-semibold text-gray-400">Modal Header</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]}/>
                            </TouchableOpacity>
                        </View>

                        <Text className="text-lg font-bold text-gray-200">Modal Name</Text>
                        <Text className="text-sm text-gray-400">Modal Link</Text>

                        <View className="flex-row items-center justify-around mt-[32] border-t-2 border-gray-600 pt-[10]">
                            <Option name="Delete" icon="delete" variant="SECONDARY" onPress={() => {}}/>
                            <Option name="Open" icon="language" onPress={() => {}}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}