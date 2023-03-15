import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
//import IconButton from '@mui/material/IconButton';
//import FavoriteIcon from '@mui/icons-material/Favorite';
//import ShareIcon from '@mui/icons-material/Share';
import { Rating } from '@mui/material';

export const CardTeaser = ({card}) => {

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        title={card.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        image={card.promotionalImage}
        alt="Image alt"
        sx={{
          aspectRatio: '16/9',
          objectFit: 'voer'
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {card.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <Rating name="read-only" value={card.averageRating} precision={0.5}  sx={{marginLeft: 'auto'}} />
      </CardActions>
    </Card>
  );
}