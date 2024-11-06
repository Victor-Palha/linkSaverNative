import AsyncStorage from '@react-native-async-storage/async-storage';

export type LinkStorageProps = {
    id: string;
    name: string;
    url: string;
    category: string;
}

class LinkStorage {
    private static storageKey = "@links-storage"

    public static async get(): Promise<LinkStorageProps[]> {
        const storage = await AsyncStorage.getItem(this.storageKey)
        if(!storage){
            return []
        }
        return JSON.parse(storage) as LinkStorageProps[]
    }

    public static async add(link: LinkStorageProps): Promise<void> {
        try {
            const storage = await this.get()
            storage.push(link)
            await AsyncStorage.setItem(this.storageKey, JSON.stringify(storage))
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

export { LinkStorage }