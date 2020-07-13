import React from "react";
import Navbar from './navbar';
import AdBtn from './adBtn'
import Carousel, {CarouselTwo} from './Carousel'
import MugDisplayer from './mugDisplayer'
import Footer from './footer'



function Home() {
  return (
    <div>
      <AdBtn />
      <Navbar />
      <hr />
      <Carousel
        id="mycarousel"
        idTarget="#mycarousel"
        imgurl="img/fathers_day_mug_sample.png"
        imgurl2="img/medicine-5103043__340.webp"
        description2="We appreciate all frontline workers for the efforts they put in the battle of Covid-19"
        imgurl3="img/stay-home-save-lives-4983843__340.webp"
      />

      <div className="container-fluid">
        <div className="jumbotron">
          <h1 style={{ fontFamily: "fantasy" }}>
            Get your printed Mugs & Bottles today!!!
          </h1>
          <p className="lead">
            In todays world internet is the most popular way of businesses
            connecting with their customers. At
            <a href="/" target="blank">
              mugsbottle&more.com
            </a>{" "}
            we bring comfort right to your door-step. All you have to do is to
            place order for whatever product, and we bring right to your door
            step.
          </p>
          <p>
            <a
              href="/contact"
              target="blank"
              className="btn btn-outline-danger btn-lg"
            >
              Get a quote today
            </a>
          </p>
        </div>{" "}
      </div>

      <div className="container">
        <h2
          style={{
            textAlign: "center",
            color: "pink",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            fontStyle: "italic",
          }}
        >
          A little display of our products
        </h2>
      </div>
      <hr />

      <div className="container-fluid">
        <div className="row">
          <MugDisplayer
            id="mugs"
            className="col-md-3"
            img="img/best_friend_mug.png"
            individual_ID="bf_mug"
            description="Customized appreciation mug for your best-friend."
            imgurl="img/bf_mug.png"
            imgurl2="img/best_friend_mug.png"
          />

          <MugDisplayer
            className="col-md-3"
            img="img/Mettalic_bottles.png"
            individual_ID="bottle"
            description="Don't you just love the Mettalic bottles."
            imgurl="img/bottle.jpg"
            imgurl2="img/Mettalic_bottles.png"
          />

          <MugDisplayer
            className="col-md-3"
            img="img/special_rounded_bottle.png"
            individual_ID="spb"
            description="The perfect bottles for storing hot or cold liquid content."
            imgurl="img/productsGallery/images.jpg"
             imgurl2="img/special_rounded_bottle.png"
          />
        </div>
      </div>
      <hr />
      <div
        className="container"
        style={{ textAlign: "center", fontFamily: "monospace" }}
      >
        <h2>
          From Our <span style={{ color: "red" }}>Customers</span>
        </h2>
      </div>
      <Carousel
        imgID="client-img"
        id="clientCarousel"
        idTarget="#clientCarousel"
        imgurl="img/client1.jpg"
        name1="Chief Deji"
        workTitle1="CEO DTPMedia"
        description1="Wonderful set of people. Quick delivery and quality Bottles."
        imgurl2="img/client2.png"
        name2="Mr Adeogun Seun"
        description2="Thumbs up to them. I ordered for Some Mugs and requested for it to be delivered before a particular time, and they did just so. Plus their designs are lovely"
        workTitle2="COO Lufigs farm / Chief Writer GhostWriters.ng"
        imgurl3="img/client3.jpg"
        name3="MRS. Akisanya"
        description3="Their are products are quality and they deliver on time"
        workTitle3="Educationist"
      />

      
      <Footer />
    </div>
  );
}

export default Home;
