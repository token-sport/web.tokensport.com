import React from "react";
import { oneOfType, object, array, string, number } from "prop-types";

// COMPONENTS
import SectionContainer from "components/LayoutHome/Sections";
import SecondaryInfo from "components/LayoutHome/SecondaryInfo";
import TertiaryInfo from "components/LayoutHome/TertiaryInfo";
import Image from "components/shared/Image";

// STYLES
import { Info, SubInfo } from "./styles";

const Feature = ({ featureInfo, children, id = "", idSection }) => {
  return (
    <SectionContainer id={id} section={idSection} isReverse={featureInfo.isReverse} >
      <div>
        {
          children
            ? children
            : <Image src={featureInfo.image} height="500px" width="500px" isIcon />
        }
      </div>
      <div>
        <Info isReverse={featureInfo.isReverse}>
          <SecondaryInfo
            title={featureInfo.title}
            description={featureInfo.description}
            widthDescription="85%"
          />
          <SubInfo>
            {featureInfo.secondaryInfo.map((secondary, index) => (
              <TertiaryInfo
                key={index}
                image={secondary.image}
                altImage={secondary.altImage}
                title={secondary.title}
                description={secondary.description}
              />
            ))}
          </SubInfo>
        </Info>
      </div>
    </SectionContainer>
  );
};

Feature.propTypes = {
  id: string,
  idSection: number,
  children: oneOfType([object, array]),
  featureInfo: object
};

export default Feature;
