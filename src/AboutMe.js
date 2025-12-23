import { Box, Chip, Container, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import Heading from "./Heading";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import FolderIcon from '@mui/icons-material/Folder';
import React from "react";
const { useEffect, useRef, forwardRef } = React;
const styles = {
    container:{
        width:"100%",
        height:"100%",
        zIndex:1,
        position:"relative",
        overflow:"hidden"
        
    },
}

function AboutMe() {
    const fontSize="h6"
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef();
    const animationSpeed = 0.33;
    useEffect(() => {
        const element = ref.current;
        //Animation for the about me content
        gsap.fromTo(element.querySelector(".about-me"),{x:-100}, { x: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".about-me"),
            yoyo: true })
        gsap.fromTo(element.querySelector(".about-me"),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(".about-me")},`-=${animationSpeed}`)


        gsap.fromTo(element.querySelector(".picture"),{x:+100}, { x: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".picture"),
            yoyo: true })
        gsap.fromTo(element.querySelector(".picture"),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(".picture")},`-=${animationSpeed}`)        



        //Animation for the heading    
        gsap.fromTo(element.querySelector(".heading-1"),{x:-100},{x:0,
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".heading-1")})      
            
        //Animation for the skills
        gsap.fromTo(element.querySelectorAll(`.skill`),{y:+100}, { y: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(`.skill`),
            yoyo: true })
        gsap.fromTo(element.querySelectorAll(`.skill`),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(`.skill`)},`-=${animationSpeed}`) 
        
        return () => {
            gsap.kill()
            };         
                
     }, []);
    return ( 
        <Paper className={"About"} style={styles.container} ref={ref}>
            <Container>
                <Box py={10}>
                    <Heading customClass={"heading-1"} heading="ABOUT ME"/>    
                    <Grid container direction={{xs:"column",md:"row"}}>
                        <Grid className="about-me" item flex={1} style={{paddingRight:"2em"}}>
                            <Grid container spacing={3}>
                           
 
                                <Grid item>
                                    <Typography color="textSecondary" variant={fontSize}>
                                        Computer Science graduate with hands-on experience in software development, machine learning, and systems-level problem solving. I’ve built practical projects ranging from AI-driven study systems to performance-optimised PC builds, using Python, Java, and modern development tools. Strong in algorithms, debugging, and applying technical knowledge to real-world challenges.
                                    </Typography> 
                                </Grid>
                                <Grid item>
                                    <Typography color="textSecondary" variant={fontSize}>
                                    Adaptable team contributor with a strong focus on problem-solving, optimisation, and building reliable software. Comfortable working collaboratively, communicating technical ideas clearly, and applying modern development tools to deliver practical solutions.
                                    </Typography> 
                                </Grid>
                                <Grid item>
                                    <Typography style={{display:"inline", marginRight:"0.5em"}} color="primary" variant={fontSize}>Interests:</Typography>  <Typography style={{display:"inline"}} variant={fontSize} color="textPrimary">Full-Stack Development <Typography style={{display:"inline"}} color="textSecondary" variant={fontSize}>•</Typography> Software Engineering <Typography style={{display:"inline"}} color="textSecondary" variant={fontSize}>•</Typography> Artificial Intelligence & Machine Learning <Typography style={{display:"inline"}} color="textSecondary" variant={fontSize}>•</Typography> Data Science</Typography> 
                                </Grid>
                                <Grid item>
                                <Grid item>
                                    <Typography color="primary" variant={fontSize}>Here are a few technologies I’ve been working with recently:</Typography> 
                                    <Grid container>
                                        <Grid item flex={1}>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>Python</Typography>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>Java</Typography>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>React</Typography>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>Django</Typography>
                                        </Grid>
                                        <Grid item flex={1}>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>Machine Learning</Typography>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>Scikit-learn</Typography>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>TensorFlow</Typography>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>Git</Typography>
                                        </Grid>
         
                                    </Grid>

                                </Grid>    
                                </Grid>
                            </Grid>
  
                        </Grid>
                        <Divider sx={{display:{xs:"none",md:"block"}}} orientation="vertical" flexItem></Divider>
                        <Grid className="picture" flex={1} item>
                            <Paper elevation={3} sx={{overflow:"hidden",position:"relative",marginTop:{xs:"2em",md:"0px"},marginLeft:{xs:"auto"},marginRight:{xs:"auto"},maxWidth:"300px",height:"350px"}}>
                                <img style={{width:"100%",height:"110%",objectFit:"cover",position:"absolute",bottom:"0.2px"}} src={require("./assets/profile_picture.jpeg")} alt="" />
                            </Paper>
                        </Grid>

                        
                    </Grid>
                </Box>
            </Container>

        </Paper>
     );
}

export default AboutMe;