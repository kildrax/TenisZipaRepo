<script setup>
// filepath: d:\ProyectZipa-Sep2025\TenisZipa\src\components\Header.vue
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const menuAbierto = ref(false)
const route = useRoute()
</script>

<template>
  <header class="p-4 bg-white shadow-sm border-b-2 border-[#078930]">
    <div class="w-full max-w-6xl mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-3 flex-shrink-0">
        <img
          class="w-10 h-12 object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Escudo_de_Zipaquira.svg/120px-Escudo_de_Zipaquira.svg.png"
          alt=""
        />
        <div>
          <h1 class="text-3xl font-bold text-[#078930]">Tenis Zipa</h1>
          <p class="text-sm">Asociación de Tenis de Zipaquirá</p>
        </div>
      </div>
      <nav class="hidden md:flex space-x-8">
        <router-link
          to="/"
          :class="[
            'px-3 py-2 rounded-md transition-colors duration-200',
            route.path === '/' ? 'bg-[#078930] text-white' : 'text-gray-700 hover:text-[#078930] hover:bg-gray-50']">
          Inicio
        </router-link>
        <router-link
          to="/ranking-general"
          :class="[
            'px-3 py-2 rounded-md transition-colors duration-200',
            route.path === '/ranking-general' ? 'bg-[#078930] text-white' : 'text-gray-700 hover:text-[#078930] hover:bg-gray-50']">
          Ranking General
        </router-link>
        <router-link
          to="/login"
          :class="[
            'px-3 py-2 rounded-md transition-colors duration-200',
            $route.path === '/login' ? 'bg-[#078930] text-white' : 'text-gray-700 hover:text-[#078930] hover:bg-gray-50']">
          Login
        </router-link>
        <router-link
          to="/registro"
          :class="[
            'px-3 py-2 rounded-md transition-colors duration-200',
            $route.path === '/registro' ? 'bg-[#078930] text-white' : 'text-gray-700 hover:text-[#078930] hover:bg-gray-50']">
          Registro
        </router-link>
      </nav>
      <!-- Icono hamburgesa mobile -->
      <div class="md:hidden">
        <button
          class="text-gray-500 hover:text-[#078930] focus:outline-none focus:text-[#078930]"
          @click="menuAbierto = !menuAbierto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu"
            aria-hidden="true"
          >
            <path d="M4 12h16"></path>
            <path d="M4 18h16"></path>
            <path d="M4 6h16"></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- Menú mobile -->
    <nav
      v-if="menuAbierto"
      class="mt-4 px-2 pt-2 pb-3 space-y-1 bg-white border-t"
    >
      <router-link
        to="/"
        :class="[
            'block px-3 py-2 rounded-md transition-colors duration-200',
            route.path === '/' ? 'bg-[#078930] text-white' : 'text-gray-700 hover:text-[#078930] hover:bg-gray-50']"
        @click="menuAbierto = false"
      >
        Inicio
      </router-link>
      <router-link
        to="/ranking-general"
        :class="[
            'block px-3 py-2 rounded-md transition-colors duration-200',
            route.path === '/ranking-general' ? 'bg-[#078930] text-white' : 'text-gray-700 hover:text-[#078930] hover:bg-gray-50']"
        @click="menuAbierto = false"
      >
        Ranking General
      </router-link>
      <router-link
          to="/login"
          :class="[
            'block px-3 py-2 rounded-md transition-colors duration-200',
            $route.path === '/login' ? 'bg-[#078930] text-white' : 'text-gray-700 hover:text-[#078930] hover:bg-gray-50']" @click="menuAbierto = false"
          >Login
      </router-link>
      <router-link
          to="/registro"
          :class="[
            'block px-3 py-2 rounded-md transition-colors duration-200',
            $route.path === '/registro' ? 'bg-[#078930] text-white' : 'text-gray-700 hover:text-[#078930] hover:bg-gray-50']" @click="menuAbierto = false"
          >Registro
      </router-link>
    </nav>
  </header>
</template>