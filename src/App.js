import './App.css';
import Post from './Components/Post';
import Header from './Components/Header';

function App() {
    const posts = [
      {
        img_url : "image/flower.jpeg",
        caption : "Flower"
      },
      {
        img_url : "image/cat.jpeg",
        caption : "Cat"
      },
      {
        img_url : "image/books.jpeg",
        caption : "Books"
      },
      {
        img_url : "image/sky.jpeg",
        caption : "Sky"
      }
    ]
  return (
    <div className="ZaceBookApp">
      <Header/>
      {
        posts.map((record,index) => {
          return <Post key={index} img_url={record.img_url} caption={record.caption} />
        })
      }
    </div>
  );
}

export default App;
