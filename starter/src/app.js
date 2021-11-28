/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 import { Loader } from '@googlemaps/js-api-loader';
 const apiOptions = {
    apiKey: "AIzaSyCx_RMiJMjpN0qc_NkQQToud2k0v56JHA0"
  }
  const loader = new Loader(apiOptions);
  loader.load().then(() => {
    console.log('Maps JS API loaded');
  });
  function displayMap() {
    const mapOptions = {
      center: { lat: -33.860664, lng: 151.208138 },
      zoom: 14
    };
    const mapDiv = document.getElementById('map');
    const map = new google.maps.Map(mapDiv, mapOptions);
    return map;
  }