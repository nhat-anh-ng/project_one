export interface Akademik {
    id?: number,
    name:string,
    address: string,
    phone: number,
    email: string,
    sector: 'public' | 'private',
    url: string
    price?: number
}
