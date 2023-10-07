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
import Sidebar from "../../components/Sidebar/Sidebar";
import { adminSidebardata } from "../../components/Sidebar/Sidebardata";

function Dashboard() {
  return (
    // <>
    //   <Container maxWidth="lg">
    //     <Box my={4}>
    //       <Stack direction="row" justifyContent="center" alignItems="center">
    //         <Typography variant="h3">Admin Dashboard</Typography>
    //       </Stack>
    //       <Grid
    //         container
    //         my={1}
    //         spacing={6}
    //         alignItems="center"
    //         justifyContent="center"
    //       >
    //         <Grid item xs={12} sm={6} md={4}>
    //           <Card sx={{ minWidth: 275 }}>
    //             <CardContent>
    //               <Typography
    //                 variant="h4"
    //                 component="div"
    //                 align="center"
    //                 gutterBottom
    //               >
    //                 Distributor count
    //               </Typography>
    //               <Typography variant="h6" component="div" align="center">
    //                 10
    //               </Typography>
    //             </CardContent>
    //             <CardActions style={{ justifyContent: "flex-end" }}>
    //               <Link to="/admin/distributorcount">
    //                 <Button size="small">View More</Button>
    //               </Link>
    //             </CardActions>
    //           </Card>
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={4}>
    //           <Card sx={{ minWidth: 275 }}>
    //             <CardContent>
    //               <Typography
    //                 variant="h4"
    //                 component="div"
    //                 align="center"
    //                 gutterBottom
    //               >
    //                 User count
    //               </Typography>
    //               <Typography variant="h6" component="div" align="center">
    //                 10
    //               </Typography>
    //             </CardContent>
    //             <CardActions style={{ justifyContent: "flex-end" }}>
    //               <Link to="/admin/usercount">
    //                 <Button size="small">View More</Button>
    //               </Link>
    //             </CardActions>
    //           </Card>
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={4}>
    //           <Card sx={{ minWidth: 275 }}>
    //             <CardContent>
    //               <Typography
    //                 variant="h4"
    //                 component="div"
    //                 align="center"
    //                 gutterBottom
    //               >
    //                 Movie count
    //               </Typography>
    //               <Typography variant="h6" component="div" align="center">
    //                 10
    //               </Typography>
    //             </CardContent>
    //             <CardActions style={{ justifyContent: "flex-end" }}>
    //               <Link to="/admin/moviecount">
    //                 <Button size="small">View More</Button>
    //               </Link>
    //             </CardActions>
    //           </Card>
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={4}>
    //           <Card sx={{ minWidth: 275 }}>
    //             <CardContent>
    //               <Typography
    //                 variant="h4"
    //                 component="div"
    //                 align="center"
    //                 gutterBottom
    //               >
    //                 Total Earnings
    //               </Typography>
    //               <Typography variant="h6" component="div" align="center">
    //                 10
    //               </Typography>
    //             </CardContent>
    //             <CardActions style={{ justifyContent: "flex-end" }}>
    //               <Button size="small">View More</Button>
    //             </CardActions>
    //           </Card>
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={4}>
    //           <Card sx={{ minWidth: 275 }}>
    //             <CardContent>
    //               <Typography
    //                 variant="h4"
    //                 component="div"
    //                 align="center"
    //                 gutterBottom
    //               >
    //                 Total Commission
    //               </Typography>
    //               <Typography variant="h6" component="div" align="center">
    //                 10
    //               </Typography>
    //             </CardContent>
    //             <CardActions style={{ justifyContent: "flex-end" }}>
    //               <Button size="small">View More</Button>
    //             </CardActions>
    //           </Card>
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={4}>
    //           <Card sx={{ minWidth: 275 }}>
    //             <CardContent>
    //               <Typography
    //                 variant="h4"
    //                 component="div"
    //                 align="center"
    //                 gutterBottom
    //               >
    //                 Watch Hours
    //               </Typography>
    //               <Typography variant="h6" component="div" align="center">
    //                 10
    //               </Typography>
    //             </CardContent>
    //             <CardActions style={{ justifyContent: "flex-end" }}>
    //               <Button size="small">View More</Button>
    //             </CardActions>
    //           </Card>
    //         </Grid>
    //       </Grid>
    //     </Box>
    //   </Container>
    // </>
    <div>
      <Sidebar SidebarData={adminSidebardata} />
    </div>
  );
}

export default Dashboard;
