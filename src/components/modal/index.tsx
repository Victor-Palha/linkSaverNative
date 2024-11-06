import { MaterialIcons } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Option } from "../option";
import { LinkStorageProps } from "@/src/storage/links-storage";
import { colors } from "@/src/styles/colors";

type ModalLinkProps = {
    modalIsOpen: boolean
    closeModal: (value: boolean) => void
    selectedLink: LinkStorageProps | undefined
}

export function ModalLink({modalIsOpen, closeModal, selectedLink}: ModalLinkProps){
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
                    <Option name="Delete" icon="delete" variant="SECONDARY" onPress={() => {}}/>
                    <Option name="Open" icon="language" onPress={() => {}}/>
                </View>
            </View>
        </View>
    </Modal>
    )
}