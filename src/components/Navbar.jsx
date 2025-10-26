import React from 'react';
import{NavLink,Link} from'react-router-dom';


const Navbar =()=>{
   
        const linkClasses=({isActive})=>
            `text-lg font-semibold px-3 py-2 rounded-md transition-colors duration-200 ${
                isActive
                ?'bg-warning text-gray-900 shadow-md'
                :'text-gray-300 hover:text-white hover:bg-gray-700'
            }`;
        return(

            <nav className="navbar bg-primary" data-bs-theme="dark">
  
               {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {/* Menggunakan NavLink untuk styling aktif otomatis */}
                            <NavLink to="/" className={linkClasses}>
                                Home
                            </NavLink>

                            {/* Contoh tautan lain yang dapat Anda tambahkan nanti */}
                            <NavLink to="/favorites" className={linkClasses}>
                                Favorites
                            </NavLink>
                        </div>
                    </div>
</nav>
        //      <nav className="bg-gray-800 shadow-lg sticky top-0 z-50 " style={{ height:'30px' }}>
        //     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        //         <div className="flex items-center justify-between ">
        //             {/* Logo/Brand */}
        //             <div className="flex-shrink-0">
        //                 <Link to="/" className="text-2xl font-bold text-white tracking-wider hover:text-warning transition-colors">
        //                     <span className="text-warning">shiddiq</span>Movies
        //                 </Link>
        //             </div>

       
        //         </div>
        //     </div>
        // </nav>
        )
            }
export default Navbar;
