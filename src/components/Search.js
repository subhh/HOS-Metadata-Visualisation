import React, { useState, useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import { space, fontSize, width, color } from 'styled-system'
import { Box } from 'rebass'
import SearchResult from './SearchResult'
import {
  scaledWidth,
  scaledHeight,
  shadow,
  outline,
  invert,
  centerSVG,
} from 'utils'
import { ReactComponent as SearchSVG } from 'icons/search.svg'
import { ReactComponent as ClearSVG } from 'icons/close-small.svg'

const SearchContainer = styled(Box).attrs({ bg: 'ghostWhite' })`
  display: inline-block;
  position: relative;
  overflow: hidden;
  ${outline};
  ${shadow};
`

const Input = styled.input.attrs(({ theme, show, width, height }) => ({
  type: 'text',
  color: 'blueMediumDark',
  opacity: show ? 1 : 0,
  width: show ? 'initial' : `${height}px`,
  ml: show ? height : 0,
  px: 2,
  fontSize: 1,
}))`
  background: transparent;
  font-weight: 700;
  border: none;
  transition: all 0.2s ease-in-out;
  ${color};
  ${space};
  ${fontSize};
  ${width};
  ${scaledHeight};

  &:focus {
    outline-width: 0;
    background: white;
  }
`

const IconContainer = styled(Box)`
  z-index: 1;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  ${scaledHeight};
  ${scaledWidth};
  ${centerSVG};
  position: absolute;

  ${({ invert: inv }) => (inv ? invert : {})};
`

const SearchIconContainer = styled(IconContainer).attrs({
  bg: 'ghostWhite',
})`
  &:hover {
    ${invert};
  }
`

const CloseContainer = styled(IconContainer)`
  right: 0;
  border-radius: ${p => p.width}px;
`

/**
 * Search box for filtering/searching, terms are sent to the solr backend
 */
const Search = ({ query, onChange = x => x, className, size = 36 }) => {
  const [value, setValue] = useState('')
  const [expanded, setExpanded] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [active, setActive] = useState(false)
  const inputEl = useRef(null)

  const reset = useCallback(() => {
    const newVal = ''
    setValue(newVal)
    setSubmitted(false)
    onChange(newVal)
  }, [onChange])

  useEffect(() => {
    const hasValue = !!query
    setValue(query)
    setExpanded(hasValue)
    setSubmitted(hasValue)
  }, [query])

  const handleChange = useCallback(
    e => {
      const inputValue = e.target.value

      if (inputValue !== value) {
        setSubmitted(false)
        setValue(inputValue)
      }

      if (e.key === 'Enter') {
        setSubmitted(true)
        onChange(inputValue)
      }

      if (e.key === 'Escape') {
        reset()
      }
    },
    [onChange, value, reset]
  )

  const handleBlur = useCallback(() => {
    if (!value) {
      setExpanded(false)
    }
    setActive(false)
  }, [value])

  const handleFocus = useCallback(() => {
    setActive(true)
  }, [])

  return (
    <div className={className}>
      <SearchContainer>
        <SearchIconContainer
          data-testid="submit"
          invert={submitted}
          width={size}
          height={size}
          onClick={() => {
            if (!expanded) {
              setExpanded(true)
            } else {
              setSubmitted(true)
              onChange(value)
            }
          }}
          onMouseEnter={() => {
            setExpanded(true)
            inputEl.current.focus()
          }}
        >
          <SearchSVG
            css={`
              fill: ${props => props.theme.colors.blueMediumDark};
            `}
          />
        </SearchIconContainer>
        <Input
          data-testid="input"
          placeholder="Suchbegriff eingeben"
          ref={inputEl}
          size={Math.max(20, value.length)}
          height={size}
          show={active || expanded}
          value={value}
          onKeyDown={handleChange}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {submitted && expanded && (
          <CloseContainer width={size} height={size}>
            <ClearSVG
              data-testid="clear"
              css={`
                fill: ${props => props.theme.colors.blueLight};
                :hover {
                  fill: ${props => props.theme.colors.blueMediumDark};
                }
              `}
              onClick={() => {
                reset()
                inputEl.current.focus()
              }}
            />
          </CloseContainer>
        )}
      </SearchContainer>
      {submitted && <SearchResult />}
    </div>
  )
}

export default Search
