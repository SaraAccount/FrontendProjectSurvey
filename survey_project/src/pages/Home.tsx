
// export const Home = ()=>
// {
//     return <>
//     <h1>Analistic</h1>
//     <h2>Welcome to Anlistic!</h2>
//     <h3>Create, Share, and Discover Insights</h3>
//     <h3>Design your own surveys in minutes and see the results come to life with clear, interactive graphs.</h3>
//     <h3> Explore surveys created by others and gain valuable insights from real-time data visualizations.
//     Smart, simple, and powerful — your survey platform for better decisions.</h3>
//     </>
// }



import { Box, Typography, Container } from "@mui/material";

export const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #e3f2fd, #90caf9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 4,
            boxShadow: 3,
            padding: 5,
            textAlign: "center",
          }}
        >
          <Typography variant="h2" sx={{ color: "#1565c0", fontWeight: 700 }}>
            Analistic
          </Typography>

          <Typography variant="h5" sx={{ color: "#0d47a1", mt: 2 }}>
            Welcome to Analistic!
          </Typography>

          <Typography variant="body1" sx={{ mt: 3, color: "#1e88e5" }}>
            Create, Share, and Discover Insights.
          </Typography>

          <Typography variant="body1" sx={{ mt: 1, color: "#1e88e5" }}>
            Design your own surveys in minutes and see the results come to life
            with clear, interactive graphs.
          </Typography>

          <Typography variant="body1" sx={{ mt: 1, color: "#1e88e5" }}>
            Explore surveys created by others and gain valuable insights from
            real-time data visualizations.
          </Typography>

          <Typography variant="body1" sx={{ mt: 1, color: "#1e88e5" }}>
            Smart, simple, and powerful — your survey platform for better
            decisions.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
