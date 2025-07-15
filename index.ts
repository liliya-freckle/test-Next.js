enum users {
    Vanya,
    Yulya,
    Zhenya
}

users.Zhenya

const person:{
    name: string,
    age: number,
    country: 'Russia'| 'USA' | 'UAE',
    pet: string
    from?: string
} = {
    name: 'Olga',
    age: 23,
    country: 'USA',
    pet: 'cat'
}


const names:Array<string> = ['Lena', 'Katya', 'Maya']
const newNames:string[] = ['Olya', 'Varya', 'Zhenya'] //обозначаем массивы, два способа

const getRandomInt = (min:number, max:number) => {
    return min + max
}
const number = getRandomInt(2,3)