import { MaterialIcons } from "@expo/vector-icons";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import { Option } from "../option";
import { LinkStorage, LinkStorageProps } from "@/src/storage/links-storage";
import { colors } from "@/src/styles/colors";

type ModalLinkProps = {
    modalIsOpen: boolean
    closeModal: (value: boolean) => void
    selectedLink: LinkStorageProps | undefined
    reloadLinks: () => Promise<void>
}

export function ModalLink({modalIsOpen, closeModal, selectedLink, reloadLinks}: ModalLinkProps){
    function handleDelete(id: string){
        Alert.alert("Delete", "Are you sure you want to delete this link?", [
            {
                text: "No",
                style: "cancel"
            },
            {
                text: "Yes",
                style: "destructive",
                onPress: async () => await deleteLink(id)
            }
        ])
    }

    async function deleteLink(id: string){
        try {
            await LinkStorage.deleteLink(id)
            await reloadLinks()
            closeModal(false)
        }catch(error){
            console.error(error)
            Alert.alert("Error", "An error occurred while deleting the link")
        }
    }

    return (
        <Modal transparent visible={modalIsOpen} animationType="slide">
        <View className="flex-1 justify-end"> 
            <View className="bg-gray-900 border-t-2 border-gray-800 pb-[52] p-[24]"> 
                <View className="w-full flex-row justify-between items-center mb-[32]"> 
                    <Text className="text-base font-semibold text-gray-400">{selectedLink?.category}</Text>
                    <TouchableOpacity onPress={()=>closeModal(false)}>
                        <MaterialIcons name="close" size={20} color={colors.gray[400]}/>
                    </TouchableOpacity>
                </View>

                <Text className="text-lg font-bold text-gray-200">{selectedLink?.name}</Text>
                <Text className="text-sm text-gray-400">{selectedLink?.url}</Text>

                <View className="flex-row items-center justify-around mt-[32] border-t-2 border-gray-600 pt-[10]">
                    <Option name="Delete" icon="delete" variant="SECONDARY" onPress={() => handleDelete(selectedLink?.id as string)}/>
                    <Option name="Open" icon="language" onPress={() => {}}/>
                </View>
            </View>
        </View>
    </Modal>
    )
}