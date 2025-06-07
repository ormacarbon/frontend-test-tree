"use client"

import { Container } from "./components/ui/Container";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";
import { Label } from "./components/ui/Label";
import { Text } from "./components/ui/Text"
import { Heading1, Heading2 } from "./components/ui/Title";
import { CardColumn, CardRow } from "./components/ui/Card";

export default function Home() {
  return (
    <>
      <Container>
        <CardColumn>
          <Label htmlFor="teste">Teste</Label>
          <Input width="40%" height="10%" placeholder="teste"></Input>
        </CardColumn>
        <CardRow>
          <Heading1>Parabéns</Heading1>
          <Heading2>Teste</Heading2>
        </CardRow>
        <Button variant={"primary"}>Teste</Button>
      </Container>
    </>
  );
}
