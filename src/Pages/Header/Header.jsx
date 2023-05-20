import React from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.photoURL);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/alltoys'>All Toys</Link></li>
                        {user &&
                            <><li><Link to='/mytoys'>My Toys</Link></li>
                                <li><Link to='/addtoy'>Add A Toy</Link></li></>
                        }
                    </ul>
                </div>
                <div className='flex '>
                    <img src={logo} className='h-10 ' alt="logo" />
                    <a className="btn btn-ghost normal-case text-sm md:text-xl [color:#eb4034] hidden sm:block" >Kid Car Store</a>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/alltoys'>All Toys</Link></li>
                    {
                        user && <><li><Link to='/mytoys'>My Toys</Link></li>
                            <li><Link to='/addtoy'>Add A Toy</Link></li></>
                    }
                 
                </ul>
            </div>

            <div className="navbar-end">
                {user ? <NavLink onClick={handleLogOut} className="btn  me-1">LogOut</NavLink> :
                    <NavLink to='/login' className="btn me-1">Login</NavLink>
                }
                {user &&
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-left " data-tip={user?.displayName}>
                        <div className="w-10 rounded-full ">
                            <img className='w-full' src={user?.photoURL} />
                        </div>
                    </label>
                }
            </div>
        </div>

    );
};

export default Header;