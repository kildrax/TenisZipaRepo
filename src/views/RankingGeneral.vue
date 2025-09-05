<script setup>
import { ref, onMounted } from 'vue'

const ranking = ref([])

onMounted(async () => {
  try {
    const res = await fetch('https://ef2b4391458a.ngrok-free.app/categories/ranking/', {
      headers: {
        Accept: 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
    })
    if (!res.ok) {
      const text = await res.text()
      console.error('Respuesta no OK:', text)
      return
    }
    const data = await res.json()
    ranking.value = data.map((jugador, idx) => ({
      id: jugador.id_user,
      rank: jugador.rank,
      nombre: `${jugador.first_name} ${jugador.last_name}`,
      puntos: jugador.points,
      categoria: jugador.category_name,
      // No hay edand i torneos_jugados en la respuesta, puedes dejar vacío o calcular si tienes datos
      edad: '30',
      torneos_jugados: '12',
      foto: `https://flowbite.com/docs/images/people/profile-picture-${idx + 1}.jpg`, // No hay foto en la respuesta
    }))
  } catch (e) {
    console.error('Error al consumir la API:', e)
  }
})
</script>
<template>
  <div class="sm:pb-20 bg-gray-50">
    <div class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">Ranking General ATP Zipaquirá</h1>
            <p class="text-gray-600 mt-2">
              Clasificación oficial de los mejores jugadores del club
            </p>
          </div>
          <div class="flex items-center bg-[#078930] text-white px-4 py-2 rounded-lg">
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
              class="lucide lucide-trophy mr-2"
              aria-hidden="true"
            >
              <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
              <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
              <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
              <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
            </svg>
            <span class="font-semibold">Temporada 2025</span>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto">
      <!-- Tabla de ranking general -->
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 sm:mt-10 overflow-x-auto shadow-md sm:rounded-lg"
      >
        <thead
          class="text-xs text-white uppercase bg-[#078930] dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3 text-center font-extrabold">Ranking</th>
            <th scope="col" class="px-6 py-3 text-center font-extrabold">Jugador</th>
            <th scope="col" class="px-6 py-3 text-center font-extrabold">Edad</th>
            <th scope="col" class="px-6 py-3 text-center font-extrabold">Puntos</th>
            <th scope="col" class="px-6 py-3 text-center font-extrabold">Torneos Jugados</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(jugador, idx) in ranking"
            :key="jugador.id || idx"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          >
            <td
              class="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              #{{ jugador.rank }}
            </td>
            <td
              scope="row"
              class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white space-x-5"
            >
              <img
                class="w-10 h-10 rounded-full"
                :src="
                  jugador.foto || 'https://flowbite.com/docs/images/people/profile-picture-1.jpg'
                "
                alt="Jugador"
              />
              <div class="text-base font-semibold">{{ jugador.nombre }}</div>
            </td>
            <td class="px-6 py-4 text-center">
              {{ jugador.edad }}
            </td>
            <td class="px-6 py-4 text-center">
              {{ jugador.puntos }}
            </td>
            <td class="px-6 py-4 text-center">
              {{ jugador.torneos_jugados }}
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Paginador de la tabla -->
      <nav
        class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation">
        <span
          class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
          >Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of
          <span class="font-semibold text-gray-900 dark:text-white">1000</span></span
        >
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Previous</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >3</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >4</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >5</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Next</a
            >
          </li>
        </ul>
      </nav>
      <!-- Información del sistema de puntuación -->
      <div
        data-slot="card"
        class="flex flex-col gap-6 rounded-xl border mt-8 bg-gradient-to-r from-[#078930] to-[#065a24] text-white"
      >
        <div class="p-6">
          <h3 class="text-lg font-semibold mb-4">Sistema de Puntuación ATP Zipaquirá</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-medium mb-2">Puntos por ronda alcanzada:</h4>
              <ul class="text-sm space-y-1 text-white">
                <li>
                  • <span class="underline">Campeón:</span>
                  <span class="font-bold"> 250 puntos</span>
                </li>
                <li>
                  • <span class="underline">Finalista:</span>
                  <span class="font-bold"> 165 puntos</span>
                </li>
                <li>
                  • <span class="underline">Semifinalista:</span>
                  <span class="font-bold"> 100 puntos</span>
                </li>
                <li>
                  • <span class="underline">Cuartos de final:</span>
                  <span class="font-bold"> 50 puntos</span>
                </li>
                <li>
                  • <span class="underline">Octavos de final:</span>
                  <span class="font-bold"> 25 puntos</span>
                </li>
                <li>
                  • <span class="underline">Ronda inicial (R32 o R64, según el cuadro):</span>
                  <span class="font-bold"> 13 puntos</span>
                </li>
                <li>
                  • <span class="underline">Clasificación (Qualy):</span>
                  <span class="font-bold"> 4-8 puntos (según la ronda superada)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-medium mb-2">Actualización:</h4>
              <p class="text-sm text-white">
                El ranking se actualiza semanalmente después de cada torneo oficial del club. Los
                puntos se mantienen por 52 semanas desde la fecha de obtención.
              </p>
              <h4 class="font-medium mt-10">
                Sistema de puntos basado en la <span class="font-bold underline">ATP 250</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
