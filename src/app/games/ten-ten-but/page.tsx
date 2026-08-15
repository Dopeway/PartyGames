"use client";

import { useState, useEffect } from "react";
import { 
  Button, 
  Container, 
  Stack, 
  Title, 
  Text, 
  Slider, 
  Paper, 
  Group,
  Center,
  Box
} from "@mantine/core";
import { 
  calculateAverage, 
  findFurthestFromAverage, 
  selectNextPrompt,
  Vote 
} from "@/games/ten-ten-but/game";
import { ALL_TEN_TEN_BUT_PROMPTS, Prompt } from "@/data/prompts/ten-ten-but";
import Link from "next/link";

type GamePhase = 'PROMPT' | 'PASS_PHONE' | 'VOTING' | 'RESULTS' | 'FINISHED';

export default function TenTenButGame() {
  // --- State ---
  const [players, setPlayers] = useState<string[]>([]);
  const [phase, setPhase] = useState<GamePhase>('PROMPT');
  const [currentPrompt, setCurrentPrompt] = useState<Prompt | null>(null);
  const [usedPromptIds, setUsedPromptIds] = useState<string[]>([]);
  const [votes, setVotes] = useState<Vote[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentVoteValue, setCurrentVoteValue] = useState(5);

  // --- Initialization ---
  useEffect(() => {
    const savedPlayers = localStorage.getItem('party_players');
    if (savedPlayers) {
      setPlayers(JSON.parse(savedPlayers));
    } else {
      // Fallback for testing if no players are set
      setPlayers(['Mehdi', 'Sarah', 'Yassine']);
    }
    
    const firstPrompt = selectNextPrompt(ALL_TEN_TEN_BUT_PROMPTS, []);
    setCurrentPrompt(firstPrompt);
  }, []);

  // --- Actions ---
  const startNextRound = () => {
    const nextPrompt = selectNextPrompt(ALL_TEN_TEN_BUT_PROMPTS, [...usedPromptIds, currentPrompt?.id || '']);
    if (!nextPrompt) {
      setPhase('FINISHED');
    } else {
      setCurrentPrompt(nextPrompt);
      setUsedPromptIds([...usedPromptIds, currentPrompt?.id || '']);
      setVotes([]);
      setCurrentPlayerIndex(0);
      setPhase('PROMPT');
    }
  };

  const handlePromptConfirmed = () => {
    setPhase('PASS_PHONE');
  };

  const handleReadyToVote = () => {
    setPhase('VOTING');
    setCurrentVoteValue(5);
  };

  const handleVoteSubmitted = () => {
    const newVotes = [...votes, { playerId: players[currentPlayerIndex], value: currentVoteValue }];
    setVotes(newVotes);

    if (newVotes.length < players.length) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
      setPhase('PASS_PHONE');
    } else {
      setPhase('RESULTS');
    }
  };

  // --- Derived Data ---
  const voteValues = votes.map(v => v.value);
  const average = calculateAverage(voteValues);
  const outlierIndex = findFurthestFromAverage(voteValues, average);
  const outlierPlayer = players[outlierIndex];

  // --- Renderers ---
  if (phase === 'PROMPT') {
    return (
      <Container size="xs" py="xl">
        <Stack align="center" justify="center" gap="xl" style={{ minHeight: '80vh' }}>
          <Title order={2} textAlign="center" mb="sm">Le Prompt</Title>
          <Paper p="xl" radius="lg" withBorder shadow="md" style={{ textAlign: 'center' }}>
            <Text size="xl" fw={700} style={{ lineHeight: 1.4 }}>
              "{currentPrompt?.text}"
            </Text>
          </Paper>
          <Button size="xl" radius="xl" fullWidth onClick={handlePromptConfirmed}>
            C'est parti !
          </Button>
        </Stack>
      </Container>
    );
  }

  if (phase === 'PASS_PHONE') {
    return (
      <Container size="xs" py="xl">
        <Stack align="center" justify="center" gap="xl" style={{ minHeight: '80vh' }}>
          <Title order={2} textAlign="center">Passe le téléphone</Title>
          <Paper p="xl" radius="lg" withBorder shadow="sm" style={{ textAlign: 'center' }}>
            <Text size="lg" fw={500}>C'est au tour de :</Text>
            <Title order={3} mt="sm" style={{ fontSize: '2rem' }}>
              {players[currentPlayerIndex]}
            </Title>
          </Paper>
          <Button size="xl" radius="xl" fullWidth onClick={handleReadyToVote}>
            Je suis prêt !
          </Button>
        </Stack>
      </Container>
    );
  }

  if (phase === 'VOTING') {
    return (
      <Container size="xs" py="xl">
        <Stack align="center" justify="center" gap="xl" style={{ minHeight: '80vh' }}>
          <Title order={2} textAlign="center" c="dark.9">Ta Note</Title>
          <Text textAlign="center" c="dark.7" fw={500}>
            {players[currentPlayerIndex]}, quelle note donnes-tu ?
          </Text>
          
          <Box w="100%" maw={400} mx="auto">
            <Stack align="center" gap="xs">
              <Text size="3rem" fw={900} c="indigo">
                {currentVoteValue} / 10
              </Text>
              <Slider 
                value={currentVoteValue} 
                onChange={setCurrentVoteValue} 
                min={0} 
                max={10} 
                step={1} 
                w="100%"
              />
              <Group justify="space-between" w="100%" mt="sm">
                <Text size="sm" fw={500}>0</Text>
                <Text size="sm" fw={500}>10</Text>
              </Group>
            </Stack>
          </Box>

          <Button size="xl" radius="xl" fullWidth onClick={handleVoteSubmitted}>
            Valider
          </Button>
        </Stack>
      </Container>
    );
  }

  if (phase === 'RESULTS') {
    return (
      <Container size="xs" py="xl">
        <Stack align="center" gap="lg">
          <Title order={2} textAlign="center">Les Votes</Title>
          
          <Stack gap="xs" w="100%">
            {votes.map((vote, index) => (
              <Paper key={index} p="sm" radius="md" withBorder>
                <Group justify="space-between">
                  <Text fw={500}>{vote.playerId}</Text>
                  <Text fw={700}>{vote.value} / 10</Text>
                </Group>
              </Paper>
            ))}
          </Stack>

          <Paper p="xl" radius="lg" withBorder shadow="md" style={{ textAlign: 'center', backgroundColor: 'var(--mantine-color-indigo-light)' }}>
            <Text size="sm" fw={700}>MOYENNE</Text>
            <Title order={2} style={{ fontSize: '3rem' }}>
              {average} / 10
            </Title>
          </Paper>

          <Paper p="xl" radius="lg" withBorder shadow="sm" style={{ textAlign: 'center', border: '2px solid var(--mantine-color-indigo-filled)' }}>
            <Text size="sm" fw={700}>🎯 LE PLUS ÉLOIGNÉ</Text>
            <Title order={3} mt="xs">
              {outlierPlayer}
            </Title>
            <Text fw={700} size="lg">
              {votes[outlierIndex].value} / 10
            </Text>
            <Text size="sm" mt="sm" italic>
              Pourquoi seulement {votes[outlierIndex].value} ?
            </Text>
          </Paper>

          <Button size="xl" radius="xl" fullWidth onClick={startNextRound}>
            Nouveau prompt
          </Button>
          <Button variant="subtle" fullWidth onClick={() => setPhase('FINISHED')}>
            Terminer la partie
          </Button>
        </Stack>
      </Container>
    );
  }

  if (phase === 'FINISHED') {
    return (
      <Container size="xs" py="xl">
        <Stack align="center" justify="center" gap="xl" style={{ minHeight: '80vh' }}>
          <Title order={2} textAlign="center">Partie terminée !</Title>
          <Text textAlign="center" size="lg">
            Merci d'avoir joué.
          </Text>
          <Stack gap="md" w="100%">
            <Button size="xl" radius="xl" fullWidth onClick={() => {
              setUsedPromptIds([]);
              setVotes([]);
              setCurrentPlayerIndex(0);
              setPhase('PROMPT');
              const first = selectNextPrompt(ALL_TEN_TEN_BUT_PROMPTS, []);
              setCurrentPrompt(first);
            }}>
              Rejouer
            </Button>
            <Button variant="outline" size="xl" radius="xl" fullWidth component={Link} href="/">
              Retour à l'accueil
            </Button>
          </Stack>
        </Stack>
      </Container>
    );
  }

  return null;
}
