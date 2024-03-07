import { useState } from "react";

const Navitem=({item} )=> {
    const {lable, icon,active}= item;
    const[selected,setSelected]= useState(active)
  return (
    <div>
        <li className={`flex justify-end items-center p-2 cursor-pointer${selected?' bg-primary text-white':''}`} 
        onClick={() =>(setSelected(!selected))}
        >
            <h3 className='mr-2'>{lable}</h3>
            {icon}
        </li>

    </div>
  )
}

export default Navitem