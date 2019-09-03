import styled from 'styled-components';
import {colorsDark} from 'styles/paltte';
 const Card = styled.div`
    width:100%;
    background:#fff;
    border-radius: 8px;
    position:relative;
    border: 1px solid ${colorsDark.border};
    display:flex;
    flex-wrap:wrap;
    justfy-content:flex-start;
    margin-top:.2rem;
`
export default Card;
