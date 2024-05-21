import { Container } from "@mui/material";

const Hero = () => {
    return (
        <Container>
            <div className="hero">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="hero-btn">
                        <button className="hero-btn-1">Shop Now</button>
                        <button className="hero-btn-2">Category</button>
                    </div>
                    <div className="shopping">
                        <p>Also Available On</p>
                        <div className="brand-icons">
                            <img src={require('../image/flipkart.png')} alt="" />
                            <img src={require('../image/amazon.png')} alt="" />
                        </div>
                    </div>
                </div>
                <div className="hero-img">
                    <img src={require('../image/shoe_image.png')} alt="" />
                </div>
            </div>
        </Container>
    );
}

export default Hero;