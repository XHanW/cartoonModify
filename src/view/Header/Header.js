import React from 'react';
import {HeadWrap,Wrap,LangLink,Form} from './styles';

const Header = () => {
    return (
        <HeadWrap>
            <Wrap>
                <LangLink href="#">中文</LangLink>
                <LangLink href="#">英文</LangLink>
                <LangLink href="#">日文</LangLink>
            </Wrap>
            <Form>
                <label>
                    <input type="text" placeholder="用户名"/>
                </label>
                <label>
                    <input type="password" placeholder="密码"/>
                </label>
                <label>
                    <input type="button" value="登陆"/>
                </label>
            </Form>
        </HeadWrap>
    )
}
export default Header;
