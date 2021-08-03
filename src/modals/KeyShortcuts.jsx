import KeyboardKey from "../components/KeyboardKey";
import {useEffect, useState} from "react";

const KeyShortcuts = (props) => {

    const [chosenKey, setChosenKey] = useState(-1);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) props.onClose()
        };
        window.addEventListener('keydown', handleEsc);

        return () => window.removeEventListener('keydown', handleEsc);
    });

    return (<div
        className={"fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center " + (props.visible ? '' : 'hidden')}>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-10 cursor-pointer"
             onClick={() => props.onClose()}/>
        <div className="relative w-full max-w-screen-lg bg-white shadow-lg rounded-xl bg-white pt-8 pb-5 px-10">
            <h1 className="font-medium text-2xl">Ustawienia sterowania aplikacją za pomocą klawiszy</h1>
            <h2 className="text-sm mt-3">Tutaj możesz zmienić klawisze sterowania, którymi będziesz obsługiwał
                aplikację</h2>

            <table className="w-full mt-4">
                <thead className="text-lg border-b">
                <tr>
                    <th className="text-left font-normal pb-2">Nazwa opcji</th>
                    <th className="text-left w-48 font-normal">Przycisk na klawiaturze</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="py-5">Poprzednie pytanie</td>
                    <td className="flex justify-center py-2 pt-4" onClick={() => setChosenKey(0)}>
                        <KeyboardKey text="&larr;" pressed={chosenKey === 0}/>
                    </td>
                </tr>
                <tr>
                    <td className="py-5">Następne pytanie</td>
                    <td className="flex justify-center py-2" onClick={() => setChosenKey(1)}>
                        <KeyboardKey text="&rarr;" pressed={chosenKey === 1}/>
                    </td>
                </tr>
                <tr>
                    <td className="py-5">Pokaż/ukryj podpowiedź</td>
                    <td className="flex justify-center py-2" onClick={() => setChosenKey(2)}>
                        <KeyboardKey text="Space" pressed={chosenKey === 2}/>
                    </td>
                </tr>
                <tr>
                    <td className="py-5">Odpowiedź A</td>
                    <td className="flex justify-center py-2" onClick={() => setChosenKey(3)}>
                        <KeyboardKey text="A" pressed={chosenKey === 3}/>
                    </td>
                </tr>
                <tr>
                    <td className="py-5">Odpowiedź B</td>
                    <td className="flex justify-center py-2" onClick={() => setChosenKey(4)}>
                        <KeyboardKey text="B" pressed={chosenKey === 4}/>
                    </td>
                </tr>
                <tr>
                    <td className="py-5">Odpowiedź C</td>
                    <td className="flex justify-center py-2" onClick={() => setChosenKey(5)}>
                        <KeyboardKey text="C" pressed={chosenKey === 5}/>
                    </td>
                </tr>
                <tr>
                    <td className="py-5">Dodaj do ulubionych</td>
                    <td className="flex justify-center py-2" onClick={() => setChosenKey(6)}>
                        <KeyboardKey text="U" pressed={chosenKey === 6}/>
                    </td>
                </tr>
                <tr>
                    <td className="py-5">Podgląd wszystkich odpowiedzi</td>
                    <td className="flex justify-center py-2" onClick={() => setChosenKey(7)}>
                        <KeyboardKey text="W" pressed={chosenKey === 7}/>
                    </td>
                </tr>
                <tr>
                    <td className="py-5">Przełącz widok podpowiedź/akt prawny</td>
                    <td className="flex justify-center py-2" onClick={() => setChosenKey(8)}>
                        <KeyboardKey text="P" pressed={chosenKey === 8}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>);
}

export default KeyShortcuts;