import React, { useState } from 'react';
import Card from '../Card';
import { NewsLeft, NewsRight, TitleWrap, TitleItem, List, ListItem, More, Wrapper, ImgWrap, AbsoluteWrap, Img, Arrow,Imgbox } from './styles';

import sc1 from 'static/sc1.jpg';
import sc2 from 'static/sc2.jpg';
import sc3 from 'static/sc3.jpg';
import sc4 from 'static/sc4.jpg';
import sc5 from 'static/sc5.jpg';
import sc6 from 'static/sc6.jpg';
import sc7 from 'static/sc7.jpg';
import sc8 from 'static/sc8.jpg';
import sc9 from 'static/sc9.jpg';
import sc10 from 'static/sc10.jpg';

const title = ['公告', '动态'];
const list = [
    [
        "《女子落语》今夏将有新动向",
        "四格漫画《琴浦小姐》完结",
        "海贼王》784话图透"
    ],
    [
        '「飙速宅男」一番赏主题周边',
        '“V-Star”化身最强声优英雄，替流浪“喵汪”星人呐喊',
        '中二祭日语翻唱比赛结果揭晓'
    ]
];
const sliderimg = [
    { src: sc1, name: '宫崎骏' },
    { src: sc2, name: '犬夜叉' },
    { src: sc3, name: '海贼王' },
    { src: sc4, name: '柯南' },
    { src: sc5, name: '浪客剑心' },
    { src: sc6, name: '全金属狂潮' },
    { src: sc7, name: '蜡笔小新' },
    { src: sc8, name: '超电磁炮' },
    { src: sc9, name: '飞轮少年' },
    { src: sc10, name: '火影忍者' }
];

const News = () => {
    const [show, setShow] = useState('0');
    const [left, setLeft] = useState(-3);
    return(
        <Card>
                <NewsLeft>
                    <TitleWrap>
                        {title.map((item, i) =>
                            <TitleItem key={`${i}`} id={`${i}`} show={show} onClick={(e) => setShow(`${e.target.id}`)}>
                                {item}
                            </TitleItem>
                        )}
                    </TitleWrap>
                    <List>
                        {list[`${show}`].map((item, i) => <ListItem key={i}>{item}</ListItem>)}
                        <More>更多>></More>
                    </List>
                </NewsLeft>
                <NewsRight>
                    <p>便捷服务</p>
                    <Wrapper>
                        <Arrow onClick={() => { if (left !== -6) { setLeft(left - 1) } return }}>&lt;</Arrow>
                        <ImgWrap>
                            <AbsoluteWrap style={{ left: `${left * 0.8}rem` }}>
                                {sliderimg.map((item,i)=>
                                    <Imgbox key={i}>
                                        <Img src={item.src} />
                                        <p>{item.name}</p>
                                    </Imgbox>
                                    )}
                            </AbsoluteWrap>
                        </ImgWrap>
                        <Arrow onClick={() => { if (left !== 0) { setLeft(left + 1) } return }}>&gt;</Arrow>
                    </Wrapper>
                </NewsRight>
            </Card>
    )
}
export default News;
