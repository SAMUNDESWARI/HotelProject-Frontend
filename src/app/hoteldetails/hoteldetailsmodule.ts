export interface Ihoteldetails{
    hotelCode: number,
    hotelName:string,
    address: string,
    postcode: number,
    city: string,
    country: string,
    phoneNo: number,
    starRating: number,
    className: string,
    image: string,
    roomId: number,
    numberOfRooms: number,
    roomType: string,
    price: number,
    availability: string

     
}
export interface IRoomInformation{
    roomId: number,
    numberOfRooms: number,
    roomType: string,
    price: number,
    availability: string
}