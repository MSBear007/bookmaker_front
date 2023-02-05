import MatchInformationLine from "./component/matchInformationLine";
import classes from './styles/MainPage.css'

function MainPage() {
    return (
        <div>
            <input type={"text"}/>
            <div className={'MainPage'}>
                <MatchInformationLine/>
                <MatchInformationLine/>
                <MatchInformationLine/>
                <MatchInformationLine/>
                <MatchInformationLine/>
                <MatchInformationLine/>
                <MatchInformationLine/>
                <MatchInformationLine/>
                <MatchInformationLine/>
                <MatchInformationLine/>
                <MatchInformationLine/>
            </div>
        </div>
    );
}

export default MainPage;