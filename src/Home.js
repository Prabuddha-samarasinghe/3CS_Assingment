import './Home.css';
import './userdata';


const Home = ({ userData }) => {
    return (
        <>
        
            <div className="main">

                <a href='./userdata'>
                    <div className="card">
                        <div>
                            <div className="card_image">
                                <img src={userData.avatar} />
                            </div>
                            <div className="card_Fname">{userData.first_name}</div>
                            <div className="card_email">{userData.email}</div>
                        </div>
                    </div>
                </a>

            </div>

        </>


    )
};


export default Home;