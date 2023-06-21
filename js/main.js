let userArr=[];

class User{
    constructor(fullName,email,password) {
        this.fullName=fullName;
        this.email=email;
        this.password=password;
    }
 }

/*User Management*/
 const createUser=()=>{
     let createdUser = new User('','','');
     userArr.push(createdUser);
 }
 /*User Management*/
const clearAndLoad=(element)=>{
    //clear, toggle
}