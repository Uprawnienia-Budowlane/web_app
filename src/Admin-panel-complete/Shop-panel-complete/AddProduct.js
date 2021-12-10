import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom'
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
import { useAuth } from '../../context/AuthContext'
import {ArrowXIcon} from '../../Icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'

const AddProduct = ({ push, route }) => {

  /* 

  <h1 style={{ margin: '10px' }}>Odpowiedzi</h1>
<input type='text'  onChangeText={val => setCorrectAnswer(val)} value={correctAnswer} className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{ margin: '10px 25px 10px 25px' }} placeholder=""/>
<button type='button' value={optionTwo} className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{display: 'flex', alignSelf: 'center', justifyContent: 'center', margin: '10px', width: '30%'}}><a style={{alignSelf: 'center'}}>Dodaj odpowiedź</a></button>
<input type='text' onChangeText={val => setOptionTwo(val)} value={optionTwo} className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{ margin: '10px 25px 10px 25px' }} placeholder=""/>
<button type='button' className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{display: 'flex', alignSelf: 'center', justifyContent: 'center', margin: '10px', width: '30%'}}><a style={{alignSelf: 'center'}}>Dodaj odpowiedź</a></button>
<input type='text' onChangeText={val => setOptionThree(val)}value={optionThree} className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{ margin: '10px 25px 10px 25px' }} placeholder=""/>
<button type='button' className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{display: 'flex', alignSelf: 'center', justifyContent: 'center', margin: '10px', width: '30%'}}><a style={{alignSelf: 'center'}}>Dodaj odpowiedź</a></button>
<input type='text' onChangeText={val => setOptionFour(val)} value={optionFour} className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{ margin: '10px 25px 10px 25px' }} placeholder=""/>
<button type='button' className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{display: 'flex', alignSelf: 'center', justifyContent: 'center', margin: '10px', width: '30%'}}><a style={{alignSelf: 'center'}}>Dodaj odpowiedź</a></button>
<button onClick={GoToBaseExamPanel} type='button' className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{display: 'flex', alignSelf: 'center', justifyContent: 'center', margin: '10px', width: '20%'}}><a style={{alignSelf: 'center'}}>Zakończ tworzenie egzaminu</a></button>

  */

    const db = getFirestore()

    const history = useHistory()

    const QuizCollectionRef = collection(db, "egzaminy_probne")

    const location = useLocation()
    
      const [question, setQuestion] = useState('');
      const [imageUri, setImageUri] = useState('');
    
      const [correctAnswer, setCorrectAnswer] = useState('');
      const [optionTwo, setOptionTwo] = useState('');
      const [optionThree, setOptionThree] = useState('');
      const [optionFour, setOptionFour] = useState('');

      let currentQuestionId = Math.floor(
        100000 + Math.random() * 9000,
      ).toString();
    
      const createQuestion = (currentTrialExamId, tytul_egzaminu_probnego) => {
      }

      const handleQuestionSave = async () => {
        if (
          question == '' ||
          correctAnswer == '' ||
          optionTwo == '' ||
          optionThree == '' ||
          optionFour == ''
        ) {
          return;
        }
    }

    const GoToBaseExamPanel = () => {

    history.push('/panel-administratora/baza-pytan')

    }

    const GoToEdit = () => {

    history.push('/panel-administratora/baza-pytan')

    }

return (
<>
<div className="admin_panel_itself">
<div className="container_for_all_widgets">

<h1 className="font-bold text-black text-2xl my-8" style={{ marginLeft: '15px' }}>Dodaj produkt</h1>
<div className="container-for_subwigets">



<div className="container_for_add_license_panel" style={{ margin: '0 0px' }}>
<div className="add_something_panel_itself_first" 
style={{ justifyContent: 'space-around', 
height: '186px', 
width: '362px' }}>
<label>Kategoria Produktu</label>
<div className="container_for_checkboxes_and_label">
<input type="checkbox" style={{
  appearance: 'none',
  height: '21px',
  width: '22px',
  borderRadius: '0px',
  background: '#fff',
  border: '2px solid #3B82F6'
}}/><label>Produkt z licencją</label>
</div>
<div className="container_for_checkboxes_and_label">
<input type="checkbox" style={{
  appearance: 'none',
  height: '21px',
  width: '22px',
  borderRadius: '0px',
  background: '#fff',
  border: '2px solid #3B82F6'
}} className="normal-checkbox"/><label style={{ margin: '0px -10px'}}>Produt fizyczny</label>
</div>
<a className="text-500" style={{ textDecoration: 'underline', color: 'gray', fontSize: '12px', alignSelf: 'flex-start', margin: ' 0 20px' }}>Dodaj nową kategorie</a>
</div>

<div className="add_something_panel_itself_second shop_option_widget">
<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>

<div style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 0px 10px' }}>
<h1 className="font-bold text-black text-xl" style={{ margin: '0px 30px' }}>Status</h1>
</div>
<div style={{ display: 'flex', flexDirection: 'column' }}>

<select className="border border-blue-500 text-blue-500 p-1.5 hover:bg-blue-50 transition-colors duration-200 select_options__">
  <option>Publiczna</option>
  <option>test</option>
  <option>test</option>
</select>

</div>
</div>
</div>

<div className="add_something_panel_itself_second shop_option_widget">
<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>

<div style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 0px 10px' }}>
<h1 className="font-bold text-black text-xl" style={{ margin: '0px 30px' }}>Widoczność postu</h1>
</div>
<div style={{ display: 'flex', flexDirection: 'column' }}>

<select className="border border-blue-500 text-blue-500 p-1.5 hover:bg-blue-50 transition-colors duration-200 select_options__">
  <option>Publiczna</option>
  <option>test</option>
  <option>test</option>
</select>

</div>
</div>
</div>

<div className="add_something_panel_itself_second shop_option_widget"
style={{ height:'147px' }}
>
<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>

<div style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 0px 10px' }}>
<h1 className="font-bold text-black text-xl" style={{ margin: '0px 30px' }}>Tagi</h1>
</div>


<div style={{ display: 'flex', flexDirection: 'column' }}>
<h2 style={{ fontSize: '12px', fontWeight: 'bold', margin: '0 30px 10px' }}>Dodaj nowy tag:</h2>

<div className="tag_area shop_widget__little">

  <div className="one_tag">
    <p>Dupa jasia</p>
    <div className="close_icon_tag"></div>
  </div>
  <div className="one_tag">
    <p>Dupa jasia</p>
    <div className="close_icon_tag"></div>
  </div>
  <div className="one_tag">
    <p>Dupa jasia</p>
    <div className="close_icon_tag"></div>
  </div>

</div>
</div>
</div>
</div>

<div className="add_something_panel_itself_second shop_option_widget">
<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>

<div style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 0px 10px' }}>
<h1 className="font-bold text-black text-xl" style={{ margin: '0px 30px' }}>Ważność produktu</h1>
</div>
<div style={{ display: 'flex', flexDirection: 'column' }}>

<select className="border border-blue-500 text-blue-500 p-1.5 hover:bg-blue-50 transition-colors duration-200 select_options__">
  <option>Wybierz datę ważności produktu</option>
  <option>twój ostatni dzień</option>
  <option>ziomuś</option>
</select>

</div>
</div>
</div>

</div>

<div className='container_for_pictures-and-others-shop'>

<div className="add_something_panel_itself_second product_images_container"
style={{ height: '120px' }}
>
<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>

<div style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 0px 10px' }}>
<h1 className="font-bold text-black text-xl" style={{ margin: '0px 15px' }}>Cena produktu</h1>
</div>
<div style={{ display: 'flex', flexDirection: 'column' }}>

<input type="text" className="border border-blue-500 text-blue-500 p-1.5 hover:bg-blue-50 transition-colors duration-200 select_options__" />

</div>
</div>
</div>

<div className="add_something_panel_itself_second product_images_container"
style={{ height: '120px' }}
>
<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>

<div style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 0px 10px' }}>
<h1 className="font-bold text-black text-xl" style={{ margin: '0px 15px' }}>Kod promocyjny</h1>
</div>
<div style={{ display: 'flex', flexDirection: 'column' }}>

<input type="text" className="border border-blue-500 text-blue-500 p-1.5 hover:bg-blue-50 transition-colors duration-200 select_options__" />

</div>
</div>
</div>

<div className="add_something_panel_itself_second product_images_container">
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
<h1 className="font-bold text-black text-xl" style={{ margin: '15px 20px' }}>Obrazki dla produktu</h1>
<span className="text-red" style={{ margin: '15px 20px', alignSelf: 'flex-end', color: 'red' }}>usuń</span>
</div>

<img className='Product_photo' src=''></img>
<img className='Product_photo' src=''></img>
<img className='Product_photo' src=''></img>

</div>
</div>

<div className="container_for_options_addSomehing">

<div className="add_something_panel_itself_last panel_with_products_add_info">

<label style={{ margin: '15px 15px 5px', alignSelf: 'flex-start' }}>Tytuł produktu:</label>
<input type="search"
style={{ margin: '0px 15px' }}
className='rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200'/>

<label style={{ margin: '15px 15px 5px', alignSelf: 'flex-start' }}>Meta dane:</label>
<input type="search"
style={{ margin: '0px 15px' }}
className='rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200'/>

</div>


</div>

</div>
<div className="d-flex justify-center m-2" style={{ marginTop: '-10px' }}>
<button className="Add_quest_btn save"><a>Zapisz wpis</a></button>
<button className="Add_quest_btn save_copy"><a>Zapisz jako szkic</a></button>
</div>
<div style={{ height: '70px', width: '100%' }}>
</div>
</div>
</div>
        </>
    )
}

export default AddProduct