import React, { useState } from 'react';
import {
  Box, Button, Container, ImageList, ImageListItem, ImageListItemBar, Typography,
} from '@mui/material';
import projects from '../services/projects';
import ProjectModal from './ProjectModal';
import useWindowSize from '../hooks/useWindowSize';

function Projects() {
  const size = useWindowSize();
  const [open, setOpen] = useState(false);
  const [projectInfo, setProjectInfo] = useState({
    title: '',
    description: '',
    repositoryLink: '',
    productionLink: '',
    thumb: '',
    pictures: {},
    technologies: [],
  });

  const handleModal = (project) => {
    setProjectInfo(project);
    setOpen(true);
  };

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        backgroundColor: '#fcfcfc',
        p: 3,
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        align="center"
        sx={{
          color: 'info.main',
          pt: 3,
          fontSize: {
            xs: '3rem',
          },
        }}
      >
        Projects
      </Typography>
      <Typography
        variant="subtitle1"
        component="h3"
        align="center"
        sx={{
          color: 'text.disabled',
        }}
      >
        Some of my projects:
      </Typography>
      <ProjectModal projectInfo={projectInfo} setOpen={setOpen} open={open} />
      <Container sx={{ mt: 3 }}>
        <ImageList gap={1} cols={size.width > 600 ? 3 : 1}>
          {projects.map((project) => (
            <Button
              onClick={() => handleModal(project)}
              key={project.title}
            >
              <ImageListItem>
                <Box
                  component="img"
                  src={project.thumb}
                  alt={project.title}
                  sx={{
                    width: 400,
                  }}
                />
                <ImageListItemBar
                  title={project.title}
                  position="below"
                />
              </ImageListItem>
            </Button>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
}

export default Projects;
