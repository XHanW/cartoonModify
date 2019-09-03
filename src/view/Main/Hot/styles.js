import styled from 'styled-components';
import {colorsDark} from 'styles/paltte';
import  size from 'styles/font';
import { mobile, littleMon } from 'styles/mediaQueries';

export const HotLeft = styled.div`
    flex:5;
    border-right:.01rem solid ${colorsDark.border};
`
export const LeftHead = styled.div`
    padding:.10rem .20rem;
    margin-right:.20rem;
    font-size:${size.title};
    border-bottom:.01rem dotted ${colorsDark.border};
`
export const ContentWrap = styled.ul`
    margin:0;
    padding:.10rem .10rem .10rem .20rem;
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
`;
export const ItemWrap = styled.div`
    width:30%;
    margin:.20rem 5% 0 10%;
    pading-bottom:.10rem;
    border-bottom: .01rem solid ${colorsDark.border}
    ${littleMon} {
        width:100%;
    }
    ${mobile} {
        width:100%;
    }
`;
export const ItemTitle = styled.div`
    padding-left:.15rem;
    font-size:.15rem;
`;
export const ListItem = styled.li`
    list-style:inside;
    color:${colorsDark.text};
    font-size:${size.small};
    width:100%;
    margin-bottom:.05rem;
    cursor:pointer;
    &:hover{
        text-decoration:underline;
    }
`;
export const More = styled.span`
    color:${colorsDark.more}
    font-size:${size.small}
    margin-top:.20rem;
    margin-left:80%;
    cursor:pointer;
    white-space:nowrap;
    &:hover{
        text-decoration:underline;
    }
`;

export const HotRight = styled.div`
    flex:2;
    ${littleMon} {
       flex:3;
    }
    ${mobile} {
       flex:3;
    }
`
export const RithtHead= styled.div`
    padding:.10rem .20rem;
    margin-left:.20rem;
    font-size:${size.title};
    border-bottom:.01rem dotted ${colorsDark.border};
`
