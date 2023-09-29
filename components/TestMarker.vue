<script setup lang="ts">
import { MarkerOptions } from "mapbox-gl";
import { ref, watch } from "vue";
import { defineMapboxMarker } from "#imports";

const props = defineProps<{
  markerId: string;
  options: MarkerOptions & { lnglat: [number, number] };
}>();
const markerRef = ref<HTMLElement | null>(null);

const marker = defineMapboxMarker(
  props.markerId,
  props.options,
  markerRef,
  (m) => {
    // m.setLngLat([110, 6])
    alert(`${props.options.lnglat}`);
    m.setLngLat(props.options.lnglat);
  }
);
</script>

<template>
  <div>
    <div
      ref="markerRef"
      class="marker"
      style="
        background-image: url('https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-Download-PNG.png');
        width: 40px;
        height: 40px;
        background-size: 100%;
      "
    />
  </div>
</template>

<style>
.marker {
  display: block;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
}
</style>
