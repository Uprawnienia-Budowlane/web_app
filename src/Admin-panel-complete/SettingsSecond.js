import React, {useState} from "react";
import {LightbulbIcon, View1, View2} from "../Icons";
import KeyShortcuts from "../modals/KeyShortcuts";
/*import { lightTheme, darkTheme, GlobalStyles } from './theme'
import { ThemeProvider } from "styled-components";*/

const SettingsSecond = () => {

    /*const [theme, setTheme] = useState('light')

    const ThemeToggler = () => {

        theme === 'light' ? setTheme('dark') : setTheme('light') 

    }*/

    const [layout, setLayout] = useState(window.config.settings.pageLayout);
    const [keyboardModal, setKeyboardModal] = useState(false);

    return (
        <>
        <div className="rounded-3xl bg-white flex flex-row flex-wrap" style={{ maxWidth: '92.5pc' }}>
            <h1 style={{alignSelf: 'flex-start', fontSize: '18px', fontWeight: 'bold', margin: '40px 25px' }}>Ustawienia artykułów</h1>
            
            <div className="flex flex-row border-b border-opacity-50 w-full justify-start">
                <div className="relative h-6 sm:mr-8 pr-2 my-auto m-10">
                    <input type="checkbox" defaultChecked={true}/>
                </div>
                <p className="sm:mx-2 m-6 font-medium">Spróbuj powiadomić wszystkie blogi, do których łącza zostały umieszczone w artykule</p>
            </div>
            <div className="flex flex-row border-b border-opacity-50 w-full justify-start">
                <div className="relative h-6 sm:mr-8 pr-2 my-auto m-10">
                    <input type="checkbox" defaultChecked={false}/>
                </div>
                <p className="sm:mx-2 m-6 font-medium">Zezwól innym blogom na informowanie o umieszczeniu odnośnika do tej witryny (pingbacki i trackbacki)</p>
            </div>
            <div className="flex flex-row border-b border-opacity-50 w-full justify-start">
                <div className="relative h-6 sm:mr-8 pr-2 my-auto m-10">
                    <input type="checkbox" defaultChecked={true}/>
                </div>
                <p className="sm:mx-2 m-6 font-medium">Zezwól na komentowanie nowych artykułów</p>
            </div>
            <h1 style={{alignSelf: 'flex-start', fontSize: '18px', fontWeight: 'bold', margin: '40px 25px' }}>Ustawienia komentarzy</h1>
            
            <div className="flex flex-row border-b border-opacity-50 w-full justify-start">
                <div className="relative h-6 sm:mr-8 pr-2 my-auto m-10">
                    <input type="checkbox" defaultChecked={false}/>
                </div>
                <p className="sm:mx-2 m-6 font-medium">Autor komentarza musi wprowadzić swój podpis i e-mail</p>
            </div>
            <div className="flex flex-row border-b border-opacity-50 w-full justify-start">
                <div className="relative h-6 sm:mr-8 pr-2 my-auto m-10">
                    <input type="checkbox" defaultChecked={true}/>
                </div>
                <p className="sm:mx-2 m-6 font-medium">Automatycznie zamknij komentowanie dla wpisów starszych niż X dni.</p>
            </div>
            <div className="flex flex-row border-b border-opacity-50 w-full justify-start">
                <div className="relative h-6 sm:mr-8 pr-2 my-auto m-10">
                    <input type="checkbox" defaultChecked={false}/>
                </div>
                <p className="sm:mx-2 m-6 font-medium">Zezwól na komentarze wątkowe (zagnieżdżone) do X poziomów wgłąb.</p>
            </div>
            <div className="flex flex-row border-b border-opacity-50 w-full justify-start">
                <div className="relative h-6 sm:mr-8 pr-2 my-auto m-10">
                    <input type="checkbox" defaultChecked={true}/>
                </div>
                <p className="sm:mx-2 m-6 font-medium">Podziel komentarze na strony zawierające X komentarzy pierwszego poziomu i domyślnie wyświetlaj X stronę.</p>
            </div>
            <div className="flex flex-row border-b border-opacity-50 w-full justify-start">
                <div className="relative h-6 sm:mr-8 pr-2 my-auto m-10">
                    <input type="checkbox" defaultChecked={true}/>
                </div>
                <p className="sm:mx-2 m-6 font-medium">Podziel komentarze na strony zawierające X komentarzy pierwszego poziomu i domyślnie wyświetlaj X stronę.</p>
            </div>
            <div className="flex flex-row border-b border-opacity-50 w-full justify-start">
            <h1 style={{alignSelf: 'flex-start', fontSize: '18px', fontWeight: 'bold', margin: '40px 25px' }}>Ustawienia powiadomień</h1>
            </div>
            <button onClick="" style={{ display: 'flex', color: '#fff', background: '#3B82F6',  justifyContent: 'center', alignSelf: 'center', margin: '10px', width:'208px'}} className="rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-14 hover:bg-blue-50 transition-colors duration-200"><a style={{ alignSelf: 'center' }}>Zapisz</a></button>
        </div>
        </>
    );
}

export default SettingsSecond;