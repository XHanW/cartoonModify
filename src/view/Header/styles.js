import styled from 'styled-components';
import size from 'styles/font';

export const HeadWrap = styled.div`
    width:100%;
    margin-top:10px;
    display:flex;
    justify-content:space-between;
`;
export const Wrap = styled.div``;

export const LangLink = styled.a`
        color:#333;
        margin-left:5px;
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
        margin-left:5px;
    }
    [type='button'] {
        width:.4rem;
        outline:none;
        border-radius:5px;
        padding:0;
        cursor: pointer;
        &:active {
            background-color: rgba(14, 115, 247, 0.863);
          }
    }
`;
