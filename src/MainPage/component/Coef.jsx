import classes from '../styles/Coef.css'
function Coef({winCoef,nCoef, loseCoef}) {
    return (
        <div className={'result'}>
           <div className={'coefResult'}>
               <text className={'textResult'}> П1 </text>
               <button className={'coef'}>{winCoef}</button>
           </div>
            <div className={'coefResult'}>
                <text className={'textResult'}> Н </text>
                <button className={'coef'}>{nCoef}</button>
            </div>
            <div className={'coefResult'}>
                <text className={'textResult'}> П2 </text>
                <button className={'coef'}>{loseCoef}</button>
            </div>
        </div>
    );
}

export default Coef;