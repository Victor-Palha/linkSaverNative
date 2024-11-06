import { Button } from "@/src/components/button";
import { Categories } from "@/src/components/categories";
import { Input } from "@/src/components/input";
import { LinkStorage } from "@/src/storage/links-storage";
import { colors } from "@/src/styles/colors";
import { categoriesAdd } from "@/src/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function Add(){
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    async function handleAdd(){
        if(!category){
            return Alert.alert("Category", "Please select a category")
        }
        if(!name.trim()){
            return Alert.alert("Name", "Please enter a name")
        }
        if(!url.trim()){
            return Alert.alert("URL", "Please enter a URL")
        }

        try{
            await LinkStorage.add({
                id: Date.now().toString(),
                name,
                url,
                category
            })

            Alert.alert("Success", "Link added successfully", [
                {text: "OK", onPress: ()=>router.back()}
            ])

        }catch(error){
            console.error(error)
            return Alert.alert("Error", "An error occurred while adding the link")
        }
    }

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
            <Categories
                onChange={setCategory}
                selected={category}
                categories={categoriesAdd}
            />

            <View className="gap-5 p-[24]">
                <Input placeholder="Name" onChangeText={setName} autoCorrect={false}/>
                <Input placeholder="URL" onChangeText={setUrl} textContentType="URL" autoCorrect={false} autoCapitalize="none"/>
                <Button title="Add" onPress={handleAdd}/>
            </View>
        </View>
    )
}