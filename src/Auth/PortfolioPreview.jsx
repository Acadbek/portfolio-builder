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
import { Email, LinkedIn, GitHub, Download, AccountCircle, Addchart, ContactEmergency, AccountBalance, AddAPhoto, ContactEmergencyOutlined } from '@mui/icons-material';
import { usePortfolioPDF } from '../hooks/useDownload';

const PortfolioPreview = ({ data, textColor, iconState }) => {
  const { downloadPDF } = usePortfolioPDF()

  const icon = () => {
    if (iconState === 'none') {
      return 'none'
    } else if (iconState === 'outline') {
      return 'outline'
    } else {
      return 'filled'
    }
  }

  return (
    <Paper elevation={3} sx={{ p: 4, height: '85vh', overflowY: 'auto', position: 'relative', color: textColor }}>
      {iconState}
      <Button
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
        onClick={() => downloadPDF(data, 'portfolio-preview')}>
        <Download />
      </Button>
      <Box id='portfolio-preview'>
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
          <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }} variant="h5" gutterBottom>
            {icon() === 'none' && ''}
            {icon() === 'outline' && <AccountCircle />}
            {icon() === 'filled' && <AccountBalance />}
            Men haqimda
          </Typography>
          <Divider />
          <Typography variant="body1" sx={{ mt: 2 }}>
            {data.bio}
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }} variant="h5" gutterBottom>
            {icon() === 'none' && ''}
            {icon() === 'outline' && <Addchart />}
            {icon() === 'filled' && <AddAPhoto />}
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
          <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }} variant="h5" gutterBottom>
            {icon() === 'none' && ''}
            {icon() === 'outline' && <ContactEmergencyOutlined />}
            {icon() === 'filled' && <ContactEmergency />} Bog'lanish
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
      </Box>
    </Paper>
  )
}

export default PortfolioPreview 