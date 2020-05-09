import React from "react";
import { NavBar, Icon,WhiteSpace } from 'antd-mobile';
import { useHistory } from "react-router-dom";

function NotFound() {
 	const history = useHistory();
  	return (
    	<div className="App">
    		<NavBar
		      mode="light"
		      icon={<Icon type="left" />}
		      onLeftClick={() => history.push("/")}
		    >返回首页</NavBar>
		    <WhiteSpace size="xs" />
		    <WhiteSpace size="ls" />
       		页面飞走了~~
    	</div>
  	);
}

export default NotFound;