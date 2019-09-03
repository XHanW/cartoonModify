import React, {useState} from 'react';
import { RightWrap, CloseBtn, Img, Link } from './styles';
import aside from 'static/aside.jpg';

const RightSide = () => {
    const [isClose, setClose] = useState(true);
    return(
        <>
            {isClose && <RightWrap>
                <CloseBtn onClick={()=>setClose(!isClose)}>X</CloseBtn>
                <Img src={aside}/>
                <Link>最美幽灵公主</Link>
            </RightWrap>}
        </>
    )
}

export default RightSide;
