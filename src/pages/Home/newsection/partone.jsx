

const Newpartone = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/MccPbbR/Cosmetic-Product-List-For-Business-Opportunity.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Elevate your shopping experience with us! Discover a curated collection of top-notch products, from trendy fashion to must-have gadgets. Our friendly staff and inviting atmosphere make shopping a pleasure. Explore the latest trends and find the perfect items to enhance your lifestyle at Conmatic Shop.
                        </p>
                        <button className="btn btn-primary"> <a href="/menu">Get Started</a></button>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/34bgd1v/These-natural-skincare-tips-will-enhance-the-health-of-your-skin-tenfold-Mobile-Home-Featured.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">care your skin</h1>
                        <p className="py-6">Care Your Skin offers premium skincare for a radiant glow. Our quality products, free from harmful additives, ensure a healthier complexion. Trust us for dermatologist-recommended solutions, embracing self-care with simplicity and efficacy. Unveil your beauty with Care Your Skin.</p>
                        <button className="btn btn-accent"><a href="/menu">Get Started</a></button>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/Sd11fgJ/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon-343596.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Beauty Care!</h1>
                        <p className="py-6">
Elevate your beauty with Beauty Care. Our premium products, free from harmful additives, guarantee a healthier and more radiant you. Trust in dermatologist-recommended solutions that simplify self-care. Unleash your beauty potential with Beauty Care, where simplicity meets efficacy.</p>
                        <button className="btn btn-success"><a href="/menu">Get Started</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newpartone;