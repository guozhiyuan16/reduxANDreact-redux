

function renderTitle(title) {
  let titleEle=document.querySelector('#title');
  titleEle.innerHTML=title.text;
  titleEle.style.color=title.color;
}
function renderContent(content) {
  let contentEle=document.querySelector('#content');
  contentEle.innerHTML=content.text;
  contentEle.style.color=content.color;
}
function renderApp() {
  renderTitle(store.getState().title);
  renderContent(store.getState().content);
}


let createStore = (reducer) =>{
  let state;
  let listeners = [];
  let getState = ()=>{
    return state
  }
  let dispatch = (action)=>{
    state = reducer(state,action);
    listeners.forEach(item=>item())
  }
  dispatch({type:"@@@@@"});
  let subscribe = (fn)=>{
    listeners.push(fn);
    return ()=>{
      listeners = listeners.filter(item=>item!==fn)
    }
  }
  return {
    getState,
    dispatch,
    subscribe

  }
}

let appState={
  title: {color: 'red',text: '标题'},
  content:{color:'green',text:'内容'}
}

const CHANGE_TITLE_COLOR = "CHANGE_TITLE_COLOR";
const CHANGE_TITLE_TEXT = "CHANGE_TITLE_TEXT";

const CHANGE_CONTENT_COLOR = "CHANGE_CONTENT_COLOR";
const CHANGE_CONTENT_TEXT = "CHANGE_CONTENT_TEXT";

let reducer = (state=appState,action)=>{
    switch (action.type){
      case CHANGE_TITLE_COLOR:
        return {...state,title:{...state.title,color:action.color}}
      case CHANGE_TITLE_TEXT:
        return {...state,content:{...state.title,text:action.text}}
      case CHANGE_CONTENT_COLOR:
        return {...state,content:{...state.content,color:action.color}}
      case CHANGE_CONTENT_TEXT:
        return {...state,content:{...state.content,text:action.text}}
        default:
          return state;
    }
}

let store = createStore(reducer);

renderApp();
let unsubscribe = store.subscribe(renderApp);

setTimeout(function () {
  store.dispatch({type:'CHANGE_TITLE_COLOR',color:'purple'});
  // unsubscribe();
  store.dispatch({type:'CHANGE_CONTENT_TEXT',text:'新标题'});
},2000);