import { useState } from 'react';
import style from './TaskCard.module.css';

export function TaskCard() {
    const [openMenu, setOpenMenu] = useState('false');

    function closeBack() {
            setOpenMenu('false');
    }

    function handleMenu() {
        setOpenMenu('true');
        if (openMenu === 'true') {
            setOpenMenu('false');
        }
    }


    return (
        <>
        <div className={style.background} data-visible={ openMenu } onClick={ closeBack }></div>
            <li className={style.task}>
                <div className={style.header}>
                    <div className={style.more} onClick={ handleMenu }>...</div>
                    <div className={style.moreActions} data-visible={ openMenu }>
                        <button className={style.button} type="button">Move up</button>
                        <button className={style.button} type="button">Move down</button>
                        <hr />
                        <button className={style.button} type="button">In progress</button>
                        <button className={style.button} type="button">Done</button>
                        <hr />
                        <button className={style.button} type="button">Delete</button>
                    </div>
                </div>
                <div className={style.content}>
                    <p>Uzduoties tekstas</p>
                </div>
                <div className={style.footer}>
                    <p>Deadline: 2024-09-04</p>
                </div>
            </li >
        </>
    );
}