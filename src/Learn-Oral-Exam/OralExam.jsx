import React, {useState} from "react";
import {ArrowXSmallIcon, HeartFill2Icon, LightbulbIcon} from "../Icons";
import KeyShortcuts from "../modals/KeyShortcuts";
import { useHistory } from "react-router-dom";
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

const OralExam = () => {

    const [keyboardModal, setKeyboardModal] = useState(false);

        /* Trzeba tą tablice jakoś podpiąć pod firebase'a żeby się wyświetlały pytania ze stworzonej bazy danych */
    
        const questions = [
            {
                questionText: 'Najmniejsza głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego to:',
                questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
                questionHint: '§ 3. Określenia użyte w rozporządzeniu oznaczają: (...) 3) głębokość podstawowa — najmniejszą głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego;',
                answerOptions: [
                    {Nr: 'A', answerText: 'Głębokość specjalna', isCorrect: false },
                    {Nr: 'B', answerText: 'Głębokość minimalna', isCorrect: false },
                    {Nr: 'C', answerText: 'Głębokość podstawowa', isCorrect: true },
                ],
            },
    
            {
                questionText: 'Czy usytuowanie budowli telekomunikacyjnej w odległości podstawowej od innego obiektu budowlanego:',
                questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
                questionHint: '§ 3. Określenia użyte w rozporządzeniu oznaczają: (...) 3) głębokość podstawowa — najmniejszą głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego;',
                answerOptions: [
                    {Nr: 'A', answerText: 'Nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego', isCorrect: true },
                    {Nr: 'B', answerText: 'Wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego', isCorrect: false },
                    {Nr: 'C', answerText: 'Wymaga się stosowania zabezpieczenia szczególnego', isCorrect: false },
                ],
            },
    
            {
                questionText: 'Czym jest antenowa konstrukcja wsporcza, bez odciągów?',
                questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
                questionHint: '§ 3. Określenia użyte w rozporządzeniu oznaczają: (...) 3) głębokość podstawowa — najmniejszą głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego;',
                answerOptions: [
                    {Nr: 'A', answerText: 'Wieżą antenową', isCorrect: true },
                    {Nr: 'B', answerText: 'Masztem antenowym', isCorrect: false },
                    {Nr: 'C', answerText: 'Wspornikiem', isCorrect: false },
                ],
            },
            {
                questionText: 'Czym jest antenowa konstrukcja wsporcza z odciągami?',
                questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
                questionHint: '§ 3. Określenia użyte w rozporządzeniu oznaczają: (...) 3) głębokość podstawowa — najmniejszą głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego;',
                answerOptions: [
                    {Nr: 'A', answerText: 'Wieżą antenową', isCorrect: false },
                    {Nr: 'B', answerText: 'Wspornikiem', isCorrect: false },
                    {Nr: 'C', answerText: 'Masztem antenowym', isCorrect: true },
                ],
            },
            {
                questionText: 'Najmniejsza głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego to:',
                questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
                questionHint: '§ 3. Określenia użyte w rozporządzeniu oznaczają: (...) 3) głębokość podstawowa — najmniejszą głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego;',
                answerOptions: [
                    {Nr: 'A', answerText: 'Głębokość specjalna', isCorrect: false },
                    {Nr: 'B', answerText: 'Głębokość minimalna', isCorrect: false },
                    {Nr: 'C', answerText: 'Głębokość podstawowa', isCorrect: true },
                ],
            },
            {
                questionText: 'Najmniejsza głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego to:',
                questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
                questionHint: '§ 3. Określenia użyte w rozporządzeniu oznaczają: (...) 3) głębokość podstawowa — najmniejszą głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego;',
                answerOptions: [
                    {Nr: 'A', answerText: 'Głębokość specjalna', isCorrect: false },
                    {Nr: 'B', answerText: 'Głębokość minimalna', isCorrect: false },
                    {Nr: 'C', answerText: 'Głębokość podstawowa', isCorrect: true },
                ],
            },
        ]
    
        const db = getFirestore()
    
        const usersCollectionRefFavQuestion = collection(db, "ulubione_pytania_uzytkownikow");
    
        const auth = getAuth();
    
        const history = useHistory()
    
        let NumberQuestion = 1
    
        const AddFavQuestion = async () => {
            await addDoc(usersCollectionRefFavQuestion, { 
                numer_pytania:currentQuestion + 1,
                adres_mail_uzytkownika: auth.currentUser.email,
                ulubione_pytanie: questions[currentQuestion].questionText,
            });
        }
    
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [showScore, setShowScore] = useState(false);
        const [score, setScore] = useState(0);
    
        /*const AnswerOptionClickKeyboard = (e) => {
    
                if(e.keyCode === 27) {
    
                console.log('ok')
    
                const handleAnswerOptionClickKeyboard = (isCorrect) => {
        
                    if (isCorrect) {
                        setScore(score + 1);
                    }
                
                }
    
                handleAnswerOptionClickKeyboard()
                
                }
    
            onKeyDown={() => AnswerOptionClickKeyboard(answerOption.isCorrect)}
    
            }*/
    
        const handleAnswerOptionClick = (isCorrect) => {
            if (isCorrect) {
                setScore(score + 1);
            }
        }
    
        const NextPageQuestion = () => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
            } else {
                setShowScore(true);
            }
        }
    
        const HandleBackToOldQuestion = () => {
            const earlQuestion = currentQuestion - 1;
            if (earlQuestion < questions.length) {
                setCurrentQuestion(earlQuestion);
            }
        }

    return (
        <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden">

            <div className="border-b border-opacity-50 flex mt-4 flex-col xl:flex-row justify-between">
                <div className="flex flex-col px-2 ml-2 xl:ml-8 my-4">
                    <p className="text-blue-500">Tryb egzaminu pisemnego</p>
                    <h1 className="font-bold ">Inżynieria hydrotechniczna - Projektowanie oraz kierowanie robotami w
                        ograniczonym zakresie</h1>
                </div>

                <div className="flex flex-col md:flex-row mx-4 mb-2 md:mb-0 md:mr-8 justify-end">

                    <div className="my-auto flex flex-row gap-6">
                        <button className="rounded-2xl border border-blue-500 p-1 hover:bg-blue-50 transition-colors duration-200">
                            <ArrowXSmallIcon/>
                        </button>
                        <button className="rounded-2xl border border-blue-500 py-2 px-3 hover:bg-blue-50 transition-colors duration-200">
                            <HeartFill2Icon/>
                        </button>
                        <button className="transform rotate-180 rounded-2xl border border-blue-500 p-1 hover:bg-blue-50 transition-colors duration-200">
                            <ArrowXSmallIcon/>
                        </button>
                        <div className="my-auto ml-auto cursor-pointer"
                             onClick={() => setKeyboardModal(true)}>
                            <LightbulbIcon/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-200">
                <p className="px-8 pt-4 font-medium text-black">Pytanie &nbsp;<span className="">{currentQuestion + 1}/{questions.length}</span></p>
                <p className="px-8 pb-4 pt-2 text-sm">Czy Wójt może, w przypadkach zagrożenie życia lub zdrowia ludzi
                    związanych z utrzymaniem obiektów budowlanych, zwrócić się do nadzoru budowlanego o podjęcie
                    działań? (Dopytali czemu podlega takie polecenie, chodziło o niezwłoczne wykonanie).</p>
            </div>
            <p className="p-8 text-sm">Zgodnie z art. 61 pkt 1 ustawy - Prawo budowlane to właściciel lub zarządca
                obiektu budowlanego jest obowiązany użytkować go w sposób zgodny z jego przeznaczeniem i wymaganiami
                ochrony środowiska oraz utrzymywać w należytym stanie technicznym i estetycznym, nie dopuszczając do
                nadmiernego pogorszenia jego właściwości użytkowych i sprawności technicznej, zapewniając w
                szczególności spełnienie tzw. wymagań podstawowych dotyczących: bezpieczeństwa konstrukcji,
                bezpieczeństwa pożarowego, bezpieczeństwa użytkowania, odpowiednich warunków higienicznych i
                zdrowotnych oraz ochrony środowiska, ochrony przed hałasem i drganiami, oszczędności energii i
                odpowiedniej izolacyjności cieplnej przegród.
                Nałożenie odpowiedzialności za stan obiektu na jego właściciela lub zarządcę oznacza, że jest ona
                powiązana z podejmowaniem czynności w zakresie bieżącej konserwacji i utrzymania obiektu
                budowlanego, a nie z prawem własności.
                Natomiast zgodnie z art. 61 pkt 2 właściciel lub zarządca obiektu budowlanego jest obowiązany
                zapewnić, dochowując należytej staranności, bezpieczne użytkowanie obiektu w razie wystąpienia
                czynników zewnętrznych odziaływujących na obiekt, związanych z działaniem człowieka lub sił natury,
                takich jak: wyładowania atmosferyczne, wstrząsy sejsmiczne, silne wiatry, intensywne opady
                atmosferyczne, osuwiska ziemi, zjawiska lodowe na rzekach i morzu oraz jeziorach i zbiornikach
                wodnych, pożary lub powodzie, w wyniku których następuje uszkodzenie obiektu budowlanego lub
                bezpośrednie zagrożenie takim uszkodzeniem, mogące spowodować zagrożenie życia lub zdrowia ludzi,
                bezpieczeństwa mienia lub środowiska. Aby zapewnić właściwe utrzymanie obiektu budowlanego, jego
                właściciel lub zarządca ma obowiązek zapewnić przeprowadzenie okresowych kontroli osoby do tego
                uprawnione.
                f nfkdnk
                Sit amet nisl purus in mollis nunc sed id semper. Blandit libero volutpat sed cras ornare arcu dui
                vivamus. Quam viverra orci sagittis eu volutpat odio. Ac turpis egestas sed tempus urna. Congue
                mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Vel quam elementum pulvinar etiam
                non. Dapibus ultrices in iaculis nunc sed augue. Adipiscing tristique risus nec feugiat in fermentum
                posuere urna. A scelerisque purus semper eget duis at tellus at urna. Platea dictumst quisque
                sagittis purus. Amet massa vitae tortor condimentum lacinia quis vel eros. Odio morbi quis commodo
                odio aenean sed adipiscing. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Ut
                faucibus pulvinar elementum integer enim neque volutpat ac. Vitae ultricies leo integer malesuada
                nunc vel risus commodo. Tempor commodo ullamcorper a lacus vestibulum sed. Id velit ut tortor
                pretium viverra suspendisse.
                Viverra maecenas accumsan lacus vel facilisis volutpat est. Sed egestas egestas fringilla phasellus
                faucibus scelerisque. Posuere ac ut consequat semper viverra. Amet est placerat in egestas. In hac
                habitasse platea dictumst. Sem integer vitae justo eget magna fermentum iaculis eu. Netus et
                malesuada fames ac turpis egestas. Praesent tristique magna sit amet purus gravida. Elementum
                sagittis vitae et leo duis ut diam quam nulla. Faucibus a pellentesque sit amet porttitor eget.
                Convallis aenean et tortor at risus viverra adipiscing at in. Quis imperdiet massa tincidunt nunc
                pulvinar sapien. Sit amet volutpat consequat mauris. Tempor orci eu lobortis elementum. Enim sed
                faucibus turpis in eu mi bibendum neque egestas. Rutrum quisque non tellus orci ac auctor. Nisl
                condimentum id venenatis a condimentum vitae. Eget dolor morbi non arcu risus. At auctor urna nunc
                id cursus.

                Cursus vitae congue mauris rhoncus. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.
                Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Est sit amet facilisis magna
                etiam tempor orci. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Sit amet risus
                nullam eget felis eget. Augue neque gravida in fermentum et sollicitudin ac. Proin sed libero enim
                sed faucibus. Non tellus orci ac auctor augue mauris augue. Eget velit aliquet sagittis id
                consectetur. Nibh nisl condimentum id venenatis a condimentum vitae. Etiam tempor orci eu lobortis
                elementum nibh tellus molestie nunc. Integer quis auctor elit sed vulputate mi. Consequat ac felis
                donec et odio pellentesque diam volutpat. Suspendisse interdum consectetur libero id faucibus nisl.
                Duis at tellus at urna condimentum mattis.</p>

            <KeyShortcuts visible={keyboardModal} onClose={() => setKeyboardModal(false)}/>

        </div>
    )
}

export default OralExam