import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; //state 사용

function Header(props){ //사용자 정의 태그(컴포넌트)를 만들 때는 반드시 대문자로 시작해야함
  console.log('props',props, props.title); //props에 객체가 들어옴
  return <header>
  <h1><a href='/' onClick={(event)=>{ {/*event객체는 이벤트 상황을 제어할 수 있는 여러 정보와 기능이 들어있음*/}
    event.preventDefault(); //a태그의 기본 동작을 방지함
    props.onChangeMode(); // 함수 호출
  }}>{props.title}</a></h1> {/*{}는 표현식으로 취급됨*/}
</header>
}
function Nav(props){ 
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id)); //target : event를 유발 시킨 태그를 가리킴
      }}>{t.title}</a>
      </li>); //동적으로 만든 각 태그들은 key라는 prop을 가져야하고, key라는 prop은 각 반복문 안에서 유니크해야함
  }
  return <nav>
  <ol>
    {lis} {/*리액트에서 배열의 원소들을 하나씩 꺼내서 배치시켜줌*/}
  </ol>
</nav>
}
function Article(props){ 
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}
function Create(props){
  return <article>
  <h2>Create</h2>
  <form onSubmit={event=>{
    event.preventDefault();
    const title = event.target.title.value; //target : event를 유발 시킨 태그 -> form태그
    const body = event.target.body.value;
    props.onCreate(title, body);
  }}> {/*submin버튼을 클릭했을 때 form태그에서 발생하는 이벤트*/}
    <p><input type="text" name="title" placeholder='title'/></p>
    <p><textarea name='body' placeholder='body'></textarea></p>
    <p><input type='submit' value="Create"></input></p>
  </form>
</article>
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ])
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      console.log(topics[i].id, id);
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  } else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId,title:_title, body:_body}
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{ 
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      <a href='/create' onClick={event=>{
        event.preventDefault();
        setMode('CREATE')
      }}>Create</a>
    </div>
  );
}

// prop은 컴포넌트를 사용하는 외부자를 위한 데이터
// state는 컴포넌트를 만드는 내부자를 위한 데이터

export default App;
