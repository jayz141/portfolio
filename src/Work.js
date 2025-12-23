import { Button, ButtonGroup, Chip, Container, Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Heading from "./Heading";
import * as React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import FolderIcon from '@mui/icons-material/Folder';
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

const experience=[
    {
        role:"Technical Specialist",
        company:"Luma Computing (Self-Employed)",
        date:" JUL 2022 - Present",
        description:[
        "Built and configured custom PC systems tailored to client performance requirements and budgets.",
        "Diagnosed and resolved hardware and software issues through systematic debugging, improving system stability and reducing repeat failures.",
        "Advised clients on upgrade paths, component compatibility, and future-proofing strategies while maintaining clear communication and timely support."
    ]
    },

    
    




]


function Work() {
    const [work,showWork] = React.useState("Alma Economics")
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef();
    const animationSpeed = 0.33;
    useEffect(() => {
        const element = ref.current;
        //Animation for the experience list
        gsap.fromTo(element.querySelector(".experience-list"),{y:+100}, { y: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".experience-list"),
            yoyo: true })
        gsap.fromTo(element.querySelector(".experience-list"),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(".experience-list")},`-=${animationSpeed}`)

        //Animation for the experience section
        gsap.fromTo(element.querySelector(".experience"),{y:-100}, { y: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".experience"),
            yoyo: true })
        gsap.fromTo(element.querySelector(".experience"),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(".experience")},`-=${animationSpeed}`)        



        //Animation for the heading    
        gsap.fromTo(element.querySelector(".heading-2"),{x:-100},{x:0,
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".heading-2")})  
            
        //Animation for the description points
        gsap.fromTo(element.querySelectorAll(`.point`),{x:-100}, { x: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(`.point`),
            yoyo: true })
        gsap.fromTo(element.querySelectorAll(`.point`),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(`.point`)},`-=${animationSpeed}`)

        return () => {
            gsap.kill()
            };        

     }, []);
    return ( 
        <Paper className="Experience" style={styles.container} ref={ref}>
            <Container>
                <Heading customClass={"heading-2"} heading="EXPERIENCE" alignMent="right"/>

                <Grid container direction={{xs:"column",md:"row"}}>
                    <Grid className="experience-list" item>
                        <Grid container  direction={{xs:"row",md:"column"}}>
                            {experience.map(x=>{
                                return(
                                    <Grid item>
                                        <Button onClick={()=>showWork(x.company)} style={{
                                            borderRadius:0,
                                            padding:"1em",
                                            borderLeft:work==x.company?"1px solid lightblue":"1px solid gray",
                                            width:"100%",
                                            justifyContent:"start"
                                            
                                        }}>{x.company}</Button>
                                    </Grid>
                                );

                            })}
                        </Grid>    
                     </Grid>

                    <Grid className="experience" flex={1} item>
                        <Paper elevation={3} style={{padding:"1em"}}>
                        {experience.filter(exp=>exp.company==work).map(exp=>{
                            const {role,company,date,description} = exp;
                            return(
                                <Grid container direction="column">
                                    <Grid item>
                                        <Box>
                                            <Typography style={{display:"inline"}} variant="h5">{role}</Typography>
                                            <Typography style={{display:"inline"}} color="primary" variant="h5"> @ {company}</Typography>
                                        </Box>    
                                    </Grid>
                                    <Grid item>
                                        <Typography  color="primary" style={{marginTop:"0.5em"}}>{date}</Typography>
                                    </Grid>
                                    <Grid item style={{marginTop:"1em"}}>
                                        {description.map(desc=>{
                                            return(
                                                <Typography className="point" style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>{desc}</Typography>                                            )
                                        })}
                                    </Grid>

                                </Grid>
                            )
                        })} 
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Paper>

     );
}

export default Work;