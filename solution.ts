const formatValue = (value: string | number | boolean) => {
    if (typeof value === 'string') {
        return value.toUpperCase()
    } else if (typeof value === 'number') {
        return value * 10
    } else if (typeof value === "boolean") {
        return !value
    }
}


const getLength = (value: string | string[] | number[]): number => {
    if (typeof value === 'string') {
        return value.length
    } else if (Array.isArray(value)) {
        return value.length
    }
    return 0
}


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}


type TBooksItems = {
    title: string;
    rating: number;
}
const filterByRating = (arr: TBooksItems[]) => {
    return arr.filter((item) => item.rating >= 4)
}


type IUser = {
    id: number
    name: string
    email: string
    isActive: boolean
}
const filterActiveUsers = (userArr: IUser[]) => {
    return userArr.filter((user) => user.isActive === true)
}


interface Book {
    title: string
    author: string
    publishedYear: number
    isAvailable: boolean
}
const printBookDetails = (books: Book) => {
    return console.log(`Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: ${books.isAvailable ? 'Yes' : 'No'}`);
}


const getUniqueValues = (arr1: number[], arr2: number[]) => {
    let arr = [...arr1, ...arr2]
    return Array.from(new Set(arr))
}


type IProduct = {
    name: string
    price: number
    quantity: number
    discount?: number
}
const calculateTotalPrice = (arr: IProduct[]) => {
    let totalPrice = 0
    arr.map((item) => {
        let basePrice = item.price * item.quantity
        let finalPrice = item.discount ? basePrice - (basePrice * (item.discount / 100)) : basePrice
        totalPrice += finalPrice
    })
    return totalPrice
}
