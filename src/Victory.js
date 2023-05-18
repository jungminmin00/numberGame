export default function Victory({aNum, bNum}){
    const aSum = aNum.reduce((hap,a) => hap+a, 0);
    const bSum = bNum.reduce((hap,a) => hap+a, 0);
    // console.log(aSum);
    // console.log(bSum);
    function vicFunc(){
        if(aSum > bSum){
            return 'A 팀 승리'
        }else if(bSum > aSum){
            return 'B 팀 승리'
        }else{
            return '동점!'
        }
    }
    return (
        <p>
            {vicFunc()}
        </p>
    );
}