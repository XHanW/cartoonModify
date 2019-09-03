import React from 'react';
import Card from '../Card';
import {HotLeft,LeftHead,ContentWrap,ItemWrap,ItemTitle,ListItem,More,HotRight,RithtHead} from './styles';

const hot = {
    title: [
        "最新",
        "经典动漫",
        "新番动漫",
        "漫画热点",
        "动漫前沿",
        "实时追踪"
    ],
    content: [
        "12岁少女论文抗议游戏性别歧视",
        "韩国版《死亡笔记》定妆照",
        "樱井光新作《Fate/Labyrinth》开载",
        "《海贼王》下周休刊",
        "《四月是你的谎言》结局解读",
        "《横乳版开胸衣》强大威力"
    ]
};

const content = [
    "丧心病狂！你选左边，还是右边？",
    "二次元少女咸湿百合图集",
    "《路人女主》霞之丘诗羽图集",
    "「闪乱神乐」葛城手办",
    "一集日本动画要花多少钱？",
    "《K》动画2期没开播就先来杀必死",
    "真实版“后宫学校”的开学典礼",
    "部分人看到是透明的裙子",
    "黑暗恐怖动画电影一览",
    "一集日本动画要花多少钱？"
];

const Hot = () => {
    return(
        <Card>
            <HotLeft>
            <LeftHead>动漫热讯</LeftHead>
            <ContentWrap>
                {hot['title'].map((item,i)=>
                    <ItemWrap key={i}>
                        <ItemTitle>{item}</ItemTitle>
                        <ListItem>{hot['content'][i]}</ListItem>
                    </ItemWrap>
                )}
                <More>更多>></More>
            </ContentWrap>
            </HotLeft>
            <HotRight>
                <RithtHead>
                    相关咨询
                </RithtHead>
                <ContentWrap>
                    {content.map((item,i)=><ListItem key={i}>{item}</ListItem>)}
                    <More>更多>></More>
                </ContentWrap>
            </HotRight>
        </Card>
    )
}
export default Hot;
