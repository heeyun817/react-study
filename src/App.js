import logo from './logo.svg';
import './App.css';
function Header(props){ //사용자 정의 태그(컴포넌트)를 만들 때는 반드시 대문자로 시작해야함
  console.log('props',props, props.title); //props에 객체가 들어옴
  return <header>
  <h1><a href='/'>{props.title}</a></h1> {/*{}는 표현식으로 취급됨*/}
</header>
}
function Nav(props){ 
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>); //동적으로 만든 각 태그들은 key라는 prop을 가져야하고, key라는 prop은 각 반복문 안에서 유니크해야함
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
function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
