<template>
  <div>
    <nav class="bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
      <!-- logo -->
      <div class="inline-flex">
        <a class="_o6689fn" href="/">
          <div class="hidden md:block">
            <svg width="102" height="32" fill="currentcolor" style="display: block">
              <path
                d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z">
              </path>
            </svg>
          </div>
          <div class="block md:hidden">
            <svg width="30" height="32" fill="currentcolor" style="display: block">
              <path
                d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z">
              </path>
            </svg>
          </div>
        </a>
      </div>

      <!-- end logo -->

      <!-- search bar -->
      <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div class="inline-block">
          <div class="inline-flex items-center max-w-full">
            <button class="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1 py-1"
              type="button">
              <div class="block flex-grow flex-shrink overflow-hidden">
                Start your search
              </div>
              <div class="flex items-center justify-center relative h-8 w-8 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
      <!-- end search bar -->

      <!-- login -->
      <div class="flex-initial">
        <div class="flex justify-end items-center relative">
          <div class="flex mr-4 items-center">
            <a class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
              <div class="flex items-center relative cursor-pointer whitespace-nowrap">
                Become a host
              </div>
            </a>
            <div class="block relative">
              <button type="button" class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative">
                <div class="flex items-center h-5">
                  <div class="_xpkakx">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                      focusable="false">
                      <path
                        d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z">
                      </path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div class="block">
            <div class="inline relative">
              <button type="button" class="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                <div class="pl-1">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false" style="
                      display: block;
                      fill: none;
                      height: 16px;
                      width: 16px;
                      stroke: currentcolor;
                      stroke-width: 3;
                      overflow: visible;
                    ">
                    <g fill="none" fill-rule="nonzero">
                      <path d="m2 16h28"></path>
                      <path d="m2 24h28"></path>
                      <path d="m2 8h28"></path>
                    </g>
                  </svg>
                </div>

                <div class="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false" style="
                      display: block;
                      height: 100%;
                      width: 100%;
                      fill: currentcolor;
                    ">
                    <path
                      d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z">
                    </path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- end login -->
    </nav>
  </div>
  <div class="container mx-auto">
    <div class="rounded-md bg-white p-6 space-y-4">
      <Notification v-if="hasNotification" :message="notificationMessage" type="warning"></Notification>
      <h2 class="text-lg font-bold">Client Details</h2>
      <div class="control">
        <label for="clientName" class="font-semibold text-sm">Client Name</label>
        <input ref="clientNameInput" v-model="clientName"
          class="block w-full rounded-md px-3 py-2 border-2 mt-1 focus:outline-none focus:border-teal-600"
          placeholder="Provide a suitable client name" autofocus type="text" />
        <span v-if="clientNameRequired" class="text-red-600 text-sm">* Client name is required</span>
      </div>
      <div class="control">
        <label class="font-semibold text-sm" for="host">Client Host</label>
        <input ref="clientHostInput" v-model="clientHost" type="text"
          class="block w-full rounded-md px-3 py-2 border-2 mt-1 focus:outline-none focus:border-teal-600"
          placeholder="Host address of your client" />
        <span v-if="hasClientHostError" class="text-red-600 text-sm">{{
            clientHostError
        }}</span>
      </div>
      <div class="control">
        <label for="authendpoint" class="font-semibold text-sm">Public Key Endpoint</label>
        <input ref="clientAuthEndpointInput" v-model="clientAuthEndpoint" type="text"
          class="block w-full rounded-md px-3 py-2 border-2 mt-1 focus:outline-none focus:border-teal-600"
          placeholder="URL to access the public key for authentication. This has to same domain as the host address" />
        <span v-if="hasEndpointError" class="text-red-600 text-sm">{{
            endpointError
        }}</span>
      </div>
      <div>
        <h2 class="text-lg font-bold mt-8 mb-4">
          Select Client Privilages For FHIR Resource
        </h2>
        <div class="grid grid-cols-8 mt-2 gap-4 pb-1.5">
          <div>
            <p class="font-semibold text-sm">FHIR Resource</p>
          </div>
          <div class="col-span-7 text-sm">
            <p class="font-semibold text-center">Privilages</p>
          </div>
        </div>
        <div class="grid grid-cols-8 mt-2 gap-4 pb-1.5">
          <div class="col-span-2">
            <div class="w-full svelte-1l8159u">
              <div
                class="my-2 bg-white p-1 flex border focus-within:border-teal-600 border-gray-200 rounded svelte-1l8159u">
                <div class="flex flex-auto flex-wrap"></div>
                <input ref="resourceInput" v-model="resource" placeholder="Select FHIR resource"
                  class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                <div>
                  <button @click="clearResource()"
                    class="cursor-pointer w-6 h-full flex items-center text-gray-400 outline-none focus:outline-none">
                    <svg class="feather feather-x" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"
                      xmlns="http://www.w3.org/2000/svg">
                      <line x1="18" x2="6" y1="6" y2="18" />
                      <line x1="6" x2="18" y1="6" y2="18" />
                    </svg>
                  </button>
                </div>
                <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                  <button @click="toggleResourceSelectionMenu()"
                    class="cursor-pointer w-6 h-full text-gray-600 outline-none focus:outline-none">
                    <svg v-if="!chevronUp" class="feather feather-chevron-down" fill="none" height="24"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    <svg v-if="chevronUp" class="feather feather-chevron-up" fill="none" height="24"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div v-if="toggleResourceSelection"
              class="absolute shadow top-100 z-40 w-1/4 rounded max-h-select overflow-y-auto">
              <div class="flex flex-col w-full">
                <div v-for="(item, index) in resourceList" :key="index"
                  class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                  <div
                    class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-teal-600 hover:text-teal-100">
                    <div class="w-full items-center flex">
                      <button :disabled="!item.isActive" @click="selectResource(item)"
                        class="mx-2 text-left w-full leading-6 disabled:text-gray-40">
                        {{ item.resourceName }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <input id="create" type="checkbox" v-model="resourceCreate" /><button
              @click="resourceCreate = !resourceCreate" class="font-semibold">
              Create
            </button>
          </div>
          <div class="flex items-center space-x-2">
            <input id="read" type="checkbox" v-model="resourceRead" /><button class="font-semibold"
              @click="resourceRead = !resourceRead">
              Read
            </button>
          </div>
          <div class="flex items-center space-x-2">
            <input id="update" type="checkbox" v-model="resourceUpdate" /><button class="font-semibold"
              @click="resourceUpdate = !resourceUpdate">
              Update
            </button>
          </div>
          <div class="flex items-center space-x-2">
            <input id="delete" type="checkbox" v-model="resourceDelete" /><button class="font-semibold"
              @click="resourceDelete = !resourceDelete">
              Delete
            </button>
          </div>
          <div class="flex items-center space-x-2">
            <input id="search" type="checkbox" v-model="resourceSearch" /><button
              @click="resourceSearch = !resourceSearch" class="font-semibold">
              Search
            </button>
          </div>
          <div class="flex items-center">
            <button @click="addNewPrivilage()" class="rounded-md font-semibold px-3 py-2 bg-gray-100 hover:bg-gray-200">
              Add Privilages
            </button>
          </div>
        </div>
      </div>
      <div>
        <table class="w-full">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2">FHIR Resource</th>
              <th class="py-2">Create Privilage</th>
              <th class="py-2">Read Privilage</th>
              <th class="py-2">Update Privilage</th>
              <th class="py-2">Delete Privilage</th>
              <th class="py-2">Search Privilage</th>
            </tr>
          </thead>
          <tr v-for="(privilage, index) in privilages" :key="index" class="text-center">
            <td class="py-2 border">
              {{ privilage.resource }}
            </td>
            <td class="py-2 border">
              {{ privilage.privilages.create }}
            </td>
            <td class="py-2 border">
              {{ privilage.privilages.read }}
            </td>
            <td class="py-2 border">
              {{ privilage.privilages.update }}
            </td>
            <td class="py-2 border">
              {{ privilage.privilages.delete }}
            </td>
            <td class="py-2 border">
              {{ privilage.privilages.search }}
            </td>
          </tr>
        </table>
      </div>
      <div>
        <button :disabled="loading" class="bg-teal-600 rounded-lg text-white font-bold px-3 py-2 hover:bg-teal-700"
          @click="createClient()">
          Create New Client
        </button>
        <LoadingSpinner v-if="loading"></LoadingSpinner>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Notification from "@/components/Notification.vue";
import { defineComponent, onMounted, ref } from "vue";
import type { Ref } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()

    onMounted(async () => {
      if (route.params.id && route.params.id !== "create") {
        loading.value = true
        const client = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/client/${route.params.id}`)

        if (!client.ok) {
          notificationMessage.value = "An error occured in getting client details";
          hasNotification.value = true;
        }

        if (client.status === 200) {
          const parseClient = await client.json()
          let parseClientPrivilages: Array<{
            clientsId: number, create: boolean, delete: boolean, id: number, read: boolean,
            search: boolean, update: boolean,
            resource: { resourceName: string, id: number },
            resourcesId: number,
          }> = parseClient.data.client.clientPrivilages

          let tempParseClientPrivilages: {
            resource: string;
            resourcesId: number;
            privilages: {
              create: boolean;
              read: boolean;
              update: boolean;
              delete: boolean;
              search: boolean;
            };
          }[] = []
          parseClientPrivilages.forEach(element => {
            let tempPrivilage: {
              resource: string, resourcesId: number, privilages: {
                create: boolean,
                read: boolean,
                update: boolean,
                delete: boolean,
                search: boolean
              }
            } = {
              resource: element.resource.resourceName,
              resourcesId: element.resource.id,
              privilages: {
                create: element.create,
                read: element.read,
                update: element.update,
                delete: element.delete,
                search: element.search,
              }
            }

            tempParseClientPrivilages.push(tempPrivilage)
          });
          privilages.value = tempParseClientPrivilages
          clientName.value = parseClient.data.client.clientName
          clientHost.value = parseClient.data.client.clientHost
          clientAuthEndpoint.value = parseClient.data.client.clientPublicKeyEndpoint

        } else {
          hasNotification.value = true
          notificationMessage.value = "Error getting client details"
        }
      }
      const resources = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/resources/4.0`
      );
      if (resources.status === 200) {
        const resourceJSON = await resources.json();
        resourceList.value = resourceJSON.data.resources;
      }
      loading.value = false
    });

    const privilages: Ref<
      {
        resource: string;
        resourcesId: number;
        privilages: {
          create: boolean;
          read: boolean;
          update: boolean;
          delete: boolean;
          search: boolean;
        };
      }[]
    > = ref([]);

    const privilagesIdArray: Number[] = [];

    let clientDetails = ref()
    let hasNotification = ref(false);
    let notificationMessage = ref();
    let clientName = ref();
    let resource = ref();
    let resourceId: Ref<null | number> = ref(null);
    let resourceCreate = ref(false);
    let resourceRead = ref(false);
    let resourceUpdate = ref(false);
    let resourceDelete = ref(false);
    let resourceSearch = ref(false);
    let toggleResourceSelection = ref(false);
    let chevronUp = ref(false);
    let clientNameInput = ref();
    let clientHostInput = ref();
    let clientAuthEndpointInput = ref();
    let clientNameRequired = ref(false);
    let endpointError = ref("");
    let clientHostError = ref("");
    let hasClientHostError = ref(false);
    let hasEndpointError = ref(false);
    let clientHost = ref("");
    let clientAuthEndpoint = ref("");
    let resourceInput = ref();
    let resourceList: Ref<
      {
        id: number;
        resourceName: string;
        fhirVersion: number;
        isActive: boolean;
      }[]
    > = ref([]);

    let loading = ref(false)

    const addNewPrivilage = () => {
      if (resourceId.value === null) {
        hasNotification.value = true;
        notificationMessage.value = "Please select a FHIR resource";
        return;
      }

      if (privilagesIdArray.indexOf(resourceId.value) !== -1) {
        hasNotification.value = true;
        notificationMessage.value =
          "Resource privilages already exists, please modify it instead";

        return;
      }

      const newPriviage = {
        resource: resource.value,
        resourcesId: resourceId.value,
        privilages: {
          create: resourceCreate.value,
          read: resourceRead.value,
          update: resourceUpdate.value,
          delete: resourceDelete.value,
          search: resourceSearch.value,
        },
      };

      privilages.value.push(newPriviage);
      privilagesIdArray.push(resourceId.value);

      resource.value = "";
      resourceId.value = null;
      resourceCreate.value = false;
      resourceRead.value = false;
      resourceUpdate.value = false;
      resourceDelete.value = false;
      resourceSearch.value = false;
    };

    const toggleResourceSelectionMenu = () => {
      toggleResourceSelection.value = !toggleResourceSelection.value;
      chevronUp.value = !chevronUp.value;
    };

    const selectResource = (selectedResource: {
      id: number;
      resourceName: string;
      fhirVersion: number;
      isActive: boolean;
    }) => {
      resource.value = selectedResource.resourceName;
      resourceId.value = selectedResource.id;
      toggleResourceSelection.value = !toggleResourceSelection.value;
      chevronUp.value = !chevronUp.value;
    };

    const isURL = (url: string): boolean => {
      var urlPattern = new RegExp(
        "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // validate fragment locator

      return urlPattern.test(url);
    };

    const createClient = async () => {
      if (
        !clientName.value ||
        (clientName.value as string).trim().length === 0
      ) {
        hasNotification.value = true;
        notificationMessage.value = "Please enter a client name";
        (clientNameInput.value as HTMLInputElement).focus();
        clientNameRequired.value = true;
        return;
      } else {
        clientNameRequired.value = false;
      }

      if (clientHost.value.trim().length === 0 || !isURL(clientHost.value)) {
        hasNotification.value = true;
        notificationMessage.value = "Enter a valid client host address";
        clientHostError.value = "* Invalid client host";
        hasClientHostError.value = true;
        (clientHostInput.value as HTMLInputElement).focus();
        return;
      }

      hasClientHostError.value = false;

      if (
        clientAuthEndpoint.value.trim().length === 0 ||
        !isURL(clientAuthEndpoint.value)
      ) {
        hasNotification.value = true;
        notificationMessage.value = "Enter a valid auth endpoint";
        endpointError.value = "* Invalid auth endpoint";
        hasEndpointError.value = true;
        (clientAuthEndpointInput.value as HTMLInputElement).focus();
        return;
      } else if (isURL(clientAuthEndpoint.value)) {
        try {
          const authUrl = new URL(clientAuthEndpoint.value);
          const hostUrl = new URL(clientHost.value);

          if (authUrl.host !== hostUrl.host) {
            hasNotification.value = true;
            notificationMessage.value =
              "Client URL host and Auth endpoint URL host missmatch";
            return;
          }
        } catch (error) {
          hasNotification.value = true;
          notificationMessage.value = "Invalid URLs provided";
        }
      }
      hasEndpointError.value = false;

      if (privilages.value.length === 0) {
        hasNotification.value = true;
        notificationMessage.value = "Please add at least one FHIR privilage";
        (resourceInput.value as HTMLInputElement).focus();
        return;
      }

      loading.value = true
      // post payload to the server
      const post = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/client`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          clientName: clientName.value,
          clientHost: clientHost.value,
          clientPublicKeyEndpoint: clientAuthEndpoint.value,
          privilages: privilages.value,
        }),
      })


      if (post.status === 200) {
        const response = await post.json();
        hasNotification.value = true;
        notificationMessage.value = `Client successfully created. Client ID - ${response.data.client.clientId}`;
      } else {
        hasNotification.value = true
        notificationMessage.value = "An error occured in creating client"
      }
      loading.value = false
    };

    const clearResource = () => {
      resource.value = "";
      resourceId.value = null;
      resourceCreate.value = false;
      resourceUpdate.value = false;
      resourceRead.value = false;
      resourceDelete.value = false;
      resourceSearch.value = false;
    };

    return {
      clientName,
      privilages,
      resource,
      resourceCreate,
      resourceRead,
      resourceUpdate,
      resourceDelete,
      resourceSearch,
      addNewPrivilage,
      toggleResourceSelection,
      toggleResourceSelectionMenu,
      chevronUp,
      resourceList,
      selectResource,
      hasNotification,
      notificationMessage,
      createClient,
      clientNameInput,
      clearResource,
      clientNameRequired,
      endpointError,
      clientHostError,
      hasClientHostError,
      hasEndpointError,
      clientHost,
      clientAuthEndpoint,
      clientHostInput,
      clientAuthEndpointInput,
      resourceInput,
      loading
    };
  },
  components: { Notification, LoadingSpinner },
});
</script>
