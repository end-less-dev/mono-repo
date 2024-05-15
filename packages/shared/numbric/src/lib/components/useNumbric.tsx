import React from 'react'
import { NumeralContext } from './NumbricProvider';

interface UseNumbricProps {
    value : number | string
}
export const useNumbric = ({value} : UseNumbricProps) => {
    const { numeral } = React.useContext(NumeralContext)
    const numbric = numeral(value)
   
    return {
        numbric:numbric.format('($ 0a)')
    }
}

export default useNumbric
