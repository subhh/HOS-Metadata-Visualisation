import React, { useContext } from 'react'
import { Box, Text as ReText } from 'rebass'
import styled from 'styled-components'
import { StateContext } from 'state'
import useFetchSimple from 'hooks/useFetchSimple'
import { format, shadow } from 'utils'
import Link from 'components/Link'

const { NODE_ENV, REACT_APP_DEV_SERVER } = process.env

const Wrapper = styled(Box).attrs({ px: 3, py: 4, bg: 'white' })`
  border-radius: 4px;
  max-width: 200px;
  ${shadow};
`

const Text = styled(ReText).attrs({ display: 'inline-block' })``

const Count = styled(Text).attrs({
  fontSize: 1,

  color: 'blueDark',
})`
  font-weight: 700;
`

const Publications = styled(Text).attrs({
  fontSize: 1,
  color: 'greyDark',
  children: 'Publikationen',
})`
  text-transform: uppercase;
  font-weight: 500;
`

const createLink = query =>
  `${
    NODE_ENV === 'development' ? REACT_APP_DEV_SERVER : ''
  }/de/suchen-entdecken/discovery/?tx_find_find[__referrer][@extension]=Find&tx_find_find[__referrer][@vendor]=Subugoe&tx_find_find[__referrer][@controller]=Search&tx_find_find[__referrer][@action]=index&tx_find_find[__referrer][arguments]=YToxOntzOjE6InEiO2E6Nzp7czozOiJhbGwiO3M6MTU6IkRhdGEgUHJvY2Vzc2luZyI7czo3OiJhdXRob3JzIjtzOjA6IiI7czo3OiJkZWZhdWx0IjtzOjA6IiI7czo4OiJmdWxsdGV4dCI7czowOiIiO3M6MTA6InB1Ymxpc2hlcnMiO3M6MDoiIjtzOjg6InN1YmplY3RzIjtzOjA6IiI7czo2OiJ0aXRsZXMiO3M6MDoiIjt9fQ==84ceee3840c75fe70ccbde38d63fe12889b190b6&tx_find_find[__referrer][@request]=a:4:{s:10:"@extension";s:4:"Find";s:11:"@controller";s:6:"Search";s:7:"@action";s:5:"index";s:7:"@vendor";s:7:"Subugoe";}fcac206facd7fc97ccf479c8905fa76ff43930c6&tx_find_find[__trustedProperties]=a:1:{s:1:"q";a:7:{s:7:"default";i:1;s:3:"all";i:1;s:7:"authors";i:1;s:8:"fulltext";i:1;s:10:"publishers";i:1;s:8:"subjects";i:1;s:6:"titles";i:1;}}6c850a55e9c482f4b614787373e30d12a8823c5d&tx_find_find[q][default]=&tx_find_find[q][all]="${
    query ? encodeURIComponent(query) : ''
  }"&tx_find_find[q][authors]=&tx_find_find[q][fulltext]=&tx_find_find[q][publishers]=&tx_find_find[q][subjects]=&tx_find_find[q][titles]=#tx_find`

/**
 * Component displays the hit count while searching and links to the catalogue
 */
const SearchResult = () => {
  const { query } = useContext(StateContext)
  const { count, isLoading } = useFetchSimple(query)

  if (isLoading) return null

  return (
    <Wrapper>
      {count > 0 ? (
        <>
          <Box mb={3}>
            <Count mb={1}>{format(count)}</Count> <Publications />
          </Box>
          <Link href={createLink(query)}>anzeigen</Link>
        </>
      ) : (
        <ReText fontSize={1} lineHeight={1.5} color="greyDark">
          Es wurde leider keine Publikation mit dem Suchbegriff gefunden.
        </ReText>
      )}
    </Wrapper>
  )
}

export default SearchResult
