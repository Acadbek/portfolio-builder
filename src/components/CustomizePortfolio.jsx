import { Box, Stack, Typography, Button } from "@mui/material";

const colors = ['#333333', '#ff0000', '#007bff', '#00c853', '#6a1b9a'];

const CustomizePortfolio = ({ onColorChange, selectedColor }) => {
  return (
    <Box>
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
    </Box>
  )
}

export default CustomizePortfolio;