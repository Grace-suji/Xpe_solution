// Home.js
import React from 'react';
import './Home.css';
import homecintent_img from "../../assets/content-image-2.png"
import cloud_img from "../../assets/cloud.png"
import quality_img from "../../assets/quality.jpg"
import icon_1 from "../../assets/feature-5.png";
import icon_2 from "../../assets/feature-6.png";
import icon_3 from "../../assets/feature-7.png";
import about from "../../assets/about-1.png"
import gallery_1 from "../../assets/gallery-1.jpg"
import gallery_2 from "../../assets/gallery-2.jpg"
import gallery_3 from "../../assets/gallery-3.jpg"
import gallery_4 from "../../assets/gallery-4.jpg"
import gallery_5 from "../../assets/gallery-5.jpg"
import subscribe from "../../assets/subscribe-1.png"
import process from "../../assets/process.png"




const Home = () => {
  const featuresData = [
    {
      title: 'SEO Optimizations',
      description: 'Unde omnis natus error voluptatem doloremque laudantium totam rem.',
      icon:icon_1 , // Replace with actual icon paths
      link: '#'
    },
    {
      title: 'Social Marketing',
      description: 'Unde omnis natus error voluptatem doloremque laudantium totam rem.',
      icon:  icon_2 ,
      link: '#'
    },
    {
      title: 'Technical SEO Audit',
      description: 'Unde omnis natus error voluptatem doloremque laudantium totam rem.',
      icon:  icon_3,
      link: '#'
    }
  ];
  return (
    <div>
      <div className="home-container row">

        <header className="hero-section col-xl-6 col-md-12 col-sm-12 col-12">
          <div className="hero-content">
            <p className='best'>Best SEO Solutions Agency </p>
            <h1>Quality SEO Solutions Built by Great Teams</h1>
            <p>We’ve 25 Years Of Experience In SEO Solutions</p>
            <div className="hero-buttons">
              <button className="btn primary-btn">Let’s 7 Days Trial</button>
              <button className="btn secondary-btn">Popular Services</button>
            </div>
          </div>
          <div className="hero-image col-xl-6 col-md-12 col-sm-12 col-12">
            <img style={{ height: "500px", width: "700px" }}
              src={homecintent_img}
              alt="SEO Character"
              className="hero-character"
            />
          </div>
        </header>
        <div className='pattern'>
          <img src={cloud_img} alt="cloud_img" />
        </div>
      </div>
      <section className="about-section ">
        <div className="container row">
          <div className="profile-section col-lg-4 col-sm-12 col-12">
            <img
              src={quality_img}
              alt="Profile"
              className="profile-pic"
            />
          </div>
          <div className="text-section col-lg-4 col-sm-12 col-12">
            <h4 className="small-heading">Who We Are ?</h4>
            <h1 className="main-heading">
              <p>We're Professional </p>SEO Solutions<br /> Agency
            </h1>
          </div>
          <div className="quality-section col-lg-4 col-sm-12 col-12">
            <h4>No Compromise on Quality</h4>
            <p>
              Sedut perspiciatis unde omnis iste natus
              voluptate accusantium doloremque laudan totam
              aperiaaqus epsa quae abillo.
            </p>
            <button className="contact-btn">Contact Us</button>
          </div>
        </div>

      </section>

      <div className='feature'>

<div className="features-section">
  <div className="features-header">
    <div>
    <a href="#" className="explore-link">Explore Features</a>
    <h2>Discover all our <strong>Features & Services</strong></h2>
    </div>
    <div>
    <p>Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <a href="#" className="view-more">View More Features</a>
    </div>
  </div>
  <div className="features-grid">
    {featuresData.map((feature, index) => (
      <div className="feature-card" key={index}>
        <img style={{alignItems:"center", justifyContent:"center", marginLeft:"80px"}} src={feature.icon} alt={feature.title} className="feature-icon" />
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
        <a href={feature.link} className="read-more">Read More &gt;</a>
      </div>
    ))}
  </div>
  <div className="features-footer">
    <p>Have any project in mind or work together? <a href="#">Contact us</a></p>
  </div>
</div>
</div>


<div className="about-company row">
      <div className="image-section col-xl-6 col-md-12 col-sm-12 col-12">
        <img style={{height:"550px", width:"500px"}} src={about} alt="SEO Graphic" />
      </div>
      <div className="content-section col-xl-6 col-md-12 col-sm-12 col-12">
        <a href="#about-company" className="about-link">About Company</a>
        <h1>We’re Create Targeted</h1>
        <h2>SEO Strategies Which Maximize Website's</h2>
        <p className="description">
          <span style={{backgroundColor:"rgb(255, 136, 0)",color:"white",}}>X</span>Consequatur adipiscing eiusmod tempor incidunte ut labore et dolore magna aliqua. Sit amet, consectetur adipiscing sed eiusmod temp didunt labore et dolore magna aliqua...
        </p>
        <ul className="services">
          <li> PPC Management</li>
          <li>Web Design & Mobile Optimization</li>
          <li>Technical SEO Audit Support</li>
        </ul>
        <button className="learn-more">Learn About Us</button>
      </div>
    </div>


    <div className="trusted-by-customers">
      {/* Photo Gallery Section */}
      <div className="photo-gallery-section">
        <div className="gallery-header">
          <div className='photo-gallery-1' style={{textAlign:"left",fontweight: "200"}}>
          <a href="#photo-gallery" className="photo-gallery-link">Photo Gallery</a>
          <h1>Thousand Customers Over <br/>the World Trusted Us</h1>
          </div>
          <div className='photo-gallery-2' style={{textAlign:"left"}}>
          <p style={{paddingTop:"50px"}}>Have any project on your mind or <br/>work together? <a href="#contact" className="contact-link">Contact us</a></p>
          </div>
        </div>
        
        <div className="gallery-images">
          <img style={{height:"300px" ,width:"250px"}} src={gallery_1 } alt="Customer 1" />
          <img style={{height:"300px" ,width:"250px"}} src={gallery_2 } alt="Customer 2" />
          <img style={{height:"300px" ,width:"250px"}} src={gallery_3 } alt="Customer 3" />
          <img style={{height:"300px" ,width:"250px"}} src={gallery_4 } alt="Customer 4" />
          <img style={{height:"300px" ,width:"250px"}} src={gallery_5 } alt="Customer 5" />
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="newsletter-section" >
        <div className="newsletter-content">
          <h2>Get Our Every Update</h2>
          <h3>Join With Us</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter Email Address" />
            <button className="sign-up-button">Sign Up</button>
          </div>
          <p>Have any project on mind? <a href="#contact" className="contact-link">Contact us</a></p>
        </div>
        <div className="newsletter-image">
          <img style={{height:"250px", width:"250px"}} src={subscribe} alt="Newsletter Graphic" />
        </div>
      </div>
    </div>



    <div className="process-container row mx-5">
    <div className="process-image col-xl-6 col-md-12 col-sm-12 col-12">
        <img style={{height:"400px", width:"450px"}} src={process} alt="SEO Graphic" />
      </div>
      <div className="process-content col-xl-6 col-md-12 col-sm-12 col-12">
      <h4 className="process-link">SEO Process Ways</h4>
                <h1>Digital Marketing <br></br>That<span> Drives Results</span></h1>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error luptatem accusantium doloremque laudantium, 
                    totam rem apeam, eaque ipsa quae ab illo inventore veritatis et quasi atecto beatae vitae dicta sunt explicabo. 
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut oditaut.
                </p>
                <a href="#" className="learn-more">Learn More &#8250;</a>
      </div>
            
            
        </div>

    </div>
  );
};

export default Home;
