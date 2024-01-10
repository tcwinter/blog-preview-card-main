import logo from './logo.svg';
import image from './assets/images/illustration-article.svg'
import avatar from './assets/images/image-avatar.webp'
import './App.css';

function App() {
  return (
    <>
      <Card>
        <CardImage />
        <LearningTag />
        <PublishedDate />
        <Heading />
        <ParagraphText />
        <Author />
      </Card>
    </>
  );
}

function Page(props) {
  return(
    <div className="page">
      {props.children}
    </div>
  );
}

function Card(props) {
  return(
    <div className="card">
      {props.children}
    </div>
  );
}

function CardImage(props) {
  return(
    <img className="card-img" src={image}></img>
  );
}

function LearningTag() {
  return(
    <h1>
      <span>Learning</span>
    </h1>
  );
}

function PublishedDate() {
  return(
    <p className="published-date">Published 21 Dec 2023</p>
  );
}

function Heading() {
  return(
    <h2>HTML & CSS foundations</h2>
  );
}

function ParagraphText() {
  return(
    <div>
      <p className="card-paragraph">These Languages are the backbone of every website, defining structure, content, and presentation.</p>
    </div>
  );
}

function Author(){
  return(
    <div className="card-author">
      <img className="avatar" src={avatar}></img> Greg Hooper
    </div>
  );
}

export default App;
