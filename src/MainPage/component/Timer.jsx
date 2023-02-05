import classes from '../styles/matchLine.css'
import path from '../images/time.png'

function Timer({time,date}) {
    return (
        <div className={'Timer'}>
            <img className={'image'} src={path}/>
            <text>{time}</text>
            <text>{date}</text>
        </div>
    );
}

export default Timer;