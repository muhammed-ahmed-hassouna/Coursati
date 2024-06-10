import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import { FiCalendar } from "react-icons/fi";
import Typist from 'react-typist';

const Student = ({
  allCourses,
  selectedTeacher,
  setSelectedTeacher,
  uniqueTeachers,
  handleClickCard,
}) => {
  const filteredCourses = selectedTeacher
    ? allCourses?.courses?.filter(
        (course) => course?.teacher?._id === selectedTeacher?._id
      )
    : [];

  return (
    <div>
      <div className="p-20 w-full flex">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2">
            <p className="font-semibold text-5xl break-words">Welcome !</p>
            <p className="break-words overflow-hidden text-xl mt-4 lg:w-2/3">
              Discover the world of learning tailored just for you.
              <br />
              Unleash your potential with our curated selection of courses
              designed to ignite your passion and fuel your ambitions.
              <br />
              Choose your mentor, embark on a journey of knowledge, and unlock
              endless possibilities.
            </p>
          </div>
          <div className="w-full md:w-2/3 h-96">
            <img
              className="w-full h-full object-cover rounded-md drop-shadow-2xl"
              src={require("../../../assests/Images/image.png")}
              alt="NoImage"
            />
          </div>
        </div>
        <hr />
      </div>
      <p className="mx-auto text-center text-2xl w-full">Select A Teacher !</p>

      <hr className="border border-black w-full my-2" />
      <div className="">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 4 },
          }}
          slidesPerView={4}
          freeMode={true}
          pagination={{ clickable: true }}
          className="mx-w-[800px] mx-auto"
        >
          {uniqueTeachers?.map((teacher) => (
            <SwiperSlide key={teacher?._id}>
              <div
                onClick={() => setSelectedTeacher(teacher)}
                className="cursor-pointer flex flex-col items-center drop-shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <img
                  className="w-12 h-12"
                  src={require("../../../assests/Images/user.png")}
                  alt="NoImage"
                />
                <div>
                  <p className="text-center">{teacher?.username}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr className="border border-black w-full my-2" />

      {selectedTeacher && (
        <div className="flex flex-row flex-wrap gap-20 justify-center">
          {filteredCourses?.map((course) => (
            <Card
              key={course._id}
              className="rounded-lg border border-black"
              onClick={() => handleClickCard(course)}
              sx={{
                opacity: 50,
                width: 225,
                height: 400,
                m: 1,
                border: "1px solid black",
                borderRadius: "8px",
                transition: "background-color 0.7s, border-color 0.7s",
                "&:hover": {
                  backgroundColor: "#fbbf24",
                  borderColor: "#fbbf24",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  className="h-56 object-cover"
                  component="img"
                  height="200"
                  image={course?.image}
                  alt="No Image"
                />
                <CardContent>
                  <div>
                    <div>
                      <Typography gutterBottom variant="h5" component="div">
                        {course?.course_name}
                      </Typography>
                    </div>
                    <div>
                      <Typography className="">
                        Teacher: {selectedTeacher?.username}
                      </Typography>
                    </div>
                    <div className="my-2">
                      <p className="text-sm rounded-lg flex items-center">
                        Start:{" "}
                        {course?.startDate
                          ? new Date(course.startDate)
                              .toISOString()
                              .split("T")[0]
                          : ""}
                        <FiCalendar className="ml-2" />
                      </p>
                    </div>
                    <div>
                      <span className="text-sm rounded-lg flex items-center">
                        End:{" "}
                        {course?.endDate
                          ? new Date(course?.endDate)
                              .toISOString()
                              .split("T")[0]
                          : ""}
                        <FiCalendar className="ml-2" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default Student;
