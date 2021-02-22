import React,{useState} from 'react';
import styled from 'styled-components/native';
import Button from '~/components/button';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const TitleContainer = styled.View`
  flex: 1;
  justifiy-content: center;
  align-itmes: center;
`;

const TitleLabel = styled.Text`
  font-size: 24px;
`;

const CountContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const CountLabel = styled.Text`
  font-size: 24px;
  font-wegith: bold;
`;

const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flew-wrap: wrap;
  justify-content: space-around;
`;

interface Props {
  title?: string;
  initValue: number;
}

const Counter = ({title, initValue}: Props) => {
  const [count, setCount] = useState<number>(0);

  return (
    <Container>
      {title && (
        <TitleContainer>
          <TitleLabel>{title}</TitleLabel>
        </TitleContainer>
      )}
    </Container>
  );
};

export default Counter;
