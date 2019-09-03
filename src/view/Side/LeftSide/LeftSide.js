import React,{useState} from 'react';
import {LeftWrap,ListItem,ClickBtn} from './styles';

const content = ["经典回顾", "新番追击", "激动人心", "情节再现", "会员专享", "在线查询", "漫画世界"]

const LeftSide = () => {
    const [left,setLeft] = useState(false)
    const handleClick = (e)=>{
        setLeft(!left)
    }
    return(
        <LeftWrap style={{left:`${left?0:-1.25}rem`}}>
            {content.map((item,i)=>
                <ListItem key={i}>{item}</ListItem>
                )}
                <ClickBtn onClick={handleClick}>点我</ClickBtn>
        </LeftWrap>
    )
}
export default LeftSide;
