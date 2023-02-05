import classes from '../styles/matchLine.css'
function Comand({firstTeam, secondTeam}) {
    return (
        <div>
            <div className={'teamNameBlock'}>
                <button className={'teamName'}> {firstTeam} </button>
                <text className={'vs'}>Vs</text>
                <button className={'teamName'}> {secondTeam} </button>
            </div>
        </div>
    );
}

export default Comand;