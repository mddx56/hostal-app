import useSWR from 'swr';
import { fetcher } from './api';
import { responseApi } from '../types/response.type';
import { propertyType } from '../types/property.type';

export const useProperties = () => {
    const key = 'property';
    const { data, error } = useSWR<responseApi<propertyType>>(key, fetcher);
    return { data: data?.data || [], loading: !error && !data };
};