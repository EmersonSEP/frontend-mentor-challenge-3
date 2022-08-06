import {Menu,MenuHandler,MenuList,MenuItem,} from "@material-tailwind/react";
import { children } from "@material-tailwind/react/types/components/accordion";
import iconTodo from "../../images/icon-todo.svg"
import iconCal from "../../images/icon-calendar.svg"
import iconRem from "../../images/icon-reminders.svg"
import iconPlan from "../../images/icon-planning.svg"

interface DropProps  {
  children: string;
}

export function Drop () {
 
  return (
    <>

    <Menu>
      <MenuHandler>
        <button className="">Feature</button>
      </MenuHandler>
      
      <MenuList className="p-3 pt-6">
        <MenuItem className="flex flex-row items-center"><img  className ="mr-3 py-1.5"src={iconTodo}/>Todo List</MenuItem>
        <MenuItem className="flex flex-row items-center"><img  className ="mr-3 py-1.5"src={iconCal}/>Caldendar</MenuItem>
        <MenuItem className="flex flex-row items-center"><img  className ="mr-3 py-1.5"src={iconRem}/>Reminders</MenuItem>
        <MenuItem className="flex flex-row items-center"><img  className ="mr-3 py-1.5"src={iconPlan}/>Planning</MenuItem>
      </MenuList>

    </Menu>
  



    </>
   
  )
}

export function Drop2 () {
 
  return (
    <>

    <Menu>
      <MenuHandler>
        <button className="">Company</button>
      </MenuHandler>
      <MenuList className="p-4 ">
        <MenuItem className="py-0.5">Hystory</MenuItem>
        <MenuItem className="py-0.5">Our Team</MenuItem>
        <MenuItem className="py-0.5">Blog</MenuItem>
      </MenuList>
    </Menu>
  



    </>
   
  )
}