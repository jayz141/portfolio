import {Chip, Container, Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Heading from "./Heading";
import * as React from 'react';
import Card from '@mui/material/Card';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import FolderIcon from '@mui/icons-material/Folder';
const { useEffect, useRef } = React;
const featuredProjects = [
    {
        name:"LumaLearn (AI-Driven Study Planner)",
        date:"2024 - 2025",
        description:`LumaLearn is an AI-driven study planner that generates personalised quizzes and adaptive study schedules from user-uploaded learning materials.
    The system uses a Retrieval-Augmented Generation (RAG) pipeline to transform documents into structured quiz content, and applies performance-aware logic
    to adapt study plans based on quiz results and topic difficulty. The project focuses on reliable application logic, data handling, and AI-assisted workflows.`,
        github:"https://github.com/jayz141/final-year-project",
        liveLink:"",
        techList:["Python","Django","React","LangChain", "PostgreSQL", "Rest API"],
        imageURL:"assets/dhania.png",
    },
    {
        name:"Homeless Services Mobile App (HCI Project)",
        date:"2025",
        description:`Designed a mobile application concept to help individuals experiencing homelessness in London locate essential services such as food banks, shelters, hygiene facilities, and emergency contactsThe project was grounded in Human-Computer Interaction (HCI) research and applied user-centred design principles to prioritise accessibility, clarity, and ease of use for vulnerable users. Created a mid-fidelity interactive prototype using Figma and produced a usability evaluation proposal focused on real-world effectiveness and inclusivity.`,
        liveLink:"",
        techList:["Figma","User-Centred Design","Prototyping","UX Research", "Prototyping"],
        imageURL:"assets/HCI.png",
    },
    {
        name:"Java Real-Time Chat Application",
        date:"2024",
        description:`Built a real-time chat application using a client–server architecture to support concurrent users. Implemented socket-based communication, multithreading, and connection lifecycle management to ensure responsiveand reliable message delivery. The project focused on concurrency handling and network communication principles.`,
        liveLink:"",
        techList:["Java","Object-Oriented Programming","Multithreading","Client–Server Architecture"],
        imageURL:"assets/javachat.png",
    },
    {
        name:"London Tube Route Planner",
        date:"2023",
        description:`Developed a route-planning application that computes optimal journeys across the London Underground network using graph-based algorithms. Implemented shortest-path logic and integrated a desktop interface to visualise routes and journey details, demonstrating practical use of algorithms in a real-world context.`,
        github:"https://github.com/jayz141/london-tube-planner",
        liveLink:"",
        techList:["Python","Keras","Data Structures & Algorithms","Graph Algorithms", "Tkinter"],
        imageURL:"assets/london.png",
    },
    {
        name:"Portfolio website",
        date:"2022",
        description:"The page you are currently on is used to show my projects, github repository and CV. ",
        github:"https://github.com/mrehmm001/portfolio",
        liveLink:"https://mrehmm001.github.io/portfolio/",
        techList:["React.js","JavaScript","Material-UI"],
        imageURL:"assets/portfolio.JPG",
    },
    {
        name:"Predicting cancer diagnoses using Forest Trees",
        date:"2024",
        description:"I developed a Python-based machine learning project for breast cancer analysis, where I preprocessed medical data and built predictive models using scikit-learn. I applied and optimised a Random Forest classifier and evaluated model performance to improve diagnostic accuracy and identify subtle cancer patterns",
        github:"https://github.com/jayz141/predict-cancer-diagnoses-using-forest-trees",
        liveLink:"",
        techList:["Scikit-learn","NumPy","Pandas","Matplotlib", "Jyputer Notebook","Random Forest"],
        imageURL:"assets/dataset.png",
    },
    {
        name:"Social media network project",
        date:"2023",
        description:"I developed a Python-based social network analysis project in 2023 that models user relationships and provides features such as connection visualisation, friend recommendations, and relationship summaries. I used Object-Oriented Programming, file I/O, and efficient data structures, with robust error handling to ensure data integrity",
        github:"https://github.com/jayz141/social-media-network-project",
        liveLink:"",
        techList:["Python"],
        imageURL:"assets/social.png",
    },
    
    
]

const otherProjects =
    [  
       
]

const styles = {
    container:{
        width:"100%",
        height:"100%",
        zIndex:1,
        position:"relative",
        overflow:"hidden"
        
    },
    cardStyle:{
        display:"flex", 
        position:"relative",
        // minHeight:"300px"
    },

    imageParent:{
        overflow:"hidden",
    },
    imageStyle:{
        objectFit:"cover",
        width:"100%",
        height:"100%",
    },
    cardContent:{flex:1.5,
        marginRight:"auto", 
        padding:"30px",
    }

}

function projectCard({name,date,description,github,liveLink,techList,imageURL},id){
    return (
        <Box className={`project-${id}`} my={3}>
            <Card sx={{height:{xs:"100%",md:"420px",xl:"340px"},flexDirection:{xs:"column",md:"row-reverse"}}} elevation={3} style={styles.cardStyle}>
                <Box sx={{width:{xs:"100%",md:"40%"},height:{xs:"200px",md:"100%"}}}  style={styles.imageParent}>   
                    <img style={styles.imageStyle} src={require("./"+imageURL)} alt="" />
                </Box>

                <Box style={styles.cardContent}>
                    <Grid style={{height:"100%"}}>
                        <Typography color="primary">Featured project</Typography>
                        <Typography variant="h5">{name}</Typography>
                        <Divider/>
                        <Typography style={{marginTop:"1em"}} color="text.secondary">{description}</Typography>
                        <Box mt={2}>
                            {techList.map(tech=><Chip sx={{marginRight:"1em",marginBottom:"1em"}} variant="outlined" label={tech}/>)}
                        </Box>
                        <Box sx={{position:{md:"absolute",xs:"relative"},
                                 bottom:{md:"15px"}}}>
                            {github && <IconButton href={github} style={{marginRight:"0.5em"}} ><GitHubIcon fontSize="large"/></IconButton>}
                            {liveLink && <IconButton href={liveLink}><LaunchIcon fontSize="large"/></IconButton>}
                        </Box>
                    </Grid>
                </Box>
            </Card>
        </Box>
      );
}

function secondaryProjectCard({name,date,description,github,liveLink,techList,imageURL},id){

    return (
        <Grid className={`secondary-project`} item xs={1}>
                <Card style={{position:"relative", height:"100%"}} elevation={3}>
                    <Box style={{height:"100%", display:"flex",flexDirection:"column"}} p={3}>   

                        <Typography style={{display:"flex",alignItems: 'center',flexWrap: 'wrap',}} variant="h5"><FolderIcon sx={{marginRight:"0.2em"}} fontSize="large" style={{marginBottm:"0px"}}/>{name}</Typography>
                        <Divider/>
                        <Typography style={{marginTop:"1em"}} color="text.secondary">{description}</Typography>
                        <Box mt={2}>
                            {techList.map(tech=><Chip size="small" sx={{marginRight:"1em",marginBottom:"1em"}} variant="outlined" label={tech}/>)}
                        </Box>

                        <Box style={{marginTop:"auto"}}>
                        {github && <IconButton href={github} style={{marginRight:"0.5em"}} ><GitHubIcon fontSize="large"/></IconButton>}
                            {liveLink && <IconButton href={liveLink}><LaunchIcon fontSize="large"/></IconButton>}
                        </Box>
                    </Box>

                </Card>

        </Grid>      
      );
}

function listProjects(){
    return featuredProjects.map((project,i)=>{
        return projectCard(project,i);
    })
}

function listSecondaryProjects(){
    return otherProjects.map((project,i)=>{
        return (
            secondaryProjectCard(project,i)
        )
    })

}
function Projects() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef();
    const animationSpeed = 0.33;
    useEffect(() => {
        const element = ref.current;
        //Animation for the project cards
        for(let i=1; i<=12; i++){
            gsap.fromTo(element.querySelector(`.project-${i}`),{y:+100}, { y: 0,      
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(`.project-${i}`),
                yoyo: true })
            gsap.fromTo(element.querySelector(`.project-${i}`),{opacity:0},{opacity:1,
                    stagger: animationSpeed,
                    scrollTrigger: element.querySelector(`.project-${i}`)},`-=${animationSpeed}`)
    
        }
        gsap.fromTo(element.querySelectorAll(`.secondary-project`),{y:+100}, { y: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(`.secondary-project`),
            yoyo: true })
        gsap.fromTo(element.querySelectorAll(`.secondary-project`),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(`.secondary-project`)},`-=${animationSpeed}`)



        //Animation for the heading    
        gsap.fromTo(element.querySelector(".heading-3"),{x:-100},{x:0,
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".heading-3")})        
        
        gsap.fromTo(element.querySelector(".heading-4"),{x:-100},{x:0,
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".heading-4")}) 
            
        return () => {
            gsap.kill()
            };     
     }, []);
    return ( 
        <Paper className="Projects" style={styles.container} ref={ref}>
            <Container>
                <Box py={10}>
                    <Heading customClass={"heading-3"} heading="PROJECTS"/>                       
                    {listProjects()}
                </Box>
            </Container>
            <Container>
               

            </Container>

        </Paper>

     );
}

export default Projects;


