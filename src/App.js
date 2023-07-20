import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react';
import ClassCounter from './components/ClassCounter';
import { HookCounter } from './components/HookCounter';
import ClassCounter2 from './components/ClassCounter2';
import { HookCounter2 } from './components/HookCounter2';
import { HookCounter3 } from './components/HookCounter3';
import { HookCounter4 } from './components/HookCounter4';
import ClassCounter1 from './components/ClassCounter1';
import { HookCounter1 } from './components/HookCounter1';
import ClassMouse from './components/ClassMouse';
import { HookMouse } from './components/HookMouse';
import { MouseContainer } from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import { IntervalHookCounter } from './components/IntervalHookCounter';
import { DataFetching } from './components/DataFetching';
import { ComponentC } from './components/ComponentC';
import { Counter1 } from './components/Counter1';
import { Counter2 } from './components/Counter2';
import { Counter2Action } from './components/Counter2Action';
import { Counter3 } from './components/Counter3';
import { ComponentA } from './components/ComponentA';
import { ComponentB } from './components/ComponentB';
import { DataFetching1 } from './components/DataFetching1';
import { DataFetching2 } from './components/DataFetching2';
export const UserContext = React.createContext();
export const CompanyContext = React.createContext();
export const CountContext=React.createContext();


const initState=0
const reducer=(state,action)=>{
      switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
                return initState
        default:
            return state
      }
}
function App() {
 // const[count,dispatch]=useReducer(reducer,initState);
  return (
   // <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className="App">
       {/* <ClassCounter/> */}
       {/* <HookCounter/> */}
       {/* <ClassCounter2/> */}
       {/* <HookCounter2/> */}
       {/* <HookCounter3/> */}
       {/* <HookCounter4/> */}
       {/* <ClassCounter1/> */}
       {/* <HookCounter1/> */}
       {/* <ClassMouse/> */}
       {/* <MouseContainer/> */}
       {/* <IntervalClassCounter/> */}
       {/* <IntervalHookCounter/> */}
       {/* <DataFetching/> */}
       {/* <UserContext.Provider value='fathima'>
        <CompanyContext.Provider value='CGG'>
       <ComponentC/>
       </CompanyContext.Provider>
       </UserContext.Provider> */}
       {/* <Counter1/> */}
       {/* <Counter2/> */}
       {/* <Counter2Action/> */}
       {/* <Counter3/> */}
       {/* count-{count}
       <ComponentA/>
       <ComponentB/>
       <ComponentC/> */}

       {/* <DataFetching1/> */}
       <DataFetching2/>
     
    </div>
    //</CountContext.Provider>
  );
}

export default App;
