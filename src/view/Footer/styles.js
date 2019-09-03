import styled from 'styled-components';
import {colorsDark} from 'styles/paltte';
import size from 'styles/font';

export const FooterWrap = styled.div`
    width:100%;
    margin-top:.30rem;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    color:${colorsDark.text};
    text-align:center;
`;
export const Head = styled.li`
    width:100%;
    color:#666;
    font-size:${size.small};
    text-align:center;
    position:relative;
    &::after {
        content:'';
        position:absolute;
        z-index:66666;
        width:100%;
        top:.3rem;
        height:.02rem;
        left:-50%;
        transform:translateX(50%);
        background:#ccc;
    }
`;
export const List = styled.ul`
    list-style:none;
    width:100%;
    font-size:${size.small};
    margin:.20rem auto .10rem;
    display:flex;
    justify-content:center;
`;
export const ListItem = styled.li`
    color:#666;
    cursor:pointer;
    padding:.01rem .05rem;
    &:hover{
        color:#000;
    }
    &:not(:last-child){
        border-right:.01rem solid #ccc;
    }
`;
export const CopyRight = styled.div`
    width:100%;
    color:#666;
    font-size:${size.small};
    text-align:center;
`;
