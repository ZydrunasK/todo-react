import { useState } from 'react';
import style from './TaskCard.module.css';

export function TaskCard() {
    const [moreAct, setMoreAct] = useState('false');
    const [back, setBack] = useState('false');

    function close() {
        if (back === 'true') {
            setMoreAct('false'),
            setBack('false');
        }
    }

    function handleAct() {
        setMoreAct('true');
        if (moreAct === 'true') {
            setMoreAct('false');
        }

        setBack('true');
        if (back === 'true') {
            setBack('false');
        }
    }


    return (
        <>
        <div className={style.background} data-visible={ moreAct } onClick={ close }></div>
            <li className={style.task}>
                <div className={style.header}>
                    <div className={style.more} onClick={ handleAct }>...</div>
                    <div className={style.moreActions} data-visible={ moreAct }>
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