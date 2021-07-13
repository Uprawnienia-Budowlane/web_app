import React from "react";
import Switch from "rc-switch";
import {View1, View2} from "./Icons";

class DesktopSettings extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div className="h-full w-full rounded-3xl bg-white flex flex-row justify-between flex-wrap">
                <div className="flex flex-col my-8 border-b border-opacity-10 w-full">
                    <p className="text-blue-500 px-2 sm:mx-8 text-xl mb-6">Ustawienia aplikacji</p>
                </div>
                <div className="flex flex-row border-b border-opacity-10 w-full justify-between">
                    <p className="px-2 sm:mx-8 mb-6 font-medium text-lg">Tryb ciemny/jasny</p>
                    <div className="sm:mr-8 pr-2"><Switch
                        checkedChildren=""
                        unCheckedChildren=""/>
                    </div>
                </div>

                <div className="flex flex-row border-b border-opacity-10 w-full justify-between">
                    <p className="px-2 sm:mx-8 my-6 font-medium text-lg">Podstawowy wyglądu trybu nauki</p>
                    <div className="my-auto sm:mr-8 pr-2 space-x-4 flex flex-row">
                        <View1/>
                        <View2/>
                    </div>
                </div>
                <div className="flex flex-row border-b border-opacity-10 w-full justify-between">
                    <p className="px-2 sm:mx-8 my-6 font-medium text-lg">Twoja główna specjalizacja</p>
                    <div className="my-auto sm:mr-8 pr-2 flex flex-col">
                        <p className="text-right font-medium">Inżynieria hydrotechniczna</p>
                        <p className="text-right font-medium">(projektowanie i kierowanie robotami budowlanymi w ograniczonym zakresie)</p>
                    </div>
                </div>

                <div className="flex flex-row border-b border-opacity-10 w-full justify-between">
                    <p className="px-2 sm:mx-8 mt-6 mb-2 font-medium text-lg">Powiadomienia</p>
                </div>
                <div className="flex flex-row border-b border-opacity-10 w-full justify-between">
                    <p className="px-2 sm:mx-8 my-6 font-medium">Tryb ciemny/jasny</p>
                    <div className="sm:mr-8 pr-2 my-auto"><Switch
                        checkedChildren=""
                        unCheckedChildren=""/>
                    </div>
                </div>
                <div className="flex flex-row border-b border-opacity-10 w-full justify-between">
                    <p className="px-2 sm:mx-8 my-6 font-medium">Tryb ciemny/jasny</p>
                    <div className="sm:mr-8 pr-2 my-auto"><Switch
                        checkedChildren=""
                        unCheckedChildren=""/>
                    </div>
                </div>

            </div>
        )
    }
}

export default DesktopSettings;