import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
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
import firebase from "../../firebase";
import {ArrowXIcon} from '../../Icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'

/* icon's */

import discuss_line_1 from '../Images/discuss_line_1.svg'
import eye_icon from '../Images/eye_icon.svg'
import pencil_line from '../Images/pencil_line.svg'
import share_line_3 from '../Images/share_line_3.svg'

/* */

const Blog = () => {

    const [ExamTrial, setExamTrial] = useState([])

    const db = getFirestore()

    const ExamTrialCollectionRef = collection(db, "egzaminy_probne");

      useEffect(
        () => 
        onSnapshot(collection(db, "egzaminy_probne"), (snapshot) => 
        setExamTrial(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
        []
      )

    const history = useHistory()

    const GoToSettQuestion = () => {
        history.push('/panel-administratora/baza-pytan/dodaj-egzamin-probny')
    }

return (
        <>
<div className="admin_panel_itself analtyic_panel_width_fix">

<h1 className="font-bold text-black text-2xl my-8">Zarządzanie blogiem</h1>

<div className="container_for_all_options_base" style={{ justifyContent: 'space-evenly' }}>
<div className="container_for_all_nav_iself" style={{ justifyContent: 'space-between' }}>
<div className="container_for_btns__" style={{ width: '670px' }}>
<button className="nav_base_option active_btn"><a>Wpisy na blogu</a></button>
<button className="nav_base_option active_btn"><Link to="/panel-administratora/blog-statystyki">Statystyki bloga</Link></button>
<button className="nav_base_option active_btn"><a>Ustawienia bloga</a></button>
<button className="nav_base_option active_btn"><a>Kategorie wpisów</a></button>
</div>
<button className="nav_base_option active_btn"
style={{
justifyContent: 'center',
height: '40px',
width: '161px',
background: '#263238',
margin: '0px 15px'
}}
><a style={{ alignSelf: 'center', margin: '0' }}>Dodaj wpis</a></button>
</div>
</div>

<div className="container_for_all_options_base" style={{ margin: '0px 5px 15px' }}>
<div className="container_for_all_nav_iself" style={{ justifyContent: 'space-between' }}>
<div className="container_for_btns__ blog_fix">
<button className="nav_base_option active_btn" style={{ width:'260px' }}><a>Opublikowane (0)</a></button>
<button className="nav_base_option active_btn" style={{ width:'200px' }}><a>Szkice (0)</a></button>
<button className="nav_base_option active_btn" style={{ width:'260px' }}><a>Zaplanowane (0)</a></button>
<button className="nav_base_option active_btn" style={{ width:'200px' }}><a>Usunięte (0)</a></button>
</div>
<input type="search" className="border-blue-500 rounded-2xl border outline-none h-12 w-100 p-4 search_input_base"
style={{ margin: '0px 10px' }}
placeholder="Szukaj strony"/>
</div>
</div>

<div className="main-container_on_panel_site">
<div className="database_questions-option-panel">
<div style={{ 
display: 'flex', 
alignSelf: 'flex-start',  
justifyContent: 'space-between',
width: '100%'
}}>
<h1 style={{ margin: '0px -700px 20px 30px' }}>Nr</h1><h1 style={{ margin: '0px 0px 20px' }}>Nazwa wpisu</h1><h1 style={{ margin: '0px 225px 20px' }}>Akcje</h1>
</div>
{ExamTrial.map((examtrial) => ( 
<div className="question-panel-with-infos">
<p className="text-500 number_question" style={{ alignSelf: 'center' }}>{examtrial.currentTrialExamId}</p>
<p className="text-500 name_question" style={{ alignSelf: 'center' }}>{examtrial.tytul_egzaminu_probnego}</p> 
<div className="button-container-base-option" style={{ margin: '10px' }}>
<input type="checkbox__"/>
<button style={{ margin: '3.5px' }} className="database-fn-btn"><img src={pencil_line}></img></button>
<button style={{ margin: '3.5px' }} className="database-fn-btn"><img src={eye_icon}></img></button>
<button style={{ margin: '3.5px' }} className="database-fn-btn"><img src={share_line_3}></img></button>
<button style={{ margin: '3.5px' }} className="database-fn-btn"><img src={discuss_line_1}></img></button>
</div>
</div>
))}

</div>

</div>
<div style={{ height: '70px', width: '100%' }}>
</div>
</div>
        </>
    )
}

export default Blog
