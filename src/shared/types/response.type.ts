export type responseApi<T> = {
    success: boolean;
    data: T[];
    message: string;
}