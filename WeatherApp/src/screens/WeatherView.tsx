import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Platform, PermissionsAndroid, ToastAndroid} from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import Geolocation from 'react-native-geolocation-service';

const Container = styled.SafeAreaView`
  flex: 1;
  background: #eee;
`;
const WeatherContainer = styled(FlatList)``;
const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Loading = styled.ActivityIndicator`
  margin-bottom: 16px;
`;
const LoadingLabel = styled.Text`
  font-size: 16px;
`;
const WeatherItemContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Weather = styled.Text`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
`;
const Temperature = styled.Text`
  font-size: 16px;
`;

const API_KEY = '*****Need API KEY*******';

interface IWeather {
  temperature?: number;
  weather?: string;
  isLoading: boolean;
}

const WeatherView = () => {
  const [weatherInfo, setWeatherInfo] = useState<IWeather>({
    temperature: undefined,
    weather: undefined,
    isLoading: false,
  });

    let hasLocationPermission = async () => {
    // if (Platform.OS === 'ios') {
    //   const hasPermission = await this.hasLocationPermissionIOS();
    //   return hasPermission;
    // }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  const getCurrentWeather = () => {
    setWeatherInfo({
      isLoading: false,
    });
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log(`lat:${latitude} long:${longitude}`);
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
        )
          .then(response => response.json())
          .then(json => {
            setWeatherInfo({
              temperature: json.main.temp,
              weather: json.weather[0].main,
              isLoading: true,
            });
            // console.log(json);
          })
          .catch(err => {
            setWeatherInfo({
              isLoading: true,
            });
            showError(`날씨 정보를 가져오는데 실패(${err}).`);
          });
      },
      error => {
        setWeatherInfo({
          isLoading: true,
        });
        showError(`위치 정보를 가져오는데 실패`);
      }
    );
  };

  const showError = (message: string) => {
    setTimeout(() => {
      Alert.alert(message);
    }, 500);
  };

  useEffect(() => {
    // hasLocationPermission()
      // .then(permissoin => {
        // if (permissoin) {
          getCurrentWeather();
        // }
      // }).catch(err => console.log(err));
  }, []);

  let data = [];
  const {isLoading, weather, temperature} = weatherInfo;
  if (weather && temperature) {
    data.push(weatherInfo);
  }

  return (
    <Container>
      <WeatherContainer
        onRefresh={() => getCurrentWeather()}
        refreshing={!isLoading}
        data={data}
        keyExtractor={(item, index) => {
          return `Weather-${index}`
        }}
        ListEmptyComponent={
          <LoadingView>
            <Loading size="large" color="#1976D2" />
            <LoadingLabel>Loading...</LoadingLabel>
          </LoadingView>
        }
        renderItem={({item, index}) => (
          <WeatherItemContainer>
            <Weather>Weather: {(item as IWeather).weather}</Weather>
            <Temperature>Temp: ({(item as IWeather).temperature} CC)</Temperature>
          </WeatherItemContainer>
        )}
        contentContainerStyle={{flex: 1}}
      />
    </Container>
  );
}

export default WeatherView;
