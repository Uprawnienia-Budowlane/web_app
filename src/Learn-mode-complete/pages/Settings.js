
import React, {useState} from 'react'
import SelectField from '../components/SelectField'
import TextFieldComponent from '../components/TextFieldComponent'
import useAxios from '../../Learn-mode-complete/components/hooks/useAxios'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import { CircularProgress } from '@material-ui/core'
import firebase from '../../firebase'

const Settings = () => {

    const { response, error, loading } = useAxios({url: "/api_category.php"})

    const history = useHistory();
    
    if (loading) {
        return (
          <div className="">
            <CircularProgress />
          </div>
        );
      }
    
      if (error) {
        return (
        <div>
          <h2>
            Coś poszło nie tak :/
          </h2>
        </div>
        );
      }

      const difficultyOptions = [
        { id: "easy", name: "Łatwy" },
        { id: "medium", name: "Średni" },
        { id: "hard", name: "Trudny" },
      ];

      const typeOptions = [
        { id: "multiple", name: "Wielokrotny wybór" },
        { id: "boolean", name: "Prawda/Fałsz" },
      ];    

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/learn/questions");
    }

    return (
        <div  className="h-full w-full rounded-3xl bg-white flex flex-col">
          <div className="flex flex-col px-2 my-8 sm:mx-8">
                <p className="text-blue-500">Uprawnienia budowlane</p>
                <h1 className="font-bold text-2xl">Wybierz specjalność</h1>
            </div>

            <FormControl size="small" fullWidth onSubmit={handleSubmit}>
               <SelectField options={response.trivia_categories} label="Specjalizacja"/>
               <SelectField options={difficultyOptions} label="Poziom trudności"/>
               <SelectField options={typeOptions} label="Typ pytań"/>
               <TextFieldComponent fullWidth/>
               <Button variant="outlined"><Link style={{ display: 'block', width: '120%' }} to="/learn/questions">Zacznij się uczyć</Link></Button>
           </FormControl>
          
        </div>
    )
}

export default Settings
