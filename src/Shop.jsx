import {ThreeInOneIcon} from "./Icons";
import ShopPanel from "./components/ShopPanel";
import {useState} from "react";

const Shop = () => {
    const [category, setCategory] = useState(0);
    return (
        <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden border-box">
            <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8">
                <p className="text-blue-500">Uprawnienia budowlane</p>
                <h1 className="font-bold text-2xl">Promocyjne pakiety</h1>
            </div>

            <div className="flex flex-row flex-nowrap overflow-x-scroll gap-8 max-w-full px-10 mb-3 hidden-scrollbar"
                 style={{minHeight: 'min-content'}}>
                <ShopPanel
                    title={'Pakiet mobilny 3w1'}
                    price={'500zł'}
                    description={'Ten przedmiot pozwoli ci na zakup pakietu licencji mobilnych.'}
                    features={['Licencja mobilna do nauki na egzamin pisemny', 'Licencja mobilna do nauki na egzamin ustny', 'Licencja mobilna do zbioru aktów prawnych']}
                    image={ThreeInOneIcon}
                />
                <ShopPanel
                    title={'Pakiet mobilny 3w1'}
                    price={'500zł'}
                    description={'Ten przedmiot pozwoli ci na zakup pakietu licencji mobilnych.'}
                    features={['Licencja mobilna do nauki na egzamin pisemny', 'Licencja mobilna do nauki na egzamin ustny', 'Licencja mobilna do zbioru aktów prawnych']}
                    image={ThreeInOneIcon}
                />
                <ShopPanel
                    title={'Pakiet mobilny 3w1'}
                    price={'500zł'}
                    description={'Ten przedmiot pozwoli ci na zakup pakietu licencji mobilnych.'}
                    features={['Licencja mobilna do nauki na egzamin pisemny', 'Licencja mobilna do nauki na egzamin ustny', 'Licencja mobilna do zbioru aktów prawnych']}
                    image={ThreeInOneIcon}
                />
                <ShopPanel
                    title={'Pakiet mobilny 3w1'}
                    price={'500zł'}
                    description={'Ten przedmiot pozwoli ci na zakup pakietu licencji mobilnych.'}
                    features={['Licencja mobilna do nauki na egzamin pisemny', 'Licencja mobilna do nauki na egzamin ustny', 'Licencja mobilna do zbioru aktów prawnych']}
                    image={ThreeInOneIcon}
                />
            </div>

            <div className="mx-auto mb-8 flex flex-col space-y-3 md:space-y-0 md:flex-row w-5/6">
                <button
                    onClick={() => setCategory(0)}
                    className={"rounded-2xl border border-blue-500 font-medium text-center text-xl py-3 px-6 mx-2 w-full " + (category === 0 ? 'bg-blue-500 text-white' : 'text-blue-500')}>PAKIETY
                    3w1
                </button>
                <button
                    onClick={() => setCategory(1)}
                    className={"rounded-2xl border border-blue-500 font-medium text-center text-xl py-3 px-6 mx-2 w-full " + (category === 1 ? 'bg-blue-500 text-white' : 'text-blue-500')}>PAKIETY
                    2w1
                </button>
                <button
                    onClick={() => setCategory(2)}
                    className={"rounded-2xl border border-blue-500 font-medium text-center text-xl py-3 px-6 mx-2 w-full " + (category === 2 ? 'bg-blue-500 text-white' : 'text-blue-500')}>PAKIETY
                    2x
                </button>
            </div>
        </div>
    );
}

export default Shop;