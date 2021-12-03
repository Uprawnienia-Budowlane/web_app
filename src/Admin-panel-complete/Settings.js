import React, {useState} from "react";
import {LightbulbIcon, View1, View2} from "../Icons";
import KeyShortcuts from "../modals/KeyShortcuts";
/*import { lightTheme, darkTheme, GlobalStyles } from './theme'
import { ThemeProvider } from "styled-components";*/

const Settings = () => {

    /*const [theme, setTheme] = useState('light')

    const ThemeToggler = () => {

        theme === 'light' ? setTheme('dark') : setTheme('light') 

    }*/

    const [layout, setLayout] = useState(window.config.settings.pageLayout);
    const [keyboardModal, setKeyboardModal] = useState(false);
    return (
        <div className="admin_panel_itself">
        <div className="rounded-3xl bg-white flex flex-row justify-between flex-wrap">
            <div className="flex flex-col my-8 border-b border-opacity-50 w-full">
                <p className="text-blue-500 px-2 sm:mx-8 text-xl mb-6">Ustawienia aplikacji</p>
            </div>
            <div className="flex flex-row border-b border-opacity-50 w-full justify-between">
                <p className="px-2 sm:mx-8 my-6 font-medium text-lg">Podstawowy wyglądu trybu nauki</p>
                <div className="my-auto sm:mr-8 pr-2 space-x-4 flex flex-row cursor-pointer">
                    <span className={layout === 0 ? "text-blue-500" : ''} onClick={() => {
                        setLayout(0);
                        window.config.settings.pageLayout = 0;
                    }}>
                        <View1/>
                    </span>
                    <span className={layout === 1 ? "text-blue-500" : ''} onClick={() => {
                        setLayout(1);
                        window.config.settings.pageLayout = 1;
                    }}>
                        <View2/>
                    </span>
                </div>
            </div>
            <div className="flex flex-row border-b border-opacity-50 w-full justify-between">
                <p className="px-2 sm:mx-8 my-6 font-medium text-lg">Twoja główna specjalizacja</p>
                <div className="my-auto sm:mr-8 pr-2 flex flex-col">
                    <p className="text-right font-medium">Inżynieria hydrotechniczna</p>
                    <p className="text-right font-medium">(projektowanie i kierowanie robotami budowlanymi w
                        ograniczonym zakresie)</p>
                </div>
            </div>
            <div className="flex flex-row border-b border-opacity-50 w-full justify-between">
                <p className="px-2 sm:mx-8 my-6 font-medium text-lg">Wyświetlanie podpowiedzi</p>
                <div className="my-auto sm:mr-8 pr-2 flex flex-col">
                    <p className="text-right font-medium">Tylko tekst / Tekst+grafika</p>
                </div>
            </div>

            <div className="flex flex-row border-b border-opacity-50 w-full justify-between">
                <p className="px-2 sm:mx-8 mt-5 mb-4 font-semibold text-lg">Powiadomienia</p>
            </div>
            <div className="flex flex-row border-b border-opacity-50 w-full justify-between">
                <p className="px-2 sm:mx-8 my-6 font-medium">Promocje</p>
                <div className="relative h-6 sm:mr-8 pr-2 my-auto">
                    <input type="checkbox"/>
                </div>
            </div>
            <div className="flex flex-row border-b border-opacity-50 w-full justify-between">
                <p className="px-2 sm:mx-8 my-6 font-medium">Przypomnienia dot nauki</p>
                <div className="relative h-6 sm:mr-8 pr-2 my-auto">
                    <input type="checkbox" defaultChecked={true}/>
                </div>
            </div>

            <div className="flex flex-row border-b border-opacity-50 w-full justify-between">
                <p className="px-2 sm:mx-8 mt-5 mb-4 font-semibold text-lg">Skróty klawiaturowe</p>
            </div>
            <div className="flex flex-row border-b border-opacity-50 w-full justify-between">
                <p className="px-2 sm:mx-8 my-6 font-medium">Ustawinia sterowania aplkacją za pomocą klawiatury</p>
                <div className="relative sm:mr-8 pr-2 my-auto cursor-pointer" onClick={() => setKeyboardModal(true)}>
                    <LightbulbIcon/>
                </div>
            </div>
            <KeyShortcuts visible={keyboardModal} onClose={() => setKeyboardModal(false)}/>
        </div>
        </div>
    );
}

export default Settings;