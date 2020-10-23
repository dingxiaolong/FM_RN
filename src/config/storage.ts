import AsyncStorage from '@react-native-community/async-storage'
import Storage,{LoadParams} from 'react-native-storage'


const storage = new Storage(
    {
        size: 1000,
        storageBackend: AsyncStorage,
        enableCache: true,
        defaultExpires: 1000 * 3600 * 24 * 7,
        sync: {}
    }
)


const load = (paras: LoadParams) => {
    return storage.load(paras);
}

export {load};

export default storage;