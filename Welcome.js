import video from '../assets/videoBg.mp4';
import '../styling/welcome.css';
import Lottie from "lottie-react";
import welcome from "../styling/Welcome.json";
import { Link } from "react-router-dom";
function Welcome(){
    return(
        <>
            <div className="welcome">
                <div className="overlay"></div>
                <video src={video} autoPlay loop muted></video>
                <div className="content">
                    {/* <h1>Welcome</h1> */}
                    <Lottie loop={true} animationData={welcome} />
                    <p className='slogan'>To</p>
                    <p className='slogan'>Smart System</p>
                    <p className='slogan'>For Baby Monitoring & Theft Protection</p>
                    
                </div>
                <Link to="/login">
                    <button className='btn'>Login</button>
                </Link>
            </div>
        </>
    );
};
export default Welcome;