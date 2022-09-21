import React from 'react'
import {Route, Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404/Error404";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/homeworks/pre-junior',
    JUNIOR: '/homeworks/junior',
    JUNIOR_PLUS: '/homeworks/junior+',
    // add paths
}

export function RoutesComponent() {
    return (
        <div>
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/homeworks'} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={'/homeworks/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}


