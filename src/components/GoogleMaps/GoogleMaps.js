// import { Loader } from "@googlemaps/js-api-loader";

const GoogleMaps = () => {
  
  // const loader = new Loader({
  //   apiKey: "YOUR_API_KEY",
  //   version: "weekly",
  //   ...additionalOptions,
  // });

  // loader.load().then(() => {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // });

  return (
    <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31218.60527660504!2d-77.05021369511364!3d-12.021086680294012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf41e6ed1dad%3A0xb30871711a844983!2zUsOtbWFj!5e0!3m2!1ses-419!2spe!4v1636268391393!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </>
  )
}

export default GoogleMaps;
