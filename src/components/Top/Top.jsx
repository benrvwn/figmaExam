import './Top.scss';
import video1 from '../../assets/video1.png'
import video2 from '../../assets/video2.png'
import unlockedIcon from '../../assets/unlocked.png';
import Video from '../Video/Video';

function Latest(){
    return (
        <>
            <div className='top-container'>
                <div className='top-content'>
                    <h1>
                        <span>TOP</span>
                        VIDEOS
                    </h1>
                    <span className='line'></span>
                </div>
                <div className='latest-content'>
                    <Video image={video1} />
                    <Video image={video2} />
                </div>
                <div className='get-access'>
                    <a href="#" className='get-access'>
                        <img src={unlockedIcon} alt="" />
                        GET INSTANT ACCESS
                    </a>
                </div>
            </div>
        </>
    )
}

export default Latest;