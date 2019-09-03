import React, { useState } from 'react';
import Card from '../Card';

import { MainTitle, HelpWrap, Menu, MenuItem, MenuList, ListWrap, ListItem } from './styles';

const navs = ["首页", "热播动漫", "经典动漫", "动漫相关", "会员业务", "关于"];
const menus = {
    首页: {},
    热播动漫: {
        first: [
            "犬夜叉第56集",
            "《海贼王》下周休刊",
            "全职猎人最终集",
            "火影忍者番外篇",
            "赢者第516集",
            "赢者第516集"
        ],
        second: [
            "《女子落语》今夏将有新动向",
            "四格漫画《琴浦小姐》完结",
            "全职猎人最终集",
            "《可塑性记忆》前传漫画4",
            "漫画《小小起司猫》6"
        ],
        third: [
            "海贼王第2345集",
            "《魔法使的新娘》作者新作",
            "火影忍者番外篇",
            "赢者第516集"
        ]
    },
    经典动漫: {
        first: [
            "《PUPA》短篇新作即将开载",
            "海贼王第2345集",
            "《海贼王》784话图透",
            "火影忍者番外篇",
            "《不可思议少女》续作连载再开",
            "《海贼王》784话图透"
        ],
        second: [
            "犬夜叉第56集",
            "《海贼王》下周休刊",
            "全职猎人最终集",
            "火影忍者番外篇",
            "赢者第516集"
        ],
        third: [
            "《一周的朋友》新连载预告",
            "《xxxHOLiC?戻》时隔九月将继续连载",
            "四格漫画《琴浦小姐》完结",
            "赢者第516集",
            "赢者第516集"
        ]
    },
    动漫相关: {
        first: [
            "绪方波子氏新漫画「卟嘶卟嘶」已发售",
            "《bleach》作者生病休刊一期",
            "赢者第516集",
            "久住昌之新作秋叶原热销中"
        ],
        second: [
            "犬夜叉第56集",
            "《早安、荆棘公主》1卷 “既有悬疑又有恐怖还有恋爱”",
            "全职猎人最终集"],
        third: [
            "《一周的朋友》新连载预告",
            "《xxxHOLiC?戻》时隔九月将继续连载",
            "四格漫画《琴浦小姐》完结",
            "赢者第516集",
            "赢者第516集"
        ]
    },
    会员业务: {
        first: [
            "犬夜叉第56集",
            "《早安、荆棘公主》1卷 “既有悬疑又有恐怖还有恋爱”",
            "全职猎人最终集"],
        second: [
            "绪方波子氏新漫画「卟嘶卟嘶」已发售",
            "《bleach》作者生病休刊一期",
            "赢者第516集",
            "久住昌之新作秋叶原热销中"
        ],
        third: [

        ]
    },
    关于: {}
};
const MainHeader = () => {
    const [show, setShow] = useState('首页');

    return (
        <Card>
            <MainTitle>
                动漫前线
                </MainTitle>
            <HelpWrap>
                <span>热线：0755-566xxxx</span>
                <input type='text' placeholder='请输入关键词' />
                <input type='button' value='搜索' />
            </HelpWrap>
            <Menu>
                {navs.map(item =>
                    <MenuItem key={item}>
                        <a
                            onMouseOver={e => setShow(e.target.innerHTML)}
                            // onMouseOut={e => setShow(show)}
                            href="##"
                        >
                            {item}
                        </a>
                    </MenuItem>

                )}
                {!(Object.keys(menus[`${show}`]).length === 0) &&
                    <MenuList className="showList">
                        <ListWrap >
                            {menus[`${show}`]['first'].map((item, i) =>
                                <ListItem key={i}>{item}</ListItem>
                            )}
                        </ListWrap>
                        <ListWrap >
                            {menus[`${show}`]['second'].map((item, i) =>
                                <ListItem key={i}>{item}</ListItem>
                            )}
                        </ListWrap>
                        <ListWrap >
                            {menus[`${show}`]['third'].map((item, i) =>
                                <ListItem key={i}>{item}</ListItem>
                            )}
                        </ListWrap>
                    </MenuList>
                }
            </Menu>
        </Card>
    )
}
export default MainHeader;
