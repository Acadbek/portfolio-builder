import React from 'react';
import {
  Paper,
  Box,
  Avatar,
  Typography,
  Chip,
  Card,
  CardContent,
  CardActions,
  Button,
  Link,
  Divider,
  CardMedia,
} from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';

const PortfolioPreview = ({ data }) => {
  return (
    <Paper elevation={3} sx={{ p: 4, height: '85vh', overflowY: 'auto' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 4,
          textAlign: 'center',
        }}
      >
        <Avatar
          alt={data.name}
          src={data.avatarUrl}
          sx={{ width: 150, height: 150, mb: 2 }}
        />
        <Typography variant="h3" component="h1" gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {data.title}
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Men haqimda
        </Typography>
        <Divider />
        <Typography variant="body1" sx={{ mt: 2 }}>
          {data.bio}
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Ko'nikmalarim
        </Typography>
        <Divider />
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {data.skills.map((skill, index) => (
            <Chip key={index} label={skill} color="primary" />
          ))}
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          mt: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 2,
        }}
      >
        {data.projects.map((project, index) => (
          <Card key={index} variant="outlined">
            <CardMedia
              component="img"
              height="160"
              image={
                project.imageUrl ||
                'https://via.placeholder.com/300x160.png?text=Rasm+Mavjud+Emas'
              }
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                <Link
                  href={project.link}
                  target="_blank"
                  underline="hover"
                  color="inherit"
                >
                  {project.title}
                </Link>
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={project.link} target="_blank">
                Batafsil
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Bog'lanish
        </Typography>
        <Divider />
        <Box sx={{ mt: 2 }}>
          <Link href={`mailto:${data.contact.email}`} sx={{ mx: 1.5 }}>
            <Email />
          </Link>
          <Link href={data.contact.linkedin} target="_blank" sx={{ mx: 1.5 }}>
            <LinkedIn />
          </Link>
          <Link href={data.contact.github} target="_blank" sx={{ mx: 1.5 }}>
            <GitHub />
          </Link>
        </Box>
      </Box>
    </Paper>
  )
}

export default PortfolioPreview 