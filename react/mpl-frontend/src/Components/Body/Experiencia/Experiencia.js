import "./Experiencia.css";
import CardComponent from "./CardComponent";

function Experiencia() {
  const items = [
    {
      id: "1",
      img_link: "",
      title: "Seguros Empresariais",
      description:
        "Garanta o sucesso do seu negócio com seguros que protegem os bens, os veículos, as mercadorias transportadas e o meio ambiente.",
      about: "",
    },
    {
      id: "2",
      img_link: "",
      title: "Benefícios",
      description:
        "Planos de saúde e assistência odontológica empresarial, seguro Acidentes Pessoais Estudante eplanos de previdência privada.",
      about: "",
    },
    {
      id: "3",
      img_link: "",
      title: "Seguro de vida",
      description:
        "Apólices sob medida, com tranquilidade e garantias que amparam você e sua família mesmo nos momentos mais difíceis.",
      about: "",
    },
    {
      id: "4",
      img_link: "",
      title: "Seguros Patrimoniais",
      description:
        "Segurança para os seus bens e tranquilidade para sua família.  A MPL oferece produtos específicos para cada segmento.",
      about: "",
    },
    {
      id: "5",
      img_link: "",
      title: "Ambiental Especial para TRR",
      description:
        "Tranquilidade garantida preservando o meio ambiente. São 6 coberturas em um única apólice. Danos materiais de responsabilidade civil ambiental.",
      about: "",
    },
    {
      id: "6",
      img_link: "",
      title: "Ambiental para postos",
      description:
        "Produto EXCLUSIVO criado especialmente para postos de combustíveis oferecendo o diferencial da cobertura de Responsabilidade Civil Ambiental.",
      about: "",
    }
  ];
  /*<Card data={items[1]}/>
      <Card data={items[2]}/>
      <Card data={items[3]}/>
      <Card data={items[4]}/>
      <Card data={items[5]}/>*/
  return (
    <div>
      <CardComponent data={items[0]}/>
      <CardComponent data={items[1]}/>
      <CardComponent data={items[2]}/>
      <CardComponent data={items[3]}/>
      <CardComponent data={items[4]}/>
      <CardComponent data={items[5]}/>
    </div>
  );
}

export default Experiencia;
