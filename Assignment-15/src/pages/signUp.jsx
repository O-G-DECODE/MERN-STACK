import {Link} from 'react-router-dom';
export default function SignUp(){

     return <div> <form action="">
        <Link to='/'> Back</Link>
       <div> <span> Name : </span> <span> <input type="text" name='name' id='name' /></span> </div>
       <div> <span> Age : </span> <span> <input type="number" name='age' id='age' /></span> </div> 
        <div> <span> Email : </span> <span> <input type="email" name='email' id='email' /></span> </div>
        <div> <span> Password : </span> <span> <input type="password" name='password' id='password' /></span> </div> 
        <div> <button type="submit"> Sign-Up </button></div>



        </form></div>
}