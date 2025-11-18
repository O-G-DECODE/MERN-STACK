import {Link} from 'react-router-dom';
export default function DashBoard(){
  return (
  <div>
    <div > <button > <Link to='login' > Click For Login </Link> </button> 
           <button> <Link to='signup'> Click to Sign-Up</Link> </button> 
    </div>
       <hr />     
     <h1>   Hello.............! </h1>
  </div>
  );
}