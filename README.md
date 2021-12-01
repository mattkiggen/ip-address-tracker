# 💻 IP Address Tracker

This application is a simple app that allows someone to search with an IP address or domain and get info such as location and ISP about either the IP or domain.

## 📦 Dependancies

- [create-react-app](https://github.com/facebook/create-react-app)
- [react-hot-toast](https://github.com/timolins/react-hot-toast)
- [react-leaflet](https://github.com/PaulLeCam/react-leaflet)
- [map-box](https://www.mapbox.com/)
- [Joi](https://github.com/sideway/joi)

## 🏃 Run

To run the application you will first need to run the command `npm install` and then create a `.env` file that contains your api keys.

The `.env` file should contain the following:

- `REACT_APP_IPIFY_API_KEY=`
- `REACT_APP_MAPBOX_TOKEN=`

###### Notes

- Since this is just a create-reacta-app project, API keys are exposed on the client.
- If you are using an adblock, you will need to turn it off for the app to function correctly.
- This project is based on a design challenge featured on [FrontendMentor.io](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0)
