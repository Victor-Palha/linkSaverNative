import { categories, CategoriesListProps } from "@/src/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";

type CategoriesProps = {
    categories: CategoriesListProps[]
    selected: string
    onChange: (categoryName: string) => void
}

export function Categories({selected, onChange, categories}: CategoriesProps){
    return (
        <FlatList
            className="h-[52] max-h-[52]"
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => 
                <Category 
                    name={item.name}
                    icon={item.icon}
                    isSelected={selected === item.name}
                    onPress={()=>onChange(item.name)}
                />
            }
            horizontal
            contentContainerClassName="gap-[16] px-[24]"
            showsHorizontalScrollIndicator={false}
        />
    )
}