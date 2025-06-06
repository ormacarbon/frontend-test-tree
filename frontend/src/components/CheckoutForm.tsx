"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CheckoutFormProps {
  isDesktop?: boolean
}

export function CheckoutForm({ isDesktop = false }: Readonly<CheckoutFormProps>) {
  const [formData, setFormData] = useState({
    name: "Augusto de C R dos Anjos",
    email: isDesktop ? "augustodosantos@quimera.com.br" : "AugustoCRA@gmail.com",
    cardNumber: "(51) 990000000",
    phone: "(31) 99000000",
    cpf: "60055588842",
    expiryMonth: "10",
    expiryYear: "29",
    cvc: "123",
    installments: ""
  })

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
                />
              </div>
              <span className="text-primary text-2xl font-bold">/</span>
              <div className="w-16">
                <Input 
                  value={formData.expiryYear}
                  onChange={(e) => handleInputChange('expiryYear', e.target.value)}
                  className="bg-muted border-0 rounded-xl" 
                />
              </div>
            </>
          ) : (
            <div className="flex items-center gap-1">
              <Input 
                value={formData.expiryMonth} 
                onChange={(e) => handleInputChange('expiryMonth', e.target.value)}
                className="bg-muted border-0 rounded-xl w-14" 
              />
              <span className="text-primary text-2xl font-bold">/</span>
              <Input 
                value={formData.expiryYear} 
                onChange={(e) => handleInputChange('expiryYear', e.target.value)}
                className="bg-muted border-0 rounded-xl w-14" 
              />
            </div>
          )}

          <div className={isDesktop ? 'w-52 ml-20' : 'flex-1'}>
            <Input 
              value={formData.cvc} 
              onChange={(e) => handleInputChange('cvc', e.target.value)}
              className="bg-muted border-0 rounded-xl" 
            />
          </div>
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium text-primary">Opções de Parcelamento</Label>
        <Select 
          value={formData.installments} 
          onValueChange={(value) => handleInputChange('installments', value)}
        >
          <SelectTrigger className={`mt-1 bg-muted border-0 rounded-xl ${isDesktop ? "mb-4" : "mb-8"}`}>
            <SelectValue placeholder="Selecionar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1x">1x sem juros</SelectItem>
            <SelectItem value="2x">2x sem juros</SelectItem>
            <SelectItem value="3x">3x sem juros</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isDesktop ? (
        <div className="flex justify-end space-x-2 pt-2">
          <Button variant="outline" className="px-6 py-3 rounded-sm min-w-[150px] text-btn-primary hover:text-primary-hover">
            Voltar
          </Button>
          <Button 
            disabled={!isFormComplete()}
            className={`px-6 py-3 rounded-sm min-w-[150px] ${isFormComplete() ? 'bg-primary hover:bg-primary/90' : 'bg-btn-primary hover:bg-btn-primary-hover opacity-50 cursor-not-allowed'}`}
          >
            Prosseguir
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <Button variant="outline" className="w-full py-3 rounded-sm text-bg-btn-primary">
            Voltar
          </Button>
          <Button 
            disabled={!isFormComplete()}
            className={`w-full py-3 rounded-sm ${isFormComplete() ? 'bg-primary hover:bg-primary/90' : 'bg-btn-primary hover:bg-btn-primary-hover opacity-50 cursor-not-allowed'}`}
          >
            Prosseguir
          </Button>
        </div>
      )}
    </form>
  )
}