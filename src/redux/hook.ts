import { useSelector, UseSelector } from "react-redux";
import { AppDispatch, RootState } from  './store';

export const  useAppSelector = useSelector.withTypes<RootState>()
export const  useAppDispatch = useSelector.withTypes<AppDispatch>()
