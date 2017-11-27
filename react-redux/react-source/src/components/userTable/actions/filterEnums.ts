export const filterEnums = {
    id: 'id',
    first_name : 'first_name',
    last_name: 'last_name',
    gender: 'gender'
}

export interface FilterOptions {
    filterType: string;
    value: string;
}