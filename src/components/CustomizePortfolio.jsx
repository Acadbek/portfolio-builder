import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";

const colors = ['#333333', '#ff0000', '#007bff', '#00c853', '#6a1b9a'];

const CustomizePortfolio = ({ onColorChange, selectedColor, onIconStateChange, selectedIconState }) => {
  const [activeIconButton, setActiveIconButton] = React.useState(1)

  const handleIconState = (id) => {
    onIconStateChange(id)
    setActiveIconButton(id)
  }

  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h6" gutterBottom>
        Matn rangini tanlang:
      </Typography>

      <Stack direction="row" spacing={2}>
        {colors.map((color) => (
          <Button
            key={color}
            onClick={() => onColorChange(color)}
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: color,
              border: selectedColor === color
                ? '2px solid black'
                : '2px solid transparent',
              minWidth: 0,
            }}
          />
        ))}
      </Stack>

      <Typography sx={{ mt: 5 }} variant="h6" gutterBottom>
        Ikonkalar
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button
          onClick={() => handleIconState('none')}
          variant={activeIconButton === 'none' ? 'contained' : 'outlined'}>None</Button>
        <Button
          onClick={() => handleIconState('outline')}
          variant={activeIconButton === 'outline' ? 'contained' : 'outlined'}>Outline</Button>
        <Button
          onClick={() => handleIconState('filled')}
          variant={activeIconButton === 'filled' ? 'contained' : 'outlined'}>Filled</Button>
      </Stack>
    </Box>
  )
}

export default CustomizePortfolio;