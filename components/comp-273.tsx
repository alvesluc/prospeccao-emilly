import { CircleAlert, Mails, MessageCircleReply } from "lucide-react"

export function NoReturn() {
  return (
    <div className="rounded-md border px-4 py-3">
      <div className="flex gap-3">
        <CircleAlert
          className="mt-0.5 shrink-0 text-red-500"
          size={16}
          aria-hidden="true"
        />
        <div className="grow space-y-1">
          <p className="font-bold">
            Sem retorno
          </p>
          <p className="text-sm">
            17 empresas, motivos:
          </p>
          <ul className="text-muted-foreground list-inside list-disc text-sm">
            <li>Ocupado.</li>
            <li>Desligou durante a ligação sem dar explicação e não atendeu no retorno.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export function NotInterested() {
  return (
    <div className="rounded-md border px-4 py-3">
      <div className="flex gap-3">
        <CircleAlert
          className="mt-0.5 shrink-0 text-yellow-500"
          size={16}
          aria-hidden="true"
        />
        <div className="grow space-y-1">
          <p className="font-bold">
            Sem interesse
          </p>
          <p className="text-sm">
            1 empresa, motivo:
          </p>
          <ul className="text-muted-foreground list-inside list-disc text-sm">
            <li>Ainda em fase inicial e pequena.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export function WhatsApp() {
  return (
    <div className="rounded-md border px-4 py-3">
      <div className="flex gap-3">
        <MessageCircleReply
          className="mt-0.5 shrink-0 text-green-500"
          size={16}
          aria-hidden="true"
        />
        <div className="grow space-y-1">
          <p className="font-bold">
            WhatsApp
          </p>
          <p className="text-sm">
            3 empresas
          </p>
          <ul className="text-muted-foreground list-inside list-disc text-sm">
            <li>Retornei pedindo a confirmação de recebimento.</li>
            <li>Só a <span className="font-bold text-black">Vital</span> respondeu.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export function Email() {
  return (
    <div className="rounded-md border px-4 py-3">
      <div className="flex gap-3">
        <Mails
          className="mt-0.5 shrink-0 text-sky-500"
          size={16}
          aria-hidden="true"
        />
        <div className="grow space-y-1">
          <p className="font-bold">
            E-mail
          </p>
          <p className="text-sm">
            4 empresas
          </p>
          <ul className="text-muted-foreground list-inside list-disc text-sm">
            <li>Retornei pedindo a confirmação de recebimento.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
