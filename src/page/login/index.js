import React from "react";
import { Button, NavBar, Icon, WhiteSpace  } from 'antd-mobile';
import { useDispatch } from "redux-react-hook";
import { useHistory } from "react-router-dom";

//import axios from '@/utils/service';

function Login() {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleClick = () => {
	    dispatch({type: "LOGIN",value:'这是一个TOKEN'});
	    history.push("/");
	    //history.push("/404");
	}

	return (
	    <div className="App">
	    	<NavBar
		      mode="light"
		      icon={<Icon type="left" />}
		      onLeftClick={() => console.log('onLeftClick')}
		    >登录授权</NavBar>
		    <WhiteSpace size="xs" />
		    <WhiteSpace size="xs" />
	      	<Button onClick={handleClick}>LOGIN</Button>
	    </div>
	);
}

export default Login;