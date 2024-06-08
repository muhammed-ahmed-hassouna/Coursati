import { PaginationItem, Stack, Pagination } from "@mui/material";

export default function CustomPagination({
  totalItems,
  currentPage,
  setCurrentPage,
}) {
  const handleNextPage = (event, value) => {
    setCurrentPage(value);
  };

  function nextButton() {
    return (
      <div className="px-4 rounded-full py-2 hover:text-white text-custom-sm text-grayscale_3 leading-custom-24 font-custom-semi-bold border border-solid border-grayscale_5">
        Next
      </div>
    );
  }
  function prevButton() {
    return (
      <div className="px-4 rounded-full hover:text-white py-2 text-custom-sm text-grayscale_3 leading-custom-24 font-custom-semi-bold border border-solid border-grayscale_5">
        Prev
      </div>
    );
  }

  return (
    <Stack>
      <Pagination
        count={totalItems}
        page={currentPage}
        size="large"
        color="primary"
        onChange={handleNextPage}
        sx={{
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#334155",
            color: "#FFF",
            "&:hover": {
              backgroundColor: "#334155",
              color: "#FFF",
            },
          },
          "& .MuiPaginationItem-root": {
            padding: "0",
            color: "#334155",
            "&:hover": {
              backgroundColor: "#334155",
              color: "#FFF",
            },
          },
        }}
        renderItem={(item) => {
          return (
            <PaginationItem
              slots={{ previous: prevButton, next: nextButton }}
              {...item}
            />
          );
        }}
      />
    </Stack>
  );
}
