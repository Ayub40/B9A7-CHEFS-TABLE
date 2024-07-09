
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Recipes from './components/Recipes/Recipes'
// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleWantTOCook = (recipe) => {
    // console.log(recipe);
    // toast('new todo is added');

    // const isRExist = bookmark.find(item => item.id == setBookmarks.id);
    // if (!isRExist) {
    //   setBookmarks([...bookmarks.setBookmarks]);
    // }
    // else {
    //   toast("already exist")
    // }
    const newBookmarks = [...bookmarks, recipe];
    setBookmarks(newBookmarks);
  }

  // const handleAddTodo = () => {
  //   toast('new todo');
  // }

  return (
    <>
      <Banner></Banner>
      <div className='md:flex max-w-7xl mx-auto'>
        <Recipes handleWantTOCook={handleWantTOCook}
        ></Recipes>
        <Bookmarks bookmarks={bookmarks}
        ></Bookmarks>
        {/* <ToastContainer /> */}
      </div>

    </>
  )
}

export default App
