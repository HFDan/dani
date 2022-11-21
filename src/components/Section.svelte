<script lang="ts">
    import Saos from "saos";

    export let transparent: boolean = false;
</script>

<style lang="scss">
    @keyframes -global-fade-in {
        0% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    }
</style>

<div class="{transparent ? "bg-transparent" : "bg-secondary"} w-full">
    <Saos animation={"fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}>
        <section class="min-h-screen flex place-items-center flex-col px-[3rem] pt-[10rem]">
            <slot></slot>
        </section>
    </Saos>
</div>