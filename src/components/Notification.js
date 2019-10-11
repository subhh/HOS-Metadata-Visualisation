import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components/macro'
import { Text, Box } from 'rebass'
import { transparentize } from 'polished'
import { debounce } from 'lodash'
import { Button, Flex } from 'rebass'

const Container = styled(Box)`
  border-radius: 2px;
  background: ${p => transparentize(0.1, p.theme.colors.blueDark)};
`

/**
 * Informs users with low resolutions about the optimal display size
 * this happens only once, information is saved to local storage
 */
const Notification = ({
  WrapperComponent = () => <div />,
  localStorageId = 'someId',
  testCondition = () => true,
  children,
  timeout,
}) => {
  const [show, setShow] = useState()

  const hide = useCallback(() => {
    localStorage.setItem(localStorageId, false)
    setShow(false)
  }, [localStorageId])

  useEffect(() => {
    const savedValue = JSON.parse(localStorage.getItem(localStorageId))
    let tId

    const check = debounce(() => {
      const newValue = savedValue === false ? false : testCondition()
      setShow(newValue)

      if (timeout && newValue) {
        tId = setTimeout(hide, timeout)
      }
    }, 1000)

    check()

    // notification has not been closed yet
    if (savedValue === null) {
      window.addEventListener('resize', check)
    }

    return () => {
      window.removeEventListener('resize', check)
      window.clearTimeout(tId)
    }
  }, [testCondition, localStorageId, hide, timeout])

  if (!show) return null

  return (
    <WrapperComponent>
      <Container px={5} py={4} width={450}>
        <Flex flexDirection="column">
          <Text
            color="white"
            fontWeight={700}
            textAlign="center"
            lineHeight={1.5}
          >
            {children}
          </Text>
          <Button
            bg="white"
            color="blueDark"
            mt={3}
            css={{ alignSelf: 'center' }}
            onClick={hide}
          >
            OK
          </Button>
        </Flex>
      </Container>
    </WrapperComponent>
  )
}

export default Notification
