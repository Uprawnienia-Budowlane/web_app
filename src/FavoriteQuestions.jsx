import React, {useState, useEffect,} from "react";
import {DownArrow3Icon, Heart2Icon, HeartFillIcon} from "./Icons";
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
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    getAuth
} from "firebase/auth";

const FavoriteQuestions = () => {

    const [favQuestion, setFavQuestion] = useState([])

    const [favorite, setFavorite] = useState(false);

    const db = getFirestore()

    const usersCollectionRefFavQuestion = collection(db, "ulubione_pytania_uzytkownikow");

    useEffect(() => {
        const getFavQuestion = async () => {
          const data = await getDocs(usersCollectionRefFavQuestion);
          setFavQuestion(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getFavQuestion();
      }, []);


    const auth = getAuth();

    const [category, setCategory] = useState(0);
    
    return (<div className="h-full w-full rounded-3xl bg-white flex flex-col">
        <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8">
            <p className="text-blue-500">Inżynieryjna drogowa</p>
            <h1 className="font-bold text-2xl">Przeglądaj ulubione pytania</h1>
        </div>

        <div className="mx-4 md:mx-12 xl:mx-36 rounded-2xl border border-blue-500 flex flex-col md:flex-row">
            <p className="p-4 overflow-ellipsis text-sm font-bold">Egzamin próbny</p>
            <div className="my-auto ml-auto mx-4"><DownArrow3Icon/></div>
        </div>

        <div className="mx-4 md:mx-12 xl:mx-36 mt-2 rounded-2xl border border-blue-500 overflow-hidden">
            <table>
                <thead className="p-4 border-b border-opacity-50">
                <tr className="">
                    <th className="text-center py-4">Nr.</th>
                    <th className="text-center py-4">Pytanie</th>
                    <th className="text-center py-4">Odpowiedź</th>
                    <th className="text-center py-4"></th>
                </tr>
                </thead>
                <tbody>

                {favQuestion.map((favquest) => { return  <tr className="border-b border-opacity-50">
                <td className="text-lg text-center px-5">{favquest.numer_pytania}</td>
                <td className="text-sm p-4 overflow-ellipsis">{favquest.ulubione_pytanie}</td>
                <td className="text-sm pr-4 py-4 text-green-600 overflow-ellipsis"> Nie wiem jak pobrać odpowiedź z tablicy :// </td>
                <td>
                <div className="pr-4 ml-auto my-auto cursor-pointer"
                 onClick={() => setFavorite(!favorite)}>{favorite ? HeartFillIcon() : Heart2Icon()}</div>
                </td>
                </tr>
                })}

                </tbody>
            </table>
        </div>
        <div className="mx-auto mt-8 mb-12 flex flex-col space-y-3 md:space-y-0 md:flex-row">
            <button style={{ display:'none' }}
                onClick={() => setCategory(0)}
                className={"rounded-2xl border border-blue-500 font-medium text-center text-xl py-3 px-12 md:24 xl:px-32 mx-2 " + (category === 0 ? "bg-blue-500 text-white " : "text-blue-500")}>WSZYSTKIE
            </button>
            <button
                onClick={() => setCategory(1)}
                className={"rounded-2xl border border-blue-500 font-medium text-center text-xl py-3 px-16 md:24 xl:px-32 mx-2 " + (category === 1 ? "bg-blue-500 text-white " : "text-blue-500")}>TYLKO
                ULUBIONE
            </button>
        </div>
    </div>);
}


export default FavoriteQuestions;