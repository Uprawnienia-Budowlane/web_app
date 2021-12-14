import { useState, useEffect } from "react";
import { onSnapshot, 
    getFirestore, 
    collection, 
    CollectionReference,
    addDoc,
    getDoc, 
    getDocs, 
    deleteDoc,
    query, 
    doc,
    DocumentReference } from "@firebase/firestore";
import MobileNotifyIcon from './photos/Notify_line.svg'


const NotifyItself = () => {

    const [notification, setNotification] = useState([])

    const db = getFirestore()

    const notifyCollectionRef = collection(db, "powiadomienia");

    useEffect(() => {
        const getNotify = async () => {
          const data = await getDocs(notifyCollectionRef);
          setNotification(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getNotify();
      }, []);

    return(
        <>
        
        {notification.map((notify_one) => { return <div className="flex bg-white shadow-xl w-full right-0 border-b">
        <div className='flex'>
        <img className='mx-4' style={{ height:  '36px', width: '36px', alignSelf: 'center' }} src={MobileNotifyIcon}></img>
        </div>
        <div className='flex' style={{ justifyContent: 'center', flexDirection: 'column' }}>
        <h1 className="block py-3 px-2 font-light hover:bg-gray-50 mobile_notify_itself ml-2" style={{ alignSelf: 'flex-start' }}>{notify_one.tytul__}</h1>
        <a className="block py-3 pt-0 px-2 font-light hover:bg-gray-50 mobile_notify_itself ml-2" style={{ alignSelf: 'flex-start' }}>{notify_one.wiadomosc__}</a>
        </div>
        </div>
        })}

        </>
    )
}

export default NotifyItself