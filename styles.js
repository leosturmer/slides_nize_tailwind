const shadow = "shadow-[-3px_3px_0px_0px_#000]";
const shadowButton = "shadow-[-2px_2px_0px_0px_#000]";


const estilos = {
    fundoBranco: "m-10 border-black border-2 p-10 bg-slate-100 h-[calc(100dvh-8rem)] flex justify-center flex-col shadow-[-3px_3px_0px_0px_#000]",
    botao: "bg-purple-700 p-2 text-white border-black border-2 align-bottom shadow-[-2px_2px_0px_0px_#000] mx-4 hover:bg-purple-400",
    divBotoes: "flex flex-row justify-center",
    caixaVerde: "text-center text-xl mt-10 bg-green-400 w-fit self-center p-3 border-black border-2 shadow-[-3px_3px_0px_0px_#000] mx-auto my-0",
    caixaLilas: "mt-10 text-center text-3xl bg-purple-400 p-5 border-black border-2 shadow-[-3px_3px_0px_0px_#000] text-white w-fit mx-auto my-0",
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-style]").forEach(elemento => {
    const nomeDoEstilo = elemento.getAttribute("data-style");
    if (estilos[nomeDoEstilo]) {
      elemento.className = estilos[nomeDoEstilo];
    }
  });
});