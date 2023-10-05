import { Box, Grid } from '@mui/material';
import { useRecipes } from '../../hooks';
import { ComponentLayout } from '../layout';
import { CardTeaser } from './CardTeaser';

export const BestRating = ( {title, description, limitedBy = Infinity} ) => {

  const { getRecipesByRating } = useRecipes();
  const recipes = getRecipesByRating().slice(0, limitedBy);

  return (
    <ComponentLayout
      title={ title }
      description={ description }
    >
      <Box>
        <Grid container spacing={4} >
          { recipes.map( (recipe) => (
            <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
              <CardTeaser card={recipe} />
            </Grid>
          )) }
        </Grid>
      </Box>
    </ComponentLayout>
  );
}