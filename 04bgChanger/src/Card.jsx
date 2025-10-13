import { useState } from 'react'

function Card() {
  
  
//   const randomColor = function(){
//     const hex = "0123456789ABCDEF"
//     let clr = "#";
//     for(let i =0 ; i<6; i++){
//         clr += hex[Math.floor(Math.random() * 16)];  
//     }
//     return clr;
// };
let [color, setColor] = useState("")
// console.log(randomColor)
  // let addcolor = ()=>{
  //   setColor(color);
  // }
  
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}></div>

      <div className="fixed top-0 left-0 w-full flex justify-center gap-2 p-3 bg-white shadow-md z-50">
        <button className="w-20 h-10 rounded-full bg-red-500 " onClick={()=>{setColor("red")}}>Red</button>
        <button className="w-20 h-10 rounded-full bg-blue-500" onClick={()=>{setColor("blue")}}>Blue</button>
        <button className="w-20 h-10 rounded-full bg-green-500" onClick={()=>{setColor("green")}}>Green</button>
        <button className="w-20 h-10 rounded-full bg-yellow-500" onClick={()=>{setColor("yellow")}}>Yellow</button>
        <button className="w-20 h-10 rounded-full bg-purple-500" onClick={()=>{setColor("purple")}}>Purple</button>
        <button className="w-20 h-10 rounded-full bg-pink-500" onClick={()=>{setColor("pink")}}>Pink</button>
        <button className="w-20 h-10 rounded-full bg-orange-500" onClick={()=>{setColor("orange")}}>Orange</button>
        <button className="w-20 h-10 rounded-full bg-teal-500" onClick={()=>{setColor("teal")}}>Teal</button>
        <button className="w-20 h-10 rounded-full bg-gray-500" onClick={()=>{setColor("gray")}}>Gray</button>
        <button className="w-20 h-10 rounded-full bg-black text-white" onClick={()=>{setColor("black")}}>Black</button>
      </div>
    </>
  )
}

export default Card
