<template>
    <div class="switch">
        <input type="checkbox" :id="id" :name="name" class="switch__input" :checked="checked">
        <label :for="id" class="switch__label">
            <span class="switch__text">{{ label }}</span>
        </label>
    </div>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            label: {
                type: String
            },
            checked: {
                type: Boolean,
                default: true
            }
        }
    }
</script>
