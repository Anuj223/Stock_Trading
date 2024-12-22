import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";


export default function ProductPage() {

        return(
                <>
                <Hero />
                <LeftSection   imgUrl="images/kite.png"  productName="Waner"  productDescription="Our ultra-fast flagship trading platform, Waner Fly, offers streaming market data, advanced charts, an intuitive UI, and much more. Seamlessly manage your trades and investments with the Waner Fly experience on both Android and iOS devices."  tryDemo="Try Demo"  LearnMore="Learn More"  googlePlay=""  appStore="" />

                <RightSection     imgUrl="images/console.png"        productName="Hub"        productDescription="The central dashboard for your Waner account. Gain deep insights into your trades and investments with detailed reports and dynamic visualizations."        LearnMore="Learn More"/>

                
                <LeftSection   imgUrl="images/coin.png"  productName="Bloom"  productDescription="Invest in direct mutual funds online, completely commission-free, and have them delivered directly to your Demat account. Experience seamless investing with Waner Bloom on your Android and iOS devices."  tryDemo="Bloom"  LearnMore=""  googlePlay=""  appStore="" />

                <RightSection     imgUrl="images/kiteconnect.png"        productName="Waner Connect API"        productDescription="Create robust trading platforms and experiences with our simple HTTP/JSON APIs. If you're a startup, build your investment app and present it to our client base, unlocking endless possibilities."        LearnMore="Waner Connect"/>

                
                <LeftSection   imgUrl="images/varsity.png"  productName="Edge"  productDescription="Master the stock market with Waner Edge—a comprehensive learning platform featuring easy-to-digest lessons, detailed insights, and vibrant illustrations. Bite-sized, interactive cards make it effortless to learn on the go and stay ahead in your financial journey."  tryDemo=""  LearnMore=""  googlePlay=""  appStore="" />
                
                <p className="text-center">Check out the Waner.tech blog for insights, updates, and in-depth articles on the cutting-edge technologies powering our platform.</p>
                <Universe />

        </>
        );
}