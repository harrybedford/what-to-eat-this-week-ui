import styled from 'styled-components'

const FoodGroupStyle = styled.div`
  width: 100%;
  padding: 0 8px 16px;
  ul {
    li {
      font-size: 18px;
      line-height: 20px;
      padding: 2px 0;
      font-family: 'Raleway', sans-serif;
      strong {
        font-weight: 700;
      }
    }
    &.coming-soon-list {
      li {
        text-transform: capitalize;
      }
    }
  }
`

export default FoodGroupStyle
