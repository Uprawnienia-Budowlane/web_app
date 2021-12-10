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

import download_line from '../Images/download_line.svg'
import eye_icon from '../Images/eye_icon.svg'
import image_line from '../Images/image_line.svg'
import pencil_line from '../Images/pencil_line.svg'
import upload_line from '../Images/upload_line.svg'
import discuss_line_1 from '../Images/discuss_line_1.svg'
import share_line_3 from '../Images/share_line_3.svg'
import bin_icon from '../Images/delete-bin.svg' 

/* */

const ProductList = () => {

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

    const GoToEditProduct = () => {
        history.push('/panel-administratora/dodaj-produkt')
    }

return (
<>
<div className="admin_panel_itself analtyic_panel_width_fix">

<h1 className="font-bold text-black text-2xl my-8">Lista produktów</h1>


<div className="main-container_on_panel_site">

<div className="database_questions-option-panel">
<div style={{ 
display: 'flex', 
alignSelf: 'flex-start',  
justifyContent: 'space-between',
width: '100%'
}}>
<h1 >Obrazek</h1>
<h1 style={{ margin: '0px 0px 20px' }}>Nazwa produktu</h1>
<h1>Opis produktu</h1>
<h1>Cena</h1>
<h1>Akcje</h1>
</div>
{ExamTrial.map((examtrial) => ( 
<div className="question-panel-with-infos">
<p className="text-500 number_question" style={{ alignSelf: 'center' }}>{examtrial.currentTrialExamId}</p>
<p className="text-500 name_question" style={{ alignSelf: 'center' }}>{examtrial.tytul_egzaminu_probnego}</p> 
<div className="button-container-base-option" style={{ margin: '10px' }}>
<button onClick={GoToEditProduct} style={{ margin: '5px' }} className="database-fn-btn"><img src={pencil_line}></img></button>
<button style={{ margin: '5px' }} className="database-fn-btn"><img src={eye_icon}></img></button>
<button style={{ margin: '5px' }} className="database-fn-btn"><img src={discuss_line_1}></img></button>
<button style={{ margin: '5px' }} className="database-fn-btn"><img src={share_line_3}></img></button>
<button style={{ margin: '5px' }} className="database-fn-btn"><img src={bin_icon}></img></button>
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

export default ProductList
