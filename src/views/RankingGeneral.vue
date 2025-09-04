<template>
<div class="relative max-w-7xl mx-auto overflow-x-auto shadow-md sm:rounded-lg mt-8">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 text-center">
                    Ranking
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                    Jugador
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                    Edad
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                    Puntos
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                    Torneos Jugados
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
              v-for="(jugador, idx) in ranking"
              :key="jugador.id || idx"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
                <td class="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    #{{ jugador.rank }}
                </td>
                <td scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white space-x-5">
                    <img class="w-10 h-10 rounded-full" :src="jugador.foto || 'https://flowbite.com/docs/images/people/profile-picture-1.jpg'" alt="Jugador">
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
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const ranking = ref([])

onMounted(async () => {
  try {
        const res = await fetch('https://6d20c267c8e5.ngrok-free.app/categories/ranking/', {
            headers: {
                "Accept": "application/json",
                "ngrok-skip-browser-warning": "true"
            }
        })
    if (!res.ok) {
      const text = await res.text()
      console.error('Respuesta no OK:', text)
      return
    }
    const data = await res.json()
    ranking.value = data.map(jugador => ({
      id: jugador.id_user,
      rank: jugador.rank,
      nombre: `${jugador.first_name} ${jugador.last_name}`,
      puntos: jugador.points,
      categoria: jugador.category_name,
      // No hay edand i torneos_jugados en la respuesta, puedes dejar vacío o calcular si tienes datos
      edad: '30',
      torneos_jugados: '12',
      foto: `https://flowbite.com/docs/images/people/profile-picture-${idx + 1}.jpg` // No hay foto en la respuesta
    }))
  } catch (e) {
    console.error('Error al consumir la API:', e)
  }
})
</script>