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

     const fullName=$('#full-name').val();
     const email=$('#register-email').val();
     const password=$('#register-password').val();

     //const hash = bcrypt.hashSync(password,bcrypt.genSaltSync(10));
     //console.log(hash);

     let createdUser = new User(fullName,email,password);
     let existUserData=userArr.find(e=>e.email===email);
     if (existUserData){
         alert('User email already exist!');
         return;
     }
     userArr.push(createdUser);
     console.log(userArr);
 }

 const login=()=>{
     const email=$('#register-email').val();
     const password=$('#register-password').val();

     let existUserData=userArr.find(e=>e.email===email);

     if (existUserData){
         if (existUserData.password===password){
             //login=> dashboard

         } else {
             alert('password is wrong');
             return;
         }
     } else {
         alert('User email not found');
     }
 }

 /*User Management*/
const clearAndLoad=(element)=>{
    //clear, toggle
}