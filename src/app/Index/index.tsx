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
import { ModalLink } from "@/src/components/modal";

export default function Index(){
    const [selectedLink, setSelectedLink] = useState<LinkStorageProps>()
    const [links, setLinks] = useState<LinkStorageProps[]>([])
    const [category, setCategory] = useState(categories[0].name)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function handleDetails(selectedLink: LinkStorageProps){
        setModalIsOpen(!modalIsOpen)
        setSelectedLink(selectedLink)
    }

    async function getLinks(){
        try {
            const storage = await LinkStorage.getByCategory(category)
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
                        onDetails={()=>handleDetails(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                className="border-t-2 border-gray-600"
                contentContainerClassName="gap-[20] p-[24] pb-[100]"
            />

            <ModalLink
                modalIsOpen={modalIsOpen}
                closeModal={setModalIsOpen}
                selectedLink={selectedLink}
            />
        </View>
    )
}