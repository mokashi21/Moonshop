import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";

function Cards({ quantity }) {
  return (
    <div style={styles.container}>
      <Grid
        container
        spacing={2}
        justifyContent="space-around"
        marginLeft="2em"
        marginTop="4em"
        marginBottom="2em"
      >
        {/* second card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.samsung.com/is/image/samsung/p6pim/in/feature/164728957/in-feature-galaxy-f-537742151?$FB_TYPE_A_JPG$"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Samsung S21+
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Processor : CPU Speed 2.9GHz, 2.8GHz, 2.2GHz.
                <br />
                Display : Size (Main_Display) 158.4mm (6.2" full rectangle) /
                154.6mm (6.1" rounded corners) Resolution (Main Display) 2400 x
                1080 (FHD+)
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Third Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlycG9kc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                I-Pods All Generation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Introducing AirPods Max — a perfect balance of exhilarating
                high-fidelity audio and the effortless magic of AirPods. The
                ultimate personal listening experience is here.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* 4th */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              transition: "transform 0.3s",
              cursor: "auto",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1653990480360-31a12ce9723e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGVsZWN0cmljJTIwZGV2aWNlc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Echo AI Dot
              </Typography>
              <Typography variant="body2" color="text.secondary">
                * Virtual Assistant: Built-in Alexa
                <br />
                * Connectivity: Bluetooth | Wi-Fi
                <br />* Ambient Temperature Sensor | Motion Detection | 3
                Built-in Microphone
                <br />* Warranty: 12 months warranty
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* 5 */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://plus.unsplash.com/premium_photo-1681822621402-1e5243447c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGVsZWN0cmljJTIwZGV2aWNlc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Wipro Garnet 6W Led Table Lamp
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Flexible Design
                <br />
                Dimming and Color Control
                <br />
                Travel-Friendly Design
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* 6  */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxlbGVjdHJpYyUyMGRldmljZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Apple Watch Ultra
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <br /> . Front view of an Apple Watch Ultra with the charging
                icon on the display.
                <br />
                View of the three different Apple Watch Ultra straps the Trail
                Loop, Alpine Loop and Ocean Band.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* 7 */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1607197109166-3ab4ee4b468f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxlbGVjdHJpYyUyMGRldmljZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Charge with Tata Power
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Diverse charging standards and specifications.
                <br />
                Different EV vehicle categories and manufacturers & Variety of
                use-case scenarios- EV fleet solutions, commercial spaces &
                office charging, public charging etc.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* 8 card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://plus.unsplash.com/premium_photo-1679917152773-588c2a0a9ad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxlbGVjdHJpYyUyMGRldmljZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Wind Energy -Power
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Wind power or wind energy describes the process by which the
                wind is used to generate mechanical power or electricity. Wind
                turbines convert the kinetic energy in the wind into mechanical
                power.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* 9 Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1673969206752-5476954d6787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxlbGVjdHJpYyUyMGRldmljZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Hero - Lectro -H3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Perfect for short city rides
                <br />
                Upto 30kms in one charge
                <br />
                25km/hr top speed
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* 10th */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                2023 Model S -Tesla
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pearl Blue Multi-Coat Paint
                <br /> Auto Pilot 19" Tempest Wheels All
                <br />
                Blue Premium Interior with Ebony Décor Yoke Steering
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* 11 */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://bd.gaadicdn.com/processedimages/ola-electric/s1-pro/494X300/s1-pro6405e906c37fe.jpg?imwidth=400&impolicy=resize"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ola Electric S1 Pro
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Outstanding top speed and range
                <br />
                Elegant design with cutting-edge features <br />
                Eco-friendly mode of transportation <br /> Connected features
                with a smartphone app
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* 12  */}
      </Grid>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    quantity: state.quantity,
  };
};

export default connect(mapStateToProps, {})(Cards);
const styles = {
  container: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")', // Add your background image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3em",
  },
};
