import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const HeroSection= (props) => {

  const {
    type = 'section',
    classes = null,
    bgImage = 'https://source.unsplash.com/random/1920×1080/?fruit',
    title = null,
    description = null,
    children
  } = props;

  return (
    <Box
      component={type}
      className={`full-width ${classes}`}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '600px',
      }}
    >
      <Box component="picture">
        <Box component="img" src={ bgImage } alt="Hero image" sx={{
          filter: 'brightness(.7)',
          position: 'absolute',
          inset: '0',
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}/>
      </Box>
      <Container maxWidth={'xl'} sx={{ position: 'relative' }}>
        {
          title && <Typography component="h1" sx={{color: '#ffffff'}}>{title}</Typography>
        }
        {
          description && <Typography component="p" sx={{ color: '#ffffff' }}>{description}</Typography>
        }

        { children }
      </Container>
    </Box>
  );
}