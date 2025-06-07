"use client";

import { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { ButtonsContainer, FormWrapper, InputGroup, Row, Select } from './styles';
import { LoadingOverlay } from '../Loading'; // crie esse componente no próximo passo

export function FormCheckout() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [installments, setInstallments] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name,
      phone,
      cpf,
      email,
      cardNumber,
      expiry,
      cvc,
      installments,
    };

    try {
      // simula envio para API
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Formulário enviado com sucesso:', formData);
      // aqui você pode chamar sua API real

      // limpar formulário se necessário
      // setName('');
      // setPhone('');
      // ...
    } catch (err) {
      console.error('Erro ao enviar o formulário', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <LoadingOverlay />}
      <FormWrapper as="form" onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">Nome</Label>
          <Input id="name" name="name" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} width="100%" height="2rem" />
        </InputGroup>

        <Row>
          <InputGroup>
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" name="phone" placeholder="(51) 990000000" value={phone} onChange={(e) => setPhone(e.target.value)} width="100%" height="2rem" />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cpf">CPF</Label>
            <Input id="cpf" name="cpf" placeholder="00000000000" value={cpf} onChange={(e) => setCpf(e.target.value)} width="100%" height="2rem" />
          </InputGroup>
        </Row>

        <InputGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} width="100%" height="2rem" />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="cardNumber">Número de Cartão</Label>
          <Input id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} width="100%" height="2rem" />
        </InputGroup>

        <Row>
          <InputGroup>
            <Label htmlFor="expiry">Data de validade</Label>
            <Input id="expiry" name="expiry" placeholder="10 / 29" value={expiry} onChange={(e) => setExpiry(e.target.value)} width="50%" height="2rem" />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cvc">CVC/CVV</Label>
            <Input id="cvc" name="cvc" placeholder="123" value={cvc} onChange={(e) => setCvc(e.target.value)} width="100%" height="2rem" />
          </InputGroup>
        </Row>

        <InputGroup>
          <Label htmlFor="installments">Opções de Parcelamento</Label>
          <Select id="installments" name="installments" value={installments} onChange={(e) => setInstallments(e.target.value)}>
            <option value="">Selecionar</option>
            <option value="1x">1x R$ 300</option>
            <option value="2x">2x R$ 150</option>
            <option value="3x">3x R$ 100</option>
            <option value="4x">4x R$ 75</option>
            <option value="5x">5x R$ 60</option>
          </Select>
        </InputGroup>

        <ButtonsContainer>
          <Button type="submit" variant="success" width="100%" height="2rem">Prosseguir</Button>
          <Button type="button" variant="primary" width="100%" height="2rem">Voltar</Button>
        </ButtonsContainer>
      </FormWrapper>
    </>
  );
}
