import { MaterialIcons } from "@expo/vector-icons"

export type CategoriesListProps = {
    id: string
    name: string
    icon: keyof typeof MaterialIcons["glyphMap"]
}

export const categories: CategoriesListProps[] = [
    {id: "1", name: "All", icon: "apps"},
    {id: "2", name: "Development", icon: "code"},
    { id: "3", name: "Projects", icon: "folder" },
    { id: "4", name: "Study", icon: "code" },
    { id: "5", name: "Site", icon: "language" },
    { id: "6", name: "Article", icon: "newspaper" },
    { id: "7", name: "Videos", icon: "movie" },
    { id: "8", name: "Documentation", icon: "content-paste" },
    {id: "9", name: "Design", icon: "palette"},
    {id: "10", name: "Business", icon: "work"},
    {id: "11", name: "Marketing", icon: "trending-up"},
    {id: "12", name: "Health", icon: "favorite"},
    {id: "13", name: "Music", icon: "music-note"},
    {id: "14", name: "Photography", icon: "camera"},
]

export const categoriesAdd: CategoriesListProps[] = [
    {id: "2", name: "Development", icon: "code"},
    { id: "3", name: "Projects", icon: "folder" },
    { id: "4", name: "Study", icon: "code" },
    { id: "5", name: "Site", icon: "language" },
    { id: "6", name: "Article", icon: "newspaper" },
    { id: "7", name: "Videos", icon: "movie" },
    { id: "8", name: "Documentation", icon: "content-paste" },
    {id: "9", name: "Design", icon: "palette"},
    {id: "10", name: "Business", icon: "work"},
    {id: "11", name: "Marketing", icon: "trending-up"},
    {id: "12", name: "Health", icon: "favorite"},
    {id: "13", name: "Music", icon: "music-note"},
    {id: "14", name: "Photography", icon: "camera"},
]