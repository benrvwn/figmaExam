import './Upcoming.scss'
import Video from '../Video/Video'
import video1 from '../../assets/video1.png'
import video2 from '../../assets/video2.png'

function Upcoming(){
    return (
        <>
            <div className='upcoming-container'>
                <div className='top-content'>
                    <h1>
                        <span>LATEST</span>
                        VIDEOS
                    </h1>
                    <span className='line'></span>
                </div>
                <div className='videos-container'>
                    <Video image={video2}/>
                    <Video image={video1}/>
                    <Video image={video1}/>
                    <Video image={video2}/>
                    <Video image={video2}/>
                    <Video image={video1}/>
                </div>

                <div className='view-container'>
                    <a href="#">VIEW ALL VIDEOS</a>
                </div>
            </div>
        </>
    )
}

export default Upcoming;