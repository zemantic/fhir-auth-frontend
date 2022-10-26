<template>
  <div class="container mx-auto my-16">
    <div class="max-w-lg mx-auto space-y-2 p-6 rounded-lg bg-white border">
      <div class="flex justify-center">
        <img class="h-32" src="/fhirWall.svg" alt="" />
      </div>
      <h1 class="text-3xl font-bold text-center">FHIR Auth</h1>
      <h1 className="text-2xl font-light text-center">Login to dashboard</h1>
      <Notification
        v-if="hasNotification"
        :message="notificationMessage"
        :type="notificationType"
      />
      <form class="space-y-3">
        <div class="control space-y-1.5">
          <label for="email" class="block font-semibold text-gray-700"
            >Email</label
          >
          <input
            v-model="email"
            placeholder="Email Address"
            type="email"
            class="rounded w-full px-2 py-1.5 border-2 focus:border-blue-600 focus:outline-blue-600 transition ease-in-out duration-150"
            required
          />
        </div>
        <div class="control space-y-1.5">
          <label for="password" class="block font-semibold text-gray-700"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="rounded w-full px-2 py-1.5 border-2 focus:border-blue-600 focus:outline-blue-600 transition ease-in-out duration-150"
            required
          />
        </div>
        <button
          @click.prevent="login()"
          class="rounded-md px-3 py-2 font-bold bg-blue-600 hover:bg-blue-700 w-32 text-white focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Notification from "@/components/Notification.vue";

export default defineComponent({
  setup() {
    const password = ref(undefined);
    const email = ref(undefined);
    const hasNotification = ref(false);
    const notificationMessage = ref("");
    const notificationType = ref("success");
    const login = () => {
      if (!email.value || !password.value) {
        hasNotification.value = true;
        notificationMessage.value =
          "An email address and a password is required";
        notificationType.value = "warning";
        return;
      }
      fetch("/authenticate", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      }).catch((e) => {
        hasNotification.value = true;
        notificationMessage.value = "An error occured, please try again later";
        notificationType.value = "danger";
      });
    };
    return {
      email,
      password,
      login,
      hasNotification,
      notificationMessage,
      notificationType,
    };
  },
  components: { Notification },
});
</script>
