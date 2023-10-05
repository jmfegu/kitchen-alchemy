import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const HeroSection= (props) => {

  const {
    classes = null,
    //bgImage = 'https://source.unsplash.com/random/1920×1080/?fruit',
    bgImage = 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title = null,
    description = null,
    children
  } = props;

  return (
    <Box
      component={'section'}
      className={`full-width ${classes}`}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '400px',
      }}
    >
      <Box component="picture">
        <Box component="img" src={ bgImage } alt="Hero image" sx={{
          // filter: 'brightness(.7)',
          position: 'absolute',
          inset: '0',
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}/>
      </Box>
      {/* <Container maxWidth={'lg'} sx={{ position: 'relative' }}>
        {
          title && <Typography component="h1" sx={{color: '#ffffff'}}>{title}</Typography>
        }
        {
          description && <Typography component="p" sx={{ color: '#ffffff' }}>{description}</Typography>
        }

        { children }
      </Container> */}
    </Box>
  );
}