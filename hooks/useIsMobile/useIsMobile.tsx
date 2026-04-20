import { useState, useEffect } from "react";

export function useIsMobile(breakpoint: number = 768) {
  // Inicializamos como false para evitar erros de hidratação no servidor (Next.js)
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Função que verifica o tamanho atual da janela
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Executa a primeira verificação assim que o componente é montado no cliente
    checkIsMobile();

    // Adiciona um "ouvinte" para atualizar o estado caso o usuário redimensione a tela
    window.addEventListener("resize", checkIsMobile);

    // Limpeza: remove o ouvinte quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
}