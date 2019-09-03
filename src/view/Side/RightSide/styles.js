import styled from 'styled-components';
import {colorsDark} from 'styles/paltte';
import size from 'styles/font';

export const RightWrap = styled.div`
    position:fixed;
    z-index:6666;
    top:50%;
    right:1rem;
    transform:translateY(-50%);
    width:3rem;
    text-align:center;
`;
export const CloseBtn = styled.div`
    position:absolute;
    font-size:${size.title};
    color:#fff;
    top:0;
    right:0.05rem;
    cursor:pointer;
    &:hover{
        color:#666;
    }
`;
export const Img = styled.img`
    width:3rem;
    height:2rem;
`;
export const Link = styled.a`
    font-size:.14rem;
    color:${colorsDark.text};
    cursor:pointer;
    &:hover{
        color:${colorsDark.textSecondry}
    }
`;
