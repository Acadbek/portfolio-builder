import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ChooseTemp.module.scss';
import {
  Box,
  Button,
  Typography,
  Modal,
  Card,
  CardMedia,
} from '@mui/material';

const cn = classNames.bind(styles);

const images = [
  {
    url: 'https://prod.flowcvassets.com/resume-templates/wk78myowij2vvh1gy8l-s/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/gs_qryrzly3kldmqhxqsb/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/pgcuzlm0skbwabfnppg3b/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/yrf-1jligslm-ta_zmyji/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/cjy7ca_q8xpaocheef8v1/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/_xarkap79m3qjwh4w8ztg/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/yivr5ujjrocluhf4nbdul/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/um2ccnj8x3bimdnzzrml8/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/bp-s_rae24mq1_4bq_pqm/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/free-multi-column-resume-template/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/e8lbbbqvr_pi1ezn6pu2s/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/yzw3dbc3tzktielhvi1b_/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/n9mmojn86lnm80lbjib2i/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/mwo5rdzygyzgpjhr1vdnr/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/mwo5rdzygyzgpjhr1vdnr/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/9hpvr_9ietentflai7zpv/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
  {
    url: 'https://prod.flowcvassets.com/resume-templates/tlz6h4qf2ti7uttcfrcf0/960.jpeg',
    title: 'Atlantic Blue · Multi-column resume with sidebar left',
    description: 'Each template has been crafted with care to make designing your resume an absolute breeze for you.',
  },
];



const ChooseTemp = () => {
  const [showAllModal, setShowAllModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openDetailModal = (img) => {
    setSelectedImage(img);
  };

  const closeDetailModal = () => {
    setSelectedImage(null);
  };

  return (
    <Box className={cn('choose')}>
      <Typography className={cn('choose__title')}>
        Choose a template
      </Typography>
      <Typography className={cn('choose__desc')}>
        Get started with a template and then customize it easily 🐣
      </Typography>

      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          py: 2,
        }}
      >
        {images.map((img, i) => (
          <Card
            key={i}
            onClick={() => openDetailModal(img)}
            sx={{ minWidth: 220, cursor: 'pointer' }}
          >
            <CardMedia
              component="img"
              height="300"
              image={img.url}
              alt={img.title}
            />
          </Card>
        ))}
      </Box>

      <Button
        className={cn('choose__btn')}
        variant="text"
        onClick={() => setShowAllModal(true)}
      >
        See all templates →
      </Button>

      <Modal open={showAllModal} onClose={() => setShowAllModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            overflowY: 'auto',
          }}
        >
          <Typography variant="h4" mb={2}>
            Resume Templates
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '280px 280px 280px 280px' },
              gap: 2,
            }}
          >
            {images.map((img, i) => (
              <Card
                key={i}
                onClick={() => openDetailModal(img)}
                sx={{ cursor: 'pointer', width: '260px' }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={img.url}
                  alt={img.title}
                />
              </Card>
            ))}
          </Box>
        </Box>
      </Modal>

      <Modal open={Boolean(selectedImage)} onClose={closeDetailModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', md: '70%' },
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            outline: 'none',
          }}
        >
          {selectedImage && (
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
              <Box flex={1}>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Box>
              <Box flex={1}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {selectedImage.title}
                </Typography>
                <Typography variant="body1">
                  {selectedImage.description}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default ChooseTemp;
