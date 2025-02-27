import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ variant, choice }) {
  return (
    <Stack spacing={2} direction="row">
      {choice === 1 && <Button variant="text">Text</Button>}
      {choice === 2 && <Button variant="contained">Contained</Button>}
      {choice === 3 && <Button variant="outlined">Outlined</Button>}
    </Stack>
  );
}
