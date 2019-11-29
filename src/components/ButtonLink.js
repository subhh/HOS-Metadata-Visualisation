import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Button as ReButton } from 'rebass'
import styled from 'styled-components'

const Link = styled(NavLink)``

const Button = styled(ReButton).attrs({
  bg: 'ghostWhite',
  color: 'blueMediumDark',
  px: 3,
})`
  white-space: nowrap;
  outline: none;
  transition: all 0.2s ease-in-out;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  text-transform: uppercase;

  ${Link}.active & {
    color: white;
    background: ${({ theme }) => theme.colors.blueMediumDark};
  }

  /* stylelint-disable */
  /* prettier-ignore */
  ${Link}:not(.active):hover & {
    background: white;
  }
  /* stylelint-enable */
`

/**
 * Button component wrapped with Link
 */
export default withRouter(
  ({
    location,
    match,
    history,
    className,
    relative,
    setActive,
    to,
    py,
    ...rest
  }) => (
    <Link
      className={className}
      to={relative ? { ...location, pathname: to } : to}
      activeClassName="active"
      isActive={(match, location) => {
        return setActive && !!match
      }}
    >
      <Button py={py || 12} {...rest} />
    </Link>
  )
)
