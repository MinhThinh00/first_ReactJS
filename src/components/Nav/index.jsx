import {BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay} from 'react-icons/bi'

import NavItem from './Navitem';
import { useState } from 'react';
const defaultIocnSize='1.875rem';

const items=[
    {lable: 'Home',icon:<BiHomeAlt size={defaultIocnSize} />,active:true},
    {lable: 'Movies',icon:<BiMoviePlay size={defaultIocnSize }/>,active:false},
    {lable: 'About',icon:<BiInfoCircle size={defaultIocnSize} />,active:false}
]

function Index() {

    const [isNavMobileOpen,setIsNavMobileOpen] = useState(false)
  return (
    <nav className="col-span-1 bg-cyan-200">
        <div className="flex md:block justify-between items-center">
            <h4 className="uppercase font-bold text-primary py-4 px-2 border-b border-primary text-right">Phimmoi.net</h4>
            <BiMenu className='cursor-pointer md:hidden' size={defaultIocnSize} onClick={()=>setIsNavMobileOpen(!isNavMobileOpen)}/>
        </div>
        <ul className={`mx-4 my-2${isNavMobileOpen?"":" hidden"} md:block`}>
            {items.map((item,index)=>(
                <NavItem item={item} key={index}/>
            ))}
        </ul>
    </nav>
  )
}

export default Index