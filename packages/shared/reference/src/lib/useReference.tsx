import {useContext} from 'react';
import { ReferenceContext } from './ReferenceProvider';

const useReference = ()=>{
    const context = useContext(ReferenceContext)

    if (!context) {
        throw new Error(
            "useReference must be used within a ReferenceProvider"
          );
    }

    return {
        ...context
    }
}

export default useReference;