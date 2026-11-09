




const multiplyValue=(value:number,multiplier?:number | undefined):number=>{

    if(multiplier ){
        
        return value *multiplier
    }
    else if(multiplier==0){
            return value * 0
        }

    else{
        return value * 2
    }

}

// console.log(multiplyValue(10,5))
// console.log(multiplyValue(10, 9))
// console.log(multiplyValue(7, 9))


const processInput=(value:number | string | boolean):number | string | boolean=>{

    if(typeof value==="string"){
        return value.trim().toLowerCase()
    }
    else if(typeof value==="number"){
        return value *10
    }
    else if( typeof value==="boolean"){
        if(value ==true){
            return "Active"
        }
        else{
            return "Inactive"
        }
    }
    return value

}

// console.log(processInput("typeScript"))
// console.log(processInput(7))
// console.log(processInput(true))
// console.log(processInput(false))


type Coordinate=readonly[latitude:number, longitude:number, locationName:string]

const formatCoordinate=(value:Coordinate):string=>{
    const [latitude, longitude, locationName]=value
    

    return `Location: ${locationName} (${latitude}, ${longitude})`

}

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]))
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]))


const concatenateArrays=<T>(...arrays:T[][])=>{

    

    return arrays.flat()

   

}


// console.log(concatenateArrays(["a", "b"], ["c", "d"]))
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

interface Courses{
    title:string;
    students:number;
    isPublished:boolean
}

const getPopularCourses=(courses:Courses[],minStudents:number):Courses[]=>{
    const val=courses.filter((course=>{
        if(course.students>=minStudents && course.isPublished==true){
            return course
        }
    }))

    return val
    
}
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];
// console.log(getPopularCourses(courses,120))



const pluckValues=<T,K extends keyof T>(items:T[],key:K):T[K][]=>{
   

    const value= items.map(obj=>obj[key])
    return value
   
}
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];
// console.log(pluckValues(users, "name"))
// console.log(pluckValues(users, "id"))



class Employee{
    constructor(protected name: string, private baseSalary: number){
        this.name=name
        this.baseSalary=baseSalary
    }

    getDetails():string{

        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`

    }
}


class Manager extends Employee{
    constructor(name: string, baseSalary: number, private department: string){
        super(name,baseSalary)
        this.department=department
    }

    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`
    }
}

// const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails())
// console.log(manager.getRoleInfo())


const validateAgeAsync=async(age:number):Promise<string>=>{
    let outPut="Access Granted"
    let error="Access Denied: Must be 18 or older"
    if(age>=18){

       
            return new Promise(resolve=>{
              setTimeout(()=>{
                resolve(outPut)
              },10000)

            })
        
    }
    else{
       return Promise.reject(error)
    }

  

}

console.log( await validateAgeAsync(20))
console.log( await validateAgeAsync(17))
export {};