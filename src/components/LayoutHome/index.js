import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import { func, string } from "prop-types";

// COMPONENTS
import MainInfo from "./MainInfo";
import Feature from "./Feature";
import Carousel from "./Carousel";
import TokenDist from "./TokenDist";
import GridTeam from "./GridTeam";
import Partners from "./Partners";
import Form from "./Form";

// STYLES
import { Container } from "./styles";

const LayoutHome = ({
  handleOnChange,
  nameForm,
  lastNameForm,
  emailForm,
  handleSubmitForm
}) => {
  //REDUX Mapped HOOK
  const mapState = useCallback(
    state => ({
      heroInfo: state.getIn(["language", "contentLang", "hero"]),
      featuresInfo: state.getIn(["language", "contentLang", "features"]),
      roadmapInfo: state.getIn(["language", "contentLang", "roadmap"]),
      tokenInfo: state.getIn(["language", "contentLang", "tokenDist"]),
      teamInfo: state.getIn(["language", "contentLang", "dreamTeam"]),
      partnersInfo: state.getIn(["language", "contentLang", "partners"]),
      subscribeInfo: state.getIn(["language", "contentLang", "subscribe"])
    }),
    []
  );

  const {
    heroInfo,
    featuresInfo,
    roadmapInfo,
    tokenInfo,
    teamInfo,
    partnersInfo,
    subscribeInfo
  } = useMappedState(mapState);

  return (
    <Container>
      {/* MAIN SECTION */}
      <MainInfo heroInfo={heroInfo.toJS()} />

      {/* FEATURES SECTION */}
      <section id="#features">
        {featuresInfo.toJS().map((feature, index) => (
          <Feature key={index} featureInfo={feature} />
        ))}
      </section>

      {/* ROADMAP SECTION */}
      <Carousel id="#roadmap" roadmapInfo={roadmapInfo.toJS()} />

      {/* DISTRIBUTION SECTION */}
      <TokenDist tokenInfo={tokenInfo.toJS()} />

      {/* TEAM SECTION */}
      <GridTeam id="#dreamteam" teamInfo={teamInfo.toJS()} />

      {/* PARTNERS SECTION */}
      <Partners partnersInfo={partnersInfo.toJS()} />

      {/* SUBSCRIBE SECTIONS */}
      <Feature
        id="#subscribe"
        idSection={10}
        featureInfo={subscribeInfo.toJS()}
      >
        <Form
          info={subscribeInfo.toJS()}
          onChange={handleOnChange}
          name={nameForm}
          lastname={lastNameForm}
          email={emailForm}
          submitForm={handleSubmitForm}
        />
      </Feature>
    </Container>
  );
};

LayoutHome.propTypes = {
  handleOnChange: func,
  nameForm: string,
  lastNameForm: string,
  emailForm: string,
  handleSubmitForm: func
};

export default LayoutHome;
