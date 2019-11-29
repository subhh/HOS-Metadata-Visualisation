import React from 'react'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'
import { outline, shadow } from 'utils'

const Wrapper = styled.div`
  overflow: hidden;
  ${outline};
  ${shadow};
`

const StyledNavLink = ({ label, ...rest }) => (
  <ButtonLink borderRadius={0} py={10} relative={true} {...rest}>
    {label}
  </ButtonLink>
)

/**
 * Toogle navigation to switch between map and graph
 */
const Navigation = ({ className }) => (
  <Wrapper className={className}>
    <StyledNavLink to="/map" label="Einrichtungen" setActive />
    <StyledNavLink to="/graph" label="Kollektionen" setActive />
  </Wrapper>
)

export default Navigation
