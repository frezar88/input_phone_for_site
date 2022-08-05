import React, {useState} from 'react';
import s from './App.module.scss'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import ru from 'react-phone-number-input/locale/ru.json'

const App = () => {
    const [value,setValue]=useState()
    return (
        <div className={s.app}>
            <PhoneInput
                labels={ru}
                country={'by'}
                value={value}
                placeholder={'+375297408547'}
                onChange={phone => setValue(phone)}
                type={'tel'}
                name={'phone'}
                id={'phone'}
                required={true}
            />


        </div>
    );
};

export default App;