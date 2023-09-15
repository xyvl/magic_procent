import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import { TypeDispatch, TypeSelector } from "../store/store"

export const useCustomDispatch = () => useDispatch<TypeDispatch>()
export const useCustomSelector: TypedUseSelectorHook<TypeSelector> =  useSelector