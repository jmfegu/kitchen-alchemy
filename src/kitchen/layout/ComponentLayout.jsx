import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ComponentLayout = ({children, ...props}) => {
  return (
    <Box component={'section'} sx={{
      padding: '3em 0',
    }}>
      { props.title && <Typography component={'h2'} variant={'h3'}>{props.title}</Typography> }
      { props.description && <Typography component={'p'} variant={'h5'}>{props.description}</Typography>}
      <Box sx={{marginTop: '2em'}}>
        { children }
      </Box>
    </Box>
  )
}
