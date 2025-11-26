import { useState } from "react";
import "./App.css";

type Tamanho = "P" | "M" | "G";

interface Adicional {
  nome: string;
  preco: number;
}

interface Pizza {
  sabor: string;
  preco: number;
}

const sabores: Pizza[] = [
  { sabor: "Mussarela", preco: 30 },
  { sabor: "Calabresa", preco: 32 },
  { sabor: "Frango c/ Catupiry", preco: 38 },
  { sabor: "Portuguesa", preco: 40 },
];

const adicionaisLista: Adicional[] = [
  { nome: "Borda Recheada", preco: 8 },
  { nome: "Extra Queijo", preco: 5 },
  { nome: "Catupiry", preco: 6 },
  { nome: "Bacon", preco: 7 },
];

export default function App() {
  const [tela, setTela] = useState<"login" | "cadastro" | "cardapio" | "fim">(
    "login"
  );

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [saborSelecionado, setSaborSelecionado] = useState<Pizza | null>(null);
  const [tamanho, setTamanho] = useState<Tamanho>("M");
  const [adicionais, setAdicionais] = useState<Adicional[]>([]);

  const toggleAdicional = (add: Adicional) => {
    if (adicionais.includes(add)) {
      setAdicionais(adicionais.filter((a) => a !== add));
    } else {
      setAdicionais([...adicionais, add]);
    }
  };

  const calcularTotal = () => {
    if (!saborSelecionado) return 0;

    const precoBase =
      tamanho === "P"
        ? saborSelecionado.preco - 5
        : tamanho === "M"
        ? saborSelecionado.preco
        : saborSelecionado.preco + 8;

    const totalAdd = adicionais.reduce((soma, item) => soma + item.preco, 0);

    return precoBase + totalAdd;
  };

  // === LOGIN ===
  if (tela === "login") {
    return (
      <div className="container">
        <h1>Login</h1>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button onClick={() => setTela("cardapio")}>Entrar</button>

        <button className="link-btn" onClick={() => setTela("cadastro")}>
          Não tem conta? Cadastre-se
        </button>
      </div>
    );
  }

  // === CADASTRO ===
  if (tela === "cadastro") {
    return (
      <div className="container">
        <h1>Cadastro</h1>

        <input placeholder="Nome completo" />
        <input placeholder="E-mail" />
        <input placeholder="Senha" type="password" />

        <button onClick={() => setTela("login")}>Criar conta</button>

        <button className="link-btn" onClick={() => setTela("login")}>
          Já tenho conta
        </button>
      </div>
    );
  }

  // === TELA FINAL ===
  if (tela === "fim") {
    return (
      <div className="container">
        <h1>🎉 Pedido Enviado!</h1>
        <h2>Obrigado por comprar com a Pizzaria Anchieta!</h2>

        <button onClick={() => setTela("cardapio")}>Fazer novo pedido</button>
      </div>
    );
  }

  // === CARDÁPIO ===
  return (
    <div className="container">
      <h1>🍕 Pizzaria Anchieta</h1>

      <h2>Sabor:</h2>
      {sabores.map((p, i) => (
        <button
          key={i}
          className={saborSelecionado === p ? "ativo" : ""}
          onClick={() => setSaborSelecionado(p)}
        >
          {p.sabor} — R${p.preco}
        </button>
      ))}

      <h2>Tamanho:</h2>
      {(["P", "M", "G"] as Tamanho[]).map((t) => (
        <button
          key={t}
          className={tamanho === t ? "ativo" : ""}
          onClick={() => setTamanho(t)}
        >
          {t}
        </button>
      ))}

      <h2>Adicionais:</h2>
      {adicionaisLista.map((add, i) => (
        <button
          key={i}
          className={adicionais.includes(add) ? "ativo" : ""}
          onClick={() => toggleAdicional(add)}
        >
          {add.nome} + R${add.preco}
        </button>
      ))}

      <div className="resumo">
        <h3>Resumo do pedido:</h3>
        <p>
          <strong>Sabor:</strong> {saborSelecionado?.sabor ?? "Nenhum"}
        </p>
        <p>
          <strong>Tamanho:</strong> {tamanho}
        </p>
        <p>
          <strong>Adicionais:</strong>{" "}
          {adicionais.length > 0
            ? adicionais.map((a) => a.nome).join(", ")
            : "Nenhum"}
        </p>

        <h2>Total: R$ {calcularTotal()}</h2>
      </div>

      <button
        className="confirmar"
        onClick={() => setTela("fim")}
        disabled={!saborSelecionado}
      >
        Confirmar Pedido
      </button>
    </div>
  );
}
