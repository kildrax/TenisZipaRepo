<script setup>
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errors = ref({})

function validarNombre(nombre) {
  return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)
}

function validarEmail(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
}

function handleSubmit(e) {
  e.preventDefault()
  errors.value = {}

  if (!validarNombre(firstName.value)) {
    errors.value.firstName = 'Solo letras y espacios'
  }
  if (!validarNombre(lastName.value)) {
    errors.value.lastName = 'Solo letras y espacios'
  }
  if (!validarEmail(email.value)) {
    errors.value.email = 'Correo inválido'
  }
  if (password.value !== confirmPassword.value) {
    errors.value.password = 'Las contraseñas no coinciden'
  }

  if (Object.keys(errors.value).length === 0) {
    // Aquí puedes enviar el formulario
    alert('Formulario válido')
  }
}
</script>
<template>
    
<form @submit="handleSubmit" class="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md shadow-[#078930] dark:bg-gray-800 sm:my-20">
  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres</label>
      <input v-model="firstName" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
      <span v-if="errors.firstName" class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{{ errors.firstName }}</span>
    </div>
    <div>
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos</label>
      <input v-model="lastName" type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
      <span v-if="errors.lastName" class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{{ errors.lastName }}</span>
    </div>
  </div>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
    <input v-model="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    <span v-if="errors.email" class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{{ errors.email }}</span>
  </div> 
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
    <input v-model="password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    <span v-if="errors.password" class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{{ errors.password }}</span>
  </div> 
  <div class="mb-6">
    <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar contraseña</label>
    <input v-model="confirmPassword" type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    <span v-if="errors.password" class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{{ errors.password }}</span>
  </div> 
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Acepto los <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">términos y condiciones</a>.</label>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar</button>
</form>

</template>