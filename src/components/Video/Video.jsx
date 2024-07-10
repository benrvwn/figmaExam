import './Video.scss';
import ytIcon from '../../assets/goldYtIcon.png'

function Video(props){
    return (
        <div className='video-container'>
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

export default Video;