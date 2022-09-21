import React from 'react'
import Header from './Header/Header'
import {RoutesComponent} from './RoutesComponent'


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<BrowserRouter>*/}

            <Header/>

            <RoutesComponent/>

            {/*</BrowserRouter>*/}
        </div>
    )
}

export default HW5
