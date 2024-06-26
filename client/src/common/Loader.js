import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <ThreeDots
        height='80'
        width='80'
        color='#1B1525'
        radius='9'
        ariaLabel='three-dots-loading'
        wrapperStyle={{}}
        wrapperClassName=''
        visible={true}
      />
    </div>
  );
};

export default Loader;
