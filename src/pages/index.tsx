import { Box, Button, Chip, Typography } from '@aivenio/aquarium';
import book from '@aivenio/aquarium/icons/book';
import learning from '@aivenio/aquarium/icons/learning';
import linkExternal from '@aivenio/aquarium/icons/linkExternal';

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
      <Carousel>
  <CardComponent />
  <CardLongTextComponent />
  <CardComponent />
  <CardWithChipsComponent />
  <CardComponent />
  <CardComponent />
</Carousel>



  );
}
