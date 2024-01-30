import image from '../../assets/images/Group 3201.png';

const Banner = () => {
    return (
        <section className="main-hero-section">
            <div className="hero-left-side">
                <h1>Experience food <span>Delivery</span> like no other</h1>
                <p>
                    We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more.
                </p>
            </div>
            <div className="hero-right-side">
                <img src={image} alt="heropageImg" />
            </div>
        </section>

    );
};

export default Banner;