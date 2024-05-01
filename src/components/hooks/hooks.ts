import {
  useDispatch,
  useSelector,
  TypedUseSelectorHook,
  UseSelector,
} from 'react-redux';
import type { RootState, AppDispatch } from '../../redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
