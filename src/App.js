import React, {useState} from 'react';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import ru from 'react-phone-number-input/locale/ru.json'
import s from './App.module.scss'

const App = () => {
    const [value,setValue]=useState()
    return (
            <PhoneInput
                labels={ru}
                country={'ru'}
                value={value}
                onChange={phone => setValue(phone)}
                type={'tel'}
                data-name={'111'}
                inputProps={{'id':'recipient-phone','required':'true',}}
                inputClass={['form-control',s.form_control].join(' ')}

            />
    );
};

export default App;