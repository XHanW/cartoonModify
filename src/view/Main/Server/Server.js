import React, { useState } from 'react';
import Card from '../Card';
import { Header, LeftWrapper, RightWrapper, ServerBuy, TitleWrap, ServerTitle, ServerWrap, ImgWrap, Arrows, Img, ListLitileWrap, ListWrap, ListItem, ListLink, More } from './styles';
import h1 from 'static/h1.jpg';
import h2 from 'static/h2.jpg';
import h3 from 'static/h3.jpg';
import h4 from 'static/h4.jpg';
import h5 from 'static/h5.jpg';
import h6 from 'static/h6.jpg';
import h7 from 'static/h7.jpg';
import h8 from 'static/h8.jpg';

const text = [
    [
        "日媒曝光“不被废柴男吸引法则”",
        "腐女做的蛋糕太屌了",
        "国外玩家狂喷游戏海量付费DLC",
        "日本推出柯南智能侦探眼镜"
    ],
    [
        "《刀剑神域》诗乃最新手办",
        "御宅与御宅爱好之间的战争！",
        "为了祖国花朵文化部才怒下重手？",
        "那些年天朝“翻拍”过的日本动画"
    ],
    [
        " 芦月祭3.0·首届东营动漫文化节",
        "《hurly burly》唯美旗袍弱音 Cos",
        "学习机变成游戏机到底谁该背锅",
        "《黑子的篮球》中的逆天技能"
    ],
    [
        "年套餐购买最新优惠",
        "月套餐购买热门",
        "日套餐购买推荐"
    ]
];
const twoText = [
    [],
    [
        "年套餐购买最新优惠",
        "月套餐购买热门",
        "日套餐购买推荐"
    ],
    [
        "会员登陆方式",
        "会员账号管理",
        "个人资料提交/更改"
    ]
]
const imgs = [h1, h2, h3, h4, h5, h6, h7, h8];
const Server = () => {
    const [shows, setShows] = useState('0');
    const [showImg, setShowImg] = useState(0);

    const LeftShow = () => {
        let Next;
        if (showImg <= 0) { Next = (showImg + 7) % 8 }
        else { Next = (showImg - 1) % 8 }
        setShowImg(Next)
    }
    const RightShow = () => {
        let Next = (Math.abs(showImg) + 1) % 8
        setShowImg(Next)
    }
    return (
        <Card>
            <Header>
                会员服务
            </Header>
            <LeftWrapper>
                <ServerBuy>
                    年套餐购买
                </ServerBuy>
                <ServerBuy>
                    月套餐购买
                </ServerBuy>
                <ServerBuy>
                    日套餐购买
                </ServerBuy>
            </LeftWrapper>
            <RightWrapper>
                <TitleWrap>
                    <ServerTitle id={'0'} show={shows} onClick={(e) => setShows(e.target.id)}>头像</ServerTitle>
                    <ServerTitle id={'1'} show={shows} onClick={(e) => setShows(e.target.id)}>资料</ServerTitle>
                    <ServerTitle id={'2'} show={shows} onClick={(e) => setShows(e.target.id)}>会员功能</ServerTitle>
                </TitleWrap>
                <ServerWrap>
                    {shows === '0' && <ImgWrap>
                        <Arrows onClick={LeftShow}>&lt;</Arrows>
                        {imgs.map((item, i) => <Img show={showImg} id={i} key={i} src={item} />)}
                        <Arrows onClick={RightShow}>&gt;</Arrows>
                    </ImgWrap>
                    }
                    {shows !== '0' && <ListLitileWrap>
                        {shows === '1' ? <p>重要资料</p> : <p>重点推荐</p>}
                        {twoText[`${shows}`].map((item, i) =>
                            <ListItem key={i}>
                                <ListLink href="#">{item}</ListLink>
                            </ListItem>
                        )}
                    </ListLitileWrap>
                    }
                    <ListWrap>
                        {text[`${shows}`].map((item, i) =>
                            <ListItem key={i}>
                                <ListLink href="#">{item}</ListLink>
                            </ListItem>
                        )}
                        <More>更多>></More>
                    </ListWrap>
                </ServerWrap>
            </RightWrapper>

        </Card>
    )
}
export default Server;
