import React from 'react'
import 'typeface-montserrat'
import 'typeface-merriweather'
import styled from 'styled-components'
import profilePic from '../assets/images/profile.jpg'

const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
`

const Text = styled.p`
  color: var(--green);
  font-size: 2rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`

const Bio = () => (
  <Container>
    <Image src={profilePic} alt="Fat panda" />
    <Text
      dangerouslySetInnerHTML={{
        __html: `📝 from lxynox`,
      }}
    />
  </Container>
)

export default Bio
