import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const ReviewStars = () => {
  const [value, setValue] = React.useState(3.4);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {/* <Rating name="read-only" value={value} readOnly /> */}
      <Rating name="half-rating-read" value={value} precision={0.5} readOnly />
    </Box>
  );
};

export default ReviewStars;
