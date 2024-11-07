import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
  {
    id: 0,
    title: "Static Interactive Resume",
    desc:"A Typescript-based interactive resume built with HTML and CSS",
    img: "/project -01.jpeg",
    tags: ["HTML", "Node", "CSS", "Typescript"],


  },
  
  {
    id:1,
    title:"Admission form",
    desc:"A Typescript-based Admission form built with HTML and CSS",
    img:"/project-02.jpeg",
    tags:["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id:2,
    title:"Calculator",
    desc:"A Typescript-based Calculator built with HTML and CSS",
    img:"/project-03.jpeg",
    tags:["HTML", "Node", "CSS", "Typescript"],

  },

  
 

];
  

const projects = () => {
  return (
    <div id='projects' className='container pt-32'>
<Heading title='My Projects'/>
<div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
    {data.map((el) => (<Card 
    key={el.id}
    title={el.title}
    desc={el.desc}
    img={el.img}
    tags={el.tags}
    
    />))}
</div>
    </div>
  )
}

export default projects