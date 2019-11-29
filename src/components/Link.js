import { Link as ReLink } from 'rebass'
import styled from 'styled-components'

const Link = styled(ReLink)`
  color: ${p => p.theme.colors.blueMediumDark} !important;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
`

Link.defaultProps = {
  fontSize: 1,
}

export default Link
