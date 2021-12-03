import React, {useState} from "react";

const SettingsFirst = () => {

    return (
        <>
        <div className="rounded-3xl bg-white flex flex-row justify-center flex-wrap" style={{ maxWidth: '92.5pc' }}>
            <div className="flex flex-col border-b border-opacity-50 w-full justify-start panel-site-change">
            <label>Nazwa strony</label>
            <input type="text" className="border-blue-500 rounded-2xl border outline-none h-12 w-100 p-4" placeholder=""/>
            </div>
            <div className="flex flex-col border-b border-opacity-50 w-full justify-start panel-site-change">
            <label>Opis strony</label>
            <input type="text" className="border-blue-500 rounded-2xl border outline-none h-12 w-100 p-4" placeholder=""/>
            </div>
            <div className="flex flex-col border-b border-opacity-50 w-full justify-start panel-site-change">
            <label>Adres url</label>
            <input type="text" className="border-blue-500 rounded-2xl border outline-none h-12 w-100 p-4" placeholder=""/>
            </div>
            <div className="flex flex-col border-b border-opacity-50 w-full justify-start panel-site-change">
            <label>Adres email</label>
            <input type="text" className="border-blue-500 rounded-2xl border outline-none h-12 w-100 p-4" placeholder=""/>
            <p>Używany do spraw administracyjnych serwisu, rejestracja itp</p>
            </div>
            <button onClick="" style={{ display: 'flex', color: '#fff', background: '#3B82F6',  justifyContent: 'center', margin: '10px', width:'256px'}} className="rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200"><a style={{ alignSelf: 'center' }}>Zapisz ustawienia</a></button>
        </div>
        </>
    );
}

export default SettingsFirst;