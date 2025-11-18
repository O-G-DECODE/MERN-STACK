import {Link} from 'react-router-dom';
export default function Login(){
    
    return <div> 
        <Link to='/' >Back</Link>
        <form action="">
         <div><span> Email : </span> <span> <input type="email" /></span></div>
        <div><span>Password</span> <span> <input type="password" /></span></div>
        <div> <button type="submit">Log-in</button></div>
        </form></div>
}