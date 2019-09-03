import React, {useEffect} from 'react';
import GolbalStyle from 'styles/globals';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import  LeftSide from './Side/LeftSide';
import  RightSide from './Side/RightSide';

import { littleMon } from 'styles/mediaQueries';

const Wrapper = styled.div`
    width:60%;
    margin: 0 auto;

    ${littleMon} {
        width:80%;
    }
`;

const setFontSize = (designWidth, maxWidth)  => {
	var doc = document,
	win = window,
	docEl = doc.documentElement,
	remStyle = document.createElement("style"),
	tid;

	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;
		maxWidth = maxWidth || 540;
		width>maxWidth && (width=maxWidth);
		var rem = width * 100 / designWidth;
		remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
	}

	if (docEl.firstElementChild) {
		docEl.firstElementChild.appendChild(remStyle);
	} else {
		var wrap = doc.createElement("div");
		wrap.appendChild(remStyle);
		doc.write(wrap.innerHTML);
		wrap = null;
	}
	//要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
	refreshRem();

	win.addEventListener("resize", function() {
		clearTimeout(tid); //防止执行两次
		tid = setTimeout(refreshRem, 300);
	}, false);

	win.addEventListener("pageshow", function(e) {
		if (e.persisted) { // 浏览器后退的时候重新计算
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 300);
		}
	}, false);

	if (doc.readyState === "complete") {
		doc.body.style.fontSize = "16px";
	} else {
		doc.addEventListener("DOMContentLoaded", function(e) {
			doc.body.style.fontSize = "16px";
		}, false);
	}
}
const App = () => {
    useEffect(() => setFontSize(750,750));
    return (
        <>
            <GolbalStyle />
            <Wrapper>
                <Header />
                <Main />
                <Footer />
            </Wrapper>
            <LeftSide />
            <RightSide />
        </>
    );
}

export default App;
