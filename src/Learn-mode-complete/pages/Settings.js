
import React, {useState, useEffect} from 'react'
import SelectField from '../../Learn-mode-complete/components/SelectField'
import TextFieldComponent from '../../Learn-mode-complete/components/TextFieldComponent'
import useAxios from '../../Learn-mode-complete/components/hooks/useAxios'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import { CircularProgress } from '@material-ui/core'
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

import PhotoMaybeExam from "../../photos/Exammaybe.svg"

const Settings = () => {

    return (
        <div  className="h-full w-full rounded-3xl bg-white flex flex-col">
          <div className="flex flex-col px-2 my-8 sm:mx-8">
                <p className="text-blue-500">Egzamin próbny</p>
                <h1 className="font-bold text-2xl">Kierowanie robotami bez ograniczeń</h1>
            </div>
            <img style={{ height: '195px', width: '177px', alignSelf: 'center', margin: '50px 0px 0px' }} src={PhotoMaybeExam}></img>
		   <Link style={{alignSelf: 'center', margin: '20px'}} to="/learn/questions"><button className="mx-4 my-6 rounded-2xl border border-blue-500 bg-blue-500 text-white font-medium text-center text-lg py-2 px-4">Rozpocznij egzamin próbny</button></Link>

        </div>
    )
}

export default Settings
