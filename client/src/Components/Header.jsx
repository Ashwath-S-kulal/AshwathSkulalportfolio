import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
export default function Header() {
  const {currentUser} = useSelector(state => state.user);
  return (
    <div className='sticky top-0 left-0 w-full bg-gray-800 text-white h-16 px-0 md:px-6 z-50 border-b-2 border-gray-500'>
        <div className='flex justify-between items-baseline max-w-6xl mx-auto p-4'>
            <Link to='/'><h1 className='font-bold text-white text-lg sm:text-left sm:text-sm md:text-2xl'>My Portfolio</h1></Link>
            <ul className='flex gap-2 md:gap-4 '>
                <Link to='/' className=" text-white hover:text-blue-700 text-xs md:text-lg"><li>Home</li></Link>
                <Link to='/portfolio' className=" text-white  hover:text-blue-700 text-xs md:text-lg"><li>Portfolio</li></Link>
                <Link to='/project' className=" text-white  hover:text-blue-700 text-xs md:text-lg"><li>Project</li></Link>
                <Link to='/profile' className=" text-white  hover:text-blue-700 text-xs md:text-lg">
                {currentUser? (
                  <img src={currentUser.profilePicture} alt="image"
                  className="h-7 w-7 rounded-full object-cover" />
                ):( <li>Sign In</li> )}
                </Link>
            </ul>
        </div>
    </div>
  )
}
