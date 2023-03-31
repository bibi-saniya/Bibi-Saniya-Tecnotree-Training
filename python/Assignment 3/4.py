#weather app
import requests
import json

api_key = '217868abd9071178636ca6cae738ab98' 

city = input('Enter a city name: ')

url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'

response = requests.get(url)

if response.status_code == 200:
    data = json.loads(response.text)
    weather = data['weather'][0]['description']
    temp = data['main']['temp'] - 273.15 # Convert from Kelvin to Celsius
    print(f'Current weather in {city}: {weather}, Temperature: {temp:.2f}°C')
else:
    print(f'Error getting weather data for {city}. Error code: {response.status_code}')
