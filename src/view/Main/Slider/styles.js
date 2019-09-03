import styled, {keyframes} from 'styled-components';
import {colorsDark} from 'styles/paltte';
import size from 'styles/font';

export const ImgWrapper = styled.span`
    display:inline-block;
    width:100%;
    position:relative;
    overflow:hidden;
    &::after {
        content:'';
        display:block;
        margin-top:25%;
    }
`;

const show = keyframes`
    from {
        opacity: 0.3;
    }
    to {
        opacity: 1;
    }
`;
export const Img = styled.img`
    width:100%;
    margin:0;
    position:absolute;
    border-radius:.08rem .08rem 0 0;
    animation: ${show} 1s;
    display:${ props=>props.show === props.id ? 'block' : 'none'};
`;

export const ImgNav = styled.div`
    flex:1;
    width:15%;
    font-size:${size.title};
    text-align:center;
    padding: .1rem;
    border-right: .01rem solid ${colorsDark.border};
    border-top: ${ props=>props.show === props.id ? `.03rem solid ${colorsDark.border}` : ''};
`
export const Other = styled.div`
    flex:2;
    font-size:${size.title};
    padding: 0 .2rem;
    p {
        width:100%;
        margin-bottom:0;
        border-bottom:.01rem dotted ${colorsDark.border};
    }
`
