import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ variant, choice,children,handleclick }) {
  return (
    <Stack spacing={2} direction="row">
      {choice === 'text' && <Button variant="text" onClick={handleclick}>{children}</Button>}
      {choice === 'contained' && <Button variant="contained" onClick={handleclick}>{children}</Button>}
      {choice === 'outlined' && <Button variant="outlined" onClick={handleclick}>{children}</Button>}
    </Stack>
  );
}
