
<template>
  <div>
    <div class="container text-center mx-auto">
      <p class="text-7xl text-center font-bold">THE <span style="color: #FF0831 !important;">ROLLING STONES </span>EVENTS</p>
      <p class="mt-5 w-[80%] mx-auto text-center text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris dui, feugiat dignissim sapien quis, tristique venenatis mauris. Donec imperdiet felis ac auctor auctor. Curabitur scelerisque purus laoreet erat ullamcorper, fermentum maximus felis vestibulum. Pellentesque posuere odio dui, id laoreet mi
      </p>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-start gap-8 mt-24 shadow-lg p-14">
      <!-- Event Info Column -->
      <div class="w-full md:w-1/2 flex flex-col">
        <div class="p-8 w-full flex flex-col">
          <div v-if="selectedEvent" class="flex flex-col items-start">
            <div class="flex items-center">
              <img class="object-cover w-22 h-22" style="border-radius: 100%;" :src="selectedEvent.speaker.photo_url" alt="Event Image" />
              <div>
                <p class="ml-2 text-green-600 font-bold">{{ selectedEvent.speaker.name }}</p>
                <p class="ml-2 text-sm font-semibold">{{ selectedEvent.speaker.role }}</p>
              </div>
            </div>
            <p class="mt-2 text-lg font-semibold text-left">{{ selectedEvent.name }}</p>
            <div class="flex">
              <img class="object-cover w-4 h-4 mt-2 mr-2" src="~@assets/images/clock.svg" alt="Event Image" />
              <p class="mt-1 text-gray-700">{{ formatDate(selectedEvent.date) }}</p>
            </div>
            <div>
              <button class="mt-16 w-[290px]" style="color: white; border-radius: 67px;">JOIN WATCHLIST</button>
            </div>
          </div>
          <div v-else-if="!selectedEvent" class="flex flex-col items-center">
            <img class="object-cover w-64 h-64" src="~@assets/images/empty-events.svg" alt="Event Image" />
            <p class="mt-4 text-red-600">No event on this date</p>
          </div>
        </div>
      </div>
      <!-- Date Picker Column -->
      <div class="w-full md:w-1/2 flex flex-col items-center">
        <p class="font-bold mb-2">Pick a date and time</p>
        <div>
          <VueDatePicker
            class="startDate"
            v-model="date"
            inline
            auto-apply
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const date = ref(null)
const events = ref([])

onMounted(async () => {
  const res = await axios.get('https://api.npoint.io/3ffc10b11b4dd82745be')
  events.value = res.data
})

function formatDate(d) {
  if (!d) return ''
  const dateObj = new Date(d)
  if (isNaN(dateObj.getTime())) return ''
  return dateObj.toISOString().split('T')[0]
}

const selectedEvent = computed(() => {
  if (!date.value) return null
  const selected = formatDate(date.value)
  return events.value.find(ev => formatDate(ev.date) === selected) || null
})
</script>

<style scoped>
.startDate {
  width: 180px !important;
}
</style>