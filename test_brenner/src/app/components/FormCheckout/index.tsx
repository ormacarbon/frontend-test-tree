"use client";

import { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { ButtonsContainer, FormWrapper, InputGroup, Row, Section, Select } from './styles';
import { LoadingOverlay } from '../Loading';
import Image from 'next/image';
import { FormData } from './interface';

export function FormCheckout() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    cpf: '',
    email: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: '',
    installments: '',
  });

  const [loading, setLoading] = useState(false);
  const isFormComplete = Object.values(formData).every(value => value.trim() !== '');


  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const requiredFields = Object.entries(formData).filter(([key, value]) => value.trim() === '');
    if (requiredFields.length > 0) {
      console.warn("Todos os campos são obrigatórios:", requiredFields.map(([key]) => key));
      return;
    }

    setLoading(true);

    try {
      // simula envio para API
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Formulário enviado com sucesso:', formData);

      setFormData(formData);
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
          <Input id="name" name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} width="100%" height="2rem" />
        </InputGroup>

        <Row>
          <InputGroup>
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" name="phone" placeholder="(51) 990000000" value={formData.phone} onChange={handleChange} width="100%" height="2rem" />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cpf">CPF</Label>
            <Input id="cpf" name="cpf" placeholder="00000000000" value={formData.cpf} onChange={handleChange} width="100%" height="2rem" />
          </InputGroup>
        </Row>

        <InputGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} width="100%" height="2rem" />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="cardNumber">Número de Cartão</Label>
          <Input id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" value={formData.cardNumber} onChange={handleChange} width="100%" height="2rem" />
        </InputGroup>

        <Row>
          <InputGroup>
            <Label htmlFor="expiry">Data de validade</Label>
            <Section>
              <Input id="expiryMonth" name="expiryMonth" placeholder="10" value={formData.expiryMonth} onChange={handleChange} width="40%" height="2rem" maxLength={2} />
              <Image src={"/Vector2.png"} alt="" width={5} height={30} />
              <Input id="expiryYear" name="expiryYear" placeholder="29" value={formData.expiryYear} onChange={handleChange} width="40%" height="2rem" maxLength={2} />
            </Section>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cvc">CVC/CVV</Label>
            <Input id="cvc" name="cvc" placeholder="123" value={formData.cvc} onChange={handleChange} width="100%" height="2rem" maxLength={3} />
          </InputGroup>
        </Row>

        <InputGroup>
          <Label htmlFor="installments">Opções de Parcelamento</Label>
          <Select id="installments" name="installments" value={formData.installments} onChange={handleChange}>
            <option value="">Selecionar</option>
            <option value="1x">1x R$ 300</option>
            <option value="2x">2x R$ 150</option>
            <option value="3x">3x R$ 100</option>
            <option value="4x">4x R$ 75</option>
            <option value="5x">5x R$ 60</option>
          </Select>
        </InputGroup>

        <ButtonsContainer>
          <Button type="submit" variant={isFormComplete ? "success" : "primary"} width="100%" height="2rem" disabled={!isFormComplete}>Prosseguir</Button>
          <Button type="button" variant="primary" width="100%" height="2rem">Voltar</Button>
        </ButtonsContainer>
      </FormWrapper >
    </>
  );
}
