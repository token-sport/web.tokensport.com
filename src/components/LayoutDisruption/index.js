import React, { useEffect, useCallback } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { object } from 'prop-types';

// COMPONENTS
import InfoAuthor from 'components/LayoutDisruption/infoAuthor';
import Paragraph from 'components/shared/Paragraph';
import Title from 'components/shared/Title';

// STYLES
import { 
  LayoutContainer,
  PostBody } from './styles';

// TYPES
import { SWITCH_PATH_LOCATION } from 'actionTypes/';

const LayoutDisruptive = ({ location }) => {
  const pathLocation = location.pathname;

  // REDUX mappedState HOOK
  const mapState = useCallback(state => ({
    postContent: state.getIn(['language', 'contentLang', 'disruptivePost', 'body']),
    postAuthor: state.getIn(['language', 'contentLang', 'disruptivePost', 'author'])
  }), []);

  const { postContent, postAuthor } = useMappedState(mapState);

  // REDUX Dispatch HOOK
  const dispatch = useDispatch();

  const changePathLocation = useCallback((path) => {
    return (
      dispatch({
        type: SWITCH_PATH_LOCATION,
        value: path
      }), 
      []
    );
  })

  // ComponentDidMount Effect
  useEffect(() => {
    changePathLocation(pathLocation)
  }, [])

  return (
    <LayoutContainer>
      <PostBody>
        <Title bold="600" color="neonBlue" size="lg">Disruptive</Title>
        {
          postContent
            .toJS()
            .map((paragraph, index) => <Paragraph key={index}>{paragraph.paragraph}</Paragraph>)
        }
        <InfoAuthor author={postAuthor.toJS()}/>
      </PostBody>
    </LayoutContainer>
  );
}

LayoutDisruptive.propTypes  = {
  location: object
}

export default LayoutDisruptive;

