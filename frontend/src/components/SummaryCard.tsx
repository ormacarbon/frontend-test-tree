import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

interface SummaryCardProps {
  isDesktop?: boolean
}

export function SummaryCard({ isDesktop = false }: SummaryCardProps) {
  if (isDesktop) {
    return (
      <div>
        <h2 className="text-xl font-bold text-primary text-center mb-3">Resumo de compra</h2>
        <Card className="shadow-md p-0 rounded-none border-t-0 border-l border-r border-b w-[90%] mx-auto">
          <CardContent className="pt-3">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Image 
                  src="/resumeLogo.svg" 
                  alt="Resume Logo" 
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <p className="text-lg text-muted-foreground leading-tight">Compensação de<br></br> emissões</p>
                <p className="text-lg font-bold text-foreground">R$ 300</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg md:hidden">
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
            <Image 
              src="/resumeLogo.svg" 
              alt="Resume Logo" 
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <div>
            <p className="text-base font-bold text-primary">Resumo de compra</p>
            <p className="text-sm text-muted-foreground max-w-[120px]">Compensação de emissões</p>
            <p className="text-lg font-bold text-foreground">R$ 300</p>
          </div>
        </div>
      </div>
    </div>
  )
}