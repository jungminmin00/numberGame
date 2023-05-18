import Apic01 from './img/a-one.png';
import Apic02 from './img/a-two.png';
import Apic03 from './img/a-three.png';
import Apic04 from './img/a-four.png';
import Apic05 from './img/a-five.png';
import Apic06 from './img/a-six.png';
import Apic07 from './img/a-seven.png';
import Apic08 from './img/a-eight.png';
import Apic09 from './img/a-nine.png';
import Bpic01 from './img/b_number-1.png';
import Bpic02 from './img/b_number-2.png';
import Bpic03 from './img/b_number-3.png';
import Bpic04 from './img/b_number-4.png';
import Bpic05 from './img/b_number-5.png';
import Bpic06 from './img/b_number-6.png';
import Bpic07 from './img/b_number-7.png';
import Bpic08 from './img/b_number-8.png';
import Bpic09 from './img/b_number-9.png';

const picNumber = {
    aPic : [Apic01, Apic02, Apic03, Apic04, Apic05, Apic06, Apic07, Apic08, Apic09],
    bPic : [Bpic01, Bpic02, Bpic03, Bpic04, Bpic05, Bpic06, Bpic07, Bpic08, Bpic09]
};

export default function Pic({num = 1, team}){
    const src = picNumber[team][num-1];
    const alt = `${num} 이미지`;
    return(
        <div>
            <img src={src} alt = {alt} />
        </div>
    );   
}