import { Box, Chip, Typography, Card } from '@aivenio/aquarium';
import RecipeCard from './components/RecipeCard/RecipeCard';

export default function Home() {
  return (
    <Box.Flex
      marginTop="l5"
      flexDirection="column"
      gap="5"
      alignItems="center"
      flex={1}
      style={{ textAlign: 'center' }}
    >
      <Box display="flex" gap="3" justifyContent="center" className="flex-wrap">
        <Chip text="Flavorful Fusion" />
      </Box>
      <Typography.LargeHeading>
A fusion of flavors from around the globe
      </Typography.LargeHeading>
      <Typography.Large color="grey-60">
     Embark on a culinary adventure without leaving your kitchen! Our website is your passport to a world of diverse and delicious recipes.
      </Typography.Large>

</Box.Flex>

<Card> <RecipeCard /> </Card>
  );
}
