import styled, { keyframes } from 'styled-components';
import { colorsDark } from 'styles/paltte';
import size from 'styles/font';
import { mobile } from 'styles/mediaQueries';


export const Header = styled.p`
    margin:0;
    font-size:${size.title};
    width:100%;
    padding: .10rem .20rem;
    border-bottom:.01rem solid ${colorsDark.border};
`;
export const LeftWrapper = styled.div`
    flex:1;
    display:flex;
    flex-flow:column wrap;
    justify-content:space-between;
    border-right:.01rem solid ${colorsDark.border};
`;
export const ServerBuy = styled.div`
    width:60%;
    height:18%;
    margin:.15rem auto;
    line-height:.40rem;
    text-align:center;
    cursor:pointer;
    opacity:.8;
    border-radius:.02rem;
    color:#333;
    font-size:${size.text};
    border:.01rem solid #666;
    &:hover{
        opacity:1;
    }
`;
export const RightWrapper = styled.div`
    flex:3;
`;
export const TitleWrap = styled.div`
    padding-left:.40rem;
    margin-top:.15rem;
    display:flex;
    justify-content:center;
`
export const ServerTitle = styled.span`
    cursor:pointer;
    width:20%;
    text-align:center;
    color:${props => props.show === props.id ? `${colorsDark.title}` : ''};
    font-size:${props => props.show === props.id ? `${size.title}` : `${size.text}`};
    &:not(:last-child) {
        border-right:.01rem solid ${colorsDark.border};
    }
`;
export const ServerWrap = styled.div`
    display:flex;
    justify-content:space-between;
    position:relative;
    padding:.20rem 0 0 0;
    ${mobile} {
        justify-content:center;
    }
`;
export const ImgWrap = styled.ul`
    flex:1
    display:flex;
    justify-content:center;
    ${mobile} {
        padding:0;
    }
`;
export const Arrows = styled.div`
    user-select: none;
    height: .40rem;
    font-size: .30rem;
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
const show = keyframes`
    from {
        opacity:0.3;
    }
    to {
        opacity:1;
    }
`;
export const Img = styled.img`
    animation: ${show} .8s;
    margin:0 .20rem;
    max-width:1.5rem;
    max-height:1rem;
    display:${props => Math.abs(props.show) === props.id ? 'block' : 'none'};
`;
export const ListLitileWrap = styled.ul`
    flex:1;
    margin-left:1rem;
    a{
        font-size:.15rem;
        line-height:.25rem;
    }
    p{
        margin:0;
        font-size:.20rem;
    }
    ${mobile} {
        margin:.2rem 0;
    }
`;
export const ListWrap = styled.ul`
    flex:1.5;
    margin-left:.40rem;
    ${mobile} {
        list-style:inside;
        margin:.2rem 0;
        padding:0;
    }
`;
export const ListItem = styled.li`
    font-size:${size.small};
`;
export const ListLink = styled.a`
    color:${colorsDark.text};
    &:hover {
        text-decoration:underline;
    }
`;
export const More = styled.span`
    color:${colorsDark.more}
    font-size:${size.small}
    margin-left:50%;
    cursor:pointer;
    white-space:nowrap;
    &:hover{
        text-decoration:underline;
    }
`;
