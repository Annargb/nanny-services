import icons from "../../images/icons.svg";
import * as n from "./Home.styled";

const Home = () => {
  return (
    <n.HomeWrapper>
      <n.TextWrapper>
        <n.Title>Make Life Easier for the Family:</n.Title>
        <n.Text>Find Babysitters Online for All Occasions</n.Text>
        <n.RedirectLink to="/nannies">
          Get started
          <n.ArrowUp>
            <use href={`${icons}#arrow-up`} />
          </n.ArrowUp>
          <n.ArrowRight>
            <use href={`${icons}#arrow-right`} />
          </n.ArrowRight>
        </n.RedirectLink>
      </n.TextWrapper>
      <n.ImgWrapper>
        <n.InfoWrapper>
          <n.CheckWrapper>
            <n.CheckIcon>
              <use href={`${icons}#check`} />
            </n.CheckIcon>
          </n.CheckWrapper>
          <div>
            <n.InfoText>Experienced nannies</n.InfoText>
            <n.InfoCount>15,000</n.InfoCount>
          </div>
        </n.InfoWrapper>
      </n.ImgWrapper>
    </n.HomeWrapper>
  );
};

export default Home;
