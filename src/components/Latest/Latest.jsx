import './Latest.scss';
import video1 from '../../assets/video1.png'
import video2 from '../../assets/video2.png'
import ytIcon from '../../assets/goldYtIcon.png'
import unlockedIcon from '../../assets/unlocked.png';

function Latest(){
    return (
        <>
            <div className='latest-container'>
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


function Video(props){
    return (
        <div className='latest-video'>
            <div className='cover-container'>
                <img src={props.image} alt="video 1" className='video-cover' />
            </div>
            <div className='video-details'>
                <div>
                    <h2>The Red Wedding</h2>
                    <span>DANAERYS • JON SNOW • CERSEI</span>
                </div>
                <span>
                    <img src={ytIcon} alt="video icon" />
                </span>
            </div>
        </div>
    )
}

export default Latest;