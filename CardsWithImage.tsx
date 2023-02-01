import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import PetsIcon from "@mui/icons-material/Pets";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface CardsWithImageProps {
  items: number;
}

// export default function CardsWithImage() {
//   return (
//       <Grid container spacing={{ xs: 2, md: 3 }}>
//         {Array.from(Array(6)).map((_, index) => (
//           <Grid item xs={6} sm={4} md={2} key={index}>
//             <CardWithImage />
//           </Grid>
//         ))}
//       </Grid>
//   );
// }

export default function CardsWithImage({items}: CardsWithImageProps) {
  return (
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {Array.from(Array(items)).map((_, index) => (
          <Grid item xs key={index}>
            <CardWithImage />
          </Grid>
        ))}
      </Grid>
  );
}

const CardWithImage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        bgcolor: "white",
        py: 2,
        px: 4,
        boxShadow: "rgb(201 207 212) 0px 0px 0px 2px inset",
        "&:hover": {
          boxShadow: "rgb(118 124 130) 0px 0px 0px 2px inset",
        },
        "&:active": {
          boxShadow: "rgb(64 67 71) 0px 0px 0px 2px inset",
        },
        borderRadius: "4px",
        cursor: "pointer"
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <PetsIcon sx={{ fontSize: 24, mb: "6px" }} />
        <Typography color="grey.700">
          Dog
        </Typography>
      </Stack>
    </Box>
  );
}