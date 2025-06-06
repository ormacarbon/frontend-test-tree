"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCreditPrice } from '@/hooks/useCreditPrice'
import { processPayment, type PaymentData } from '@/services/paymentService'
import { Loading } from '@/components/Loading'

interface CheckoutFormProps {
  isDesktop?: boolean
}

export function CheckoutForm({ isDesktop = false }: Readonly<CheckoutFormProps>) {
  const router = useRouter();
  const { loading, totalValue, formatCurrency, co2Quantity, creditPriceId } = useCreditPrice();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    name: "Augusto de C R dos Anjos",
    email: isDesktop ? "augustodosantos@quimera.com.br" : "AugustoCRA@gmail.com",
    cardNumber: "1234 5678 9012 3456",
    phone: "(51) 99000000",
    cpf: "60055588842",
    expiryMonth: "10",
    expiryYear: "29",
    cvc: "123",
    installments: ""
  })

  const generateInstallmentOptions = () => {
    if (loading || totalValue === 0) return [];
    
    const options = [];
    for (let i = 1; i <= 12; i++) {
      const installmentValue = totalValue / i;
      const label = `${i} x ${formatCurrency(installmentValue)}`;
      options.push({ value: `${i}x`, label });
    }
    return options;
  };

  const installmentOptions = generateInstallmentOptions();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const isFormComplete = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.cardNumber.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.cpf.trim() !== "" &&
      formData.expiryMonth.trim() !== "" &&
      formData.expiryYear.trim() !== "" &&
      formData.cvc.trim() !== "" &&
      formData.installments.trim() !== ""
    )
  }

  const handleProcessPayment = async () => {
    if (!isFormComplete()) return;

    setIsProcessing(true);

    try {
      const paymentData: PaymentData = {
        co2: co2Quantity,
        cred: Number(creditPriceId),
        card_number: formData.cardNumber,
        expiration_month: Number(formData.expiryMonth),
        expiration_year: Number(`20${formData.expiryYear}`),
        security_code: formData.cvc,
        cardholder: {
          name: formData.name,
          identification: {
            type: "CPF",
            number: formData.cpf
          }
        }
      };

      const result = await processPayment(paymentData);

      if (result && result.status === 'success') {
        router.push('/payment-success');
      } else {
        router.push('/payment-error');
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      router.push('/payment-error');
    } finally {
      setIsProcessing(false);
    }
  };

  const singleFields = [
    { name: "name", label: "Nome", value: formData.name },
    { name: "email", label: "E-mail", value: formData.email },
    { name: "cardNumber", label: "Número de Cartão", value: formData.cardNumber }
  ]

  const gridFields = [
    { name: "phone", label: "Telefone", value: formData.phone },
    { name: "cpf", label: "CPF", value: formData.cpf }
  ]

  const getFieldId = (field: string) => isDesktop ? `${field}-desktop` : field

  return (
    <>
      {isProcessing && <Loading />}
      
      <form className={isDesktop ? "space-y-1" : "space-y-2"}>
        {singleFields.map((field) => (
          <div key={field.name}>
            <Label htmlFor={getFieldId(field.name)} className="text-sm font-medium text-primary">
              {field.label}
            </Label>
            <Input
              id={getFieldId(field.name)}
              value={field.value}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className="mt-1 bg-muted border-0 rounded-xl"
              disabled={isProcessing}
            />
          </div>
        ))}

        <div className="grid grid-cols-2 gap-4">
          {gridFields.map((field) => (
            <div key={field.name}>
              <Label htmlFor={getFieldId(field.name)} className="text-sm font-medium text-primary">
                {field.label}
              </Label>
              <Input
                id={getFieldId(field.name)}
                value={field.value}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                className="mt-1 bg-muted border-0 rounded-xl"
                disabled={isProcessing}
              />
            </div>
          ))}
        </div>

        <div>
          {isDesktop ? (
            <div className="flex items-center gap-4 mb-1">
              <div className="flex-1">
                <Label className="text-sm font-medium text-primary">Data de Validade</Label>
              </div>
              <div className="w-52 ml-20 text-left">
                <Label className="text-sm font-medium text-primary">CVC/CVV</Label>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-10 mb-1">
              <Label className="text-sm font-medium text-primary">Data de validade</Label>
              <Label className="text-sm font-medium text-primary">CVC/CVV</Label>
            </div>
          )}

          <div className={`flex items-center ${isDesktop ? 'gap-2' : 'gap-4'}`}>
            {isDesktop ? (
              <>
                <div className="w-16">
                  <Input 
                    value={formData.expiryMonth} 
                    onChange={(e) => handleInputChange('expiryMonth', e.target.value)}
                    className="bg-muted border-0 rounded-xl"
                    disabled={isProcessing}
                  />
                </div>
                <span className="text-primary text-2xl font-bold">/</span>
                <div className="w-16">
                  <Input 
                    value={formData.expiryYear}
                    onChange={(e) => handleInputChange('expiryYear', e.target.value)}
                    className="bg-muted border-0 rounded-xl"
                    disabled={isProcessing}
                  />
                </div>
              </>
            ) : (
              <div className="flex items-center gap-1">
                <Input 
                  value={formData.expiryMonth} 
                  onChange={(e) => handleInputChange('expiryMonth', e.target.value)}
                  className="bg-muted border-0 rounded-xl w-14"
                  disabled={isProcessing}
                />
                <span className="text-primary text-2xl font-bold">/</span>
                <Input 
                  value={formData.expiryYear} 
                  onChange={(e) => handleInputChange('expiryYear', e.target.value)}
                  className="bg-muted border-0 rounded-xl w-14"
                  disabled={isProcessing}
                />
              </div>
            )}

            <div className={isDesktop ? 'w-52 ml-20' : 'flex-1'}>
              <Input 
                value={formData.cvc} 
                onChange={(e) => handleInputChange('cvc', e.target.value)}
                className="bg-muted border-0 rounded-xl"
                disabled={isProcessing}
              />
            </div>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-primary">Opções de Parcelamento</Label>
          <Select 
            value={formData.installments} 
            onValueChange={(value) => handleInputChange('installments', value)}
            disabled={loading || totalValue === 0 || isProcessing}
          >
            <SelectTrigger className={`mt-1 bg-gray-200 border-0 rounded-xl ${isDesktop ? "mb-4" : "mb-8"} font-bold`}>
              <SelectValue 
                placeholder={loading ? "Carregando..." : "Selecionar"} 
                className="font-bold"
              />
            </SelectTrigger>
            <SelectContent className="bg-gray-200">
              {installmentOptions.map((option) => (
                <SelectItem 
                  key={option.value} 
                  value={option.value}
                  className="font-bold hover:bg-gray-300 focus:bg-gray-300"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {isDesktop ? (
          <div className="flex justify-end space-x-2 pt-2">
            <Button 
              type="button"
              variant="outline" 
              className="px-6 py-3 rounded-sm min-w-[150px] text-btn-primary hover:text-primary-hover"
              disabled={isProcessing}
            >
              Voltar
            </Button>
            <Button 
              type="button"
              onClick={handleProcessPayment}
              disabled={!isFormComplete() || isProcessing}
              className={`px-6 py-3 rounded-sm min-w-[150px] ${isFormComplete() && !isProcessing ? 'bg-primary hover:bg-primary/90' : 'bg-btn-primary hover:bg-btn-primary-hover opacity-50 cursor-not-allowed'}`}
            >
              {isProcessing ? 'Processando...' : 'Prosseguir'}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <Button 
              type="button"
              variant="outline" 
              className="w-full py-3 rounded-sm text-bg-btn-primary"
              disabled={isProcessing}
            >
              Voltar
            </Button>
            <Button 
              type="button"
              onClick={handleProcessPayment}
              disabled={!isFormComplete() || isProcessing}
              className={`w-full py-3 rounded-sm ${isFormComplete() && !isProcessing ? 'bg-primary hover:bg-primary/90' : 'bg-btn-primary hover:bg-btn-primary-hover opacity-50 cursor-not-allowed'}`}
            >
              {isProcessing ? 'Processando...' : 'Prosseguir'}
            </Button>
          </div>
        )}
      </form>
    </>
  )
}