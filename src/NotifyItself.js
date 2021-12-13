import MobileNotifyIcon from './photos/Notify_line.svg'

const NotifyItself = () => {
    return(
        <>
        
        <div className="flex bg-white shadow-xl w-full right-0 border-b">
        <div className='flex'>
        <img className='mx-4' style={{ height:  '36px', width: '36px', alignSelf: 'center' }} src={MobileNotifyIcon}></img>
        </div>
        <div className='flex' style={{ justifyContent: 'center' }}>
        <a className="block py-8 px-2 font-light hover:bg-gray-50 mobile_notify_itself" style={{ alignSelf: 'center' }}>Edytuj profil</a>
        </div>
        </div>

        </>
    )
}

export default NotifyItself