import { MaterialIcons } from "@expo/vector-icons"

type Categories = {
    id: string
    name: string
    icon: keyof typeof MaterialIcons["glyphMap"]
}

export const categories: Categories[] = [
    {id: "1", name: "Development", icon: "code"},
    {id: "2", name: "Design", icon: "palette"},
    {id: "3", name: "Business", icon: "work"},
    {id: "4", name: "Marketing", icon: "trending-up"},
    {id: "5", name: "Health", icon: "favorite"},
    {id: "6", name: "Music", icon: "music-note"},
    {id: "7", name: "Photography", icon: "camera"},
    {id: "8", name: "Lifestyle", icon: "star"},
    {id: "9", name: "Fitness", icon: "fitness-center"},
    {id: "10", name: "Food", icon: "fastfood"},
]