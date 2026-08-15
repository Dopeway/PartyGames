import { Button, Container, Stack, Title, Text } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Container size="xs" py="xl">
      <Stack align="center" justify="center" gap="md" style={{ minHeight: '80vh' }}>
        <Stack align="center" gap={0} mb="xl">
          <Title order={1} style={{ fontSize: '3rem', fontWeight: 900, textAlign: 'center' }}>
            PARTY GAMES
          </Title>
          <Text size="lg" c="black" mt="sm" style={{ opacity: 0.8, textAlign: 'center' }}>
            Des jeux simples. <br />
            Des débats beaucoup moins simples.
          </Text>
        </Stack>

        <Link href="/setup" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button 
            size="xl" 
            radius="xl" 
            fullWidth
            style={{ fontSize: '1.2rem', padding: '1rem' }}
          >
            Commencer une partie
          </Button>
        </Link>
      </Stack>
    </Container>
  );
}
