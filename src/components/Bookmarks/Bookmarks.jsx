import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';



const Bookmarks = ({ bookmarks }) => {

    return (
        <div className="md:w-1/2 bg-[#1111110D] ml-4 mt-44 pt-4 rounded-xl">
            <h5 className="text-2xl font-semibold text-center mt-3">Want to cook: {bookmarks.length}</h5>
            <div className='flex gap-36 ml-5'>
                <h6 className='ml-1'>Name</h6>
                <h6 className=''>Time</h6>
                <h6 className="">Calories</h6>
            </div>
            
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>

    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    handleWantTOCook: PropTypes.func
}


export default Bookmarks;