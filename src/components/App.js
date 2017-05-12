import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

function mapStateToProps(state) {
  return {
    mainData: state.mainData
  };
}

class App extends Component {
  render() {
    return (
      <Container>
        <div>Oh hi</div>
      </Container>
    )
  }
}

export default connect(mapStateToProps)(App)
