import { Image, View, TouchableOpacity, FlatList, Modal, Text, Alert } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"
import { colors } from "@/src/styles/colors";
import { Categories } from "@/src/components/categories";
import { Link } from "@/src/components/link";
import { Option } from "@/src/components/option";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { LinkStorage, LinkStorageProps } from "@/src/storage/links-storage";
import { categories } from "@/src/utils/categories";

export default function Index(){
    const [links, setLinks] = useState<LinkStorageProps[]>([])
    const [category, setCategory] = useState(categories[0].name)

    async function getLinks(){
        try {
            const storage = await LinkStorage.get()
            setLinks(storage)
        }catch(error){
            console.error(error)
            Alert.alert("Error", "An error occurred while fetching the links")
        }
    }

    useFocusEffect(useCallback(()=>{
        getLinks()
    }, [category]))

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

            <Categories
                onChange={setCategory}
                selected={category}
                categories={categories}
            />
            <FlatList
                data={links}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Link 
                        name={item.name}
                        link={item.url}
                        onDetails={() => {
                            console.log("Details")
                        }}
                    />
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