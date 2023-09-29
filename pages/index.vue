<template>
  <div>
    <MapboxMap
      map-id="map2"
      style="top: 80px"
      :options="{
        style, // style URL
        zoom: 3, // starting zoom
      }"
      :style="{
        height: `${height}px`,
      }"
    >
      <MapboxDefaultMarker
        v-model:lnglat="lnglat"
        marker-id="marker1"
        :options="{
          draggable: true,
        }"
        @dragend="
          () => {
            console.log('dragend');
          }
        "
      >
      </MapboxDefaultMarker>
      <TestMarker
        marker-id="marker2"
        :options="{
          lnglat,
        }"
      />
    </MapboxMap>
    || {{ lnglat }} ||
  </div>
</template>

<script setup>
import { ref, useMapboxPopup } from "#imports";
const lnglat = ref([98.67624594259166, 3.559800139705004]);
const style = ref("mapbox://styles/mapbox/streets-v12");
const height = ref(800);
</script>
