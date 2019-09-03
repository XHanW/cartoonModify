import React, { useState, useEffect, useRef } from 'react';
import Card from '../Card';
import { ImgWrapper, Img, ImgNav, Other } from './styles';

import s1 from 'static/s1.jpg';
import s2 from 'static/s2.jpg';
import s3 from 'static/s3.jpg';
import s4 from 'static/s4.jpg';

const contents = [["犬夜叉", "海贼王", "火影忍者", "宫崎骏"], ["经典动漫", "热播动漫", "完结漫画", "温馨治愈"]];
const imgs = [s1, s2, s3, s4];

const Slider = () => {
    const [shows, setShows] = useState(0);
    const intervalRef = useRef(null);
    const handleClick = (e) => {
        let index = Number(e.target.id);
        setShows(index);
    }
    let auto = () => {
        let timer = setInterval(() => setShows((shows + 1) % 4), 3500);
        intervalRef.current = timer;
    }
    useEffect(() => {
        auto();
        return () => { clearInterval(intervalRef.current) }
    })
    return (
        <Card>
            <ImgWrapper>
                {imgs.map((item, i) => <Img key={i} id={i} show={shows} src={item} />)}
            </ImgWrapper>
                {contents[0].map((item, i) => <ImgNav key={i} show={shows} onClick={handleClick} id={i}>{item}<br />{contents[1][i]}</ImgNav>)}
            <Other>
                <p>关注我们</p>
                xxxxxxxxxxx@163.com
            </Other>
        </Card>
    )
}

export default Slider;
