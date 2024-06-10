import CardComponent from "../../../components/cards";
import FilledButton from "../../../components/ui/buttons/FilledButton";

const Teacher = ({
  data,
  handleUploadClick,
  handleDeleteCard,
  handleEditClick,
}) => {
  // console.log('mm', data.course);
  return (
    <div>
      <div className="m-20 w-2/4 p-4 flex">
        <div className="">
          <p className="font-semibold text-5xl break-words">
            Welcome Mohammed !
          </p>
          <p className="break-words overflow-hidden text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            consequuntur quam voluptate,
            <br />
            itaque quod laborum assumenda ad atque. Temporibus repellat commodi
            dolorem rem aut,
            <br />
            assumenda et architecto consectetur labore incidunt!
          </p>
        </div>
        <div className="">
          <img
            className="w-full h-auto"
            src={require("../../../assests/Images/image.png")}
            alt="Sample Image"
          />
        </div>
        <hr />
      </div>
      <div className="flex justify-center mt-16">
        <FilledButton
          text="Upload A new Course"
          buttonType="submit"
          isButton={true}
          onClick={handleUploadClick}
          className="w-1/3 cursor-pointer rounded-lg border border-black bg-[#fbbf24] p-4 text-black hover:bg-opacity-80"
        />
      </div>
      <hr className="border border-black w-full mt-2" />
      <div className="flex flex-row flex-wrap gap-10 justify-center my-10">
        {data?.course?.map((card, index) => (
          <div key={card?._id}>
            <CardComponent
              title={card?.course_name}
              imageUrl={card?.image}
              onDelete={() => handleDeleteCard(card?._id)}
              onUpdate={() =>  handleEditClick(card)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;
