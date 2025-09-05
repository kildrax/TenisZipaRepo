<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const showRegisterPlayerModal = ref(false)

function openModal() {
  showModal.value = true
}
function closeModal() {
  showModal.value = false
}
function openRegisterPlayerModal() {
  showRegisterPlayerModal.value = true
}
function closeRegisterPlayerModal() {
  showRegisterPlayerModal.value = false
}
</script>
<template>
  <section class="bg-gray-50 h-screen">
    <div class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-center">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Sección para crear un partido</h1>
            <p class="text-gray-600 mt-2">
              Se debe dar clic en el botón más (+) para crear un nuevo partido
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Botón para crear partido -->
    <div class="max-w-6xl mx-auto p-4 flex items-center justify-center">
      <button
        id="CreateMatch-button"
        type="button"
        @click="openModal"
        class="focus:outline-none text-white bg-[#078930] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer"
      >
        <svg
          class="w-6 h-6 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14m-7 7V5"
          />
        </svg>
      </button>
    </div>
    <!-- Modal para buscar jugadores -->
    <div
      id="SearchPlayer-modal"
      v-show="showModal"
      class="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-40 z-50"
    >
      <div
        class="max-w-sm w-11/12 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <button
          @click="closeModal"
          class="float-right text-gray-400 hover:text-gray-900 text-xl font-bold"
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </button>
        <h5
          class="mb-2 text-1xl text-center font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Buscar jugadores
        </h5>
        <form class="max-w-md mx-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre del jugador"
              required
            />
          </div>
        </form>
        <button
          id="RegisterPlayer"
          type="button"
          @click="openRegisterPlayerModal"
          class="block mt-4 text-center font-normal text-sm text-blue-600 hover:underline dark:text-blue-500"
        >
          ¿El jugador no está registrado? Crear nuevo jugador
        </button>
      </div>
    </div>

    <!-- Modal para registrar jugadores -->
    <div
      id="RegisterPlayerModal"
      v-show="showRegisterPlayerModal"
      class="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-40 z-50"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Crear nuevo jugador</h3>
            <button
              @click="closeRegisterPlayerModal"
              class="float-right text-gray-400 hover:text-gray-900 text-xl font-bold"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <form class="p-4 md:p-5">
            <div class="grid gap-4 mb-4 grid-cols-2">
              <div class="col-span-2">
                <input
                  type="text"
                  name="Nombres"
                  id="Nombres"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nombres"
                  required
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <input
                  type="text"
                  name="Apellidos"
                  id="Apellidos"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Apellidos"
                  required
                />
              </div>
            <div class="col-span-2 sm:col-span-1">
                <input
                  type="number"
                  name="Edad"
                  id="Edad"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Edad"
                  required
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <input
                  type="number"
                  name="Puntos"
                  id="Puntos"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Puntos"
                  required
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <input
                  type="email"
                  name="Correo"
                  id="Correo"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Correo"
                  required
                />
              </div>
             <div class="col-span-2 sm:col-span-1">
                <input
                  type="tel"
                  name="Celular"
                  id="Celular"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Celular"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              class="text-white inline-flex items-center bg-[#078930] hover:text-[#078930] focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm px-5 py-2.5 text-center">
              <svg
                class="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Agregar jugador
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
