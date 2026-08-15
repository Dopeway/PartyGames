"use client";

import { useState } from "react";
import { 
  Button, 
  Container, 
  Stack, 
  Title, 
  Text, 
  TextInput, 
  Group, 
  ActionIcon,
  Paper
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import Link from "next/link";

export default function SetupPage() {
  const [players, setPlayers] = useState<string[]>([]);
  const [playerName, setPlayerName] = useState("");

  const addPlayer = () => {
    if (playerName.trim()) {
      setPlayers([...players, playerName.trim()]);
      setPlayerName("");
    }
  };

  const removePlayer = (index: number) => {
    setPlayers(players.filter((_, i) => i !== index));
  };

  const canContinue = players.length >= 2;

  return (
    <Container size="xs" py="xl">
      <Stack align="center" gap="md">
        <Title order={2} textAlign="center" mb="sm">
          Qui joue ?
        </Title>
        
        <Group grow mb="md">
          <TextInput 
            placeholder="Nom du joueur" 
            value={playerName}
            onChange={(e) => setPlayerName(e.currentTarget.value)}
            onKeyDown={(e) => e.key === 'Enter' && addPlayer()}
          />
          <Button onClick={addPlayer} radius="md">
            Ajouter
          </Button>
        </Group>

        <Stack gap="xs" w="100%" mb="xl">
          {players.map((player, index) => (
            <Paper key={index} withBorder p="sm" radius="md">
              <Group justify="space-between">
                <Text fontWeight={500} c="black">{player}</Text>
                <ActionIcon 
                  color="red" 
                  variant="subtle" 
                  onClick={() => removePlayer(index)}
                >
                  <IconTrash size={18} />
                </ActionIcon>
              </Group>
            </Paper>
          ))}
          {players.length === 0 && (
            <Text c="black" textAlign="center" py="xl" style={{ opacity: 0.6 }}>
              Aucun joueur ajouté.
            </Text>
          )}
        </Stack>

        <Button 
          component={Link} 
          href="/games" 
          size="xl" 
          radius="xl" 
          fullWidth
          disabled={!canContinue}
          style={{ fontSize: '1.2rem' }}
          onClick={() => {
            localStorage.setItem('party_players', JSON.stringify(players));
          }}
        >
          Continuer
        </Button>
      </Stack>
    </Container>
  );
}
