import React from 'react'

import mobile_arrow_ from './photos/mobile_arrow.svg'

import NotifyItself from './NotifyItself'

const MobileNotify = () => {
    return(

    <>

    <div className="mobile_bar_itself shadow-xl">
    <img src={mobile_arrow_}></img>
    <div className="flex flex-col px-2 my-8 ml-0 mx-6">
    <p className="text-blue-500">Uprawnienia budowlane</p>
    <h1 className="font-bold text-2xl">Powiadomienia</h1>
    </div>
    </div>

    
        
    <div className="h-full w-full rounded-3xl bg-white flex flex-col">

    <NotifyItself/>
    <NotifyItself/>
    <NotifyItself/>

    </div>

    </>
    )
    
}

export default MobileNotify