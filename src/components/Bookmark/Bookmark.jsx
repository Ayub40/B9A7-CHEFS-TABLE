import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { recipe_name, preparing_time, calories } = bookmark;
    return (


        <div className='flex justify-between m-2'>
            {/* <p>{index}</p> */}
            <h5 className='text-base border w-1/4'>{recipe_name}</h5>
            <h6 className='text-base'>{preparing_time}</h6>
            <h6 className='text-base'>{calories}</h6>
            <button className='mr-2 bg-[#0be58a]'>Preparing</button>
        </div>




    );
};

Bookmark.protoType = {
    bookmark: PropTypes
}

export default Bookmark;