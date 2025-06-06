"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CheckoutFormProps {
  isDesktop?: boolean
}

export function CheckoutForm({ isDesktop = false }: CheckoutFormProps) {
  const singleFields = [
    { name: "name", label: "Nome", placeholder: "Augusto de C R dos Anjos" },
    { 
      name: "email", 
      label: "E-mail", 
      placeholder: isDesktop ? "augustodosantos@quimera.com.br" : "AugustoCRA@gmail.com" 
    },
    { name: "cardNumber", label: "Número de Cartão", placeholder: "(51) 990000000" }
  ]

  const gridFields = [
    { name: "phone", label: "Telefone", placeholder: "(31) 99000000" },
    { name: "cpf", label: "CPF", placeholder: "60055588842" }
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
            placeholder={field.placeholder}
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
              placeholder={field.placeholder}
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

        <div className={isDesktop ? 'flex items-center gap-2' : 'flex items-center gap-4'}>
          <div className={isDesktop ? 'w-16' : 'flex items-center gap-1'}>
            {isDesktop ? (
              <Input placeholder="MM" className="bg-muted border-0 rounded-xl" />
            ) : (
              <>
                <Input placeholder="10" className="bg-muted border-0 rounded-xl w-14" />
                <span className="text-primary text-2xl font-bold">/</span>
                <Input placeholder="29" className="bg-muted border-0 rounded-xl w-14" />
              </>
            )}
          </div>

          {isDesktop && <span className="text-primary text-2xl font-bold">/</span>}
          {isDesktop && (
            <div className="w-16">
              <Input placeholder="AA" className="bg-muted border-0 rounded-xl" />
            </div>
          )}

          <div className={isDesktop ? 'w-52 ml-20' : 'flex-1'}>
            <Input placeholder="123" className="bg-muted border-0 rounded-xl" />
          </div>
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium text-primary">Opções de Parcelamento</Label>
        <Select>
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
          <Button className="px-6 py-3 rounded-sm min-w-[150px] bg-btn-primary hover:bg-btn-primary-hover text-white">
            Prosseguir
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <Button variant="outline" className="w-full py-3 rounded-sm text-bg-btn-primary">
            Voltar
          </Button>
          <Button className="w-full py-3 rounded-sm bg-btn-primary hover:bg-btn-primary-hover text-white">
            Prosseguir
          </Button>
        </div>
      )}
    </form>
  )
}