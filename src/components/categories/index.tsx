import { categories } from "@/src/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";

export function Categories(){
    return (
        <FlatList
            className="h-[52] max-h-[52]"
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => 
                <Category 
                    name={item.name}
                    icon={item.icon}
                    isSelected={false}
                />
            }
            horizontal
            contentContainerClassName="gap-[16] px-[24]"
            showsHorizontalScrollIndicator={false}
        />
    )
}