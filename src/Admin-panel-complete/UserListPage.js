import React, {useState, useEffect} from 'react'
import PFP from '.././photos/ProfilePhoto.png';
import firebase from "../firebase";

const UserListPage = () => {
    
    const [data, setdata] = useState([])
    const [loader, setloader] = useState(true)

    function getData() {
        firebase.db.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setdata(items)
            setloader(false)
        })
    }

    useEffect(() => {

        getData()

    }, [])

    console.log(data)

    return (
        <>
<div className="admin_panel_itself" style={{position: 'absolute', margin: '5%'}}>

<h1 className="font-bold text-black text-2xl my-8">Lista użytkowników</h1>

<div className="main-container_on_panel_site">

<div className="container-for-label-user-etc">
    <label>Nazwa użytkownika</label>
    <label>Zdawalność</label>
    <label>Data Rejestracji</label>
    <label>Status Licencji</label>
</div>

{loader === false && (data.map((ActualUser) => (
<div className="user-panel-with-infos">
<img src={PFP} alt="ProfilePhoto" className="w-34 h-34"/>
<p className="text-500" style={{ marginTop: '0px', marginRight: '100px', marginLeft: '-5px'}}>{ActualUser.Imię} {ActualUser.Nazwisko}</p>
<p className="text-500" style={{ marginTop: '0px', marginRight: '120px', marginLeft: '65px'}}>85%</p>
<p className="text-500" style={{ marginTop: '0px', marginRight: '100px', marginLeft: '85px'}}>05/03/2021</p>
<p className="text-green-500" style={{ margin: '15px'}}>Aktywna do Września 2021</p>
</div>
)))}

</div>

</div>
        </>
    )
}

export default UserListPage
