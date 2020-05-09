import React,{ useEffect , useCallback} from "react";
import { Button, NavBar, Icon } from 'antd-mobile';
import { useMappedState, useDispatch } from "redux-react-hook";
import { useHistory } from "react-router-dom";
import './index.less';

function App() {
    const mapState = useCallback(
      state => ({
        counter: state.counter,
        token: state.token,
      }),
      []
    );
    const {counter, token} = useMappedState(mapState);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
      console.log(counter)
    },[counter]);
    
    useEffect(() => {
      console.log(token)
    },[token]);


    return (
      <div className="App">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.push("/996")}
        >异常页面</NavBar>
        <div className="counter">
            Count: {counter}
        </div>
        <div>
            Token: {token}
        </div>
        <div>
          <Button onClick={() => dispatch({ type: "INCREMENT" })}>增加</Button>
          <Button onClick={() => dispatch({ type: "DECREMENT" })}>减少</Button>
        </div>
      </div>
    );
}

export default App;