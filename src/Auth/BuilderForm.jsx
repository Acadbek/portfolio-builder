import React from 'react';
import { TextField, Box, Typography, Paper, Divider, Button, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

const BuilderForm = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      contact: { ...prevData.contact, [name]: value },
    }));
  };

  // Loyiha ma'lumotlarini o'zgartirish uchun funksiya
  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...data.projects];
    newProjects[index][name] = value;
    setData((prevData) => ({ ...prevData, projects: newProjects }));
  };

  // Yangi loyiha qo'shish funksiyasi
  const addProject = () => {
    setData((prevData) => ({
      ...prevData,
      projects: [
        ...prevData.projects,
        { title: '', description: '', imageUrl: '', link: '' },
      ],
    }));
  };

  const removeProject = (index) => {
    const newProjects = data.projects.filter((_, i) => i !== index);
    setData((prevData) => ({ ...prevData, projects: newProjects }));
  };

  return (
    <Paper elevation={3} sx={{ p: 3, height: '85vh', overflowY: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Portfolio Ma'lumotlari
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>Asosiy Ma'lumotlar</Typography>
      <TextField label="To'liq Ism" name="name" value={data.name} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Kasb/Soha" name="title" value={data.title} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Avatar Rasm URL" name="avatarUrl" value={data.avatarUrl} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="O'zingiz haqingizda (Bio)" name="bio" value={data.bio} onChange={handleChange} multiline rows={4} fullWidth margin="normal" />
      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" sx={{ mt: 2 }}>Ko'nikmalar</Typography>
      <TextField label="Ko'nikmalar (vergul bilan ajrating)" name="skills" value={data.skills.join(', ')} onChange={(e) => setData(prev => ({ ...prev, skills: e.target.value.split(',').map(s => s.trim()) }))} fullWidth margin="normal" />
      <Divider sx={{ my: 2 }} />

      <Box>
        <Typography variant="h6">Loyihalar</Typography>
        {data.projects.map((project, index) => (
          <Paper key={index} variant="outlined" sx={{ p: 2, mt: 2, position: 'relative' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>Loyiha #{index + 1}</Typography>
            <IconButton
              aria-label="delete"
              onClick={() => removeProject(index)}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <DeleteIcon />
            </IconButton>
            <TextField label="Loyiha Sarlavhasi" name="title" value={project.title} onChange={(e) => handleProjectChange(index, e)} fullWidth margin="normal" size="small" />
            <TextField label="Loyiha Linki" name="link" value={project.link} onChange={(e) => handleProjectChange(index, e)} fullWidth margin="normal" size="small" />
            <TextField label="Rasm URL" name="imageUrl" value={project.imageUrl} onChange={(e) => handleProjectChange(index, e)} fullWidth margin="normal" size="small" />
            <TextField label="Loyiha Tavsifi" name="description" value={project.description} onChange={(e) => handleProjectChange(index, e)} multiline rows={3} fullWidth margin="normal" size="small" />
          </Paper>
        ))}
        <Button
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          onClick={addProject}
          sx={{ mt: 2 }}
          fullWidth
        >
          Yangi Loyiha Qo'shish
        </Button>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" sx={{ mt: 2 }}>Kontaktlar</Typography>
      <TextField label="Email" name="email" value={data.contact.email} onChange={handleContactChange} fullWidth margin="normal" />
      <TextField label="LinkedIn URL" name="linkedin" value={data.contact.linkedin} onChange={handleContactChange} fullWidth margin="normal" />
      <TextField label="GitHub URL" name="github" value={data.contact.github} onChange={handleContactChange} fullWidth margin="normal" />
    </Paper>
  )
}

export default BuilderForm;