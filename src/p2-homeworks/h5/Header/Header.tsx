import React, {useState} from 'react'
import {Link} from "react-router-dom";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import c from './Header.module.css'

function Header() {
    const [Active, setActive] = useState(false);

    const changeButtonHandler = () => {
        setActive(!Active);
    }
    return (
        <div className = {Active ? c.navigation : c.changeContainer}>
            <div>
                <SuperButton>
                    <Link to={'/pre-junior'}>
                        pre-junior
                    </Link>
                </SuperButton>
                <SuperButton>
                    <Link to={'/junior'} >
                        junior
                    </Link>
                </SuperButton>
                <SuperButton>
                    <Link to={'/junior+'}>
                        junior+
                    </Link>
                </SuperButton>
            </div>

            <div onClick={changeButtonHandler}
                 className={Active ? `${c.container} ${c.change}` : `${c.container}`}>
                <SuperButton>
                    <div className={c.bar1}></div>
                    <div className={c.bar2}></div>
                    <div className={c.bar3}></div>
                </SuperButton>
            </div>
        </div>
    )
}

export default Header;
