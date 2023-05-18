import Pic from './Pic.js';

export default function Border({children, num, team}){
    const sum = num.reduce((hap,a) => hap+a, 0);
    const number = num[num.length -1];
    return(
        <div>
            <h1>{children}</h1>
            <figure>
                <Pic team = {team}
                    num = {number}
                />
                <figcaption>
                    <dl>
                        <dt>합</dt>
                        <dd>{sum}</dd>
                        <dt>기록</dt>
                        <dd><p>{num.join(' / ')}</p></dd>
                    </dl>
                </figcaption>
            </figure>
        </div>
    );   
}