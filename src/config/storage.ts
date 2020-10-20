import AsyncStorage from '@react-native-community/async-storage'
import Storage,{LoadParams} from 'react-native-storage'


export const storage = new Storage(
    {
        size: 1000,
        storageBackend: AsyncStorage,
        enableCache: true,
        sync: {}
    }
)


export const load = (paras: LoadParams) => {
    storage.load(paras);
}