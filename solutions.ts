




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


type Coordinate=readonly[latitude:number, longitude:number, locationName:string]

const formatCoordinate=(value:Coordinate):string=>{
    const [latitude, longitude, locationName]=value
    

    return `Location: ${locationName} (${latitude}, ${longitude})`

}




const concatenateArrays=<T>(...arrays:T[][])=>{

    

    return arrays.flat()

   

}


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





const pluckValues=<T,K extends keyof T>(items:T[],key:K):T[K][]=>{
   

    const value= items.map(obj=>obj[key])
    return value
   
}




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


export {};