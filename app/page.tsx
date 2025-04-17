import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScreenshotsGallery } from "@/components/screenshots-gallery"
import { CompanyTable } from "@/components/company-table"

export default function ProspeccaoPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Resultados da Prospecção</h1>

      <Tabs defaultValue="companies" className="w-full">
        
        <TabsList className="mb-6">
          <TabsTrigger value="companies">Lista das Empresas</TabsTrigger>
          <TabsTrigger value="screenshots">Prints das Chamadas</TabsTrigger>
        </TabsList>

        <TabsContent value="companies" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Lista das Empresas</h2>
          <CompanyTable />
        </TabsContent>

         <TabsContent value="screenshots" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Prints das Chamadas</h2>
          <ScreenshotsGallery />
        </TabsContent>
      </Tabs>
    </div>
  )
}
