import styled from 'styled-components';
import { colorsDark } from 'styles/paltte';
import size from 'styles/font';

export const NewsLeft = styled.div`
    flex:3
    border-right:.01rem solid ${colorsDark.border}
`;

export const TitleWrap = styled.div`
    padding-left:.4rem;
    margin-top:.05rem;
    display:flex;
    justify-content:flex-start;
`;

export const TitleItem = styled.span`
    cursor:pointer;
    font-size:${size.title};
    padding:.05rem .2rem;
    color:${props => props.show === props.id ? `${colorsDark.title}` : ''};
    &:not(:last-child) {
        border-right:.01rem solid ${colorsDark.border};
    }

`;
export const List = styled.ul`
    margin:.2rem 0 .05rem 0;
    list-style:inside;
    padding-left:0.3rem;
`;

export const ListItem = styled.li`
    color:${colorsDark.text};
    font-size:${size.small};
    margin:.03rem 0;
    
    cursor:pointer;
    &:hover{
        text-decoration:underline;
    }
`;

export const More = styled.span`
    color:${colorsDark.more}
    font-size:${size.small}
    margin-left:80%;
    cursor:pointer;
    white-space:nowrap;
    &:hover{
        text-decoration:underline;
    }
`;

export const NewsRight = styled.div`
    flex:5;
    p {
        font-size:${size.title};
        font-weight:bloder;
        width:100%;
        margin: .1rem .4rem;
    }
`;
export const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    margin-left:.4rem;
`;
export const ImgWrap = styled.div`
    overflow:hidden;
    width:60%;
    padding-top:.2rem;
    height:1rem;
    position:relative;
`;
export const AbsoluteWrap = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-start;
    position:absolute;
    white-space:nowrap;
    transition:left .8s;
`;
export const Img = styled.img`
    margin-right:.30rem;
    width:.50rem;
    height:.50rem;
`;
export const Imgbox = styled.a`
    p{
        margin:0;
        width:.50rem;
        font-size:.10rem;
        text-align:center;
    }
`;

export const Arrow = styled.div`
    user-select: none;
    height: .40rem;
    font-size: ${size.large};
    cursor: pointer;
    margin-top: .30rem;
    padding: 0 .03rem;
    line-height: .40rem;
    display: inline-block;
    border-radius: .02rem;
    border: .01rem solid #ccc;
    &:hover {
    background: #bebcbc;
    }
`;
