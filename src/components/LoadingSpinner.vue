<template>
    <div class="flex items-center">
        <div class="spinner-square">
            <div class="square-1 square"></div>
            <div class="square-2 square"></div>
            <div class="square-3 square"></div>
        </div>
        <p class="font-bold text-gray-500">Please wait</p>
    </div>
</template>

<style>
.spinner-square {
    display: flex;
    flex-direction: row;
    width: 80px;
    height: 60px;
}

.spinner-square>.square {
    width: 8px;
    height: 20px;
    margin: auto 4px;
    border-radius: 4px;
}

.square-1 {
    -webkit-animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s infinite;
    animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s infinite;
}

.square-2 {
    -webkit-animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 200ms infinite;
    animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 200ms infinite;
}

.square-3 {
    -webkit-animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 400ms infinite;
    animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 400ms infinite;
}

@-webkit-keyframes square-anim {
    0% {
        height: 25px;
        background-color: #6fa3f0;
    }

    20% {
        height: 25px;
    }

    40% {
        height: 40px;
        background-color: #6fc8f0;
    }

    80% {
        height: 25px;
    }

    100% {
        height: 25px;
        background-color: #6fa3f0;
    }
}

@keyframes square-anim {
    0% {
        height: 25px;
        background-color: #6fa3f0;
    }

    20% {
        height: 25px;
    }

    40% {
        height: 40px;
        background-color: #6fc8f0;
    }

    80% {
        height: 25px;
    }

    100% {
        height: 25px;
        background-color: #6fa3f0;
    }
}
</style>