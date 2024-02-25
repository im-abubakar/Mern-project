import React from 'react';
import NavBar from '../../components/navbar';
import backgroundImage from '../../assets/images/background.jpg'; // Import your background image file

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  const textStyle = {
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Align text vertically center
    minHeight: '100%', // Ensure text container takes up full height of background container
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid background-container" style={backgroundStyle}>
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="tourist-text text-center mt-5" style={textStyle}>
              <h1>Welcome to our beautiful destination!</h1>
              <p>Explore our breathtaking landscapes and immerse yourself in the local culture.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
