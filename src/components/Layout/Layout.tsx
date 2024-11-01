import React, { ReactNode } from 'react';
import { Alert, Box } from '@aivenio/aquarium';
import Head from 'next/head';

import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import { useAppContext } from '@/context';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { alert } = useAppContext();

  return (
    <>
      <Head>
        <title>Flavorful Fusion</title>
        <meta name="description" content="Recipe library  A fusion of flavors from around the globe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box.Flex
        component="main"
        flexDirection="column"
        flex={1}
        gap="5"
        padding="5"
        width="full"
        maxWidth="4xl"
        marginX="auto"
      >
        {alert && <Alert {...alert} />}
        {children}
      </Box.Flex>
      <Footer />
    </>
  );
};
