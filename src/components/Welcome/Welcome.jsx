import './Welcome.scss';
import unlockedIcon from '../../assets/unlocked.png';


function Welcome(){
    return (
        <>
            <div className='main-page'>
                <a href="#">
                    <img src={unlockedIcon} alt="" />
                    GET INSTANT ACCESS
                </a>
            </div>
        </>
    )
}


export default Welcome;