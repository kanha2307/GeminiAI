import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import '../index.css'
import { Context } from '../context/Context'

const Main = () => {
  const {onSent,recentPrompt,showResult,loading,resultData,input, setinput,} = useContext(Context)
  
  return (
    <div className='main  flex-1 min-h-screen pb-[15vh] relative'>
      <div className="nav flex items-center justify-between text-8 p-5 text-[#585858]">
        <p className='text-3xl'>Gemini</p>
        <img className='w-10 h-10 rounded-full' src={assets.user_icon} alt="" />
      </div>
      <div className="maincontainer max-w-[900px] max-h-[75vh] overflow-y-scroll m-auto">
        {
          !showResult ? <><div className="greet mx-12 text-3xl md:text-[56px] p-5 text-[#c4c7c5]">
          <p><span className=''>Hello, Dev.</span></p>
          <p>How can i help you?</p>
        </div>
        <div className="cards grid grid-cols-1 md:grid-cols-4">
          <div className="card">
            <p>suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon}/>
          </div>
          <div className="card">
            <p>Briefly summarize this concept : urban planning</p>
            <img src={assets.bulb_icon}/>
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work</p>
            <img src={assets.message_icon}/>
          </div>
          <div className="card">
            <p>Improve the readabilitu of the following xode</p>
            <img src={assets.code_icon}/>
          </div>
        </div>
        </> : 
        <div className='result max-h-[70vh] overflow-y-scroll '>
          <div className="resulttitle mt-8 flex items-center gap-5">
            <img className='w-8 rounded-full' src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="resultdata flex items-start gap-5">
            <img src={assets.gemini_icon} alt="" />
            {loading ? <div className='loader w-full flex flex-col gap-3'>
              <hr />
              <hr />
              <hr />
            </div>:
            <h1 dangerouslySetInnerHTML={{__html:resultData}}></h1>
            }
          </div>
        </div>
        }
        <div className="mainbottom">
          <div className="searchbox">
            <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
             
              <img onClick={()=>onSent()} src={assets.send_icon} />
            </div>
          </div>
          <p className="bottom-info">Gemini may display inaccurate info ,including about people , so double check your answer</p>
        </div>
      </div>
    </div>
  )
}

export default Main
