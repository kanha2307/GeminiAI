import React, { useContext, useState } from 'react'
import {assets}  from '../assets/assets'
import '../index.css'
import { Context } from '../context/Context'

const Sidebar = () => {
  
 
    const [extended, setExtended] = useState(false)
    const {onSent,prevPrompts,setrecentPrompt,newChat} =useContext(Context)

    const loadPrompt = async(prompt)=>{
      setrecentPrompt(prompt)
      await onSent(prompt)
    }
  return (
    <div className='sidebar  min-h-[100vh] px-[25px] py-[15px] inline-flex flex-col justify-between  bg-[#f0f4f9]'>
      <div className='top'>
        <img onClick={()=>setExtended(prev=>!prev)} className='block ml-[10px] cursor-pointer' src={assets.menu_icon} alt="" />
        <div onClick={()=>newChat()} className='new-chat mt-10 inline-flex items-center gap-2 px-3 py-2 bg-[#e6eaf1] rounded-full text-sm text-gray-400 cursor-pointer'>
            <img  className='text-sm' src={assets.plus_icon} alt="" />
             {extended ? <p>New Chat</p>:null}
        </div>
        {
            extended ? <div className='recent flex flex-col '>
            <p className='recent-title mt-7 mb-5'>Recent</p>
            {prevPrompts.map((item,index)=>{
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry flex items-start gap-2 p-2 pr-8 rounded-md cursor-pointer text-[#282828] hover:bg-[#e2e6eb]">
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0,18)}...</p>
            </div>
              )
            })}
           
        </div> : null
        }
      </div>
      <div className='bottom flex flex-col'>
        <div className="bottomitem recent-entry flex items-start gap-2 p-2 rounded-md cursor-pointer text-[#282828] hover:bg-[#e2e6eb]">
            <img src={assets.question_icon} alt="" />
           {extended ? <p>Help</p> :null} 
        </div>
        <div className="bottomitem recent-entry flex items-start gap-2 p-2  rounded-md cursor-pointer text-[#282828] hover:bg-[#e2e6eb]">
            <img src={assets.history_icon} alt="" />
            {extended ?<p>Activity</p>  :null}
        </div>
        <div className="bottomitem recent-entry flex items-start gap-2 p-2 rounded-md cursor-pointer text-[#282828] hover:bg-[#e2e6eb]">
            <img src={assets.setting_icon} alt="" />
            {extended ? <p>Settings</p> :null} 
        </div>
      </div>
    </div>
  )
}

export default Sidebar
