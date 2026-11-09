

1. What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

Ans: Type aliases and interface use to represent to data. There have some significant difference of each other.

Basic Examples:
Interface:

Interface use to make objects.

Interface User{
    name:string;
    age:number;
    isActive: boolean;
}


const user1:User={
    name:"Tonmoy",
    age:30,
    isActive:true
}

Type Aliases:

we can use make objects using type aliases also.

type User={
    name:string;
    age:number;
    isActive:boolean
}


const user2:User={
    name:"Mir",
    age:30,
    isActive:true
}

Core Difference:

Making Feature        Type         Interface

Object Structure       Yes            Yes

Union Types            Yes             No

Intersection           Yes            no Feature 

Tuple                  Yes            No Direct

Extending              Use &          extends Keyword Use


A. Union Types Using Type Alias

type User="Active" | "InActive" | "Banned"

const user:User ="Active"

we can not use union directly in  Interface.


interface User{
    name:string;
}

interface ActiveUser extends User{
    isActive :boolean;
}

we can merge to interface using extends keyword. ActiveUser have name and isActive Property.

Type Aliases:

we can using & keyword merge two aliases.

type User={
    name:string;
}

type ActiveUser & User={
    isActive :boolean;
}
It give same result interface Show previous examples.

Declaration Merging feature in Interface:

interface User{
    name:string;
}

interface User{
    salary:number;
}

Because of same name in interface it is merge each other.

Final OutCome:

interface User{
    name:string;
    salary:number;

}

There is no such Feature in Type Aliases. Type aliases give error if type aliases same name.


When should you choose one over the other?

Interface Choose :

Interface Choose when objects structure,merge two Interface using extending, work on class. we can easily interface in class.

Type aliases choose:

Type aliases uses when make union type, make primitive type aliases, choose when make Tuple. 
