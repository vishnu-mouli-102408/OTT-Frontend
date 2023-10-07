import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const DistributorDashboard = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Typography variant="h3">Distributor Dashboard</Typography>
        </Stack>
        <Grid
          container
          my={1}
          spacing={6}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  variant="h4"
                  component="div"
                  align="center"
                  gutterBottom
                >
                  Upload Movie
                </Typography>
                <Typography variant="h6" component="div" align="center">
                  10
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "flex-end" }}>
                <Link to="/distributor/addmovie">
                  <Button size="small">View More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  variant="h4"
                  component="div"
                  align="center"
                  gutterBottom
                >
                  Movies List
                </Typography>
                <Typography variant="h6" component="div" align="center">
                  10
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "flex-end" }}>
                <Link to="/distributor/movies">
                  <Button size="small">View More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  variant="h4"
                  component="div"
                  align="center"
                  gutterBottom
                >
                  Commission
                </Typography>
                <Typography variant="h6" component="div" align="center">
                  10
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "flex-end" }}>
                <Button size="small">View More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          my={4}
        >
          <Button variant="contained" size="medium">
            Contact Admin
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default DistributorDashboard;
