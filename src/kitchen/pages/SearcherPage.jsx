import { Box, Checkbox, CircularProgress, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Skeleton } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { recipesStore } from "../../data/recipes";
import { getAllCategories, getAllOriginallyFrom, getAllLevels, getAllTags, getAllTypesOfFood } from "../../helpers/filters";
import { CardTeaser, HeroSection } from "../../ui/components";
import { MainLayout } from "../../ui/layout/MainLayout";

export const SearcherPage = () => {

  const [ recipes, setRecipes ] = useState(null);
  const [ filters, setFilters] = useState(null)

  const getAllRecipes = async () => {
    const recipes = recipesStore;
    return recipes;
  }

  const getAllFilters = async () => { // Esto será una función async para obtener los filtros desde base de datos.
    const filters = {
      origin: [...getAllOriginallyFrom().sort()],
      categories: [...getAllCategories()],
      typesOfFood: [...getAllTypesOfFood()],
      // rating: [...getAllTypesOfFood()],
      level: [...getAllLevels()],
    }
    setFilters(filters);
  }

  useEffect(() => {
    getAllFilters();
    const initialAllRecipes = getAllRecipes();
    setRecipes(initialAllRecipes);
  }, [])

  const handleChange = (event) => {
  }

  return (
    <MainLayout>

      <HeroSection
        tittle={'Recetario'}
        minHeight={'200px'}
        bgImage={'https://images.unsplash.com/photo-1495546968767-f0573cca821e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80'}
      />

      <Box component={'div'} sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        gap: '2rem',
        padding: '2rem 0',
        alignItems: 'flex-start'
      }}>

        {/* Aside filters */}
        <Box component={'aside'} sx={{
          flex: '0 0 15%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl component="fieldset" variant="standard" sx={{ display: 'flex' }}>
                <FormLabel component="legend">Originaria de:</FormLabel>
                <FormGroup>
                  {
                    filters
                      ? filters.origin.map((item) => {
                        return <FormControlLabel key={item}
                          control={
                            <Checkbox onChange={handleChange} name={item} />
                          }
                          label={item}
                        />
                      })
                      : <Skeleton animation="wave" />
                  }
                </FormGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
          <Divider/>
          <FormControl component="fieldset" variant="standard" sx={{ display: 'flex' }}>
            <FormLabel component="legend">Categorias:</FormLabel>
            <FormGroup>
              {
                filters
                  ? filters.categories.map((item) => {
                    return <FormControlLabel key={item}
                      control={
                        <Checkbox onChange={handleChange} name={item} />
                      }
                      label={item}
                    />
                  })
                  : <Skeleton animation="wave" />
              }
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" variant="standard" sx={{ display: 'flex' }}>
            <FormLabel component="legend">Tipo de alimentación:</FormLabel>
            <FormGroup>
              {
                filters
                  ? filters.typesOfFood.map((item) => {
                    return <FormControlLabel key={item}
                      control={
                        <Checkbox onChange={handleChange} name={item} />
                      }
                      label={item}
                    />
                  })
                  : <Skeleton animation="wave" />
              }
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" variant="standard" sx={{ display: 'flex' }}>
            <FormLabel component="legend">Dificultad:</FormLabel>
            <FormGroup>
              {
                filters
                  ? filters.level.map((item) => {
                    return <FormControlLabel key={item}
                      control={
                        <Checkbox onChange={handleChange} name={item} />
                      }
                      label={item}
                    />
                  })
                  : <Skeleton animation="wave" />
              }
            </FormGroup>
          </FormControl>

        </Box>

        {/* Search results */}
        <Box sx={{
          flex: '1 1 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {
            recipes
              ? recipes.map((recipe) => (
                  <CardTeaser key={recipe.id} data={recipe} />
                ))
              : <CircularProgress />
          }
        </Box>
      </Box>

    </MainLayout>
  )
}
