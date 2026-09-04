import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #ffffffaa;
`;

export const Titulo = styled.Text`
  font-size: 22px;
  font-weight: bold;
  padding: 12px;
`;

export const CampoBusca = styled.View`
  margin-left: 12px;
  margin-right: 12px;
  background-color: #545050;
  border-radius: 8px;
  padding: 10px;
`;

export const SearchPlaceholder = styled.Text`
  color: #888888;
`;

type ChipProps = {
  active?: boolean;
};

export const Chip = styled.View<ChipProps>`
  background-color: ${({ active }: ChipProps) => (active ? '#ffffff' : '#eeeeee')};
  padding: 8px 14px;
  border-radius: 10px;
  margin-right: 8px;
`;

export const ChipText = styled.Text<ChipProps>`
  font-size: 13px;
  color: ${({ active }: ChipProps) => (active ? '#310909' : '#333333')};
`;

export const Produto = styled.View`
  flex: 1;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
`;

export const ImagemProduto = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  background-color: #ffffffa3;
  margin-bottom: 8px;
`;

export const TituloProduto = styled.Text`
  font-size: 13px;
  font-weight: 600;
`;

export const ProdutoPreco = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 2px;
`;

export const ProdutoAvaliacao = styled.Text`
  font-size: 12px;
  color: #ffe600;
  margin-top: 2px;
`;

export const BottomBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 12px;
  background-color: #ffffff;
  border-top-width: 1px;
  border-top-color: #eeeeee;
`;

export const BottomBarText = styled.Text<{ active?: boolean }>`
  font-size: 12px;
  color: ${(props) => (props.active ? '#93ce09' : '#099c69')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;
