import Women from "../assets/women.jpg";
import IT from "../assets/info.jpg";
import Lake from "../assets/img1.jpg"

const Home = () => {
  return (
    <div className="container">
      <section>
        <div className="main">
          <div className="lake-image">
          <img src={Lake} alt=""/>
            <h1>Greece Balos Beach</h1>
            <p>Tourism May 10 2023</p>
          </div>
          <div className="main__image">
            <img src={Women} alt="" />
            <img src={IT} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
