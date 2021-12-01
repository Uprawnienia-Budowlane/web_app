import React, {useState, useEffect, useRef} from 'react'
import firebase from "../../firebase";
import { useAuth } from '../../context/AuthContext'
import {ArrowXIcon} from '../../Icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { collection, getDocs, addDoc } from 'firebase/firestore'

const QuestionAddPanel = () => {



return (
<>
<div className="admin_panel_itself">

<h1 className="font-bold text-black text-2xl my-8">Dodaj pytanie</h1>

<div className="main-container_on_panel_site">

<div className="container_for_add_question_first">

<div className="add_question_panel-itself">

</div>

</div>
<div className="container_for_add_question_last">

</div>

</div>

</div>
        </>
    )
}

export default QuestionAddPanel