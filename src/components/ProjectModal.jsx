import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, Chip, Divider, Fade, Modal, Typography,
} from '@mui/material';
import GitHub from '@mui/icons-material/GitHub';
import { Launch } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    md: 850,
    xs: '95%',
  },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function ProjectModal({ projectInfo, setOpen, open }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h4" sx={{ color: 'text.secondary' }}>
            {projectInfo.title}
          </Typography>
          <Divider sx={{ mb: 2, mt: 1 }} />
          <Typography id="transition-modal-description" sx={{ mt: 2, color: 'text.disabled' }}>
            {projectInfo.description}
            <Box variant="section" sx={{ my: 2 }}>
              {projectInfo.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{ m: 1 }}
                />
              ))}
            </Box>
            <Box
              variant="section"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button size="small" variant="contained" href={projectInfo.repositoryLink}>
                <GitHub sx={{ mr: 1 }} />
                {' '}
                GitHub
              </Button>
              <Button size="small" variant="outlined" href={projectInfo.productionLink}>
                <Launch sx={{ mr: 1 }} />
                {' '}
                View Site
              </Button>
            </Box>
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}

ProjectModal.propTypes = {
  projectInfo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    repositoryLink: PropTypes.string,
    productionLink: PropTypes.string,
    thumb: PropTypes.string,
    pictures: PropTypes.objectOf(PropTypes.string),
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ProjectModal;
