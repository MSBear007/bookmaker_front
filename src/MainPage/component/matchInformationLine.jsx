import Comand from "./Comand";
import Timer from "./Timer";
import classes from '../styles/matchLine.css'
import Coef from "./Coef";

function MatchInformationLine() {
    return (
        <div>
            <div className={'Line'}>
                <Timer time={"12:00"} date={"28 января"}/>
                <Comand firstTeam = {"ЦСК"} secondTeam = {"Бразилия"}/>
                <Coef winCoef={1.2} nCoef={2} loseCoef={3.4}/>
            </div>
        </div>
    );
}

export default MatchInformationLine;