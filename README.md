1. What are some differences between interfaces and types in TypeScript?
Ans: typescript এর interface এবং type মধ্যে কিছু বিষয় নিয়ে পার্থক্য লক্ষ্য করি। 
যেমন ১. Extentable ২. Mergeable ৩. Alias Support

    1. Extentable: interface এর জন্য extends keyword ব্যবহার করা হয়। আর interface type এর সাথেও extend করতে পারে।    
        a. Interface : 
            interface Person {
                name:string
            } 
            interface Employee extends Person {
                id:number
            }

            type সাথে যেভাবে extend করে 
            type Base = {
                x:number
            } 
            interface EntendedBase extands Base {
                y:number
            }
        b. Type: 
            type Person = {
                name:string
            } 
            type Employee = Person & { id:number}

    2. Mergeable: শুধু মাত্র interface এর ক্ষেত্রে mergeable হয় কিন্তু type merge করতে পারে না। 
        a. Interface :
            interface User {
                name:string
            } 
            interface User {
                id:number
            } 
            এখন automaticly এমন হয়ে যায় 
            interface User {
                name:string;
                id:number
            } 
    
        কিন্তু type ব্যবহার করার সময় type merge করতে পারে না। 
        b. Type : 
        type User {
            name: string
        }                   // not valid
        type User {
            id:number
        } 
        here this process not valid in type.

    3. Alias Supoort: 
        a. Interface:  Interface ক্ষেত্রে এমন হয় না 
            interface A = string|number //not valid
        b. Type : 
            type A = string|number // valid
            type Point = { x: number; y: number }


2. What is the use of the keyof keyword in TypeScript? Provide an example.
Ans: keyof keyword ব্যবহার করা হয় কোনো একটা object এর key বের করা হয় এবং type হিসাবে ব্যবহার করা হলে key এর union return করে।
Example : 
    type User = {
        name : string;
        age : number;
        isAdult : boolean; 
    }
    type UserKeys = keyof User; // 'name'|'age'|'isAdult'

এখানে UserKeys type গুলো Union type মতো থাকে 'name' | 'age' | 'isAdult'
    let key : UserKeys
    key = 'name' // allow
    key = 'age' // allow
    key = 'address' // wrong