import styled from 'styled-components';
import size from 'styles/font';
import { tablet } from 'styles/mediaQueries';

export const HeadWrap = styled.div`
    width:100%;
    margin-top:.1rem;
    display:flex;
    justify-content:space-between;
    ${tablet} {
        margin:0;
    }
`;
export const Wrap = styled.div``;

export const LangLink = styled.a`
        color:#333;
        margin-left:.05rem;
        font-size:${size.text};
        white-space:nowrap;
        &:hover {
            text-decoration:underline;
        }
`;
export const Form = styled.div`
    input {
        font-size: ${size.small};
        width:1rem;
        margin-left:.05rem;
    }
    [type='button'] {
        width:.4rem;
        outline:none;
        border-radius:.05rem;
        padding:0;
        cursor: pointer;
        &:active {
            background-color: rgba(14, 115, 247, 0.863);
          }
    }
`;
