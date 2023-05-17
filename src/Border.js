import Pic from './Pic.js';
import { useState } from 'react';

export default function Border({children, num}){
    const [sum, setSum] = useState(0);
    const [histroy, setHistory] = useState('start - ');
    function sumFunc(){
        return sum + num
    }
    return(
        <div>
            <h1>{children}</h1>
            <figure>
                <Pic/>
                <figcaption>
                    <dl>
                        <dt>합</dt>
                        <dd>{sumFunc()}</dd>
                        <dt>기록</dt>
                        <dd>{histroy}</dd>
                    </dl>
                </figcaption>
            </figure>
        </div>
    );   
}