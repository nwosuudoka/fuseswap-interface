import React from 'react'
import styled from 'styled-components'
import fuseLogo from '../../assets/svg/bridge-icon2.svg'
import AppBody from '../../pages/AppBody'
import { ExternalLink, TYPE } from '../../theme'
import { AutoColumn } from '../Column'
import { SwapPoolTabs } from '../NavigationTabs'
import { RowCenter } from '../Row'
import { Wrapper } from '../swap/styleds'

const FuseLogo = styled.img.attrs({
  src: fuseLogo
})`
  width: 120px;
  margin-top: 1rem;
  margin-bottom: 2rem;
`

export default function BridgeCloseNotice() {
  return (
    <AppBody>
      <Wrapper>
        <SwapPoolTabs active="bridge" />
        <AutoColumn>
          <RowCenter>
            <FuseLogo />
          </RowCenter>
          <RowCenter>
            <TYPE.body fontSize={18} fontWeight={500} textAlign="center" marginBottom={16}>
              Please use <ExternalLink href="https://app.fuse.fi">Fusefi</ExternalLink> to bridge your tokens.
            </TYPE.body>
          </RowCenter>
        </AutoColumn>
      </Wrapper>
    </AppBody>
  )
}
