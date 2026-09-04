import { FlatList } from "react-native";
import {
  BottomBar,
  BottomBarText,
  CampoBusca,
  Chip,
  ChipText,
  Container,
  ImagemProduto,
  Produto,
  ProdutoAvaliacao,
  ProdutoPreco,
  SearchPlaceholder,
  Titulo,
  TituloProduto,
} from "./styles";

const CATEGORIAS = ["Todos", "Eletronicos", "Acessórios", "Roupas"];

const PRODUTOS = [
  {
    id: '1',
    titulo: 'Mochila do Ben10',
    preco: 'R$109.95',
    avaliacao: '3.9',
    imagem: 'https://static.dafiti.com.br/p/Ben-10-Mochila-Escolar-Ben-10-G-Preta-9630-2552651-1-zoom.jpg',
  },
  {
    id: '2',
    titulo: 'Camiseta justa',
    preco: 'R$22.30',
    avaliacao: '4.1',
    imagem: 'https://a-static.mlcdn.com.br/%7Bw%7Dx%7Bh%7D/camiseta-masculina-slim-fit-camisa-justa-ao-corpo-cores-darkwood/darkwoodshop2/9655/adf91d38d343a06217a1106625e58838.jpeg',
  },
  {
    id: '3',
    titulo: "Jaqueta de couro de javali",
    preco: 'R$555.99',
    avaliacao: '4.7',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBt03tIvYaZ6uMhAJm3mM61Wn6SYvTF_gDQ2-WyS3-w&s=10',
  },
  {
    id: '4',
    titulo: 'Cordão cromado aluminio',
    preco: 'R$9.99',
    avaliacao: '2.9',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPy3QiU0lJBzQCddHrIgo0p_GviWC9Ql-elAnmJtpVqQ&s=10',
  },
];

export function Home() {
  return (
    <Container>
      <Titulo>Loja</Titulo>

      <CampoBusca>
        <SearchPlaceholder>Buscar produtos</SearchPlaceholder>
      </CampoBusca>

      <FlatList
        data={CATEGORIAS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        style={{ marginTop: 10, paddingLeft: 12 }}
        renderItem={({ item, index }) => (
          <Chip active={index === 0}>
            <ChipText active={index === 0}>{item}</ChipText>
          </Chip>
        )}
      />

      <FlatList
        data={PRODUTOS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ padding: 12, gap: 12 }}
        renderItem={({ item }) => (
          <Produto>
            <ImagemProduto source={{ uri: item.imagem }} />
            <TituloProduto numberOfLines={1}>{item.titulo}</TituloProduto>
            <ProdutoPreco>{item.preco}</ProdutoPreco>
            <ProdutoAvaliacao>★ {item.avaliacao}</ProdutoAvaliacao>
          </Produto>
        )}
      />

      <BottomBar>
        <BottomBarText active>Início</BottomBarText>
        <BottomBarText>Buscar</BottomBarText>
        <BottomBarText>Carrinho</BottomBarText>
        <BottomBarText>Perfil</BottomBarText>
      </BottomBar>
    </Container>
  );
}

