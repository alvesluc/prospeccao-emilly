"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, Search } from "lucide-react"
import { Email, NoReturn, NotInterested, WhatsApp } from "./comp-273"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

// Tipos para os dados da empresa
type Status = "Conseguiu contato" | "Enviou material" | "Enviou orçamento" | "Não conseguiu"
type Company = {
  id: number
  name: string
  status: Status
  reason?: string
}

// Dados de exemplo
const companies: Company[] = [
  {
    id: 1,
    name: "BSusimonte - Serviços de Usinagem",
    status: "Não conseguiu",
  },
  {
    id: 2,
    name: "Brazmo Indústria",
    status: "Não conseguiu",
  },
  {
    id: 3,
    name: "Eco Polpas",
    status: "Não conseguiu",
  },
  {
    id: 4,
    name: "Fibranor",
    status: "Não conseguiu",
  },
  {
    id: 5,
    name: "Fipel",
    status: "Enviou material",
  },
  {
    id: 6,
    name: "FVO Alimentos",
    status: "Não conseguiu",
  },
  {
    id: 7,
    name: "Galvanisa",
    status: "Não conseguiu",
  },
  {
    id: 8,
    name: "Igual",
    status: "Enviou material",
  },
  {
    id: 9,
    name: "Icoal",
    status: "Não conseguiu",
  },
  {
    id: 10,
    name: "Ibraim Transportes",
    status: "Não conseguiu",
  },
  {
    id: 11,
    name: "Itaesbra",
    status: "Enviou material",
  },
  {
    id: 12,
    name: "Ipê",
    status: "Não conseguiu",
  },
  {
    id: 13,
    name: "Luna Transportes",
    status: "Enviou material",
  },
  {
    id: 14,
    name: "Meta Química",
    status: "Não conseguiu",
  },
  {
    id: 15,
    name: "Musashi do Brasil",
    status: "Enviou material",
  },
  {
    id: 16,
    name: "Ondunorte",
    status: "Enviou material",
  },
  {
    id: 17,
    name: "Paji Transportes",
    status: "Não conseguiu",
  },
  {
    id: 18,
    name: "Plasfil",
    status: "Não conseguiu",
  },
  {
    id: 19,
    name: "RC Transporte",
    status: "Não conseguiu",
  },
  {
    id: 20,
    name: "São José Agroindustrial",
    status: "Não conseguiu",
    reason: "Liguei três vezes, na última a pessoa encerrou a ligação antes de concluirmos. Não consegui retornar depois disto."
  },
  {
    id: 21,
    name: "Star Turismo",
    status: "Não conseguiu",
  },
  {
    id: 22,
    name: "Teka Alimentos",
    status: "Enviou material",
  },
  {
    id: 23,
    name: "Tabu",
    status: "Enviou material",
  },
  {
    id: 24,
    name: "Tecsil Indústria de Produtos Químicos",
    status: "Não conseguiu",
  },
  {
    id: 25,
    name: "Usinaço",
    status: "Não conseguiu",
  },
  {
    id: 26,
    name: "Vital - RJ (segurança e saúde do trabalhador)",
    status: "Enviou orçamento",
    reason: "Está em processo de contratação, mas já cadastrou a clínica no sistema.",
  },
];

export function CompanyTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<Status[]>([])

  // Filtrar empresas com base na pesquisa e filtros
  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter.length === 0 || statusFilter.includes(company.status)
    return matchesSearch && matchesStatus
  })

  // Alternar filtro de status
  const toggleStatusFilter = (status: Status) => {
    if (statusFilter.includes(status)) {
      setStatusFilter(statusFilter.filter((s) => s !== status))
    } else {
      setStatusFilter([...statusFilter, status])
    }
  }

  // Função para renderizar o badge de status com a cor apropriada
  const renderStatusBadge = (status: Status) => {
    switch (status) {
      case "Conseguiu contato":
        return <Badge className="bg-indigo-500">{status}</Badge>
      case "Enviou material":
        return <Badge className="bg-sky-500">{status}</Badge>
      case "Enviou orçamento":
        return <Badge className="bg-emerald-500">{status}</Badge>
      case "Não conseguiu":
        return <Badge variant="destructive">{status}</Badge>
    }
  }

  return (
    <div className="space-y-4">

      <Card>
        <CardHeader>
          <CardTitle>Informações adicionais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <NoReturn />
            <NotInterested />
            <WhatsApp />
            <Email />
          </div>
        </CardContent>

      </Card>



      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquisar empresas..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtrar Status
              {statusFilter.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {statusFilter.length}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem
              checked={statusFilter.includes("Conseguiu contato")}
              onCheckedChange={() => toggleStatusFilter("Conseguiu contato")}
            >
              Conseguiu contato
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={statusFilter.includes("Enviou material")}
              onCheckedChange={() => toggleStatusFilter("Enviou material")}
            >
              Enviou material
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={statusFilter.includes("Enviou orçamento")}
              onCheckedChange={() => toggleStatusFilter("Enviou orçamento")}
            >
              Enviou orçamento
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={statusFilter.includes("Não conseguiu")}
              onCheckedChange={() => toggleStatusFilter("Não conseguiu")}
            >
              Não conseguiu
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Anotação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCompanies.map((company) => (
              <TableRow key={company.id}>
                <TableCell className="font-bold">{company.name}</TableCell>
                <TableCell>{renderStatusBadge(company.status)}</TableCell>
                <TableCell>{company.reason || "-"}</TableCell>
              </TableRow>
            ))}
            {filteredCompanies.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="h-24 text-center">
                  Nenhuma empresa encontrada.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
