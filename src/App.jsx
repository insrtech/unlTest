import UnlSdk from 'unl-map-js'
import { useEffect, useRef } from 'react'


function App() {
  const mapContainer = useRef(null)
  const map = useRef(null)

  function initializeMap() {
    if (map.current) return

    map.current = new UnlSdk.Map({
      apiKey: 'zkXmSvu61bOVJHkybWqJfOqOMRl2lhEl',
      vpmId: 'e43daa6c-820d-4772-91e5-f99bebc35930',
      gridControl: true,
      indoorMapsControl: true,
      tilesSelectorControl: true,
      draftShapesControl: true,
      container: mapContainer.current,
      center: [-0.118092, 51.509865],
      zoom: 6,

      // hash: true,
      // transformRequest: (url, resourceType) => {
      //   console.log(url);
      //   return {
      //     url: 'http://127.0.0.1',
      //     headers: {
      //       'Access-Control-Allow-Origin': '*',
      //       'Content-Type': 'application/json',
      //       'Access-Control-Allow-Credentials': 'true'
      //     },
      //     credentials: 'include'
      //   }
      // }
    })
  }

  useEffect(() => {
    initializeMap()
  }, [])

  return (
    <>
      <div ref={mapContainer} className="map" />
    </>
  )
}

export default App
