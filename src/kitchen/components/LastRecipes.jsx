import { Box, Grid } from '@mui/material';
import { useRecipes } from '../../hooks';
import { ComponentLayout } from '../layout';
import { CardTeaser } from './CardTeaser';

export const LastRecipes = ( {title, description, limitedBy = Infinity} ) => {

  const { getRecipesByRecentCreationDate } = useRecipes();
  const recipes = getRecipesByRecentCreationDate().slice(0, limitedBy);

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