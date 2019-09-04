import styled from 'styled-components';
import {colorsDark} from 'styles/paltte';
import size from 'styles/font';

export const LeftWrap = styled.ul`
    position:fixed;
    top:50%;
    transform:translateY(-50%);
    width:1.25rem;
    padding:.10rem 0;
    background:#fff;
    list-style:none;
    text-align:center;
    border:.01rem solid ${colorsDark.border};
    transition:left 1s;
`;
export const ListItem = styled.li`
    width:1.00rem;
    font-size:.14rem;
    color:${colorsDark.text};
    margin:.05rem auto;
    &:hover{
        color:#DD6F00;
    }
`;
export const ClickBtn = styled.div`
    position:absolute;
    top:.10rem;
    left:103%;
    color:#fff;
    font-size:${size.text};
    width:.40rem;
    height:.30rem;
    padding:.03rem;
    white-space:nowrap;
    border:.01rem solid #666;
    background:blue;
    cursor:pointer;
    transition:transform 1s;
    &:hover{
        transform: scale(1.1,1.2);
    }
`;
