import React from 'react';
import { func, string } from 'prop-types';

// COMPONENTS
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

// STYLES
import { Container } from './styles';

// CONSTANTS
import { SECTIONS } from 'constants/sections';
import { INFO_SECTIONS } from 'constants/infoSections';

// UTILS
import { setInfos } from './utils';


const LayoutHome = ({
  handleOnChange,
  nameForm,
  lastNameForm,
  emailForm,
  handleSubmitForm
}) => {

  const mainSection = SECTIONS[0]
  const featuresSection = SECTIONS.filter((section, index) => index > 0 && index < 6)
  const roadMapSection = SECTIONS[6]
  const distributionSection = SECTIONS[7]
  const gridTeamSection = SECTIONS[8]
  const partnersSection = SECTIONS[9]
  const formSection = SECTIONS[10]

  return (
    <Container>
      <Header />
      {/* MAIN SECTION */}
      <Section
        isReverse={mainSection.isReverse}
        componentSide={mainSection.componentSide()}
        info={mainSection.components[0]()}
        id={mainSection.id} />

      {/* FEATURES SECTION */}
      <section id="#features">
        {
          featuresSection.map((section) => {
            const infoSection = INFO_SECTIONS[section.info]
            return (
              <Section
                key={section.id}
                id={section.id}
                isReverse={section.isReverse}
                componentSide={section.componentSide(infoSection.image)}
                info={setInfos(infoSection, section.components, section.isReverse)}
              />
            )
          })
        }
      </section>
      {/* ROADMAP SECTION */}
      {roadMapSection.component(roadMapSection.id, '#roadmap')}

      {/* DISTRIBUTION SECTION */}
      {distributionSection.component()}

      {/* TEAM SECTION */}
      {gridTeamSection.component(gridTeamSection.id, '#dreamteam')}

      {/* PARTNERS SECTION */}
      {partnersSection.component()}

      {/* SUBSCRIBE SECTIONS */}
      <Section
        idSection="#subscribe"
        id={formSection.id}
        isReverse={formSection.isReverse}
        componentSide={formSection.componentSide(handleOnChange, nameForm, lastNameForm, emailForm, handleSubmitForm)}
        info={setInfos(INFO_SECTIONS[formSection.info], formSection.components, formSection.isReverse)}
      />

      <Footer />
    </Container>
  )
}

LayoutHome.propTypes = {
  handleOnChange: func,
  nameForm: string,
  lastNameForm: string,
  emailForm: string,
  handleSubmitForm: func
}

export default LayoutHome;