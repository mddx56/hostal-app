import useSWR from 'swr';
import { fetcher } from './api';
import { responseApi } from '../types/response.type';
import { typePropertyType } from '../types/type-property.type';

export const useTypeProperties = () => {
    const key = 'typeproperty';
    const { data, error } = useSWR<responseApi<typePropertyType>>(key, fetcher);
    return { data: data?.data || [], loading: !error && !data };
};