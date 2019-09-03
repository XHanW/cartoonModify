import React from 'react';
import {FooterWrap,Head,List,ListItem,CopyRight} from './styles';

const Footer = () => {
    return (
        <React.Fragment>
            <FooterWrap>
                <Head>服务热线：0755-566xxxx</Head>
                <List>
                    <ListItem>网站</ListItem>
                    <ListItem>版权声明</ListItem>
                    <ListItem>使用条款</ListItem>
                    <ListItem>相关</ListItem>
                    <ListItem>联系我们</ListItem>
                </List>
                <CopyRight>Copyright@ XXX</CopyRight>
            </FooterWrap>
        </React.Fragment>
    )
}
export default Footer;
