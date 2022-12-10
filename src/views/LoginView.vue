<template>
  <LoadingBar v-if="isLoading"></LoadingBar>
  <div class="container mx-auto my-16">
    <div class="max-w-lg mx-auto space-y-2 p-6 rounded-lg bg-white border">
      <div class="flex justify-center">
        <img class="h-32" src="/fhirWall.svg" alt="" />
      </div>
      <h1 class="text-3xl font-bold text-center">FHIR Auth</h1>
      <h1 class="text-2xl font-light text-center">Login to dashboard</h1>
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
            class="rounded w-full px-2 py-1.5 border-2 focus:border-teal-600 focus:outline-none transition ease-in-out duration-150"
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
            class="rounded w-full px-2 py-1.5 border-2 focus:border-teal-600 focus:outline-none transition ease-in-out duration-150"
            required
          />
        </div>
        <button
          @click.prevent="login()"
          :disabled="isLoading"
          class="rounded-md px-3 py-2 font-bold bg-teal-600 hover:bg-teal-700 w-32 text-white focus:outline-none disabled:bg-teal-500"
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
import LoadingBar from "@/components/LoadingBar.vue";
import { KeyStore } from "@/store/keyStore";
import { UserStore } from "@/store/userStore";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const keyStore = KeyStore();
    const userStore = UserStore();

    const password = ref(undefined);
    const email = ref(undefined);
    const hasNotification = ref(false);
    const notificationMessage = ref("");
    const notificationType = ref("success");
    const isLoading = ref(false);

    const login = async () => {
      if (!email.value || !password.value) {
        hasNotification.value = true;
        notificationMessage.value =
          "An email address and a password is required";
        notificationType.value = "warning";
        return;
      }
      isLoading.value = true;
      const request = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/user/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          }),
        }
      );

      if (!request.ok) {
        hasNotification.value = true;
        notificationMessage.value =
          "An error occured while logging in, please try again";
      }

      if (request.status === 400) {
        hasNotification.value = true;
        notificationMessage.value = "Invalid username or password";
      }

      if (request.status === 200) {
        const payload = await request.json();
        keyStore.setKey(payload.data.token);
        userStore.setUser(payload.data.user.name, payload.data.user.email);
        document.cookie = `token=${payload.data.token};max-age=7200;path=/`;
        return router.push({ name: "Dashboard" });
      }
      isLoading.value = false;
    };
    return {
      email,
      password,
      login,
      hasNotification,
      notificationMessage,
      notificationType,
      isLoading,
    };
  },
  components: { Notification, LoadingBar },
});
</script>
