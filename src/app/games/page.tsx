"use client";

import { Button, Container, Stack, Title, Text, SimpleGrid, Card, Image } from "@mantine/core";
import Link from "next/link";

const AVAILABLE_GAMES = [
  {
    id: "ten-ten-but",
    name: "Le 10/10… mais",
    description: "Notez une situation improbable de 0 à 10. Qui est le plus éloigné de la moyenne ?",
    image: "https://images.unsplash.com/photo-1511632765486-759f6977737a?q=80&w=400&h=250&auto=format&fit=crop",
  },
  // Future games will be added here
];

export default function GamesPage() {
  return (
    <Container size="xs" py="xl">
      <Stack gap="lg">
        <Stack gap={0} mb="md">
          <Title order={2} style={{ textAlign: 'center' }}>
            Choisissez un jeu
          </Title>
          <Text c="black" mt="xs" style={{ opacity: 0.8, textAlign: 'center' }}>
            Sélectionnez l'expérience que vous voulez lancer.
          </Text>
        </Stack>

        <SimpleGrid cols={1} spacing="md">
          {AVAILABLE_GAMES.map((game) => (
            <Card 
              key={game.id} 
              shadow="sm" 
              padding="lg" 
              radius="md" 
              withBorder
              component={Link} 
              href={`/games/${game.id}`}
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              <Stack gap="sm">
                <Image 
                  src={game.image} 
                  alt={game.name} 
                  radius="md" 
                  height={150}
                />
                <Title order={3}>{game.name}</Title>
                <Text size="sm" c="black" style={{ opacity: 0.7 }}>
                  {game.description}
                </Text>
                <Button 
                  variant="light" 
                  fullWidth 
                  radius="md" 
                  mt="sm"
                >
                  Jouer
                </Button>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
