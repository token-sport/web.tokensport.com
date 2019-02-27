import React from 'react';
import { array, string } from 'prop-types';

// COMPONENTS
import Icon from 'components/shared/Icon';

// STYLES
import NetworkContainer from './styles';

const Network = ({ networks, width, height }) => <NetworkContainer>
  {
    networks.map((network, index) =>
      <Icon
        key={index}
        network={network.icon}
        link={network.link}
        width={width}
        height={height}
        name={network.name}/>)
  }
</NetworkContainer>

Network.propTypes = {
  networks: array,
  width: string,
  height: string
}

export default Network;
