<template>
  <Navbar />
  <div class="container bg-white md:max-w-7xl py-6 mx-auto">
    <h2 class="text-lg font-bold px-6">Upload Resources</h2>
    <InputGroup label="FHIR Resource JSON File" variant="content">
      <Button :label="inputButtonLabel" @click="showFileSelect" feedback />
      <span class="text-sm text-red-600"
        >⚠️ Please read documentation or seek support if you don't understand
        this function. Patching FHIR resources will take several minutes to
        complete. Please wait until process is complete.</span
      >
      <input
        ref="resourceFileSelectInput"
        v-on:change="resourceFileSelect"
        type="file"
        accept=".json"
        class="hidden"
        placeholder="A secure password"
      />
    </InputGroup>
    <div class="px-6">
      <Button
        @click="uploadResources()"
        label="Upload"
        variant="primary"
        :loading="isLoading"
        :disabled="isLoading"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { KeyStore } from "@/store/keyStore";

import Navbar from "@/components/Navbar.vue";
import { Input, Button, InputGroup } from "@flavorly/vanilla-components";

const keytore = KeyStore();
const isLoading = ref(false);

const fhirResourceFile = ref(undefined);
const fhirResourceFileContent = ref();
const resourceFileSelectInput = ref(null);

const inputButtonLabel = ref("Select file");

const showFileSelect = () => {
  if (resourceFileSelectInput.value) {
    (resourceFileSelectInput.value as HTMLInputElement).click();
  }
};

const resourceFileSelect = (e: any) => {
  const files = e.target.files;
  if (!files.length) return;
  inputButtonLabel.value = e.target.files[0].name;
  let reader = new FileReader();
  reader.onload = async (event) => {
    fhirResourceFileContent.value = event.target?.result;
    // console.log(event.target?.result);
  };

  // Read in the image file as a data URL.
  reader.readAsText(files[0]);
};

const uploadResources = () => {
  isLoading.value = true;
  if (!fhirResourceFileContent.value) {
    isLoading.value = false;
    return;
  }
  const parseJSON = JSON.parse(fhirResourceFileContent.value);
  fetch(`${import.meta.env.VITE_SERVER_URL}/api/resources`, {
    method: "PATCH",
    headers: new Headers({
      "Content-Type": "application/json",
      authorization: `bearer ${keytore.key}`,
    }),
    body: JSON.stringify({
      fhirResources: parseJSON,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
};
</script>
