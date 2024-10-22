import { typePropertyType } from "./type-property.type";
import { zoneType } from "./zone.type";

export type propertyType = {
    id: number;
    name: string;
    description: string;
    location: string;
    price: number;
    views: number;
    rating: number;
    availableRooms: number;
    latitude: number;
    longitude: number;
    created: string;
    updated: string;
    zone_id: number;
    type_id: number;
    zone: typePropertyType;
    type: zoneType;
}