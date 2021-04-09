import styled from 'styled-components/macro'

export default function AppHeader() {

    return (
        <FixedWrapper>
            <Header>
                <h1>RavensPerch</h1>
            </Header>
        </FixedWrapper>
    )
}

const Header = styled.header`
  background: #454A4D;
  border-style: none none solid none;
  border-width: 0px 0px 1px 0px;
  border-color: #C9E1F2;
  h1 {
    padding: 8px;
    margin: 0px;
    text-align: center;
    font-size: 1.6em;
    font-family: 'Roboto', Thin 100;
    color: #C9E1F2;
    text-align: left;
  }

`

const FixedWrapper = styled.div`
position: fixed
grid-row: grid-row-start
`

