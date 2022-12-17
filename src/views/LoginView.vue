<template>
  <LoadingBar v-if="isLoading"></LoadingBar>
  <div class="container mx-auto my-16">
    <div class="max-w-lg mx-auto space-y-2 p-6 rounded-lg bg-white border">
      <div class="flex justify-center">
        <svg
          enable-background="new 0 0 52 52"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 52 52"
          height="128"
          width="128"
        >
          <g>
            <g><rect height="8" width="5.9956055" x="42.0043945" y="17" /></g>
            <g>
              <path
                d="M40.0043945,17H29.9429321c0.3222656,3.6033936,1.1847534,6.263916,2.4550171,7.5488281    c0.1103516-1.7519531,0.7998047-4.2167969,3.6064453-5.3554688l1.3613281-0.5527344l0.0146484,1.4697266    c0.0117188,1.1923828,0.2490234,3.4160156,0.8364258,4.3125L38.5454102,25h1.4589844V17z"
                fill="#3A92CC"
              />
            </g>
            <g>
              <path
                d="M39.6708984,27.5C39.8891602,28.3847656,40,29.3164063,40,30.2705078C40,31.9133301,39.649231,33.5200195,38.980835,35H48    v-8h-8.5130615L39.6708984,27.5z"
              />
            </g>
            <g>
              <path
                d="M17.2841797,25c0.0232544-0.0458984,0.0570679-0.0904541,0.0811768-0.1362305    c0.204895-0.3894043,0.428833-0.7772217,0.6903076-1.1586914l1.2519531-1.8271484l0.5424805,2.1484375    c0.0004883,0.0019531,0.0120239,0.0471191,0.03479,0.1273193c0.0683594,0.2408447,0.2381592,0.7982178,0.5164795,1.456665    c0.3500977,0.8427734,0.972168,2.0742188,1.8569336,2.8349609C22.1572208,27.7685547,22.0800781,26.9423828,22.0800781,26    c0-0.2993164,0.0101318-0.619873,0.0289917-0.9543457c0.0061035-0.107666,0.0186157-0.2229004,0.0269775-0.3339844    c0.0178223-0.2358398,0.038269-0.473999,0.067749-0.7243652c0.0166016-0.1409912,0.0394897-0.2868652,0.0602417-0.4321289    c0.0336304-0.2355957,0.0712891-0.4733887,0.1168213-0.7194824c0.0297241-0.1608887,0.0637207-0.3232422,0.098999-0.4882813    c0.0526123-0.2462158,0.1127319-0.4960938,0.1786499-0.7509766c0.0444336-0.1717529,0.0898438-0.3427734,0.1407471-0.5181885    c0.0771484-0.2657471,0.166687-0.5360107,0.2598267-0.8092041c0.0585938-0.1716309,0.1134033-0.3408203,0.1786499-0.5151367    c0.116333-0.310791,0.2514038-0.6269531,0.3904419-0.9450684c0.0623169-0.1425781,0.1154785-0.2819824,0.1826172-0.4259033    C24.0234375,17.9272461,24.257019,17.4663086,24.5214844,17H4v8h13.2734375H17.2841797z"
              />
            </g>
            <g>
              <path
                d="M28,42c-3.9417114,0-7.5533447-1.8686523-9.8009033-5h-4.1947021v8h23v-6.9921875    C34.753479,40.5263672,31.5100708,42,28,42z"
              />
            </g>
            <g>
              <path
                d="M24.0043945,7v8h1.8110352c0.1994019-0.2727051,0.4179077-0.5319824,0.6292114-0.7966309    c0.12854-0.1608887,0.2496948-0.326416,0.3823853-0.4838867c0.4130249-0.4907227,0.8418579-0.9678955,1.2921143-1.4226074    l1.8320313-1.8515625l-0.1220703,2.6015625C29.8287354,13.0570068,29.7941895,13.8427734,29.8233032,15H48V7H24.0043945z"
              />
            </g>
            <g>
              <rect fill="#3A92CC" height="8" width="18.0043945" x="4" y="7" />
            </g>
            <g><rect height="8" width="8.0043945" x="4" y="37" /></g>
            <g>
              <rect
                fill="#3A92CC"
                height="8"
                width="8.9956055"
                x="39.0043945"
                y="37"
              />
            </g>
            <g>
              <path
                d="M16,30.2705078c0-0.3605957,0.0230103-0.7177734,0.0565186-1.0733643    c0.0088501-0.0941162,0.0196533-0.1878662,0.0308838-0.2816162c0.0372314-0.3112793,0.0855713-0.6206055,0.1484985-0.9272461    c0.0093994-0.0460205,0.015564-0.0925293,0.0255737-0.1384277C16.3237305,27.5643311,16.3955078,27.2807617,16.4799805,27    h-0.074707H4v8h13.0195923C16.3512573,33.5202637,16,31.9130859,16,30.2705078z"
                fill="#3A92CC"
              />
            </g>
          </g>
        </svg>
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
          <Input
            placeholder="Email Address"
            type="email"
            required
            v-model="email"
            :errors="inputEmailError"
            :hasErrors="hasInputEmailError"
          />
          <!-- <input
            v-model="email"
            placeholder="Email Address"
            type="email"
            class="rounded w-full px-2 py-1.5 border-2 focus:border-teal-600 focus:outline-none transition ease-in-out duration-150"
            required
          /> -->
        </div>
        <div class="control space-y-1.5">
          <label for="password" class="block font-semibold text-gray-700"
            >Password</label
          >
          <!-- <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="rounded w-full px-2 py-1.5 border-2 focus:border-teal-600 focus:outline-none transition ease-in-out duration-150"
            required
          /> -->
          <Input
            placeholder="Password"
            v-model="password"
            required
            type="password"
            :errors="inputPasswordError"
            :hasErrors="hasInputPasswordError"
          />
        </div>
        <!-- <button
          @click.prevent="login()"
          :disabled="isLoading"
          class="rounded-md px-3 py-2 font-bold bg-teal-600 hover:bg-teal-700 w-32 text-white focus:outline-none disabled:bg-teal-500"
        >
          Login
        </button> -->
        <Button
          @click.prevent="login()"
          label="Login"
          variant="primary"
          :loading="isLoading"
          :disabled="isLoading"
        />
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import Notification from "@/components/Notification.vue";
import LoadingBar from "@/components/LoadingBar.vue";
import { KeyStore } from "@/store/keyStore";
import { UserStore } from "@/store/userStore";
import { useRouter } from "vue-router";
import { Input, Button } from "@flavorly/vanilla-components";

const router = useRouter();
const keyStore = KeyStore();
const userStore = UserStore();

const password = ref(undefined);
const email = ref(undefined);
const hasNotification = ref(false);
const notificationMessage = ref("");
const notificationType = ref("success");
const isLoading = ref(false);
const inputPasswordError = ref("");
const inputEmailError = ref("");
const hasInputEmailError = ref(false);
const hasInputPasswordError = ref(false);

const login = async () => {
  if (!email.value || !password.value) {
    hasInputEmailError.value = true;
    hasInputPasswordError.value = true;
    inputEmailError.value = "Email is requred";
    inputPasswordError.value = "Password is required";
    notificationType.value = "warning";
    return;
  }
  isLoading.value = true;
  try {
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
  } catch (error) {
    hasNotification.value = true;
    notificationMessage.value =
      "An error occured while logging in, please try again";
    isLoading.value = false;
  }
};
</script>
