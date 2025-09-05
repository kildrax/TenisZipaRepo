<script setup>
import { ref, onMounted } from 'vue'

const jugadores = ref(0)
const torneos = ref(0)
const anios = ref(0)

function animateValue(refVar, end, duration = 1200) {
  const start = 0
  const range = end - start
  const increment = end > start ? 1 : -1
  const stepTime = Math.abs(Math.floor(duration / range))
  let current = start
  const timer = setInterval(() => {
    current += increment
    refVar.value = current
    if (current === end) {
      clearInterval(timer)
    }
  }, stepTime)
}

onMounted(() => {
  animateValue(jugadores, 156)
  animateValue(torneos, 24)
  animateValue(anios, 15)
})
</script>
<template>
  <!-- Sección del banner principal -->
  <section class="relative bg-gradient-to-r from-[#078930] to-[#065a24] text-white">
    <div class="absolute inset-0 bg-black opacity-20"></div>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-block bg-[#da121a] text-white px-3 py-1 rounded-full text-sm mb-4">
            ¡ÚLTIMAS NOTICIAS!
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">Zipaquirá Tennis Club</h1>
          <p class="text-xl mb-8 text-green-100">Tu hogar del tenis en la Ciudad de la Sal</p>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div class="flex items-center gap-2 mb-3">
              <span class="bg-[#da121a] text-white px-2 py-1 rounded text-xs">Torneos</span
              ><span class="text-green-100 text-sm">14/1/2025</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">
              Torneo Abierto de Zipaquirá 2025 - Inscripciones Abiertas
            </h3>
            <p class="text-green-100 mb-4">
              Se abre la convocatoria para el torneo más importante del año. Premios en efectivo y
              trofeos para todas las categorías.
            </p>
            <a href="tel:+573213481481" target="_blank" rel="noopener"
              class="flex items-center text-white hover:text-green-200 cursor-pointer transition-colors"
            >
              Saber más
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-right ml-1"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="relative">
          <img
            src="https://images.unsplash.com/photo-1753709900752-25e9f8d32d88?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBwbGF5ZXJzJTIwYWN0aW9ufGVufDF8fHx8MTc1Njg1ODAwOHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080&amp;utm_source=figma&amp;utm_medium=referral"
            alt="Jugadores de tenis en acción"
            class="rounded-lg shadow-2xl w-full h-96 object-cover"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- Sección estadisticas -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-[#078930] rounded-full mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-users text-white"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="text-3xl font-bold text-[#078930] mb-2">{{jugadores}}</div>
          <div class="text-gray-600">Jugadores Registrados</div>
        </div>
        <div class="text-center">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-[#078930] rounded-full mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trophy text-white"
              aria-hidden="true"
            >
              <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
              <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
              <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
              <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
            </svg>
          </div>
          <div class="text-3xl font-bold text-[#078930] mb-2">{{torneos}}</div>
          <div class="text-gray-600">Torneos Disputados</div>
        </div>
        <div class="text-center">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-[#078930] rounded-full mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-calendar text-white"
              aria-hidden="true"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
          </div>
          <div class="text-3xl font-bold text-[#078930] mb-2">{{ anios }}</div>
          <div class="text-gray-600">Años de Historia</div>
        </div>
      </div>
    </div>
  </section>
  <!-- Sección de próximos eventos -->
  <section class="py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Próximos Eventos</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Mantente al día con todos los torneos y eventos especiales del club
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          data-slot="card"
          class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-6">
          <div class="flex items-start justify-between mb-4">
            <div class="bg-[#078930] text-white p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-calendar"
                aria-hidden="true"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </div>
            <span class="text-sm text-gray-500">19/1/2025</span>
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">Torneo de Tenis para Principiantes</h3>
          <div class="space-y-1 text-sm text-gray-600">
            <p>🕐 09:00 AM</p>
            <p>📍 Cancha Principal</p>
          </div>
        </div>
        <div
          data-slot="card"
          class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-6"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="bg-[#078930] text-white p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-calendar"
                aria-hidden="true"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </div>
            <span class="text-sm text-gray-500">24/1/2025</span>
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">Torneo Juvenil Sub-16</h3>
          <div class="space-y-1 text-sm text-gray-600">
            <p>🕐 08:00 AM</p>
            <p>📍 Canchas 1-4</p>
          </div>
        </div>
        <div
          data-slot="card"
          class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-6"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="bg-[#078930] text-white p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-calendar"
                aria-hidden="true"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </div>
            <span class="text-sm text-gray-500">31/1/2025</span>
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">Copa Veteranos +40</h3>
          <div class="space-y-1 text-sm text-gray-600">
            <p>🕐 10:00 AM</p>
            <p>📍 Todas las canchas</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Sección de unirse a comunidad -->
  <section class="py-16 bg-[#078930]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold text-white mb-4">¿Listo para unirte a nuestra comunidad?</h2>
      <p class="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
        Forma parte del club de tenis más dinámico de Zipaquirá. Torneos, eventos y mucha diversión
        te esperan.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:+573213481481" target="_blank" rel="noopener"
          class="bg-white text-[#078930] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          Inscribirse Ahora</a>
      </div>
    </div>
  </section>
</template>
