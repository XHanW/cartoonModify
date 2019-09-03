import styled from 'styled-components';
import { colorsDark } from 'styles/paltte';
import size from 'styles/font';
import { tablet , littleMon} from 'styles/mediaQueries';


export const MainTitle = styled.h1`
    width:100%;
    font-size:.4rem;
    font-weight:bolder;
    color:${colorsDark.title};
    padding-left:.3rem;
    margin-bottom:0;
    position:relative;
    &::after {
        content:'';
        width:95%;
        border:.01rem solid ${colorsDark.title};
        position:absolute;
        top:.6rem;
        left:50%;
        z-index:666;
        transform:translateX(-50%);
    }
    ${tablet} {
        padding-right:60%;
    }
`;
export const HelpWrap = styled.div`
    width:50%;
    align-self:flex-end;
    font-size:${size.small};
    display:flex;
    margin-left:50%;
    justify-content:flex-end;
    position:relative;
    padding-right:.3rem;
    top:-.2rem;
    input{
        margin-left:.1rem;
        padding:0;
        height:.25rem;
        font-size:${size.small};
    }
    [type='button'] {
        width:.4rem;
        outline:none;
        border-radius:5px;
        cursor: pointer;
        &:active {
            background-color: rgba(14, 115, 247, 0.863);
          }
    }
    ${littleMon} {
        span{
            display:none;
        }
    }
`;

export const Menu = styled.ul`
    width:100%;
    display:flex;
    justify-content:space-around;
    font-size:${size.title};
    margin:0;
    padding:0;
    position:relative;
    li:hover~.showList{
        display:flex !important;
    }
`;
export const MenuItem = styled.li`
    list-style:none;
    a{
        display:block;
        padding-bottom:.2rem;
        color:${colorsDark.text};
        &:hover {
                 color:${colorsDark.textSecondry}
            }
    }
`;
export const MenuList = styled.div`
    position:absolute;
    width:100%;
    background:#fff;
    border: 1px solid ${colorsDark.border};
    display:none;
    flex-wrap:wrap;
    justfy-content:flex-start;
    top:.45rem;
    z-index:666;
    &:hover {
        display:flex;
    }
`;
export const ListWrap = styled.ul`
    width:25%;
    margin:.2rem .1rem;
    &:not(:last-child){
        border-right:1px dotted ${colorsDark.border};
    }
    ${tablet} {
        width:100%;
        margin:0;
        padding:.2rem .5rem;

        &:not(:first-child){
            border-top:1px dotted ${colorsDark.border};
        }
    }
`;
export const ListItem = styled.li`
    color:${colorsDark.text};
    font-size:.14rem;
    cursor:pointer;
    &:hover{
        color:${colorsDark.textSecondry};
    }
`;
