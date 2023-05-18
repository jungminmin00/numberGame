export default function Score({children, num}){
    const score = num.reduce((hap,a) => hap+a, 0);
    return (
        <div>
            <h3>{children}</h3>
            <p>{score}점</p>
        </div>
    );
}