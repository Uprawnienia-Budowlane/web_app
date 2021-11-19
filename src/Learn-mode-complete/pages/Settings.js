
import React from 'react'
import SelectField from '../components/SelectField'
import TextFieldComponent from '../components/TextFieldComponent'
import useAxios from '../../Learn-mode-complete/components/hooks/useAxios'

import { Button } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import { CircularProgress } from '@material-ui/core'

const Settings = () => {
    const { response, error, loading } = useAxios({url: "/api_category.php"})
    
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
            Some Went Wrong!
          </h2>
        </div>
        );
      }

      const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
      ];

      const typeOptions = [
        { id: "multiple", name: "Multiple Choise" },
        { id: "boolean", name: "True/False" },
      ];    

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div>
           <FormControl size="small" fullWidth onSubmit={handleSubmit}>
               <SelectField options={response.trivia_categories} label="Specjalność"/>
               <SelectField options={difficultyOptions} label="Podkategoria"/>
               <SelectField options={typeOptions} label="Poziom trudności"/>
               <TextFieldComponent />
               <Button variant="outlined">Zacznij próbny test</Button>
           </FormControl>
        </div>
    )
}

export default Settings
