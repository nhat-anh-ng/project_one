export interface Akademik {
    id?: string,
    name:string,
    address: string,
    phone: number,
    email: string,
    sector: 'public' | 'private',
    url: string,
    img?: string,
    details: string,
    price?: number
}
