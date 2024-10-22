import useSWR from 'swr';
import { responseApi } from '../types/response.type';
import { zoneType } from '../types/zone.type';
import { fetcher } from './api';

export const useZones = () => {
    const key = 'zone';
    const { data, error } = useSWR<responseApi<zoneType>>(key, fetcher, {
        refreshInterval: 10000
    });
    return { data: data?.data || [], loading: !error && !data };
};