import useSWR from 'swr';
import { responseApi } from '../types/response.type';
import { userType } from '../types/user.type';
import { fetcher } from './api';

export const useUsers = () => {
    const key = 'user';
    const { data, error } = useSWR<responseApi<userType>>(key, fetcher);
    return { data: data?.data || [], loading: !error && !data };
};