import styled from "styled-components";
const Home = () => {
  const Style = styled.div``;
  return (
    <Style>
      <div>
        <h1 className="Title">
          Welcome! This Page Has A Bunch Of Helpful Resources For Software And
          Game Developers
        </h1>
        <p>Feel Free To Browse</p>
        <div>
          <p>My Socials: </p>
          <div className="Links"></div>
          <a href="https://www.linkedin.com/in/robert-king-b5979b298/">
            LinkedIn: Robert King
          </a>
          <a href="https://www.youtube.com/@ImaginationIV">
            Youtube: ImaginationIV
          </a>
        </div>
      </div>
    </Style>
  );
};

export default Home;
