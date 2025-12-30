(() => {

interface Client{
    name: string;
    age?: number;  
    address: Address;
    getFullAddress(id:string) : string;
}

interface Address{
    id: number;
    zip: string;
    city: string;      
}

    const client : Client = {
        name: 'Daniel',
        age: 43,
        address:{
            id: 123,
            zip: '55432',
            city: 'New York'
        },
        getFullAddress(id: string) : string {
            return this.address.city + ', ' + this.address.zip;
        }
    }    

    const client2 : Client = {
        name: 'Maria',
        age: 30,
        address:{
            id: 456,
            zip: '78910',
            city: 'Los Angeles'
        },
        getFullAddress(id: string) : string {
            return this.address.city + ', ' + this.address.zip;
        }
    }

})()