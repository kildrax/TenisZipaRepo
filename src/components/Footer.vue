<template>
  <footer class="bg-gray-50 border-t">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center mb-4">
            <div class="w-8 h-8 bg-[#078930] rounded-full flex items-center justify-center mr-3">
              <span class="text-white font-bold">Z</span>
            </div>
            <h3 class="text-lg font-bold text-[#078930]">Zipaquirá Tennis</h3>
          </div>
          <p class="text-gray-600 mb-4">
            El club de tenis líder en Zipaquirá, promoviendo el deporte y la comunidad tenística en
            nuestra hermosa ciudad.
          </p>
          <div class="flex space-x-4">
            <div class="w-6 h-6 bg-[#078930] rounded"></div>
            <div class="w-6 h-6 bg-[#ffffff] border-2 border-[#078930] rounded"></div>
            <div class="w-6 h-6 bg-[#da121a] rounded"></div>
          </div>
        </div>
        <!-- Enlaces rápidos -->
        <div>
          <h4 class="font-semibold text-gray-900 mb-4">Enlaces Rápidos</h4>
          <ul class="space-y-2">
            <li>
              <router-link to="/" href="#" class="text-gray-600 hover:text-[#078930] transition-colors">Inicio</router-link>
            </li>
            <li>
              <router-link to="/ranking-general" href="#" class="text-gray-600 hover:text-[#078930] transition-colors"
                >Ranking General</router-link>
            </li>
          </ul>
        </div>
        <!-- Sección de contacto -->
        <div>
          <h4 class="font-semibold text-gray-900 mb-4">Contacto</h4>
          <ul class="space-y-3">
            <li class="flex items-center text-gray-600">
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
                class="lucide lucide-mail mr-2 text-[#078930]"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                <span class="text-sm">info@zipaquiratennis.com</span>
            </li>
            <li class="flex items-center text-gray-600">
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
                class="lucide lucide-phone mr-2 text-[#078930]"
                aria-hidden="true"
              >
                <path
                  d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                ></path></svg>
                <span class="text-sm">+57 1 234 5678</span>
            </li>
            <li class="flex items-start text-gray-600">
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
                class="lucide lucide-map-pin mr-2 text-[#078930] mt-0.5"
                aria-hidden="true"
              >
                <path
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                ></path>
                <circle cx="12" cy="10" r="3"></circle></svg>
                <span class="text-sm">Zipaquirá, Cundinamarca<br />Colombia</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-500 text-sm">
            © 2025 Zipaquirá Tennis Club. Todos los derechos reservados.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-500 hover:text-[#078930] text-sm transition-colors"
              >Política de Privacidad</a
            ><a href="#" class="text-gray-500 hover:text-[#078930] text-sm transition-colors"
              >Términos de Uso</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Puedes agregar lógica aquí si es necesario
</script>

<style scoped>
/* Estilos específicos para el header */
</style>
